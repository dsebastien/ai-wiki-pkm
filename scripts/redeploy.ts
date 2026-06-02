#!/usr/bin/env bun
// Trigger a production deploy without cutting a release.
//
// Usage:
//   bun scripts/redeploy.ts
//
// Use this to refresh things that change *outside* the repo — typically the
// CTA catalog pulled from store.dsebastien.net at build time. The release
// script bumps the version every run; redeploy doesn't, because no source
// change actually happened.
//
// Flow:
//   1. Sync content from the vault, commit any resulting content/ changes.
//   2. If still no commit on main, add an empty `ci: redeploy` commit so
//      production has somewhere new to point to (Cloudflare Pages only
//      triggers on a new SHA).
//   3. Push main.
//   4. Fast-forward origin/production to the new HEAD (same primitive the
//      release script uses, so the lineage stays linear).

import { spawnSync } from 'node:child_process';

const run = (cmd: string, args: string[]): void => {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const r = spawnSync(cmd, args, { stdio: 'inherit' });
  if (r.status !== 0) {
    console.error(`failed: ${cmd} ${args.join(' ')}`);
    process.exit(r.status || 1);
  }
};

// Refuse if there are uncommitted non-content changes — same guard the
// release script has. Don't sweep unrelated work into a redeploy commit.
const preStatus = spawnSync('git', ['status', '--porcelain'], { encoding: 'utf8' });
const nonContentDirty = preStatus.stdout
  .split('\n')
  .filter((l) => l.trim() && !/^.{2} "?content\//.test(l));
if (nonContentDirty.length > 0) {
  console.error('working tree has non-content changes. Commit or stash before redeploying.');
  console.error(nonContentDirty.join('\n'));
  process.exit(1);
}

const headBefore = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout.trim();

run('bun', ['run', 'sync']);

const postSync = spawnSync('git', ['status', '--porcelain', '--', 'content'], {
  encoding: 'utf8',
});
if (postSync.stdout.trim()) {
  run('git', ['add', 'content']);
  run('git', ['commit', '-m', 'content: sync']);
} else {
  console.log('content/ already up to date.');
}

const headAfter = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout.trim();
if (headAfter === headBefore) {
  // Nothing new on main; create an empty commit so production has a new SHA
  // to point at. Cloudflare Pages only rebuilds on a new commit.
  run('git', ['commit', '--allow-empty', '-m', 'ci: redeploy']);
}

run('git', ['push']);
run('git', ['push', 'origin', 'HEAD:refs/heads/production']);

const finalHead = spawnSync('git', ['rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).stdout.trim();
console.log(`\n✓ redeploy triggered (production → ${finalHead})`);

# ai-wiki-pkm

The content + deploy repo for https://pkm-wiki.knowii.net, Sébastien Dubois' PKM wiki. This website is built from his Obsidian vault using [ai-wiki-template](https://github.com/dsebastien/ai-wiki-template).

```sh
bun install
bun run sync     # pull latest from the vault (see site.config.json)
bun run build    # render public/
bun run serve    # http://localhost:4321
```

`bun run sync` reads from the path in `site.config.json` (`contentSource`). Override with `CONTENT_SRC=/abs/path`.

## What lives here

- `content/` — synced wiki notes from the vault
- `site.config.json` — site identity, theme, CTAs, filter, entry note
- `src/`, `scripts/` — same as the upstream template (re-sync these from `ai-wiki-template` to pick up improvements)

## Branching model

- `main` — working branch. Day-to-day commits and content syncs land here. **Pushes to `main` do not deploy.**
- `production` — release branch. Only the release script advances it, and it points at the latest tagged release. **Cloudflare Pages watches this branch and deploys on every push to it.**

This keeps the live site stable: in-progress edits on `main` never hit production, and every deploy maps to a tagged, reproducible version.

## Releasing

Cutting a release is a single command:

```sh
bun run release            # patch bump (default)
bun run release minor      # 0.1.0 -> 0.2.0
bun run release major      # 0.1.0 -> 1.0.0
bun run release 1.2.3      # explicit version
```

What the release script does, in order:

1. Refuses to run if there are uncommitted non-content changes (commit or stash first).
2. Runs `bun run sync` to pull the latest notes from the vault, and commits any resulting `content/` changes as a separate `content: sync` commit.
3. Bumps the version in `package.json`, commits as `release: vX.Y.Z`, creates an annotated tag.
4. Pushes `main` and the new tag to `origin`.
5. Fast-forwards `origin/production` to the tagged commit (no local checkout required).

Step 5 is what triggers the deploy.

## Refreshing without a release

Some things change outside the repo — most notably the CTA product catalog pulled from `store.dsebastien.net` at build time. To rebuild against the latest catalog (or any other external source) without bumping the version:

```sh
bun run redeploy
```

Same flow as release minus the version bump: syncs content, commits any content changes, falls back to an empty `ci: redeploy` commit when there's nothing new on `main`, pushes `main`, and fast-forwards `origin/production`. Cheap to run, version stays meaningful (= "we actually shipped something").

## Deployment

Deployment is automated via Cloudflare Pages, connected to this repo with `production` configured as the production branch:

- **Build command**: `bun install --frozen-lockfile && bun run build`
- **Build output directory**: `public`
- **Production branch**: `production`

Because only `bun run release` advances `production`, every Cloudflare deploy corresponds 1:1 with a tagged release. To re-deploy without a new release, retry the deployment from the Cloudflare dashboard.

## Updating from upstream

```sh
git remote add upstream https://github.com/dsebastien/ai-wiki-template.git
git fetch upstream
git merge upstream/main          # or cherry-pick scripts/, src/
```

`site.config.json`, `content/`, and `public/` are preserved.

## License

Code: MIT (same as the template). Content: see the vault.

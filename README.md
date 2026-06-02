# ai-wiki-pkm

The content + deploy repo for [pkm.dsebastien.net](https://pkm.dsebastien.net), Sébastien Dubois' PKM wiki — built from his Obsidian vault using [ai-wiki-template](https://github.com/dsebastien/ai-wiki-template).

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
- `.github/workflows/deploy.yml` — GitHub Pages deploy

## Updating from upstream

```sh
git remote add upstream https://github.com/dsebastien/ai-wiki-template.git
git fetch upstream
git merge upstream/main          # or cherry-pick scripts/, src/, .github/
```

`site.config.json`, `content/`, and `public/` are preserved.

## License

Code: MIT (same as the template). Content: see the vault.

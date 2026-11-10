# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Md Golam Rahman Tushar, served by GitHub Pages at https://grtushar.github.io. It is a Jekyll site built on the **academicpages** template (itself a fork of the Minimal Mistakes theme). GitHub Pages builds the site on push to `master` using the `github-pages` gem — there is no CI, test suite, or linter.

## Commands

```bash
bundle install                                  # install Ruby deps (delete Gemfile.lock if it errors)
bundle exec jekyll liveserve                    # serve at localhost:4000 with auto-rebuild (hawkins plugin)
bundle exec jekyll serve --config _config.yml,_config.dev.yml   # dev overrides: analytics off, expanded Sass
bundle exec jekyll build                        # one-off build into _site/
npm run build:js                                # re-minify theme JS into assets/js/main.min.js
```

`npm run build:js` is only needed after editing `assets/js/_main.js` or `assets/js/plugins/*`; those sources are excluded from the Jekyll build and only `main.min.js` is shipped. Standalone scripts (e.g. `snake-game.js`, `firebase-config.js`) are served as-is and not part of the bundle.

`_config.yml` changes are not picked up by `jekyll serve` — restart the server.

## Structure

- **Content pages** live in `_pages/*.md` (included via `include:` in `_config.yml`). Each sets its own `permalink`; `about.md` is the homepage (`permalink: /`). Pages default to `layout: single` with the author sidebar.
- **Top nav** is driven by `_data/navigation.yml` — adding a page requires adding an entry there to make it reachable.
- **Sidebar/profile** data (name, bio, social links, avatar `images/DP.jpg`) comes from the `author:` block in `_config.yml`, rendered by `_includes/author-profile.html`.
- **Blog** (`_posts/`): posts use an external URL as `permalink` (Medium/Blogspot), so the "Blog" archive (`/year-archive/`) links out rather than hosting content.
- **Publications** are a Jekyll collection in `_publications/`, listed by `_pages/publications.md`.
- **Styles**: `assets/css/main.scss` imports all partials from `_sass/`. Site-specific overrides (teal/blue theme) go in `_sass/_custom.scss`, which is imported last. Avoid editing vendor/theme partials when an override in `_custom.scss` will do.
- `_site/` is committed but is stale build output (contains leftover template pages like talks/teaching). GitHub Pages rebuilds from source, so don't edit `_site/` and don't treat it as the source of truth.

## Snake game (`/games/`)

The only custom JS feature; spans three files that must stay in sync on element IDs/class names:

- `_pages/games.md` — inline HTML markup (canvas, overlay with name input, D-pad, leaderboard) plus `<script>` tags loading Firebase compat SDK 9.23.0 from gstatic, then `firebase-config.js`, then `snake-game.js`.
- `assets/js/firebase-config.js` — initializes Firebase and exposes Firestore as `window.snakeDb` (or `null` if unconfigured). The API key here is a public Firebase web key by design.
- `assets/js/snake-game.js` — game loop and input; writes scores to the Firestore `snake-scores` collection and reads the top 10 ordered by `score`. Username and personal best are persisted in `localStorage` (`snake-username`, `snake-high`).
- `_sass/_snake-game.scss` — all game styles, imported from `main.scss`.

Past bugs worth remembering when touching the game: keyboard handlers must not hijack keys while the name input is focused, and the input must be blurred when the overlay hides so arrow keys reach the game; read the entered name before resetting game state.

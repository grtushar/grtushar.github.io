# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Md Golam Rahman Tushar, served by GitHub Pages at https://grtushar.github.io. It is a Jekyll site with a custom dark theme (layout inspired by Brittany Chiang's portfolio — keep the credit in the footers). GitHub Pages builds the site on push to `master` using the `github-pages` gem (Jekyll 3.9, Ruby Sass 3.7, kramdown + Rouge). There is no CI, test suite, or linter, and no JS build step.

## Commands

```bash
bundle install                                  # install Ruby deps (delete Gemfile.lock if it errors)
bundle exec jekyll serve --config _config.yml,_config.dev.yml   # localhost:4000, analytics off
bundle exec jekyll build                        # one-off build into _site/
```

`_config.yml` changes are not picked up by `jekyll serve` — restart the server.

On Ruby ≥ 3.4 the pinned Jekyll 3.9 fails to load (missing default gems such as `csv`, and Liquid calling the removed `String#tainted?`). Work around it outside the repo: a Gemfile that `eval_gemfile`s the repo's Gemfile and adds `csv base64 bigdecimal logger ostruct observer webrick drb mutex_m benchmark`, plus `RUBYOPT=-r<shim>` where the shim defines no-op `tainted?`/`taint`/`untaint` on `Object`. Don't commit these — GitHub Pages builds with its own Ruby.

## Structure

- **Layouts** (`_layouts/`): `base` (html shell + `_includes/site/head.html`) ← `home` (homepage), `page` (top bar + header + footer), `post` (article + JS-built table of contents), `publication`. Config defaults assign `post` to posts, `page` to pages, `publication` to the publications collection.
- **Homepage** = `_pages/about.md` (`permalink: /`, `layout: home`); its body is the About text. Every other section is rendered by `_includes/site/home/*.html` from **`_data/*.yml`** (`experience`, `projects`, `research`, `skills`, `education`) — edit content there, not in HTML. The publication card reads the `_publications` collection (`authors`, `year`, `venue`, `summary`, `paperurl` front matter).
- **Navigation**: `_data/navigation.yml` — `sections` drives the homepage's left-hand section nav (ids must match `id="…"` on `<section>`s), `pages` drives the subpage top bar.
- **Projects**: `featured: true` entries in `_data/projects.yml` show on the homepage; all show in the `/projects/` archive table.
- **Blog**: full posts live in `_posts/` under `/blog/<slug>/` (explicit `permalink` per post; default `permalink: /blog/:title/`). Front matter: `excerpt` (used as lead and card text), `tags`, `original_url` + `original_source` (renders the "Originally published on…" note), `lang: bn` for Bengali posts (loads Hind Siliguri and sets `lang` on the article). Use `##` for post section headings — the TOC is built from `h2`/`h3` in `.prose`.
- **Old URLs**: `/experience/`, `/education/`, `/research/`, `/achievements/`, `/publications/`, `/resume`, `/year-archive/` are kept alive as `redirect_to`/`redirect_from` stubs (jekyll-redirect-from) — don't delete them.
- **Styles**: `assets/css/site.scss` imports `_sass/site/*` (tokens → base → home → cards → page → prose → syntax) and `_sass/_snake-game.scss`. Colours/fonts are CSS custom properties in `_sass/site/_tokens.scss`. Ruby Sass 3.7: no `@use`, no CSS `min()`/`max()` in SCSS, and don't pass `var()` into Sass colour functions like `rgba()`.
- **JS**: `assets/js/site.js` (no deps) — cursor spotlight, scroll-spy for the homepage nav and post TOC, code-block language label + copy button (added at runtime to kramdown's `div.highlighter-rouge`).
- **Icons**: `{% include site/icon.html name="…" %}` — inline stroke SVGs; add new ones to its `case`.
- `_site/` is committed but is stale build output from the old template. GitHub Pages rebuilds from source, so don't edit `_site/` or treat it as the source of truth.

## Snake game (`/games/`)

Spans files that must stay in sync on element IDs/class names:

- `_pages/games.md` — markup (canvas, overlay with name input, D-pad, leaderboard) plus `<script>` tags loading Firebase compat SDK 9.23.0 from gstatic, then `firebase-config.js`, then `snake-game.js`.
- `assets/js/firebase-config.js` — initializes Firebase and exposes Firestore as `window.snakeDb` (or `null` if unconfigured). The API key here is a public Firebase web key by design.
- `assets/js/snake-game.js` — game loop and input; writes scores to the Firestore `snake-scores` collection (live, shared leaderboard — don't play test games against it casually) and reads the top 10 by `score`. Username and personal best are in `localStorage` (`snake-username`, `snake-high`).
- Canvas colours are read from `:root` CSS variables `--color-tint/-wash/-dark/-light/-secondary` (defined in `_sass/site/_tokens.scss`); `--color-dark`/`--color-light` must be 6-digit hex (the script parses them for the snake gradient).
- `_sass/_snake-game.scss` — game styles.

Past bugs worth remembering: keyboard handlers must not hijack keys while the name input is focused, the input must be blurred when the overlay hides so arrow keys reach the game, and the entered name must be read before resetting game state.

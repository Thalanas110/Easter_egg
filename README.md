# BucketList.exe — Personal bucket list (frontend)

A small, single-page static site that looks and feels like a modern React SPA but is implemented with plain HTML, CSS and a little JavaScript. It presents a personal bucket list organized into categories with a clean, responsive UI.

## Overview

- Styled to look like a component-driven app (header, cards, footer) without external frameworks.
- Responsive header with a hamburger menu on mobile and a sticky top bar on scroll.
- Organized into four categories (the README intentionally lists only the category names — the list items remain only in `index.html`): Personal, Academic, Extremes, and Family.

## What's in this repo

- `index.html` — the single-page markup with header, main content, and footer.
- `style.css` — all styling: responsive layout, sticky header, hamburger menu, and visual polish.
- `clockscript.js` — small script that updates the live clock on the page.
- `images/` — background and avatar assets used by the site.

## How to preview

No build step required. To preview locally:

1. Open `index.html` directly in a browser.
2. Or serve via a tiny static server. Example using Python 3 (run from the project folder):

```powershell
# Python 3.x
python -m http.server 8000; Start-Process http://localhost:8000
```

Then open http://localhost:8000 in your browser.

## Privacy note

This project contains personal goals. The README intentionally lists only the categories and not the individual items. If you plan to publish this repository, be mindful of what you expose.

## Ideas / next steps

- Accessibility: add keyboard controls for the hamburger menu, focus management, and skip links.
- UX: animate the hamburger into an X, auto-close menu on link selection (mobile), or add smooth scroll.
- Functionality: add localStorage to persist completed items, or add an authenticated admin interface to edit items.
- Migration: if you want to actually use React later, the current structure maps well to small components.

## Contact

Owner: Adriaan Dimate

If you want, I can now:

- Add auto-close on menu links (mobile)
- Animate the hamburger icon into an X
- Add keyboard accessibility improvements

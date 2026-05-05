# JavaScript Learning Playground

This repository is a small collection of JavaScript/TypeScript learning exercises and mini-projects. It mixes concept notes with runnable browser demos.

## What's Included

- **JavaScript concept walkthroughs**
  - `javascript-breakdown.js`: broad JavaScript notes and examples (variables, types, DOM/events, forms, async patterns, etc.).
  - `javascript-typescript-handbook.md`: handbook-style notes.
  - `javascript-typescript-mindmap.md`: quick visual/text map of JS/TS topics.
- **TypeScript notes/config**
  - `typescript-breakdown.notes.ts`: TypeScript-oriented notes/examples.
  - `javascript-roadmap.md`: step-by-step JavaScript practice roadmap.
  - `typescript-roadmap.md`: step-by-step TypeScript practice roadmap.
  - `tsconfig.json`: starter TypeScript compiler configuration.
- **Mini projects**
  - `number-guessing-game v 1.0.0/`: browser game where users guess a number from 1 to 100.
  - `brew-buddy-burn v 1.0.0/`: utility app with coffee, dog-age, and calories/exercise calculators.
  - `paginated-data-fetcher/`: generator + async fetch example for processing API data incrementally.

## Project Structure

```text
.
├── brew-buddy-burn v 1.0.0/
├── number-guessing-game v 1.0.0/
├── paginated-data-fetcher/
├── javascript-breakdown.js
├── javascript-typescript-handbook.md
├── javascript-typescript-mindmap.md
├── typescript-breakdown.notes.ts
└── tsconfig.json
```

## How to Run

Most content is plain `.js`, `.ts`, and `.md` study material. The mini projects run directly in a browser.

### Option 1: Open HTML files directly

Open these files in your browser:

- `number-guessing-game v 1.0.0/index.html`
- `brew-buddy-burn v 1.0.0/index.html`

### Option 2: Serve with a local static server (recommended)

From the repository root:

```bash
npx serve .
```

Then open the local URL shown in your terminal and navigate to either app folder.

## Learning Goals Covered

- Core JavaScript syntax and primitives
- Variable scope and hoisting behavior
- DOM selection and event handling
- Form handling and validation basics
- Fetch API and async/await workflows
- Generators and manual iteration
- Basic TypeScript compiler setup

## Notes

- Some files are intentionally educational and may include exploratory snippets rather than production-ready app structure.
- Folder names include version labels (for example, `v 1.0.0`) to preserve project snapshots.


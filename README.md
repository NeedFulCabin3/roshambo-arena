# Roshambo Arena

> An interactive Rock-Paper-Scissors game engine running entirely inside the web browser. It processes player choices, executes random computer selections, updates DOM nodes dynamically, and maintains state without external libraries.

## Overview

Most web games suffer from bloated assets and unnecessary framework overhead for simple state tracking. `roshambo-arena` solves this by keeping state mutations tight, lean, and running directly against standard browser APIs. It provides instantaneous round resolutions, real-time score updates, and persistent session counters.

## How it Works

1. The user clicks a weapon choice (`rock`, `paper`, or `scissors`).
2. Event listeners capture the `data-choice` attribute from the DOM target.
3. A pseudo-random index generator picks the computer choice from a fixed array.
4. The engine compares choices using ternary condition sets and updates the game score.
5. DOM element text and inline style properties dynamically react to declare the round winner.

## Key Features

* **Instant Round Evaluation**: Immediate win/loss/tie processing via conditional logic.
* **Dynamic Score Tracking**: Real-time state persistence across consecutive game rounds.
* **Warm Design Theme**: Custom interface styled with CSS variables and active state feedback.
* **Session Reset**: One-click state reset to flush current scores and clear arena choices.

## Tech Stack Breakdown

* **HTML5**: Structural container layouts, data attributes, and Semantic tags.
* **CSS3**: Flexbox visual layout, custom color palettes, and button transition effects.
* **JavaScript (ES6+)**: Event delegation, array indexing algorithms, and DOM node manipulation.

## Prerequisites & Web-Based Quick Start

You don't need local node runtimes or complex build steps to view or run this repo.

### Option 1: Browser via GitHub Codespaces

1. Press `.` on your keyboard while viewing this repository to launch GitHub's web editor.
2. Open `index.html`.
3. Use a static web server extension (or GitHub Codespaces preview) to run the file.

### Option 2: Local Static Launch

1. Clone or download the repository files.
2. Double-click `index.html` to open it directly in modern browsers like Chrome, Firefox, or Safari.

## Repository Structure

```text
roshambo-arena/
├── .github/
│   └── workflows/
│       └── code-health.yml   # Lints markup, scripts, and stylesheets on push
├── index.html                # App layout structure and dynamic text slots
├── style.css                 # Interface layout, dynamic styling, and animations
├── script.js                 # Core game state engine and DOM updater logic
└── .gitignore                # Excludes operating system artifacts and temporary files
```

## Roadmap

[ ] Add best-of-five tournament mode with trophy victory displays.

[ ] Implement local storage options to save high scores across sessions.

[ ] Add sound effect toggles for win, loss, and draw events.

```"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra```

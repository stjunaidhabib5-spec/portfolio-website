# Junaid ★ Editorial Floating-Element Portfolio

A chic, magazine-style single-page personal portfolio inspired by retro-editorial layouts, print zines, and tactile digital interfaces. Built with pure web standards (HTML5, Modern CSS, Vanilla JavaScript).

---

## Visual & Interactive Features

- **Retro Editorial Shell**: 100dvh poster-style canvas framed by an inset pastel pink perimeter border (`#F472B6`) with vintage corner registration marks and issue stamps.
- **Top-Left Bubble Display Logo & Real-Time Clock**:
  - Y2K bubble display typography with pulsing star glyph (`★`).
  - Live 2-line monospace digital clock (`Day, Date | HH:MM:SS AM/PM`) ticking every second.
  - Active status pill (`OPEN FOR COLLABORATIONS`).
- **Tactile Sticker Navigation Badges**:
  - Spiky/scalloped pastel sticker badges (`Projects`, `Writing`, `Resume`, `About`, `Contact`) with retro drop-shadows and distinct rotation angles.
  - Interactive bounce and scale effects on hover.
  - Clicking badges opens chic glassmorphic editorial modal catalogues without breaking the poster viewport.
- **Centerpiece Cutout Portrait**:
  - Monochrome high-contrast editorial portrait anchored to the bottom baseline.
  - Dynamic ambient halo and soft drop-shadow.
- **Organic Floating Constellation (Social Nodes)**:
  - Scattered links (`GitHub ★`, `LinkedIn ★`, `X / Twitter ★`, `ReadCV ★`, `Email ★`, `Substack ★`) orbiting the subject.
  - Perpetual subtle floating oscillation physics with staggered keyframe timings.
- **Subtle 2.5D Parallax Micro-Physics**:
  - Mouse movement across the viewport gently shifts the portrait, handwritten notes, slogans, and floating constellation for tactile physical depth.
- **Dual Aesthetic Themes**:
  - **Vintage Cream Paper** (`#FAF8F5`) — warm analog zine print.
  - **Midnight Zine** (`#0F0E13`) — dark cyber-editorial mode with persistent `localStorage` memory.
- **Fully Responsive**:
  - Adapts gracefully to tablets and mobile screens (<768px) with horizontal sticker tray scrolling and anti-clipping layout adjustments.

---

## Project Structure

```
├── index.html                                    # Main semantic HTML5 poster & modal structures
├── styles.css                                    # Pure modern CSS design system & keyframe physics
├── app.js                                        # Live clock, constellation, parallax physics & modals
├── config.js                                     # Centralized profile, links, copy & modal showcase data
├── assets/
│   ├── portrait.png                             # Transparent monochrome cutout portrait
│   └── portrait_orig.jpg                        # Original high-res studio portrait
├── antigravity_editorial_portfolio_blueprint.md  # Architectural design blueprint & reference
└── README.md                                     # Documentation
```

---

## Quick Start / Local Development

Since this portfolio is built with pure web fundamentals, no heavy build tools or dependencies are required:

### Option 1: Python HTTP Server (Built-in)
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 2: Node.js / npx serve
```bash
npx serve .
```

---

## Customization

All personal details, text copy, social URLs, and showcase items are defined in **[`config.js`](./config.js)**:
- Change your name, role, and handwritten notes in `PORTFOLIO_CONFIG.profile`.
- Update social links and floating coordinates in `PORTFOLIO_CONFIG.constellation`.
- Add your projects, essays, and career timeline in `PORTFOLIO_CONFIG.modals`.
- Replace `assets/portrait.png` with your own cutout portrait photo.

---

## License

MIT License © 2026 Junaid

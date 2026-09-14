# Editorial Floating-Element Portfolio: Antigravity Build Guide

A blueprint and implementation guide for building a chic, magazine-style single-page portfolio inspired by retro-editorial layouts with floating social nodes, sticker badges, handwritten annotations, and a centered portrait.

---

## 1. Visual Anatomy & Spatial Blueprint

```
+-------------------------------------------------------------------------------+
| [Outer Frame Margin: 16px - 24px with fine pastel border]                     |
|                                                                               |
| (Top-Left)                                         (Top-Right)                |
| [Retro Bubble Logo]                                [Starburst / Sticker Nav]  |
| [Live Clock & Date: monospace]                     [Work] [About] [Contact]   |
|                                                                               |
|                   [Floating Node: GitHub ★]                                   |
|                                                                               |
| [Handwritten]            [Floating Node: X ★]          [Floating Node: In ★]  |
| "hi! i'm [name]..."                                                           |
|                                [CENTER PORTRAIT]        [Editorial Slogan]    |
| [Floating Node: Mail ★]       (Black & White /         "BUILDING & DESIGNING" |
|                                Desaturated Cutout)      "IN [CITY]"           |
|                                                                               |
|                   [Floating Node: Substack ★]                                 |
+-------------------------------------------------------------------------------+
```

### Key Elements Replicated from the Reference:
1. **The Pink Editorial Border:** A full-screen inset border framing the entire viewport like a printed zine or art magazine.
2. **Top-Left Header:** Stylized retro/funky display typography paired with a real-time running digital clock (`Day, Month Date, Year | HH:MM:SS AM/PM`).
3. **Top-Right Sticker Badges:** Spiky starburst or scalloped badge buttons using SVG clip-paths and pastel background fills with solid black borders.
4. **Scattered Floating Nodes:** Social links (GitHub, LinkedIn, X/Twitter, Email, ReadCV) positioned organically around the subject's head and shoulders with a trailing star (`★`) glyph.
5. **Handwritten Accents:** Scribble-style typography for spontaneous personal notes ("hi! i'm...", "building things in...").
6. **Centered Cutout Portrait:** Grayscale or desaturated portrait anchored seamlessly to the bottom baseline.

---

## 2. Recommended Tech Stack

| Layer | Choice | Reason |
| :--- | :--- | :--- |
| **Framework** | **React / Next.js (App Router)** or **Vite + React** | Instant reactivity for animations and real-time clock. |
| **Styling** | **Tailwind CSS v3/v4** | Fast coordinate manipulation, utility-first positioning, and custom arbitrary values. |
| **Animations** | **Framer Motion** | Subtle floating/hover physics (`y: [0, -6, 0]`) for scattered links. |
| **Icons & Glyphs** | Lucide React + Unicode Stars (`★`) | Minimalist icon balance. |
| **Fonts** | Google Fonts: *Rubik Vinyl* / *Righteous* (Logo), *Caveat* or *Rock Salt* (Handwritten), *Space Mono* (Clock), *Inter* (Labels) | Matches the mixed-media typography vibe. |

---

## 3. Step-by-Step Implementation Flow

### Phase 1: Viewport Shell & Inset Frame
* Set container to `h-[100dvh] w-screen overflow-hidden relative bg-[#FAF8F5]` (warm cream/editorial paper background).
* Create an inset perimeter container: `fixed inset-3 md:inset-6 border border-[#F472B6]/40 rounded-none pointer-events-none z-50`.

### Phase 2: Dynamic Live Clock Component
* A React hook (`useEffect` with `setInterval(1000)`) formatting `new Date()` into:
  * Date string: `Wednesday, November 12, 2025`
  * Time string: `08:38:08 AM`
* Rendered in crisp monospace tracking.

### Phase 3: Badge Sticker Navigation
* Craft SVG-based clip-path sticker shapes or jagged polygon borders:
  ```css
  /* Example Jagged Starburst polygon */
  clip-path: polygon(100% 50%, 90% 65%, 95% 85%, 75% 85%, 65% 100%, 50% 90%, 35% 100%, 25% 85%, 5% 85%, 10% 65%, 0% 50%, 10% 35%, 5% 15%, 25% 15%, 35% 0%, 50% 10%, 65% 0%, 75% 15%, 95% 15%, 90% 35%);
  ```
* Apply contrasting playful pastel backgrounds: `#F472B6` (Pink), `#38BDF8` (Cyan), `#A855F7` (Purple), `#FACC15` (Yellow), `#34D399` (Emerald).

### Phase 4: Centerpiece Portrait Integration
* Anchored image container:
  ```html
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] pointer-events-none z-10 flex justify-center">
    <img src="/portrait.png" alt="Portrait" class="w-full object-contain filter grayscale contrast-110 drop-shadow-sm select-none" />
  </div>
  ```

### Phase 5: Organic Floating Social Links (The Constellation)
* Array of social link objects with unique relative coordinate offsets and gentle oscillation delays:
  ```json
  [
    { "title": "GitHub", "url": "https://github.com/...", "top": "24%", "left": "32%", "delay": 0 },
    { "title": "LinkedIn", "url": "https://linkedin.com/...", "top": "18%", "left": "48%", "delay": 0.4 },
    { "title": "X / Twitter", "url": "https://x.com/...", "top": "26%", "left": "65%", "delay": 0.2 },
    { "title": "Email", "url": "mailto:...", "top": "46%", "left": "28%", "delay": 0.6 },
    { "title": "Substack", "url": "https://...", "top": "48%", "left": "70%", "delay": 0.3 }
  ]
  ```

---

## 4. Antigravity Prompt Sequence

Copy and run these prompts sequentially inside the **Antigravity IDE** agent console:

### Prompt 1: Project Setup & Editorial Frame
```text
Set up a single-page Next.js / Tailwind CSS layout inspired by retro-editorial zine design.
1. The container must fit strictly within 100dvh with overflow hidden (poster/flyer style).
2. The background color should be a subtle vintage warm paper tone (#FCFBF7).
3. Add an inset perimeter frame border 20px inside the window with a muted pink line (#F9A8D4).
4. In the top-left corner, implement a 2-line live clock using a modern typewriter monospace font (Space Mono) that updates every second with the current day, date, and live AM/PM time.
5. Above the clock, place a colorful Y2K-style bubble logo for "[YOUR NAME]".
```

### Prompt 2: Sticker Badge Navigation
```text
Build a set of 5 sticker-like interactive buttons in the top-right corner inside the frame.
1. Labels: "Projects", "Writing", "Resume", "About", "Contact".
2. Style each with distinct pastel fills: bubblegum pink, retro cyan, bright purple, canary yellow, and mint green.
3. Add a thin solid black 1.5px border and a subtle playful rotation to each (-2deg, 3deg, -1deg, etc.).
4. Add hover micro-interactions using Framer Motion: scale up to 1.1 with a slight bounce and drop shadow.
```

### Prompt 3: Centered Cutout Portrait & Handwritten Notes
```text
Implement the centerpiece portrait and editorial scribbles:
1. Place a transparent cutout portrait image anchored to the exact bottom center (baseline). Ensure it scales nicely on desktop screens without clipping awkwardly.
2. Apply CSS filters: grayscale(100%), contrast(115%), and brightness(105%) for a high-fashion editorial print look.
3. Import the Google Font 'Rock Salt' or 'Caveat'.
4. Position an editorial handwritten scribbled text on the middle-left: "hi! i'm a..."
5. Position an editorial all-caps handwritten block on the middle-right: "BUILDING & DESIGNING IN [CITY/LOCATION]".
```

### Prompt 4: Floating Constellation of Social Links
```text
Add floating interactive social media links scattered around the central portrait:
1. Include: GitHub, LinkedIn, X / Twitter, ReadCV, and Email.
2. Format each as: "[Title] \u2605" (with a small star glyph).
3. Position them organically using absolute percentage coordinates so they frame the head and shoulders of the portrait.
4. Animate each with Framer Motion: a gentle, perpetual floating animation (floating up and down by 4px on an infinite repeat with staggered durations between 2.5s and 4s).
5. On hover, the link text should show an underline scratch animation and the star glyph should rotate 45 degrees.
```

### Prompt 5: Mobile Responsive Adaptation
```text
Optimize this editorial poster layout for mobile viewports (screens under 768px):
1. On mobile, allow the container to gracefully scroll if vertical height is under 700px.
2. Scale down the center portrait so it doesn't overpower the floating nodes.
3. Keep the sticker buttons in the top navigation scrollable horizontally or collapse them into a compact sticker tray.
4. Reposition floating social nodes so they don't overlap the subject's face on narrower screens.
```

---

## 5. Production Asset & Typography Checklist

- [ ] **Portrait Photo:** High-res cutout (PNG/WebP with transparent background) cropped from the chest up.
- [ ] **Google Fonts Import:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Rubik+Mono+One&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  ```
- [ ] **Custom Sticker SVGs:** Optional SVG clipping masks for authentic jagged edges if CSS clip-paths need browser fallback.
/**
 * Editorial Floating Portfolio Configuration
 * Easily update your personal details, copy, social links, and modal content here.
 */

const PORTFOLIO_CONFIG = {
  profile: {
    name: "JUNAID",
    logoText: "JUNAID ★",
    role: "Creative Technologist / AI Engineer & Designer",
    location: "SAN FRANCISCO & GLOBAL",
    statusBadge: "OPEN FOR COLLABORATIONS",
    handwrittenNoteLeft: "hi! i'm junaid — exploring the intersections of generative intelligence, expressive typography, and tactile digital interfaces.",
    editorialSloganRight: "BUILDING & DESIGNING AT THE FRONTIER",
    editorialSubRight: "CODE · COGNITION · CRAFT",
  },

  // Organic floating social constellation framing the centerpiece portrait
  constellation: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com",
      top: "19%",
      left: "29%",
      delay: "0s",
      duration: "3.6s",
      direction: "normal"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com",
      top: "14%",
      left: "48%",
      delay: "0.5s",
      duration: "4.2s",
      direction: "reverse"
    },
    {
      id: "twitter",
      label: "X / Twitter",
      url: "https://twitter.com",
      top: "22%",
      left: "67%",
      delay: "0.2s",
      duration: "3.8s",
      direction: "normal"
    },
    {
      id: "readcv",
      label: "ReadCV",
      url: "https://read.cv",
      top: "40%",
      left: "22%",
      delay: "0.7s",
      duration: "4.5s",
      direction: "reverse"
    },
    {
      id: "email",
      label: "Email",
      url: "mailto:hello@junaid.dev",
      top: "42%",
      left: "72%",
      delay: "0.4s",
      duration: "3.4s",
      direction: "normal"
    },
    {
      id: "substack",
      label: "Substack",
      url: "https://substack.com",
      top: "56%",
      left: "26%",
      delay: "0.9s",
      duration: "4.0s",
      direction: "reverse"
    }
  ],

  // Navigation sticker badges (Top Right)
  stickers: [
    { id: "projects", label: "Projects", color: "#F472B6", rotation: "-3deg", icon: "✦" },
    { id: "writing", label: "Writing", color: "#38BDF8", rotation: "2.5deg", icon: "✍" },
    { id: "resume", label: "Resume", color: "#A855F7", rotation: "-2deg", icon: "⚡" },
    { id: "about", label: "About", color: "#FACC15", rotation: "3deg", icon: "✿" },
    { id: "contact", label: "Contact", color: "#34D399", rotation: "-1.5deg", icon: "✉" }
  ],

  // Modals Content Data
  modals: {
    projects: {
      title: "Featured Works & Experiments",
      subtitle: "Selected autonomous systems, creative tools, and interactive editorial spaces.",
      items: [
        {
          title: "NeuroCanvas Generative Studio",
          year: "2026",
          category: "Generative AI / WebGL",
          description: "An infinite real-time latent canvas combining multi-modal diffusion models with interactive fluid physics for spatial ideation.",
          tags: ["WebGL", "TypeScript", "Python", "Diffusers"],
          demoUrl: "#",
          githubUrl: "https://github.com"
        },
        {
          title: "HyperEditorial Layout Engine",
          year: "2025",
          category: "Design Systems / CSS Houdini",
          description: "Algorithmic zine and magazine typography layout system inspired by early Swiss and Y2K print aesthetics for the open web.",
          tags: ["Vanilla JS", "CSS Houdini", "Typography", "SVG"],
          demoUrl: "#",
          githubUrl: "https://github.com"
        },
        {
          title: "Synapse Agentic Playground",
          year: "2025",
          category: "Developer Tools / LLMs",
          description: "Autonomous multi-agent pair programming terminal that visualizes agent thought trees and memory vector spaces in real-time.",
          tags: ["Electron", "WebSockets", "Rust", "Ollama"],
          demoUrl: "#",
          githubUrl: "https://github.com"
        },
        {
          title: "Aether Reactive Soundscape",
          year: "2024",
          category: "Audio Computing / Three.js",
          description: "Generative spatial audio synthesis platform modulated by cursor velocity, ambient viewport lighting, and device sensors.",
          tags: ["Web Audio API", "Three.js", "GLSL Shaders"],
          demoUrl: "#",
          githubUrl: "https://github.com"
        }
      ]
    },

    writing: {
      title: "Essays, Notes & Dispatches",
      subtitle: "Reflections on generative ergonomics, print nostalgia, and computing interfaces.",
      items: [
        {
          title: "The Poetics of Latent Space: Why Imperfections Make AI Art Feel Human",
          date: "May 2026",
          readTime: "7 min read",
          summary: "Exploring how analog artifacts, print grain, and statistical anomalies preserve vulnerability and warmth in modern machine generation.",
          url: "#"
        },
        {
          title: "Designing Beyond Flat UI: The Renaissance of Physicality, Stickers & Print Editorial",
          date: "February 2026",
          readTime: "9 min read",
          summary: "Why the hyper-minimalist SaaS aesthetic hit a dead end, and how tactile editorial layouts are restoring joy to browser interaction.",
          url: "#"
        },
        {
          title: "Local-First Agents: Building Resilient Edge-Native Software",
          date: "November 2025",
          readTime: "5 min read",
          summary: "Architecture patterns for orchestrating sub-second local LLMs with client-side SQLite and browser vector databases.",
          url: "#"
        },
        {
          title: "Micro-Interactions as Dialogue: Treating Viewports as Living Surfaces",
          date: "August 2025",
          readTime: "6 min read",
          summary: "How subtle physics, organic coordinate scattering, and responsive audio feedback make websites feel genuinely alive.",
          url: "#"
        }
      ]
    },

    resume: {
      title: "Curriculum Vitae",
      subtitle: "Experience, technical competencies, and multidisciplinary background.",
      downloadUrl: "#",
      experience: [
        {
          role: "Lead Creative Technologist & AI Architect",
          company: "Studio Hyperlink / Autonomous Lab",
          period: "2024 — Present",
          description: "Directing research and implementation for next-generation generative interfaces, agentic developer workflows, and bespoke web editorial systems."
        },
        {
          role: "Senior Interaction Engineer",
          company: "Pulse Media Technologies",
          period: "2022 — 2024",
          description: "Architected high-performance WebGL visualization pipelines and real-time collaborative canvas applications serving millions of creators."
        },
        {
          role: "Independent Creative Engineer & Designer",
          company: "Self-Employed / Select Clients",
          period: "2020 — 2022",
          description: "Designed bespoke digital identities, interactive 3D web experiences, and boutique digital editorial publications."
        }
      ],
      skills: [
        { category: "Frontend & Creative", items: ["Vanilla JavaScript / ESNext", "Modern CSS & Houdini", "WebGL / Three.js", "React & Next.js", "Canvas 2D / SVG Animation"] },
        { category: "AI & Backend", items: ["Python & PyTorch", "LLM Orchestration & Agents", "Node.js / Bun", "Vector Databases", "WebSockets / Real-Time"] },
        { category: "Design & Craft", items: ["Editorial Art Direction", "Typography Systems", "Framer Motion Physics", "Figma & Shader Design", "Sound Design"] }
      ]
    },

    about: {
      title: "About Junaid",
      subtitle: "Creative Technologist, Software Craftsman & Visual Thinker.",
      bioParagraphs: [
        "I believe that software at its best is not just functional infrastructure — it is an expressive medium, a tactile instrument, and a cultural artifact.",
        "My work navigates the intersection of machine cognition, avant-garde editorial aesthetics, and high-performance browser engineering. I build tools and digital spaces that evoke the sensory delight of vintage zines, print typography, and playful analog computers.",
        "When I'm not writing code or experimenting with latent models, you can find me archiving independent typography specimens, hunting for analog synthesizers, and reading speculative fiction."
      ],
      principles: [
        { icon: "✦", title: "Joy over Sterile Utility", desc: "Software should spark curiosity, surprise, and human resonance." },
        { icon: "★", title: "Craft at the Microscopic Level", desc: "Every pixel, keyframe curve, and typographic ligature matters." },
        { icon: "⚡", title: "Edge-First & Pure Standards", desc: "Building fast, lightweight experiences with pure web fundamentals." }
      ]
    },

    contact: {
      title: "Let's Build Something Memorable",
      subtitle: "Available for visionary projects, studio collaborations, and technical advisory.",
      email: "hello@junaid.dev",
      calendarLink: "https://cal.com",
      channels: [
        { label: "Email", value: "hello@junaid.dev", href: "mailto:hello@junaid.dev" },
        { label: "GitHub", value: "@junaid", href: "https://github.com" },
        { label: "X / Twitter", value: "@junaid", href: "https://twitter.com" },
        { label: "LinkedIn", value: "in/junaid", href: "https://linkedin.com" }
      ]
    }
  }
};

/**
 * Editorial Floating-Element Portfolio Application
 * Manages live clock, constellation rendering, parallax micro-physics,
 * modal dialogs, and theme switching.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  hydrateProfileData();
  renderConstellation();
  initParallaxPhysics();
  initModalSystem();
  initThemeToggle();
});

/* ==========================================================================
   1. Live Monospace Clock
   ========================================================================== */
function initLiveClock() {
  const dateEl = document.getElementById('liveClockDate');
  const timeEl = document.getElementById('liveClockTime');

  function updateClock() {
    const now = new Date();

    // Format: DayOfWeek, Month Day, Year
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', optionsDate);

    // Format: HH:MM:SS AM/PM
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12';
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (dateEl) dateEl.textContent = dateString;
    if (timeEl) timeEl.textContent = timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   2. Hydrate Profile Data from config.js
   ========================================================================== */
function hydrateProfileData() {
  if (typeof PORTFOLIO_CONFIG === 'undefined') return;
  const { profile } = PORTFOLIO_CONFIG;

  const logoText = document.getElementById('logoText');
  const statusBadgeText = document.getElementById('statusBadgeText');
  const handwrittenBio = document.getElementById('handwrittenBio');
  const editorialHeadline = document.getElementById('editorialHeadline');
  const editorialTagline = document.getElementById('editorialTagline');
  const specLocation = document.getElementById('specLocation');

  if (logoText && profile.name) logoText.textContent = profile.name;
  if (statusBadgeText && profile.statusBadge) statusBadgeText.textContent = profile.statusBadge;
  if (handwrittenBio && profile.handwrittenNoteLeft) handwrittenBio.textContent = profile.handwrittenNoteLeft;
  if (editorialTagline && profile.editorialSubRight) editorialTagline.textContent = profile.editorialSubRight;
  if (specLocation && profile.location) specLocation.textContent = profile.location;
}

/* ==========================================================================
   3. Render Floating Constellation
   ========================================================================== */
function renderConstellation() {
  const container = document.getElementById('constellationContainer');
  if (!container || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.constellation) return;

  container.innerHTML = '';

  PORTFOLIO_CONFIG.constellation.forEach((node) => {
    const link = document.createElement('a');
    link.href = node.url;
    link.target = node.url.startsWith('http') ? '_blank' : '_self';
    link.rel = 'noopener noreferrer';
    link.className = 'constellation-node';
    link.id = `node-${node.id}`;
    link.setAttribute('data-parallax', '0.04');

    // Desktop positioning
    link.style.top = node.top;
    link.style.left = node.left;
    link.style.animationDelay = node.delay;
    link.style.animationDuration = node.duration;
    link.style.animationDirection = node.direction || 'normal';

    link.innerHTML = `
      <span class="node-label">${node.label}</span>
      <span class="node-star">★</span>
    `;

    container.appendChild(link);
  });
}

/* ==========================================================================
   4. Parallax Micro-Physics on Mouse Movement
   ========================================================================== */
function initParallaxPhysics() {
  const stage = document.getElementById('posterStage');
  const portrait = document.getElementById('portraitWrapper');
  const leftAnnotation = document.getElementById('handwrittenLeft');
  const rightSlogan = document.getElementById('sloganBlock');

  if (!stage || window.innerWidth < 768) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    // Normalized between -1 and 1
    mouseX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    mouseY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
  });

  function animateParallax() {
    // Smooth dampening
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    if (portrait) {
      portrait.style.transform = `translateX(-50%) translate3d(${currentX * 12}px, ${currentY * 6}px, 0)`;
    }

    if (leftAnnotation) {
      leftAnnotation.style.transform = `rotate(-2deg) translate3d(${currentX * -15}px, ${currentY * -10}px, 0)`;
    }

    if (rightSlogan) {
      rightSlogan.style.transform = `translate3d(${currentX * -18}px, ${currentY * -12}px, 0)`;
    }

    // Subtle drift on constellation nodes
    const nodes = document.querySelectorAll('.constellation-node');
    nodes.forEach((node, i) => {
      const factor = 10 + (i % 3) * 6;
      node.style.translate = `${currentX * factor}px ${currentY * factor}px`;
    });

    requestAnimationFrame(animateParallax);
  }

  requestAnimationFrame(animateParallax);
}

/* ==========================================================================
   5. Editorial Modals System
   ========================================================================== */
function initModalSystem() {
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalHeaderTitle = document.getElementById('modalHeaderTitle');
  const modalHeaderSubtitle = document.getElementById('modalHeaderSubtitle');
  const modalBody = document.getElementById('modalBody');

  const stickerButtons = document.querySelectorAll('[data-modal]');

  function openModal(modalKey) {
    if (!PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.modals[modalKey]) return;
    const data = PORTFOLIO_CONFIG.modals[modalKey];

    // Set Header Info
    if (modalCategoryTag) modalCategoryTag.textContent = `CATALOGUE // ${modalKey.toUpperCase()}`;
    if (modalHeaderTitle) modalHeaderTitle.textContent = data.title;
    if (modalHeaderSubtitle) modalHeaderSubtitle.textContent = data.subtitle;

    // Render Body according to section
    if (modalBody) {
      modalBody.innerHTML = generateModalHtml(modalKey, data);
    }

    // Show modal
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event Listeners
  stickerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal');
      openModal(modalKey);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
}

function generateModalHtml(key, data) {
  switch (key) {
    case 'projects':
      return `
        <div class="projects-grid">
          ${data.items.map(item => `
            <article class="project-card">
              <div>
                <div class="project-meta-row">
                  <span>${item.category}</span>
                  <span>${item.year}</span>
                </div>
                <h3 class="project-title">${item.title}</h3>
                <p class="project-desc">${item.description}</p>
                <div class="project-tags">
                  ${item.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
              </div>
              <div class="project-actions">
                <a href="${item.demoUrl}" class="card-btn" target="_blank" rel="noopener">LAUNCH DEMO ↗</a>
                <a href="${item.githubUrl}" class="card-btn" target="_blank" rel="noopener">GITHUB ↗</a>
              </div>
            </article>
          `).join('')}
        </div>
      `;

    case 'writing':
      return `
        <div class="writing-list">
          ${data.items.map(item => `
            <a href="${item.url}" class="writing-item" target="_blank" rel="noopener">
              <div class="writing-item-meta">
                <span>${item.date}</span>
                <span>•</span>
                <span>${item.readTime}</span>
              </div>
              <h3 class="writing-item-title">${item.title}</h3>
              <p class="writing-item-summary">${item.summary}</p>
            </a>
          `).join('')}
        </div>
      `;

    case 'resume':
      return `
        <div class="resume-section">
          <div class="resume-header-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
            <span class="section-heading">CAREER CHRONOLOGY</span>
            <a href="${data.downloadUrl}" class="card-btn" download>DOWNLOAD PDF CV ↓</a>
          </div>
          <div class="timeline">
            ${data.experience.map(exp => `
              <div class="timeline-item">
                <div class="timeline-role">${exp.role}</div>
                <div class="timeline-meta">${exp.company} // ${exp.period}</div>
                <p class="timeline-desc">${exp.description}</p>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 1.5rem;">
            <span class="section-heading">TECHNICAL CAPABILITIES</span>
            <div class="skills-matrix" style="margin-top: 0.8rem;">
              ${data.skills.map(s => `
                <div>
                  <div class="skill-category-title">${s.category}</div>
                  <div class="skill-pills-row" style="margin-top: 0.3rem;">
                    ${s.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

    case 'about':
      return `
        <div class="about-narrative">
          ${data.bioParagraphs.map(p => `<p>${p}</p>`).join('')}

          <div style="margin-top: 1rem;">
            <span class="section-heading">CREATIVE AXIOMS</span>
            <div class="principles-grid">
              ${data.principles.map(item => `
                <div class="principle-card">
                  <div class="principle-icon">${item.icon}</div>
                  <h4 class="principle-title">${item.title}</h4>
                  <p class="principle-desc">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

    case 'contact':
      return `
        <div class="contact-layout">
          <div class="contact-direct-card">
            <h3 style="font-size: 1.15rem; font-weight: 800;">Direct Inquiries</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Whether you want to collaborate on generative systems, editorial digital projects, or talk shop:
            </p>
            <div class="contact-channels-list">
              ${data.channels.map(ch => `
                <a href="${ch.href}" class="contact-channel-item" target="_blank" rel="noopener">
                  <span>${ch.label}</span>
                  <span>${ch.value} ↗</span>
                </a>
              `).join('')}
            </div>
          </div>

          <div class="interactive-quick-msg">
            <h3 style="font-size: 1.15rem; font-weight: 800;">Send a Quick Note</h3>
            <div>
              <label class="input-label" for="contactSender">YOUR NAME / EMAIL</label>
              <input type="text" id="contactSender" class="retro-input" placeholder="e.g. alex@studio.co" style="margin-top: 4px;">
            </div>
            <div>
              <label class="input-label" for="contactBody">MESSAGE</label>
              <textarea id="contactBody" class="retro-input" rows="3" placeholder="Tell me about your idea or project..." style="margin-top: 4px; resize: none;"></textarea>
            </div>
            <button class="retro-submit-btn" id="sendQuickNoteBtn">
              <span>DISPATCH MESSAGE</span>
              <span>⚡</span>
            </button>
            <div id="contactFeedback" style="display:none; font-family:var(--font-mono); font-size:0.75rem; color:var(--pastel-emerald); font-weight:700;">
              ✓ Signal dispatched! Opening mail client...
            </div>
          </div>
        </div>
      `;

    default:
      return `<p>Content coming soon.</p>`;
  }
}

// Delegate contact button dispatch
document.addEventListener('click', (e) => {
  if (e.target && (e.target.id === 'sendQuickNoteBtn' || e.target.closest('#sendQuickNoteBtn'))) {
    const sender = document.getElementById('contactSender');
    const body = document.getElementById('contactBody');
    const feedback = document.getElementById('contactFeedback');

    const subject = encodeURIComponent(`Portfolio Inquiry from ${sender ? sender.value : 'Visitor'}`);
    const bodyText = encodeURIComponent(body ? body.value : '');
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.modals.contact.email}?subject=${subject}&body=${bodyText}`;

    if (feedback) feedback.style.display = 'block';
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  }
});

/* ==========================================================================
   6. Theme Switcher (Vintage Cream / Midnight Zine)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeLabel = document.getElementById('themeLabel');

  const savedTheme = localStorage.getItem('junaid_portfolio_theme') || 'vintage';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme') || 'vintage';
      const newTheme = currentTheme === 'vintage' ? 'midnight' : 'vintage';
      applyTheme(newTheme);
      localStorage.setItem('junaid_portfolio_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    if (themeLabel) {
      themeLabel.textContent = theme === 'vintage' ? 'PAPER VINTAGE' : 'MIDNIGHT ZINE';
    }
  }
}

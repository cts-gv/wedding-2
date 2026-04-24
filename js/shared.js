/**
 * shared.js — runs on every page
 * Handles: nav build, CSS variable injection, scroll reveal, countdown, mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
  const W = window.WEDDING;

  // ── Apply CSS variables from config ──────────────────────────
  const root = document.documentElement;
  Object.entries(W.colors).forEach(([key, val]) => {
    const varName = '--' + key.replace(/_/g, '-');
    root.style.setProperty(varName, val);
  });
  // Also set the named vars used throughout CSS
  root.style.setProperty('--primary',    W.colors.primary);
  root.style.setProperty('--secondary',  W.colors.secondary);
  root.style.setProperty('--accent',     W.colors.accent);
  root.style.setProperty('--dark',       W.colors.dark);
  root.style.setProperty('--light',      W.colors.light);
  root.style.setProperty('--gold-light', W.colors.gold_light);

  // ── Build Navigation ─────────────────────────────────────────
  const navContainer = document.getElementById('nav-links');
  if (navContainer) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    W.nav.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (item.href === currentPage || (currentPage === '' && item.href === 'index.html')) {
        a.classList.add('active');
      }
      li.appendChild(a);
      navContainer.appendChild(li);
    });
  }

  // ── Brand name in nav ────────────────────────────────────────
  const navBrand = document.getElementById('nav-brand');
  if (navBrand) navBrand.textContent = W.names.combined;

  // ── Mobile menu toggle ───────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }

  // ── Footer ───────────────────────────────────────────────────
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="footer-brand">${W.names.combined}</div>
      <div class="footer-hashtag">${W.footer.hashtag}</div>
      <p>${W.footer.message}</p>
    `;
  }

  // ── Scroll reveal ────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── Hero bg parallax & load ───────────────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.25}px) scale(1)`;
    }, { passive: true });
  }

  // ── Countdown Timer ──────────────────────────────────────────
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    function updateCountdown() {
      const target = new Date(W.date.iso + 'T16:00:00');
      const now    = new Date();
      const diff   = target - now;

      if (diff <= 0) {
        countdownEl.innerHTML = `<div class="countdown-unit"><span class="countdown-number shimmer-gold">We're Married!</span></div>`;
        return;
      }

      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.innerHTML = [
        { n: days,    l: 'Days' },
        { n: hours,   l: 'Hours' },
        { n: minutes, l: 'Minutes' },
        { n: seconds, l: 'Seconds' }
      ].map(u => `
        <div class="countdown-unit">
          <span class="countdown-number">${String(u.n).padStart(2,'0')}</span>
          <span class="countdown-label">${u.l}</span>
        </div>
      `).join('');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});

// ── Utility: resolve photo path (falls back to placeholder) ────
function photoSrc(path, type = 'default') {
  if (!path || path === '') {
    const W = window.WEDDING;
    if (type === 'hero')     return W.placeholderHero;
    if (type === 'portrait') return W.placeholderPortrait;
    if (type === 'square')   return W.placeholderSquare;
    return W.placeholder;
  }
  return path;
}
window.photoSrc = photoSrc;

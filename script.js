// ─────────────────────────────────────────
// DDM Showcase — Main JavaScript
// ─────────────────────────────────────────

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  navLinksEl?.classList.toggle('open');
});

// ── Animate on scroll ──
const animateEls = document.querySelectorAll('[data-animate]');
const animObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      animObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
animateEls.forEach(el => animObs.observe(el));

// ── Skills animate ──
document.querySelectorAll('.skill-item').forEach((el, i) => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('visible'), i * 60);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  obs.observe(el);
});

// ── Smooth click for same-page anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navLinksEl?.classList.remove('open');
    }
  });
});

// ── Counter animation for hero stats ──
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const statNumbers = document.querySelectorAll('.stat-number');
  const targets = [2, 12, 5];
  const suffixes = ['', '+', '+'];
  let animated = false;
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      statNumbers.forEach((el, i) => animateCounter(el, targets[i], suffixes[i]));
    }
  }, { threshold: 0.5 });
  statsObs.observe(statsSection);
}

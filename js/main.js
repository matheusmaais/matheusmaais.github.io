(() => {
  'use strict';

  const ease = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, ease);

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('main > section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href')?.replace('#', '');
          link.classList.toggle('active', href === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((s) => sectionObserver.observe(s));

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          const menu = document.querySelector('.navbar__links');
          const hamburger = document.querySelector('.navbar__hamburger');
          if (menu) menu.classList.remove('open');
          if (hamburger) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  const hamburger = document.querySelector('.navbar__hamburger');
  const navMenu = document.querySelector('.navbar__links');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function handleCopyEmail(btn) {
    const email = btn.dataset.email;
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      const feedback = document.getElementById('copy-feedback');
      if (feedback) {
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 2000);
      }
    });
  }

  document.querySelectorAll('[data-email]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleCopyEmail(btn);
    });
  });
})();

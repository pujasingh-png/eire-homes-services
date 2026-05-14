// ── Hamburger menu ──
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('mobile-menu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

// ── FAQ accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
  });
});

// ── Contact form ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Sent — we\u2019ll be in touch ✓';
    btn.disabled = true;
    btn.style.opacity = '.85';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      btn.style.opacity = '';
      form.reset();
    }, 3200);
  });
}

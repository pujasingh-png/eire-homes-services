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

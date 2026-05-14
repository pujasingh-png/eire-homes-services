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

// ── Contact form — submits to Netlify via fetch ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      btn.innerHTML = 'Sent — we\'ll be in touch ✓';
      btn.style.background = '#2F7D5B';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    })
    .catch(() => {
      btn.innerHTML = 'Something went wrong — try again';
      btn.disabled = false;
    });
  });
}

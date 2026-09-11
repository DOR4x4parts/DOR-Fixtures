const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.getElementById('signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = 'Prototype only — next step is connecting this form to your customer list.';
});

document.getElementById('year').textContent = new Date().getFullYear();

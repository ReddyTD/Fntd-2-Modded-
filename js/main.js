// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.nav-links');

  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
});

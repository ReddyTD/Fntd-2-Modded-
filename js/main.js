document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuPrincipal = document.getElementById('menuPrincipal');
  const mainNav = document.getElementById('mainNav');

  menuPrincipal.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuPrincipal.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
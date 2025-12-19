document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });

  document.querySelectorAll('.account-menu button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
    });
  });

  // BURGER MENU для мобильных
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); 
    });
  }
});

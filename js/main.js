// main.js - для всех страниц
document.addEventListener('DOMContentLoaded', function() {
  // FAQ аккордеон
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });

  // Переключение вкладок в кабинете (можно доработать)
  document.querySelectorAll('.account-menu button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Логика переключения секций
    });
  });

  // BURGER MENU для мобильных
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); // Показываем / скрываем
    });
  }
});

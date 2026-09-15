// Mobile menu toggle. Breakpoint matches CSS media query (768px) — Section 13 requirement.
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', function () {
    var opening = !menu.classList.contains('open');
    menu.classList.toggle('open');
    document.documentElement.style.overflow = opening ? 'hidden' : '';
  });
  var closeBtn = menu.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      menu.classList.remove('open');
      document.documentElement.style.overflow = '';
    });
  }
});

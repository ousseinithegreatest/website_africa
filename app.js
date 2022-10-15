const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');
const allLinks = document.querySelectorAll('.item-nav');

btnMenu.addEventListener('click', function () {
  menu.classList.toggle('active');
});

allLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

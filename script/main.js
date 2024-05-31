const mobileNavBtn = document.querySelectorAll('.mobile-menu');
const mobileNavMenu = document.querySelector('.mobile-nav');

mobileNavBtn.forEach((curElem) => {
  curElem.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('show-menu');
  });
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNavMenu.classList.remove('show-menu');
  });
});


const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburgerIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburgerIcon.style.display = 'block';
});


// const hamburger = document.querySelector('.hamburger-icon');
// const menulist = document.querySelector('#menu');
// const closeI = document.querySelector('.close-icon');

// hamburger.addEventListener('click', () => {
//   menulist.classList.toggle('show');
// });

// closeI.addEventListener('click', () => {
//   menulist.classList.remove('show');
// });

// function toggleNavbar() {
//   const navbarMenu = document.querySelector('.navbar-menu');
//   navbarMenu.classList.toggle('show');
// }

// // Add event listener to the hamburger icon
// const hamburger = document.querySelector('.hamburger-icon');
// hamburger.addEventListener('click', toggleNavbar);

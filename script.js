const menu = document.querySelector('.nav-menu')
const burgerNav = document.querySelector('.burger-nav')

burgerNav.addEventListener('click', navigationMenu, false)

function navigationMenu() {
   menu.classList.toggle('active')
   burgerNav.classList.toggle('active')
}
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const header = document.querySelector('header')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

window.onscroll = function () {
  const fixedNav = header.offsetTop

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}

window.addEventListener('click', function (e) {
  if (e.target !== hamburger && e.target !== header) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

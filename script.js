const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const backdrop = document.getElementById('backdrop')

btn.addEventListener('click', navToggle)
backdrop.addEventListener('click', sideClose)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('open')
  body.classList.toggle('no-scroll')
}

function sideClose(){
  btn.classList.remove('open')
  menu.classList.remove('open')
  body.classList.remove('no-scroll')
}

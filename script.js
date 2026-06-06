const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const backdrop = document.getElementById('backdrop')


/* ======================================================= */

btn.addEventListener('click', navToggle)
backdrop.addEventListener('click', sideClose)


/* ======================================================= */

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


const btnContato = document.getElementById('popup_contato');

// Defina aqui a altura aproximada do seu Hero Section em pixels.
// Você também pode pegar a altura dinamicamente usando: document.getElementById('hero').offsetHeight
const alturaDoHero = 400; 

window.addEventListener('scroll', () => {
  // Verifica se a rolagem da tela passou do limite
  if (window.scrollY > alturaDoHero) {
    // Revela o botão
    btnContato.classList.remove('translate-y-16', 'opacity-0', 'pointer-events-none');
    btnContato.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
  } else {
    // Esconde o botão novamente se voltar pro topo
    btnContato.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
    btnContato.classList.add('translate-y-16', 'opacity-0', 'pointer-events-none');
  }
});
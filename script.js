/* Variaveis */

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const backdrop = document.getElementById('backdrop')
const btnContato = document.getElementById('popup_contato');
const alturaDoHero = 400; 
const guarda_roupa_index = document.getElementById('guarda__roupas-index')
const complemento_index = document.getElementById('complemento-index')
const modulados_index = document.getElementById('modulados-index')

/* ======================================================= */
/* Event Listeners */

if (btn && menu) {
  btn.addEventListener('click', navToggle)
}

if (backdrop) {
  backdrop.addEventListener('click', sideClose)
}

if (btnContato) {
  window.addEventListener('scroll', popup)
}

if (guarda_roupa_index) {
  guarda_roupa_index.addEventListener('click', redirect_guarda_roupa)
}

if (complemento_index) {
  complemento_index.addEventListener('click', redirect_complemento)
}

if (modulados_index) {
  modulados_index.addEventListener('click', redirect_modulados)
}


/* ======================================================= */
/* Functions */

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

function popup(){
  // Verifica se o button existe
  if (!btnContato) return
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
};

function redirect_guarda_roupa(){
  window.location.href = 'produtos.html#guarda__roupas-produtos'
}
function redirect_complemento(){
  window.location.href = 'produtos.html#complementos-produtos'
}
function redirect_modulados(){
  window.location.href = 'Produtos/modulados.html'
}

/* variaveis */

/* fort 6p */
const fort_6_portas_cor_1 = document.getElementById('fort_cor_1')
const dot_fort_6_portas_1 = document.getElementById('fort_6p_dot-1')
const dot_fort_6_portas_2 = document.getElementById('fort_6p_dot-2')
const imagem_fort_6_portas = document.getElementById('imagem_fort_6_portas')

/* fort 4p */
const fort_4_portas_cor_1 = document.getElementById('fort_4p_cor_1')
const dot_fort_4_portas_1 = document.getElementById('fort_4p_dot-1')
const dot_fort_4_portas_2 = document.getElementById('fort_4p_dot-2')
const imagem_fort_4_portas = document.getElementById('imagem_fort_4_portas')

/* Comoda fort */
const comoda_fort_cor_1 = document.getElementById('comoda_fort_cor_1')
const imagem_comoda_fort = document.getElementById('imagem_comoda_fort')

/* Criado fort */
const criado_fort_cor_1 = document.getElementById('criado_fort_cor_1')
const imagem_criado_fort = document.getElementById('imagem_criado_fort')

/* Functions */
/* Function que reseta o estado do dot para nao ter problemas ao mudar a cor */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* fort 6 portas */
function fort_6p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 6P Branco - (1) Ambientada 1.jpg','../imagens/Roupeiro Fort 6P Branco - (3) F.I. Aberto Decorado.jpg']

  dot_fort_6_portas_1.classList.remove('dot__active')
  dot_fort_6_portas_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  // DOT 1 = ambientada
  if(dot_fort_6_portas_1.classList.contains('dot__active')){
    imagem_fort_6_portas.src = img[0];
  }else imagem_fort_6_portas.src = img[1];
}


/* fort 4 portas */
function fort_4p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 4P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Fort 4P Branco - (3) F.I. Aberto Decorado.jpg']
  dot_fort_4_portas_1.classList.remove('dot__active')
  dot_fort_4_portas_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  // DOT 1 = ambientada
  if(dot_fort_4_portas_1.classList.contains('dot__active')){
    imagem_fort_4_portas.src = img[0];
    }else
     imagem_fort_4_portas.src = img[1];
  }


/* Swiper */
function ativarSwipe(imagem, dot1, dot2) {

  let startX = 0;

  imagem.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  imagem.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) < 50) return; // evita swipe pequeno

    if (diff < 0) {
      // esquerda → dot 2
      dot2.click();
    } else {
      // direita → dot 1
      dot1.click();
    }
  });

}
ativarSwipe(imagem_fort_6_portas, dot_fort_6_portas_1, dot_fort_6_portas_2);
ativarSwipe(imagem_fort_4_portas, dot_fort_4_portas_1, dot_fort_4_portas_2);

/* Event Listeners */


/* fort 6 portas */
dot_fort_6_portas_1.addEventListener('click', fort_6p_aberto)
dot_fort_6_portas_2.addEventListener('click', fort_6p_aberto)

/* fort 4 portas */
dot_fort_4_portas_1.addEventListener('click', fort_4p_aberto)
dot_fort_4_portas_2.addEventListener('click', fort_4p_aberto)
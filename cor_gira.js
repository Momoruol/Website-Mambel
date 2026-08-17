/* Variaveis */
const imagem_gira = document.getElementById('imagem_gira')
const gira_dot_1 = document.getElementById('gira_dot-1')
const gira_dot_2 = document.getElementById('gira_dot-2')
const gira_cor_1 = document.getElementById('gira_cor_1')

/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor gira */
function gira_aberto(div){
  const local = div.target
  const img = ['/imagens/sap_giratoria/sap_gira--branco_ambientada.jpg','/imagens/sap_giratoria/sap_gira--branco_FI.jpg']
  gira_dot_1.classList.remove('dot__active')
  gira_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  // DOT 1 = ambientada
  if(gira_dot_1.classList.contains('dot__active')){
    imagem_gira.src = img[0];
    }else
      { imagem_gira.src = img[1];
  }
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
ativarSwipe(imagem_gira, gira_dot_1, gira_dot_2);


/* Event Listeners */
gira_dot_1.addEventListener('click', gira_aberto)
gira_dot_2.addEventListener('click', gira_aberto)
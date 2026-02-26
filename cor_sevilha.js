/* Variaveis */
const imagem_sevilha = document.getElementById('imagem_sevilha')
const sevilha_dot_1 = document.getElementById('sevilha_dot-1')
const sevilha_dot_2 = document.getElementById('sevilha_dot-2')
const sevilha_cor_1 = document.getElementById('sevilha_cor_1')
const sevilha_cor_2 = document.getElementById('sevilha_cor_2')


/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o sevilhairo como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor sevilha */
function mudar_cor_sevilha(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Sevilha Branco - Ambientada.jpg','../imagens/Roupeiro Sevilha Branco - F.I. Aberto Decorado.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const sevilha = new Array(sevilha_cor_1,sevilha_cor_2)
        sevilha.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(sevilha_cor_1.classList.contains('active')){
    imagem_sevilha.src= img[0]
  }else{
    imagem_sevilha.src=img[1]
  }
  reset(sevilha_dot_1, sevilha_dot_2)
}
function sevilha_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Sevilha Branco - Ambientada.jpg','../imagens/Roupeiro Sevilha Branco - F.I. Aberto Decorado.jpg', '../imagens/Roupeiro Sevilha Branco - F.I. Aberto Decorado (1).jpg', '../imagens/Roupeiro Sevilha Nogueira.Areia - F.I. Aberto decorado.jpg']
  sevilha_dot_1.classList.remove('dot__active')
  sevilha_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = sevilha_cor_1.classList.contains('active');
  const cor2 = sevilha_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(sevilha_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_sevilha.src = img[0];
    else imagem_sevilha.src = img[1];
  }

  // DOT 2 = interno
  if(sevilha_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_sevilha.src = img[2];
    else imagem_sevilha.src = img[3];
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
ativarSwipe(imagem_sevilha, sevilha_dot_1, sevilha_dot_2);

/* Event Listeners */
sevilha_cor_1.addEventListener('click', mudar_cor_sevilha)
sevilha_cor_2.addEventListener('click', mudar_cor_sevilha)
sevilha_dot_1.addEventListener('click', sevilha_aberto)
sevilha_dot_2.addEventListener('click', sevilha_aberto)
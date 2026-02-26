/* Variaveis */
const imagem_creta = document.getElementById('imagem_creta')
const creta_dot_1 = document.getElementById('creta_dot-1')
const creta_dot_2 = document.getElementById('creta_dot-2')
const creta_cor_1 = document.getElementById('creta_cor_1')
const creta_cor_2 = document.getElementById('creta_cor_2')
const creta_cor_3 = document.getElementById('creta_cor_3')

/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor Creta */
function mudar_cor_creta(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Creta 2P Branco.Reflecta - (1) Ambientada.jpg','../imagens/Roupeiro Creta 2P Grafitto.Reflecta - (1) Ambientada.jpg','../imagens/Roupeiro Creta 2P Olmo.Reflecta - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const creta = new Array(creta_cor_1,creta_cor_2,creta_cor_3)
        creta.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(creta_cor_1.classList.contains('active')){
    imagem_creta.src= img[0]
  }else if(creta_cor_2.classList.contains('active')){
    imagem_creta.src=img[1]
  }else{
    imagem_creta.src=img[2]
  }
  reset(creta_dot_1, creta_dot_2)
}
function creta_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Creta 2P Branco.Reflecta - (1) Ambientada.jpg','../imagens/Roupeiro Creta 2P Grafitto.Reflecta - (1) Ambientada.jpg', '../imagens/Roupeiro Creta 2P Olmo.Reflecta - (1) Ambientada.jpg', '../imagens/Roupeiro Creta 2P Branco.Reflecta - (3) F.I. Aberto Decorado.jpg', '../imagens/Roupeiro Creta 2P Grafitto.Reflecta - (3) F.I. Aberto Decorado.jpg', '../imagens/Roupeiro Creta 2P Olmo.Espelho - (3) F.I. Aberto Decorado.jpg']
  creta_dot_1.classList.remove('dot__active')
  creta_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = creta_cor_1.classList.contains('active');
  const cor2 = creta_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(creta_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_creta.src = img[0];
    else if(cor2) imagem_creta.src = img[1];
    else imagem_creta.src = img[2];
  }

  // DOT 2 = interno
  if(creta_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_creta.src = img[3];
    else if(cor2) imagem_creta.src = img[4];
    else imagem_creta.src = img[5];
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
ativarSwipe(imagem_creta, creta_dot_1, creta_dot_2);


/* Event Listeners */
creta_cor_1.addEventListener('click', mudar_cor_creta)
creta_cor_2.addEventListener('click', mudar_cor_creta)
creta_cor_3.addEventListener('click', mudar_cor_creta)
creta_dot_1.addEventListener('click', creta_aberto)
creta_dot_2.addEventListener('click', creta_aberto)
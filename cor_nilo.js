/* Variaveis */
const imagem_nilo = document.getElementById('imagem_nilo')
const nilo_dot_1 = document.getElementById('nilo_dot-1')
const nilo_dot_2 = document.getElementById('nilo_dot-2')
const nilo_cor_1 = document.getElementById('nilo_cor_1')
// const nilo_cor_2 = document.getElementById('nilo_cor_2')

const imagem_nilo_2 = document.getElementById('imagem_nilo_2')
const nilo_2_dot_1 = document.getElementById('nilo_2_dot-1')
const nilo_2_dot_2 = document.getElementById('nilo_2_dot-2')
const nilo_2_cor_1 = document.getElementById('nilo_2_cor_1')
// const nilo_2_cor_2 = document.getElementById('nilo_2_cor_2')



/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o dot como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor nilo */
// function mudar_cor_nilo(div){
//   /* troca a borda para a cor da imagem mostrada */
//   const local = div.target
//   const img = ['../imagens/Roupeiro nilo 3P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro nilo 3P Olmo - (1) Ambientada.jpg']
//   if(local.classList.contains('active')){
//     return
//     }else{
//         const nilo = new Array(nilo_cor_1,nilo_cor_2)
//         nilo.forEach((item) => {
//             if (item === local){
//                 item.classList.add('active')
//             }else{
//                 item.classList.remove('active')
//             }
//         })
    
//   }
  
//   /* troca a imagem mostrada com referencia ao elemento que tem a class active */
//   if(nilo_cor_1.classList.contains('active')){
//     imagem_nilo.src= img[0]
//   }else{
//     imagem_nilo.src=img[1]
//   }
//   reset(nilo_dot_1, nilo_dot_2)
// }
function nilo_aberto(div){
  const local = div.target
  const img = ['../imagens/linha_nilo/GR_nilo--olmo_ambientado.jpg','../imagens/linha_nilo/GR_nilo--olmo_FI.jpg']
  nilo_dot_1.classList.remove('dot__active')
  nilo_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

/* quando tem 3 cores usa-se codigo abaixo */
//   const cor1 = nilo_cor_1.classList.contains('active');
//   const cor2 = nilo_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(nilo_dot_1.classList.contains('dot__active')){
    imagem_nilo.src = img[0];
  }else{ imagem_nilo.src = img[1];
  }

//   // DOT 2 = interno
//   if(nilo_dot_2.classList.contains('dot__active')){
//     if(cor1) imagem_nilo.src = img[2];
//     else imagem_nilo.src = img[3];
//   }
  }


/* Mudança de imagens de cor nilo */
// function mudar_cor_nilo_2(div){
//   /* troca a borda para a cor da imagem mostrada */
//   const local = div.target
//   const img = ['../imagens/Roupeiro nilo 2P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro nilo 2P Olmo - (1) Ambientada.jpg']
//   if(local.classList.contains('active')){
//     return
//     }else{
//         const nilo = new Array(nilo_2_cor_1,nilo_2_cor_2)
//         nilo.forEach((item) => {
//             if (item === local){
//                 item.classList.add('active')
//             }else{
//                 item.classList.remove('active')
//             }
//         })
    
//   }
  
//   /* troca a imagem mostrada com referencia ao elemento que tem a class active */
//   if(nilo_2_cor_1.classList.contains('active')){
//     imagem_nilo_2.src= img[0]
//   }else{
//     imagem_nilo_2.src=img[1]
//   }
//   reset(nilo_2_dot_1, nilo_2_dot_2)
// }
function nilo_aberto_2(div){
  const local = div.target
  const img = ['../imagens/linha_nilo/GR_nilo_2p--olmo_ambientado.jpg','../imagens/linha_nilo/GR_nilo_2p--olmo_FI.jpg']
  nilo_2_dot_1.classList.remove('dot__active')
  nilo_2_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

//   const cor1 = nilo_2_cor_1.classList.contains('active');
//   const cor2 = nilo_2_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(nilo_2_dot_1.classList.contains('dot__active')){
    imagem_nilo_2.src = img[0];
    }else{ imagem_nilo_2.src = img[1];
  }

//   // DOT 2 = interno
//   if(nilo_2_dot_2.classList.contains('dot__active')){
//     if(cor1) imagem_nilo_2.src = img[2];
//     else imagem_nilo_2.src = img[3];
//   }
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
ativarSwipe(imagem_nilo, nilo_dot_1, nilo_dot_2);
ativarSwipe(imagem_nilo_2, nilo_2_dot_1, nilo_2_dot_2);


/* Event Listeners */
// nilo_cor_1.addEventListener('click', mudar_cor_nilo)
// nilo_cor_2.addEventListener('click', mudar_cor_nilo)
nilo_dot_1.addEventListener('click', nilo_aberto)
nilo_dot_2.addEventListener('click', nilo_aberto)


// nilo_2_cor_1.addEventListener('click', mudar_cor_nilo_2)
// nilo_2_cor_2.addEventListener('click', mudar_cor_nilo_2)
nilo_2_dot_1.addEventListener('click', nilo_aberto_2)
nilo_2_dot_2.addEventListener('click', nilo_aberto_2)
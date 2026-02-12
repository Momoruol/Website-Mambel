/* Variaveis */
const imagem_star = document.getElementById('imagem_star')
const star_dot_1 = document.getElementById('star_dot-1')
const star_dot_2 = document.getElementById('star_dot-2')
const star_cor_1 = document.getElementById('star_cor_1')
const star_cor_2 = document.getElementById('star_cor_2')


/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor star */
function mudar_cor_star(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Star 2p 9554 - Ambientada.jpg','../imagens/Roupeiro Star - Nogueira.Areia - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const star = new Array(star_cor_1,star_cor_2)
        star.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(star_cor_1.classList.contains('active')){
    imagem_star.src= img[0]
  }else{
    imagem_star.src=img[1]
  }
  reset(star_dot_1, star_dot_2)
}
function star_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Star 2p 9554 - Ambientada.jpg','../imagens/Roupeiro Star - Nogueira.Areia - (1) Ambientada.jpg', '../imagens/Roupeiro Star Nogueira - F.I.Aberto Decorado.jpg', '../imagens/Roupeiro Star Nogueira - F.I.Aberto Decorado.jpg']
  star_dot_1.classList.remove('dot__active')
  star_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = star_cor_1.classList.contains('active');
  const cor2 = star_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(star_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_star.src = img[0];
    else imagem_star.src = img[1];
  }

  // DOT 2 = interno
  if(star_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_star.src = img[2];
    else imagem_star.src = img[3];
  }
}


/* Event Listeners */
star_cor_1.addEventListener('click', mudar_cor_star)
star_cor_2.addEventListener('click', mudar_cor_star)
star_dot_1.addEventListener('click', star_aberto)
star_dot_2.addEventListener('click', star_aberto)
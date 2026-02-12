/* Variaveis */
const imagem_trentino = document.getElementById('imagem_trentino')
const trentino_dot_1 = document.getElementById('trentino_dot-1')
const trentino_dot_2 = document.getElementById('trentino_dot-2')
const trentino_cor_1 = document.getElementById('trentino_cor_1')
const trentino_cor_2 = document.getElementById('trentino_cor_2')
const trentino_cor_3 = document.getElementById('trentino_cor_3')

/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor trentino */
function mudar_cor_trentino(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Trentino 2P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Trentino 2P Grafite - (1) Ambientada.jpg','../imagens/Roupeiro Trentino 2P Olmo - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const trentino = new Array(trentino_cor_1,trentino_cor_2,trentino_cor_3)
        trentino.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(trentino_cor_1.classList.contains('active')){
    imagem_trentino.src= img[0]
  }else if(trentino_cor_2.classList.contains('active')){
    imagem_trentino.src=img[1]
  }else{
    imagem_trentino.src=img[2]
  }
  reset(trentino_dot_1, trentino_dot_2)
}
function trentino_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Trentino 2P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Trentino 2P Grafite - (1) Ambientada.jpg','../imagens/Roupeiro Trentino 2P Olmo - (1) Ambientada.jpg','../imagens/Roup. TRENTINO 2P Interno - Branco.jpg','../imagens/Roup. TRENTINO 2P Interno - Grafite.jpg', '../imagens/Roup. TRENTINO 2P Interno - Olmo.jpg']
  trentino_dot_1.classList.remove('dot__active')
  trentino_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = trentino_cor_1.classList.contains('active');
  const cor2 = trentino_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(trentino_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_trentino.src = img[0];
    else if(cor2) imagem_trentino.src = img[1];
    else imagem_trentino.src = img[2];
  }

  // DOT 2 = interno
  if(trentino_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_trentino.src = img[3];
    else if(cor2) imagem_trentino.src = img[4];
    else imagem_trentino.src = img[5];
  }
}


/* Event Listeners */
trentino_cor_1.addEventListener('click', mudar_cor_trentino)
trentino_cor_2.addEventListener('click', mudar_cor_trentino)
trentino_cor_3.addEventListener('click', mudar_cor_trentino)
trentino_dot_1.addEventListener('click', trentino_aberto)
trentino_dot_2.addEventListener('click', trentino_aberto)
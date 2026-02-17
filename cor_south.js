/* Variaveis */
const imagem_south = document.getElementById('imagem_south')
const south_dot_1 = document.getElementById('south_dot-1')
const south_dot_2 = document.getElementById('south_dot-2')
const south_cor_1 = document.getElementById('south_cor_1')
const south_cor_2 = document.getElementById('south_cor_2')

const imagem_south_2 = document.getElementById('imagem_south_2')
const south_2_dot_1 = document.getElementById('south_2_dot-1')
const south_2_dot_2 = document.getElementById('south_2_dot-2')
const south_2_cor_1 = document.getElementById('south_2_cor_1')
const south_2_cor_2 = document.getElementById('south_2_cor_2')



/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o southiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor south */
function mudar_cor_south(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro South 3P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro South 3P Olmo - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const south = new Array(south_cor_1,south_cor_2)
        south.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(south_cor_1.classList.contains('active')){
    imagem_south.src= img[0]
  }else{
    imagem_south.src=img[1]
  }
  reset(south_dot_1, south_dot_2)
}
function south_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro South 3P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro South 3P Olmo - (1) Ambientada.jpg', '../imagens/med tecnicas SOUTH 3 pts br.jpg', '../imagens/med tecnicas SOUTH 3 pts nogueira.jpg']
  south_dot_1.classList.remove('dot__active')
  south_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = south_cor_1.classList.contains('active');
  const cor2 = south_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(south_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_south.src = img[0];
    else imagem_south.src = img[1];
  }

  // DOT 2 = interno
  if(south_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_south.src = img[2];
    else imagem_south.src = img[3];
  }
}


/* Mudança de imagens de cor south */
function mudar_cor_south_2(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro South 2P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro South 2P Olmo - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const south = new Array(south_2_cor_1,south_2_cor_2)
        south.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(south_2_cor_1.classList.contains('active')){
    imagem_south_2.src= img[0]
  }else{
    imagem_south_2.src=img[1]
  }
  reset(south_2_dot_1, south_2_dot_2)
}
function south_aberto_2(div){
  const local = div.target
  const img = ['../imagens/Roupeiro South 3P - Branco - (1) Ambientada.jpg','../imagens/Roupeiro South 3P Olmo - (1) Ambientada.jpg', '../imagens/med tecnicas SOUTH 2 pts br.jpg', '../imagens/med tecnicas SOUTH 2 pts nogueira.jpg']
  south_2_dot_1.classList.remove('dot__active')
  south_2_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = south_2_cor_1.classList.contains('active');
  const cor2 = south_2_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(south_2_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_south_2.src = img[0];
    else imagem_south_2.src = img[1];
  }

  // DOT 2 = interno
  if(south_2_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_south_2.src = img[2];
    else imagem_south_2.src = img[3];
  }
}

/* Event Listeners */
south_cor_1.addEventListener('click', mudar_cor_south)
south_cor_2.addEventListener('click', mudar_cor_south)
south_dot_1.addEventListener('click', south_aberto)
south_dot_2.addEventListener('click', south_aberto)


south_2_cor_1.addEventListener('click', mudar_cor_south_2)
south_2_cor_2.addEventListener('click', mudar_cor_south_2)
south_2_dot_1.addEventListener('click', south_aberto_2)
south_2_dot_2.addEventListener('click', south_aberto_2)
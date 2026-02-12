/* Variaveis */
const imagem_veneto = document.getElementById('imagem_veneto')
const veneto_dot_1 = document.getElementById('veneto_dot-1')
const veneto_dot_2 = document.getElementById('veneto_dot-2')
const veneto_cor_1 = document.getElementById('veneto_cor_1')
const veneto_cor_2 = document.getElementById('veneto_cor_2')
const veneto_cor_3 = document.getElementById('veneto_cor_3')

const imagem_veneto_2 = document.getElementById('imagem_veneto_2')
const veneto_2_dot_1 = document.getElementById('veneto_2_dot-1')
const veneto_2_dot_2 = document.getElementById('veneto_2_dot-2')
const veneto_2_cor_1 = document.getElementById('veneto_2_cor_1')
const veneto_2_cor_2 = document.getElementById('veneto_2_cor_2')
const veneto_2_cor_3 = document.getElementById('veneto_2_cor_3')

/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor veneto */
function mudar_cor_veneto(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Veneto 3P Refleta.Branco - (1) Ambientada .jpg','../imagens/Roup. VENETO 3P Reflectas - Grafito.jpg','../imagens/Roup. VENETO 3P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const veneto = new Array(veneto_cor_1,veneto_cor_2,veneto_cor_3)
        veneto.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(veneto_cor_1.classList.contains('active')){
    imagem_veneto.src= img[0]
  }else if(veneto_cor_2.classList.contains('active')){
    imagem_veneto.src=img[1]
  }else{
    imagem_veneto.src=img[2]
  }
  reset(veneto_dot_1, veneto_dot_2)
}
function veneto_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Veneto 3P Refleta.Branco - (1) Ambientada .jpg','../imagens/Roup. VENETO 3P Reflectas - Grafito.jpg','../imagens/Roup. VENETO 3P Reflectas - Olmo.jpg', '../imagens/Roupeiro Veneto 3P Refleta.Branco - (3) F.I. Aberto Decorado.jpg', '../imagens/Roup. VENETO 3P Interno - preto.jpg', '../imagens/Roup. VENETO 3P Interno - Olmo.jpg']
  veneto_dot_1.classList.remove('dot__active')
  veneto_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = veneto_cor_1.classList.contains('active');
  const cor2 = veneto_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(veneto_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_veneto.src = img[0];
    else if(cor2) imagem_veneto.src = img[1];
    else imagem_veneto.src = img[2];
  }

  // DOT 2 = interno
  if(veneto_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_veneto.src = img[3];
    else if(cor2) imagem_veneto.src = img[4];
    else imagem_veneto.src = img[5];
  }
}

function mudar_cor_veneto_2(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Veneto 2P-Branco - Ambientada.jpg','../imagens/Roup. VENETO 2P com Espelho - Grafito.jpg','../imagens/Roup. VENETO 2P com Espelho - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const veneto = new Array(veneto_2_cor_1,veneto_2_cor_2,veneto_2_cor_3)
        veneto.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(veneto_2_cor_1.classList.contains('active')){
    imagem_veneto_2.src= img[0]
  }else if(veneto_2_cor_2.classList.contains('active')){
    imagem_veneto_2.src=img[1]
  }else{
    imagem_veneto_2.src=img[2]
  }
  reset(veneto_2_dot_1, veneto_2_dot_2)
}
function veneto_aberto_2(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Veneto 2P-Branco - Ambientada.jpg','../imagens/Roup. VENETO 2P com Espelho - Grafito.jpg','../imagens/Roup. VENETO 2P com Espelho - Olmo.jpg', '../imagens/Roup. VENETO 2P Interno - Branco.jpg', '../imagens/Roup. VENETO 2P Interno - Grafito.jpg', '../imagens/Roup. VENETO 2P Interno - Olmo.jpg']
  veneto_2_dot_1.classList.remove('dot__active')
  veneto_2_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = veneto_2_cor_1.classList.contains('active');
  const cor2 = veneto_2_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(veneto_2_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_veneto_2.src = img[0];
    else if(cor2) imagem_veneto_2.src = img[1];
    else imagem_veneto_2.src = img[2];
  }

  // DOT 2 = interno
  if(veneto_2_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_veneto_2.src = img[3];
    else if(cor2) imagem_veneto_2.src = img[4];
    else imagem_veneto_2.src = img[5];
  }
}

/* Event Listeners */
veneto_cor_1.addEventListener('click', mudar_cor_veneto)
veneto_cor_2.addEventListener('click', mudar_cor_veneto)
veneto_cor_3.addEventListener('click', mudar_cor_veneto)
veneto_dot_1.addEventListener('click', veneto_aberto)
veneto_dot_2.addEventListener('click', veneto_aberto)


veneto_2_cor_1.addEventListener('click', mudar_cor_veneto_2)
veneto_2_cor_2.addEventListener('click', mudar_cor_veneto_2)
veneto_2_cor_3.addEventListener('click', mudar_cor_veneto_2)
veneto_2_dot_1.addEventListener('click', veneto_aberto_2)
veneto_2_dot_2.addEventListener('click', veneto_aberto_2)
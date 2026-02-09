/* Mudança de imagem nos produtos */

/* variaveis */

/* Linha Logan */
/* Logan 6p */
const logan_6_portas_cor_1 = document.getElementById('logan_cor_1')
const logan_6_portas_cor_2 = document.getElementById('logan_cor_2')
const dot_logan_6_portas_1 = document.getElementById('logan_6p_dot-1')
const dot_logan_6_portas_2 = document.getElementById('logan_6p_dot-2')
const imagem_logan_6_portas = document.getElementById('imagem_logan_6_portas')

/* Logan 4p */
const logan_4_portas_cor_1 = document.getElementById('logan_4p_cor_1')
const logan_4_portas_cor_2 = document.getElementById('logan_4p_cor_2')
const dot_logan_4_portas_1 = document.getElementById('logan_4p_dot-1')
const dot_logan_4_portas_2 = document.getElementById('logan_4p_dot-2')
const imagem_logan_4_portas = document.getElementById('imagem_logan_4_portas')

/* Comoda Logan */
const comoda_logan_cor_1 = document.getElementById('comoda_logan_cor_1')
const comoda_logan_cor_2 = document.getElementById('comoda_logan_cor_2')
const imagem_comoda_logan = document.getElementById('imagem_comoda_logan')

/* Criado Logan */
const criado_logan_cor_1 = document.getElementById('criado_logan_cor_1')
const criado_logan_cor_2 = document.getElementById('criado_logan_cor_2')
const imagem_criado_logan = document.getElementById('imagem_criado_logan')

/* Functions */
/* Function que reseta o estado do dot para nao ter problemas ao mudar a cor */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* Logan 6 portas */
function mudar_cor_logan_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Logan 6P Branco - Ambientada.jpg','../imagens/Roupeiro Logan 6P Olmo - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    logan_6_portas_cor_1.classList.toggle('active')
    logan_6_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(logan_6_portas_cor_1.classList.contains('active')){
    imagem_logan_6_portas.src= img[0]
  }else{
    imagem_logan_6_portas.src=img[1]
  }
  reset(dot_logan_6_portas_1,dot_logan_6_portas_2)
}
function logan_6p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Logan 6P Branco - Ambientada.jpg','../imagens/Roupeiro Logan 6P Branco - Interno 1.jpg', '../imagens/Roupeiro Logan 6P Olmo - Ambientada.jpg']
  if(local.classList.contains('dot__active')){
    return
  }else{
    dot_logan_6_portas_1.classList.toggle('dot__active')
    dot_logan_6_portas_2.classList.toggle('dot__active')
  }

  if (dot_logan_6_portas_1.classList.contains('dot__active') && logan_6_portas_cor_1.classList.contains('active') ){
    imagem_logan_6_portas.src = img[0]
  }else if(dot_logan_6_portas_1.classList.contains('dot__active') && logan_6_portas_cor_2.classList.contains('active')){
    imagem_logan_6_portas.src = img[2]
  }else{
    imagem_logan_6_portas.src = img[1]
  }
  
}

/* Logan 4 portas */
function mudar_cor_logan_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Logan 4P Branco - Ambientada.jpg','../imagens/Roupeiro Logan 4P Olmo - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    logan_4_portas_cor_1.classList.toggle('active')
    logan_4_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(logan_4_portas_cor_1.classList.contains('active')){
    imagem_logan_4_portas.src= img[0]
  }else{
    imagem_logan_4_portas.src=img[1]
  }
  reset(dot_logan_4_portas_1, dot_logan_4_portas_2)
}
function logan_4p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Logan 4P Branco - Ambientada.jpg','../imagens/Roupeiro Logan 4P - interno 1.jpg', '../imagens/Roupeiro Logan 4P Olmo - Ambientada.jpg']
  if(local.classList.contains('dot__active')){
    return
  }else{
    dot_logan_4_portas_1.classList.toggle('dot__active')
    dot_logan_4_portas_2.classList.toggle('dot__active')
  }

  if (dot_logan_4_portas_1.classList.contains('dot__active') && logan_4_portas_cor_1.classList.contains('active') ){
    imagem_logan_4_portas.src = img[0]
  }else if(dot_logan_4_portas_1.classList.contains('dot__active') && logan_4_portas_cor_2.classList.contains('active')){
    imagem_logan_4_portas.src = img[2]
  }else{
    imagem_logan_4_portas.src = img[1]
  }
  
}

/* Comoda Logan */
function mudar_cor_comoda_logan(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Comoda Logan Branco - Ambientada.jpg','../imagens/Comoda Logan Olmo - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    comoda_logan_cor_1.classList.toggle('active')
    comoda_logan_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(comoda_logan_cor_1.classList.contains('active')){
    imagem_comoda_logan.src= img[0]
  }else{
    imagem_comoda_logan.src=img[1]
  }

}

/* Criado Logan */
function mudar_cor_criado_logan(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Criado Logan Branco - Ambientada.jpg','../imagens/Criado Logan Olmo - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    criado_logan_cor_1.classList.toggle('active')
    criado_logan_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(criado_logan_cor_1.classList.contains('active')){
    imagem_criado_logan.src= img[0]
  }else{
    imagem_criado_logan.src=img[1]
  }

}


/* Event Listeners */

/* Logan 4 portas */
logan_4_portas_cor_1.addEventListener('click', mudar_cor_logan_4_portas)
logan_4_portas_cor_2.addEventListener('click', mudar_cor_logan_4_portas)
dot_logan_4_portas_1.addEventListener('click', logan_4p_aberto)
dot_logan_4_portas_2.addEventListener('click', logan_4p_aberto)

/* Logan 6 portas */
logan_6_portas_cor_1.addEventListener('click', mudar_cor_logan_6_portas)
logan_6_portas_cor_2.addEventListener('click', mudar_cor_logan_6_portas)
dot_logan_6_portas_1.addEventListener('click', logan_6p_aberto)
dot_logan_6_portas_2.addEventListener('click', logan_6p_aberto)

/* Comoda Logan */
comoda_logan_cor_1.addEventListener('click', mudar_cor_comoda_logan)
comoda_logan_cor_2.addEventListener('click', mudar_cor_comoda_logan)

/* Criado Logan */
criado_logan_cor_1.addEventListener('click', mudar_cor_criado_logan)
criado_logan_cor_2.addEventListener('click', mudar_cor_criado_logan)


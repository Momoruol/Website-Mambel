/* variaveis */

/* fort 6p */
const fort_6_portas_cor_1 = document.getElementById('fort_cor_1')
const fort_6_portas_cor_2 = document.getElementById('fort_cor_2')
const dot_fort_6_portas_1 = document.getElementById('fort_6p_dot-1')
const dot_fort_6_portas_2 = document.getElementById('fort_6p_dot-2')
const imagem_fort_6_portas = document.getElementById('imagem_fort_6_portas')

/* fort 4p */
const fort_4_portas_cor_1 = document.getElementById('fort_4p_cor_1')
const fort_4_portas_cor_2 = document.getElementById('fort_4p_cor_2')
const dot_fort_4_portas_1 = document.getElementById('fort_4p_dot-1')
const dot_fort_4_portas_2 = document.getElementById('fort_4p_dot-2')
const imagem_fort_4_portas = document.getElementById('imagem_fort_4_portas')

/* fort 2p */
const fort_2_portas_cor_1 = document.getElementById('fort_2p_cor_1')
const fort_2_portas_cor_2 = document.getElementById('fort_2p_cor_2')
const dot_fort_2_portas_1 = document.getElementById('fort_2p_dot-1')
const dot_fort_2_portas_2 = document.getElementById('fort_2p_dot-2')
const imagem_fort_2_portas = document.getElementById('imagem_fort_2_portas')

/* Comoda fort */
const comoda_fort_cor_1 = document.getElementById('comoda_fort_cor_1')
const comoda_fort_cor_2 = document.getElementById('comoda_fort_cor_2')
const imagem_comoda_fort = document.getElementById('imagem_comoda_fort')

/* Criado fort */
const criado_fort_cor_1 = document.getElementById('criado_fort_cor_1')
const criado_fort_cor_2 = document.getElementById('criado_fort_cor_2')
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
function mudar_cor_fort_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 6P Branco - (1) Ambientada 1.jpg','../imagens/Roupeiro Fort 6P Grafito - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    fort_6_portas_cor_1.classList.toggle('active')
    fort_6_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(fort_6_portas_cor_1.classList.contains('active')){
    imagem_fort_6_portas.src= img[0]
  }else{
    imagem_fort_6_portas.src=img[1]
  }
  reset(dot_fort_6_portas_1,dot_fort_6_portas_2)
}
function fort_6p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 6P Branco - (1) Ambientada 1.jpg','../imagens/Roupeiro Fort 6P Grafito - Ambientada.jpg', '../imagens/Roupeiro Fort 6P Branco - (3) F.I. Aberto Decorado.jpg', '../imagens/Roupeiro Fort 6P Grafito - (3) F.I. Aberto Decorado.jpg']

  dot_fort_6_portas_1.classList.remove('dot__active')
  dot_fort_6_portas_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = fort_6_portas_cor_1.classList.contains('active');
  const cor2 = fort_6_portas_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_fort_6_portas_1.classList.contains('dot__active')){
    if(cor1) imagem_fort_6_portas.src = img[0];
    else imagem_fort_6_portas.src = img[1];
  }

  // DOT 2 = interno
  if(dot_fort_6_portas_2.classList.contains('dot__active')){
    if(cor1) {
        imagem_fort_6_portas.src = img[2]
    }else {
        imagem_fort_6_portas.src = img[3]
    }
   
    
  }
}


/* fort 4 portas */
function mudar_cor_fort_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 4P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Fort 4P Grafito - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    fort_4_portas_cor_1.classList.toggle('active')
    fort_4_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(fort_4_portas_cor_1.classList.contains('active')){
    imagem_fort_4_portas.src= img[0]
  }else{
    imagem_fort_4_portas.src=img[1]
  }
  reset(dot_fort_4_portas_1, dot_fort_4_portas_2)
}
function fort_4p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 4P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Fort 4P Grafito - (1) Ambientada.jpg','../imagens/Roupeiro Fort 4P Branco - (3) F.I. Aberto Decorado.jpg','../imagens/Roupeiro Fort 4P Grafito - (3) F.I. Aberto Decorado.jpg']
 dot_fort_4_portas_1.classList.remove('dot__active')
  dot_fort_4_portas_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = fort_4_portas_cor_1.classList.contains('active');
  const cor2 = fort_4_portas_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_fort_4_portas_1.classList.contains('dot__active')){
    if(cor1) imagem_fort_4_portas.src = img[0];
    else imagem_fort_4_portas.src = img[1];
  }

  // DOT 2 = interno
  if(dot_fort_4_portas_2.classList.contains('dot__active')){
    if(cor1) {
        imagem_fort_4_portas.src = img[2]
    }else {
        imagem_fort_4_portas.src = img[3]
    }
   
    
  }
}

/* fort 2 portas */
function mudar_cor_fort_2_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 2P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Fort 2P Grafito - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    fort_2_portas_cor_1.classList.toggle('active')
    fort_2_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(fort_2_portas_cor_1.classList.contains('active')){
    imagem_fort_2_portas.src= img[0]
  }else{
    imagem_fort_2_portas.src=img[1]
  }
  reset(dot_fort_2_portas_1, dot_fort_2_portas_2)
}
function fort_2p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roupeiro Fort 2P Branco - (1) Ambientada.jpg','../imagens/Roupeiro Fort 2p Grafito - (1) Ambientada.jpg','../imagens/Roupeiro Fort 2P Branco - (3) F.I. Aberto Decorado.jpg','../imagens/Roupeiro Fort 2P Grafito - (3) F.I. Aberto Decorado.jpg']
 dot_fort_2_portas_1.classList.remove('dot__active')
  dot_fort_2_portas_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = fort_2_portas_cor_1.classList.contains('active');
  const cor2 = fort_2_portas_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_fort_2_portas_1.classList.contains('dot__active')){
    if(cor1) imagem_fort_2_portas.src = img[0];
    else imagem_fort_2_portas.src = img[1];
  }

  // DOT 2 = interno
  if(dot_fort_2_portas_2.classList.contains('dot__active')){
    if(cor1) {
        imagem_fort_2_portas.src = img[2]
    }else {
        imagem_fort_2_portas.src = img[3]
    }
   
    
  }
}

/* Comoda fort */
function mudar_cor_comoda_fort(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Cômoda Fort Branco - (1) Ambientada.jpg','../imagens/Cômoda Fort Grafito - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    comoda_fort_cor_1.classList.toggle('active')
    comoda_fort_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(comoda_fort_cor_1.classList.contains('active')){
    imagem_comoda_fort.src= img[0]
  }else{
    imagem_comoda_fort.src=img[1]
  }

}

/* Criado fort */
function mudar_cor_criado_fort(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Criado Fort Branco - (1) Ambientada.jpg','../imagens/Criado Fort Grafito - (1) Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    criado_fort_cor_1.classList.toggle('active')
    criado_fort_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(criado_fort_cor_1.classList.contains('active')){
    imagem_criado_fort.src= img[0]
  }else{
    imagem_criado_fort.src=img[1]
  }

}


/* Event Listeners */


/* fort 6 portas */
fort_6_portas_cor_1.addEventListener('click', mudar_cor_fort_6_portas)
fort_6_portas_cor_2.addEventListener('click', mudar_cor_fort_6_portas)
dot_fort_6_portas_1.addEventListener('click', fort_6p_aberto)
dot_fort_6_portas_2.addEventListener('click', fort_6p_aberto)

/* fort 4 portas */
fort_4_portas_cor_1.addEventListener('click', mudar_cor_fort_4_portas)
fort_4_portas_cor_2.addEventListener('click', mudar_cor_fort_4_portas)
dot_fort_4_portas_1.addEventListener('click', fort_4p_aberto)
dot_fort_4_portas_2.addEventListener('click', fort_4p_aberto)

/* fort 2 portas */
fort_2_portas_cor_1.addEventListener('click', mudar_cor_fort_2_portas)
fort_2_portas_cor_2.addEventListener('click', mudar_cor_fort_2_portas)
dot_fort_2_portas_1.addEventListener('click', fort_2p_aberto)
dot_fort_2_portas_2.addEventListener('click', fort_2p_aberto)
/* Comoda fort */
comoda_fort_cor_1.addEventListener('click', mudar_cor_comoda_fort)
comoda_fort_cor_2.addEventListener('click', mudar_cor_comoda_fort)

/* Criado fort */
criado_fort_cor_1.addEventListener('click', mudar_cor_criado_fort)
criado_fort_cor_2.addEventListener('click', mudar_cor_criado_fort)


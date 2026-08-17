/* Mudança de imagem nos produtos */

/* variaveis */

/* Linha viena */
/* viena 6p */
const viena_6_portas_cor_1 = document.getElementById('viena_cor_1')
const viena_6_portas_cor_2 = document.getElementById('viena_cor_2')
const dot_viena_6_portas_1 = document.getElementById('viena_6p_dot-1')
const dot_viena_6_portas_2 = document.getElementById('viena_6p_dot-2')
const imagem_viena_6_portas = document.getElementById('imagem_viena_6_portas')

/* viena 4p */
const viena_4_portas_cor_1 = document.getElementById('viena_4p_cor_1')
const viena_4_portas_cor_2 = document.getElementById('viena_4p_cor_2')
const dot_viena_4_portas_1 = document.getElementById('viena_4p_dot-1')
const dot_viena_4_portas_2 = document.getElementById('viena_4p_dot-2')
const imagem_viena_4_portas = document.getElementById('imagem_viena_4_portas')

/* Comoda viena */
const comoda_viena_cor_1 = document.getElementById('comoda_viena_cor_1')
const comoda_viena_cor_2 = document.getElementById('comoda_viena_cor_2')
const imagem_comoda_viena = document.getElementById('imagem_comoda_viena')
const dot_comoda_viena_1 = document.getElementById('comoda_viena_dot-1')
const dot_comoda_viena_2 = document.getElementById('comoda_viena_dot-2')

/* Criado viena */
const criado_viena_cor_1 = document.getElementById('criado_viena_cor_1')
const criado_viena_cor_2 = document.getElementById('criado_viena_cor_2')
const imagem_criado_viena = document.getElementById('imagem_criado_viena')
const dot_criado_viena_1 = document.getElementById('criado_viena_dot-1')
const dot_criado_viena_2 = document.getElementById('criado_viena_dot-2')

/* Sapateira */
const imagem_sapateira_viena = document.getElementById('imagem_sapateira_viena')
const dot_sapateira_viena_1 = document.getElementById('sapateira_viena_dot-1')
const dot_sapateira_viena_2 = document.getElementById('sapateira_viena_dot-2')


/* Functions */
/* Function que reseta o estado do dot para nao ter problemas ao mudar a cor (se necessário usar em outro lugar) */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* viena 6 portas */
function mudar_cor_viena_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_viena/GR_viena_6p--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/GR_viena_6p--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    viena_6_portas_cor_1.classList.toggle('active');
    viena_6_portas_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_viena_6_portas_1.classList.contains('dot__active');

  if(viena_6_portas_cor_1.classList.contains('active')){
    imagem_viena_6_portas.src = isDot1Active ? img[0] : '../imagens/linha_viena/GR_viena_6p--branco_FI.jpg';
  } else {
    imagem_viena_6_portas.src = isDot1Active ? img[1] : '../imagens/linha_viena/GR_viena_6p--cinza_FI.jpg';
  }
}

function viena_6p_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_viena/GR_viena_6p--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/GR_viena_6p--branco_FI.jpg',          // 1
    '../imagens/linha_viena/GR_viena_6p--cinza_ambientado.jpg',   // 2
    '../imagens/linha_viena/GR_viena_6p--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_viena_6_portas_1.classList.toggle('dot__active');
    dot_viena_6_portas_2.classList.toggle('dot__active');
  }

  const isCor1Active = viena_6_portas_cor_1.classList.contains('active');
  const isDot1Active = dot_viena_6_portas_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_viena_6_portas.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_viena_6_portas.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_viena_6_portas.src = img[2]; // Cinza Ambientado
  } else {
    imagem_viena_6_portas.src = img[3]; // Cinza FI
  }

}
/* viena 4 portas */
function mudar_cor_viena_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_viena/GR_viena_4p--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/GR_viena_4p--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    viena_4_portas_cor_1.classList.toggle('active');
    viena_4_portas_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_viena_4_portas_1.classList.contains('dot__active');

  if(viena_4_portas_cor_1.classList.contains('active')){
    imagem_viena_4_portas.src = isDot1Active ? img[0] : '../imagens/linha_viena/GR_viena_4p--branco_FI.jpg';
  } else {
    imagem_viena_4_portas.src = isDot1Active ? img[1] : '../imagens/linha_viena/GR_viena_4p--cinza_FI.jpg';
  }
}

function viena_4p_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_viena/GR_viena_4p--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/GR_viena_4p--branco_FI.jpg',          // 1
    '../imagens/linha_viena/GR_viena_4p--cinza_ambientado.jpg',   // 2
    '../imagens/linha_viena/GR_viena_4p--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_viena_4_portas_1.classList.toggle('dot__active');
    dot_viena_4_portas_2.classList.toggle('dot__active');
  }

  const isCor1Active = viena_4_portas_cor_1.classList.contains('active');
  const isDot1Active = dot_viena_4_portas_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_viena_4_portas.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_viena_4_portas.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_viena_4_portas.src = img[2]; // Cinza Ambientado
  } else {
    imagem_viena_4_portas.src = img[3]; // Cinza FI
  }
}

/* Comoda viena */
function mudar_cor_comoda_viena(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_viena/CO_viena--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/CO_viena--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    comoda_viena_cor_1.classList.toggle('active');
    comoda_viena_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_comoda_viena_1.classList.contains('dot__active');

  if(comoda_viena_cor_1.classList.contains('active')){
    imagem_comoda_viena.src = isDot1Active ? img[0] : '../imagens/linha_viena/CO_viena--branco_FI.jpg';
  } else {
    imagem_comoda_viena.src = isDot1Active ? img[1] : '../imagens/linha_viena/CO_viena--cinza_FI.jpg';
  }
}

function comoda_viena_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_viena/CO_viena--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/CO_viena--branco_FI.jpg',          // 1
    '../imagens/linha_viena/CO_viena--cinza_ambientado.jpg',   // 2
    '../imagens/linha_viena/CO_viena--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_comoda_viena_1.classList.toggle('dot__active');
    dot_comoda_viena_2.classList.toggle('dot__active');
  }

  const isCor1Active = comoda_viena_cor_1.classList.contains('active');
  const isDot1Active = dot_comoda_viena_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_comoda_viena.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_comoda_viena.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_comoda_viena.src = img[2]; // Cinza Ambientado
  } else {
    imagem_comoda_viena.src = img[3]; // Cinza FI
  }
}

/* Criado viena */
function mudar_cor_criado_viena(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.currentTarget; // Usando currentTarget para garantir o clique
  const img = [
    '../imagens/linha_viena/CR_viena--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/CR_viena--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    criado_viena_cor_1.classList.toggle('active');
    criado_viena_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_criado_viena_1.classList.contains('dot__active');

  if(criado_viena_cor_1.classList.contains('active')){
    imagem_criado_viena.src = isDot1Active ? img[0] : '../imagens/linha_viena/CR_viena--branco_FI.jpg';
  } else {
    imagem_criado_viena.src = isDot1Active ? img[1] : '../imagens/linha_viena/CR_viena--cinza_FI.jpg';
  }
}

function criado_viena_aberto(div){
  const local = div.currentTarget; // Usando currentTarget para garantir o clique
  const img = [
    '../imagens/linha_viena/CR_viena--branco_ambientado.jpg', // 0
    '../imagens/linha_viena/CR_viena--branco_FI.jpg',          // 1
    '../imagens/linha_viena/CR_viena--cinza_ambientado.jpg',   // 2
    '../imagens/linha_viena/CR_viena--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_criado_viena_1.classList.toggle('dot__active');
    dot_criado_viena_2.classList.toggle('dot__active');
  }

  const isCor1Active = criado_viena_cor_1.classList.contains('active');
  const isDot1Active = dot_criado_viena_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_criado_viena.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_criado_viena.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_criado_viena.src = img[2]; // Cinza Ambientado
  } else {
    imagem_criado_viena.src = img[3]; // Cinza FI
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
ativarSwipe(imagem_viena_6_portas, dot_viena_6_portas_1, dot_viena_6_portas_2);
ativarSwipe(imagem_viena_4_portas, dot_viena_4_portas_1, dot_viena_4_portas_2);
ativarSwipe(imagem_comoda_viena, dot_comoda_viena_1, dot_comoda_viena_2);
ativarSwipe(imagem_criado_viena, dot_criado_viena_1, dot_criado_viena_2);


/* Event Listeners */

/* viena 4 portas */
viena_4_portas_cor_1.addEventListener('click', mudar_cor_viena_4_portas)
viena_4_portas_cor_2.addEventListener('click', mudar_cor_viena_4_portas)
dot_viena_4_portas_1.addEventListener('click', viena_4p_aberto)
dot_viena_4_portas_2.addEventListener('click', viena_4p_aberto)

/* viena 6 portas */
viena_6_portas_cor_1.addEventListener('click', mudar_cor_viena_6_portas)
viena_6_portas_cor_2.addEventListener('click', mudar_cor_viena_6_portas)
dot_viena_6_portas_1.addEventListener('click', viena_6p_aberto)
dot_viena_6_portas_2.addEventListener('click', viena_6p_aberto)

/* Comoda viena */
comoda_viena_cor_1.addEventListener('click', mudar_cor_comoda_viena)
comoda_viena_cor_2.addEventListener('click', mudar_cor_comoda_viena)
dot_comoda_viena_1.addEventListener('click', comoda_viena_aberto)
dot_comoda_viena_2.addEventListener('click', comoda_viena_aberto)

/* Criado viena */
criado_viena_cor_1.addEventListener('click', mudar_cor_criado_viena);
criado_viena_cor_2.addEventListener('click', mudar_cor_criado_viena);
dot_criado_viena_1.addEventListener('click', criado_viena_aberto);
dot_criado_viena_2.addEventListener('click', criado_viena_aberto);
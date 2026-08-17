/* Mudança de imagem nos produtos */

/* variaveis */

/* Linha linea */
/* linea 6p */
const linea_6_portas_cor_1 = document.getElementById('linea_cor_1')
const linea_6_portas_cor_2 = document.getElementById('linea_cor_2')
const dot_linea_6_portas_1 = document.getElementById('linea_6p_dot-1')
const dot_linea_6_portas_2 = document.getElementById('linea_6p_dot-2')
const imagem_linea_6_portas = document.getElementById('imagem_linea_6_portas')

/* linea 4p */
const linea_4_portas_cor_1 = document.getElementById('linea_4p_cor_1')
const linea_4_portas_cor_2 = document.getElementById('linea_4p_cor_2')
const dot_linea_4_portas_1 = document.getElementById('linea_4p_dot-1')
const dot_linea_4_portas_2 = document.getElementById('linea_4p_dot-2')
const imagem_linea_4_portas = document.getElementById('imagem_linea_4_portas')

/* Comoda linea */
const comoda_linea_cor_1 = document.getElementById('comoda_linea_cor_1')
const comoda_linea_cor_2 = document.getElementById('comoda_linea_cor_2')
const imagem_comoda_linea = document.getElementById('imagem_comoda_linea')
const dot_comoda_linea_1 = document.getElementById('comoda_linea_dot-1')
const dot_comoda_linea_2 = document.getElementById('comoda_linea_dot-2')

/* Criado linea */
const criado_linea_cor_1 = document.getElementById('criado_linea_cor_1')
const criado_linea_cor_2 = document.getElementById('criado_linea_cor_2')
const imagem_criado_linea = document.getElementById('imagem_criado_linea')
const dot_criado_linea_1 = document.getElementById('criado_linea_dot-1')
const dot_criado_linea_2 = document.getElementById('criado_linea_dot-2')

/* Sapateira */
const imagem_sapateira_linea = document.getElementById('imagem_sapateira_linea')
const dot_sapateira_linea_1 = document.getElementById('sapateira_linea_dot-1')
const dot_sapateira_linea_2 = document.getElementById('sapateira_linea_dot-2')


/* Functions */
/* Function que reseta o estado do dot para nao ter problemas ao mudar a cor (se necessário usar em outro lugar) */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* linea 6 portas */
function mudar_cor_linea_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_linea/GR_linea__6p--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/GR_linea__6p--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    linea_6_portas_cor_1.classList.toggle('active');
    linea_6_portas_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_linea_6_portas_1.classList.contains('dot__active');

  if(linea_6_portas_cor_1.classList.contains('active')){
    imagem_linea_6_portas.src = isDot1Active ? img[0] : '../imagens/linha_linea/GR_linea__6p--branco_FI.jpg';
  } else {
    imagem_linea_6_portas.src = isDot1Active ? img[1] : '../imagens/linha_linea/GR_linea__6p--cinza_FI.jpg';
  }
}

function linea_6p_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_linea/GR_linea__6p--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/GR_linea__6p--branco_FI.jpg',          // 1
    '../imagens/linha_linea/GR_linea__6p--cinza_ambientado.jpg',   // 2
    '../imagens/linha_linea/GR_linea__6p--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_linea_6_portas_1.classList.toggle('dot__active');
    dot_linea_6_portas_2.classList.toggle('dot__active');
  }

  const isCor1Active = linea_6_portas_cor_1.classList.contains('active');
  const isDot1Active = dot_linea_6_portas_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_linea_6_portas.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_linea_6_portas.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_linea_6_portas.src = img[2]; // Cinza Ambientado
  } else {
    imagem_linea_6_portas.src = img[3]; // Cinza FI
  }

}
/* linea 4 portas */
function mudar_cor_linea_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_linea/GR_linea__4p--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/GR_linea__4p--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    linea_4_portas_cor_1.classList.toggle('active');
    linea_4_portas_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_linea_4_portas_1.classList.contains('dot__active');

  if(linea_4_portas_cor_1.classList.contains('active')){
    imagem_linea_4_portas.src = isDot1Active ? img[0] : '../imagens/linha_linea/GR_linea__4p--branco_FI.jpg';
  } else {
    imagem_linea_4_portas.src = isDot1Active ? img[1] : '../imagens/linha_linea/GR_linea__4p--cinza_FI.jpg';
  }
}

function linea_4p_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_linea/GR_linea__4p--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/GR_linea__4p--branco_FI.jpg',          // 1
    '../imagens/linha_linea/GR_linea__4p--cinza_ambientado.jpg',   // 2
    '../imagens/linha_linea/GR_linea__4p--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_linea_4_portas_1.classList.toggle('dot__active');
    dot_linea_4_portas_2.classList.toggle('dot__active');
  }

  const isCor1Active = linea_4_portas_cor_1.classList.contains('active');
  const isDot1Active = dot_linea_4_portas_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_linea_4_portas.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_linea_4_portas.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_linea_4_portas.src = img[2]; // Cinza Ambientado
  } else {
    imagem_linea_4_portas.src = img[3]; // Cinza FI
  }
}

/* Comoda linea */
function mudar_cor_comoda_linea(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target;
  const img = [
    '../imagens/linha_linea/comoda_linea--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/comoda_linea--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    comoda_linea_cor_1.classList.toggle('active');
    comoda_linea_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_comoda_linea_1.classList.contains('dot__active');

  if(comoda_linea_cor_1.classList.contains('active')){
    imagem_comoda_linea.src = isDot1Active ? img[0] : '../imagens/linha_linea/comoda_linea--branco_FI.jpg';
  } else {
    imagem_comoda_linea.src = isDot1Active ? img[1] : '../imagens/linha_linea/comoda_linea--cinza_FI.jpg';
  }
}

function comoda_linea_aberto(div){
  const local = div.target;
  const img = [
    '../imagens/linha_linea/comoda_linea--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/comoda_linea--branco_FI.jpg',          // 1
    '../imagens/linha_linea/comoda_linea--cinza_ambientado.jpg',   // 2
    '../imagens/linha_linea/comoda_linea--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_comoda_linea_1.classList.toggle('dot__active');
    dot_comoda_linea_2.classList.toggle('dot__active');
  }

  const isCor1Active = comoda_linea_cor_1.classList.contains('active');
  const isDot1Active = dot_comoda_linea_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_comoda_linea.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_comoda_linea.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_comoda_linea.src = img[2]; // Cinza Ambientado
  } else {
    imagem_comoda_linea.src = img[3]; // Cinza FI
  }
}

/* Criado linea */
function mudar_cor_criado_linea(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.currentTarget; // Usando currentTarget para garantir o clique
  const img = [
    '../imagens/linha_linea/criado_linea--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/criado_linea--cinza_ambientado.jpg'    // 1
  ];
  
  if(local.classList.contains('active')){
    return;
  } else {
    criado_linea_cor_1.classList.toggle('active');
    criado_linea_cor_2.classList.toggle('active');
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active e mantendo o estado do dot */
  const isDot1Active = dot_criado_linea_1.classList.contains('dot__active');

  if(criado_linea_cor_1.classList.contains('active')){
    imagem_criado_linea.src = isDot1Active ? img[0] : '../imagens/linha_linea/criado_linea--branco_FI.jpg';
  } else {
    imagem_criado_linea.src = isDot1Active ? img[1] : '../imagens/linha_linea/criado_linea--cinza_FI.jpg';
  }
}

function criado_linea_aberto(div){
  const local = div.currentTarget; // Usando currentTarget para garantir o clique
  const img = [
    '../imagens/linha_linea/criado_linea--branco_ambientado.jpg', // 0
    '../imagens/linha_linea/criado_linea--branco_FI.jpg',          // 1
    '../imagens/linha_linea/criado_linea--cinza_ambientado.jpg',   // 2
    '../imagens/linha_linea/criado_linea--cinza_FI.jpg'            // 3
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_criado_linea_1.classList.toggle('dot__active');
    dot_criado_linea_2.classList.toggle('dot__active');
  }

  const isCor1Active = criado_linea_cor_1.classList.contains('active');
  const isDot1Active = dot_criado_linea_1.classList.contains('dot__active');

  // Define a imagem correta baseada na cor ativa e no dot ativo
  if (isDot1Active && isCor1Active){
    imagem_criado_linea.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_criado_linea.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_criado_linea.src = img[2]; // Cinza Ambientado
  } else {
    imagem_criado_linea.src = img[3]; // Cinza FI
  }
}

/* Sapateira Linea */
/* Sapateira */
function sapateira_linea_aberto(div){
  const local = div.currentTarget; 
  
  // Caminhos das imagens da Sapateira
  const img = [
    '../imagens/linha_linea/sapateira_linea--branco.jpg',    // 0 (Principal/Ambientada)
    '../imagens/linha_linea/sapateira_linea--branco_FI.jpg'   // 1 (Detalhe/FI/Aberta)
  ];

  // Se o dot clicado já está ativo, não faz nada
  if(local.classList.contains('dot__active')){
    return;
  } else {
    // Alterna a classe ativa entre os dots
    dot_sapateira_linea_1.classList.toggle('dot__active');
    dot_sapateira_linea_2.classList.toggle('dot__active');
  }

  // Verifica se o dot 1 está ativo
  const isDot1Active = dot_sapateira_linea_1.classList.contains('dot__active');

  // Define a imagem correta (como não há troca de cor, a lógica é bem mais simples)
  if (isDot1Active){
    imagem_sapateira_linea.src = img[0];
  } else {
    imagem_sapateira_linea.src = img[1];
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
ativarSwipe(imagem_linea_6_portas, dot_linea_6_portas_1, dot_linea_6_portas_2);
ativarSwipe(imagem_linea_4_portas, dot_linea_4_portas_1, dot_linea_4_portas_2);
ativarSwipe(imagem_comoda_linea, dot_comoda_linea_1, dot_comoda_linea_2);
ativarSwipe(imagem_criado_linea, dot_criado_linea_1, dot_criado_linea_2);
ativarSwipe(imagem_sapateira_linea, dot_sapateira_linea_1, dot_sapateira_linea_2);

/* Event Listeners */

/* linea 4 portas */
linea_4_portas_cor_1.addEventListener('click', mudar_cor_linea_4_portas)
linea_4_portas_cor_2.addEventListener('click', mudar_cor_linea_4_portas)
dot_linea_4_portas_1.addEventListener('click', linea_4p_aberto)
dot_linea_4_portas_2.addEventListener('click', linea_4p_aberto)

/* linea 6 portas */
linea_6_portas_cor_1.addEventListener('click', mudar_cor_linea_6_portas)
linea_6_portas_cor_2.addEventListener('click', mudar_cor_linea_6_portas)
dot_linea_6_portas_1.addEventListener('click', linea_6p_aberto)
dot_linea_6_portas_2.addEventListener('click', linea_6p_aberto)

/* Comoda linea */
comoda_linea_cor_1.addEventListener('click', mudar_cor_comoda_linea)
comoda_linea_cor_2.addEventListener('click', mudar_cor_comoda_linea)
dot_comoda_linea_1.addEventListener('click', comoda_linea_aberto)
dot_comoda_linea_2.addEventListener('click', comoda_linea_aberto)

/* Criado linea */
/* Criado linea */
criado_linea_cor_1.addEventListener('click', mudar_cor_criado_linea);
criado_linea_cor_2.addEventListener('click', mudar_cor_criado_linea);
dot_criado_linea_1.addEventListener('click', criado_linea_aberto);
dot_criado_linea_2.addEventListener('click', criado_linea_aberto);

/* Sapateira linea */
dot_sapateira_linea_1.addEventListener('click', sapateira_linea_aberto);
dot_sapateira_linea_2.addEventListener('click', sapateira_linea_aberto);
/* Variaveis */
/* Comoda */
const imagem_lince = document.getElementById('imagem_lince')
const lince_cor_1 = document.getElementById('lince_cor_1')
const lince_cor_2 = document.getElementById('lince_cor_2')
const dot_lince_1 = document.getElementById('comoda_lince_dot-1')
const dot_lince_2 = document.getElementById('comoda_lince_dot-2')

/* Criado */
const criado_imagem_lince = document.getElementById('imagem_criado_lince')
const criado_lince_cor_1 = document.getElementById('criado_lince_cor_1')
const criado_lince_cor_2 = document.getElementById('criado_lince_cor_2')
const criado_dot_lince_1 = document.getElementById('criado_lince_dot-1')
const criado_dot_lince_2 = document.getElementById('criado_lince_dot-2')

function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* Functions comoda */
/* Mudança de imagens de cor lince */
function mudar_cor_lince(div){
  const local = div.target
  const img = ['../imagens/linha_lince/CO_lince--branco_ambientado.jpg', '../imagens/linha_lince/CO_lince--nogal_ambientado.jpg']
  if(local.classList.contains('active')){
    return
  }else{
    const lince = [lince_cor_1, lince_cor_2]
    lince.forEach((item) => {
      if (item === local){
        item.classList.add('active')
      }else{
        item.classList.remove('active')
      }
    })
  }

  imagem_lince.src = lince_cor_1.classList.contains('active') ? img[0] : img[1]
  reset(dot_lince_1, dot_lince_2) // reutiliza o reset genérico já existente no arquivo
}
function lince_aberto(div){
  const local = div.target;
  // ordem consistente com mudar_cor_lince: [0/1] branco amb./FI, [2/3] nogal amb./FI
  const img = [
    '../imagens/linha_lince/CO_lince--branco_ambientado.jpg', // 0
    '../imagens/linha_lince/CO_lince--branco_FI.jpg',          // 1
    '../imagens/linha_lince/CO_lince--nogal_ambientado.jpg',   // 2
    '../imagens/linha_lince/CO_lince--nogal_FI.jpg'             // 3
  ];

  if(local.classList.contains('dot__active')){
    return;
  } else {
    dot_lince_1.classList.toggle('dot__active');
    dot_lince_2.classList.toggle('dot__active');
  }

  const isCor1Active = lince_cor_1.classList.contains('active');
  const isDot1Active = dot_lince_1.classList.contains('dot__active');

  if (isDot1Active && isCor1Active){
    imagem_lince.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    imagem_lince.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    imagem_lince.src = img[2]; // Nogal Ambientado
  } else {
    imagem_lince.src = img[3]; // Nogal FI
  }
}

/* Functions criado */
function mudar_cor_lince_criado(div){
  const local = div.target
  const img = ['../imagens/linha_lince/CR_lince--branco_ambientado.jpg', '../imagens/linha_lince/CR_lince--nogal_ambientado.jpg']
  if(local.classList.contains('active')){
    return
  }else{
    const lince = [criado_lince_cor_1, criado_lince_cor_2]
    lince.forEach((item) => {
      if (item === local){
        item.classList.add('active')
      }else{
        item.classList.remove('active')
      }
    })
  }

  criado_imagem_lince.src = criado_lince_cor_1.classList.contains('active') ? img[0] : img[1]
  reset(criado_dot_lince_1, criado_dot_lince_2) // reutiliza o reset genérico já existente no arquivo
}
function lince_aberto_criado(div){
  const local = div.target;
  // ordem consistente com mudar_cor_lince: [0/1] branco amb./FI, [2/3] nogal amb./FI
  const img = [
    '../imagens/linha_lince/CR_lince--branco_ambientado.jpg', // 0
    '../imagens/linha_lince/CR_lince--branco_FI.jpg',          // 1
    '../imagens/linha_lince/CR_lince--nogal_ambientado.jpg',   // 2
    '../imagens/linha_lince/CR_lince--nogal_FI.jpg'             // 3
  ];

  if(local.classList.contains('dot__active')){
    return;
  } else {
    criado_dot_lince_1.classList.toggle('dot__active');
    criado_dot_lince_2.classList.toggle('dot__active');
  }

  const isCor1Active = criado_lince_cor_1.classList.contains('active');
  const isDot1Active = criado_dot_lince_1.classList.contains('dot__active');

  if (isDot1Active && isCor1Active){
    criado_imagem_lince.src = img[0]; // Branco Ambientado
  } else if (!isDot1Active && isCor1Active) {
    criado_imagem_lince.src = img[1]; // Branco FI
  } else if (isDot1Active && !isCor1Active) {
    criado_imagem_lince.src = img[2]; // Nogal Ambientado
  } else {
    criado_imagem_lince.src = img[3]; // Nogal FI
  }
}

/* Event Listeners */
/* Comoda */
lince_cor_1.addEventListener('click', mudar_cor_lince)
lince_cor_2.addEventListener('click', mudar_cor_lince)
dot_lince_1.addEventListener('click', lince_aberto);
dot_lince_2.addEventListener('click', lince_aberto);

/* Criado */
criado_lince_cor_1.addEventListener('click', mudar_cor_lince_criado)
criado_lince_cor_2.addEventListener('click', mudar_cor_lince_criado)
criado_dot_lince_1.addEventListener('click', lince_aberto_criado);
criado_dot_lince_2.addEventListener('click', lince_aberto_criado);
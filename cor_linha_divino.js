/* variaveis */

/* Sapateira */
const dot_divino_sap_1 = document.getElementById('divino_sap_dot-1')
const dot_divino_sap_2 = document.getElementById('divino_sap_dot-2')
const imagem_divino_sap = document.getElementById('imagem_divino_sap')

/* Comoda divino */
const comoda_divino_cor_1 = document.getElementById('comoda_divino_cor_1')
const comoda_divino_cor_2 = document.getElementById('comoda_divino_cor_2')
const imagem_comoda_divino = document.getElementById('imagem_comoda_divino')

/* Criado divino */
const criado_divino_cor_1 = document.getElementById('criado_divino_cor_1')
const criado_divino_cor_2 = document.getElementById('criado_divino_cor_2')
const imagem_criado_divino = document.getElementById('imagem_criado_divino')

/* Functions */
/* Function que reseta o estado do dot para nao ter problemas ao mudar a cor */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* divino sapateira */
function divino_sap_aberto(div){
  const local = div.target
  const img = new Array('../imagens/Sapateira divino ambientada.jpg','../imagens/1027 - (3) F.I Aberto Decorado.jpg')

  dot_divino_sap_1.classList.remove('dot__active')
  dot_divino_sap_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  // DOT 1 = ambientada
  if(dot_divino_sap_1.classList.contains('dot__active')){
    imagem_divino_sap.src = img[0];
  }else{
    imagem_divino_sap.src = img[1]
  }
    
  
}

/* Comoda divino */
function mudar_cor_comoda_divino(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Cômoda Divino Branca - Ambientada.jpg','../imagens/Cômoda Divino Olmo - (1) Ambientação.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    comoda_divino_cor_1.classList.toggle('active')
    comoda_divino_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(comoda_divino_cor_1.classList.contains('active')){
    imagem_comoda_divino.src= img[0]
  }else{
    imagem_comoda_divino.src=img[1]
  }

}

/* Criado divino */
function mudar_cor_criado_divino(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Criado Divino Branco - Ambientada.jpg','../imagens/Mesa de Cabeceira Divino Olmo - (1) Ambientação.jpg']
  if(local.classList.contains('active')){
    return
    }else{
    criado_divino_cor_1.classList.toggle('active')
    criado_divino_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(criado_divino_cor_1.classList.contains('active')){
    imagem_criado_divino.src= img[0]
  }else{
    imagem_criado_divino.src=img[1]
  }

}


/* Event Listeners */


/* divino 6 portas */
dot_divino_sap_1.addEventListener('click', divino_sap_aberto)
dot_divino_sap_2.addEventListener('click', divino_sap_aberto)

/* Comoda divino */
comoda_divino_cor_1.addEventListener('click', mudar_cor_comoda_divino)
comoda_divino_cor_2.addEventListener('click', mudar_cor_comoda_divino)

/* Criado divino */
criado_divino_cor_1.addEventListener('click', mudar_cor_criado_divino)
criado_divino_cor_2.addEventListener('click', mudar_cor_criado_divino)


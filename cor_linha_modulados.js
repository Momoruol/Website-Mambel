/* Modulados */

/* Ravi porta de correr */
const ravi_pcorrer_cor_1 = document.getElementById('ravi_pcorrer_cor_1')
const ravi_pcorrer_cor_2 = document.getElementById('ravi_pcorrer_cor_2')
const ravi_pcorrer_cor_3 = document.getElementById('ravi_pcorrer_cor_3')
const dot_ravi_pcorrer_1 = document.getElementById('ravi_pcorrer_dot-1')
const dot_ravi_pcorrer_2 = document.getElementById('ravi_pcorrer_dot-2')
const imagem_ravi_pcorrer = document.getElementById('imagem_ravi_pcorrer')

/* Ravi 6 Portas */
const ravi_6p_cor_1 = document.getElementById('ravi_cor_1')
const ravi_6p_cor_2 = document.getElementById('ravi_cor_2')
const dot_ravi_6p_1 = document.getElementById('ravi_6p_dot-1')
const dot_ravi_6p_2 = document.getElementById('ravi_6p_dot-2')
const imagem_ravi_6p = document.getElementById('imagem_ravi_6_portas')

/* Ravi 4 Portas */
const ravi_4p_cor_1 = document.getElementById('ravi_4p_cor_1')
const ravi_4p_cor_2 = document.getElementById('ravi_4p_cor_2')
const dot_ravi_4p_1 = document.getElementById('ravi_4p_dot-1')
const dot_ravi_4p_2 = document.getElementById('ravi_4p_dot-2')
const imagem_ravi_4p = document.getElementById('imagem_ravi_4_portas')

/* Ravi 3 Portas */
const ravi_3p_cor_1 = document.getElementById('ravi_3p_cor_1')
const ravi_3p_cor_2 = document.getElementById('ravi_3p_cor_2')
const dot_ravi_3p_1 = document.getElementById('ravi_3p_dot-1')
const dot_ravi_3p_2 = document.getElementById('ravi_3p_dot-2')
const imagem_ravi_3p = document.getElementById('imagem_ravi_3_portas')

/* Ravi 2 Portas */
const ravi_2p_cor_1 = document.getElementById('ravi_2p_cor_1')
const ravi_2p_cor_2 = document.getElementById('ravi_2p_cor_2')
const dot_ravi_2p_1 = document.getElementById('ravi_2p_dot-1')
const dot_ravi_2p_2 = document.getElementById('ravi_2p_dot-2')
const imagem_ravi_2p = document.getElementById('imagem_ravi_2_portas')

/* Ravi 1 Porta */
const ravi_1p_cor_1 = document.getElementById('ravi_1p_cor_1')
const ravi_1p_cor_2 = document.getElementById('ravi_1p_cor_2')
const dot_ravi_1p_1 = document.getElementById('ravi_1p_dot-1')
const dot_ravi_1p_2 = document.getElementById('ravi_1p_dot-2')
const imagem_ravi_1p = document.getElementById('imagem_ravi_1_porta')

/* Ravi canto */
const ravi_canto_cor_1 = document.getElementById('ravi_canto_cor_1')
const ravi_canto_cor_2 = document.getElementById('ravi_canto_cor_2')
const imagem_ravi_canto = document.getElementById('imagem_ravi_canto')

/* Ravi Cabeceira */
const ravi_cabeceira_cor_1 = document.getElementById('ravi_cabeceira_cor_1')
const ravi_cabeceira_cor_2 = document.getElementById('ravi_cabeceira_cor_2')
const imagem_ravi_cabeceira = document.getElementById('imagem_ravi_cabeceira')

/* Ravi Cabeceira */
const ravi_aereo_cor_1 = document.getElementById('ravi_aereo_cor_1')
const ravi_aereo_cor_2 = document.getElementById('ravi_aereo_cor_2')
const imagem_ravi_aereo = document.getElementById('imagem_ravi_aereo')


/* Functions */
/* Function de reset do ponto abaixo da imagem */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* Ravi Porta de Correr */
function mudar_cor_ravi_pcorrer(div){
  const local = div.target
  // ordem tem que bater com a ordem dos botões abaixo (cor_1, cor_2, cor_3)
  const img = [
    '../imagens/linha_ravi/GR_ravi_pcorrer--branco_ambientado.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--grafite_ambientado.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--olmo_ambientado.jpg'
  ]
  if(local.classList.contains('active')){
    return
  }else{
    const ravi = [ravi_pcorrer_cor_1, ravi_pcorrer_cor_2, ravi_pcorrer_cor_3]
    ravi.forEach((item) => {
      if (item === local){
        item.classList.add('active')
      }else{
        item.classList.remove('active')
      }
    })
  }

  const ravi = [ravi_pcorrer_cor_1, ravi_pcorrer_cor_2, ravi_pcorrer_cor_3]
  const activeIndex = ravi.findIndex(item => item.classList.contains('active'))
  imagem_ravi_pcorrer.src = img[activeIndex]
  reset(dot_ravi_pcorrer_1, dot_ravi_pcorrer_2)
}
function ravi_pcorrer_aberto(div){
  const local = div.target
  // [0..2] ambientada por cor (mesma ordem de cima), [3..5] interno na mesma ordem de cor
  const img = [
    '../imagens/linha_ravi/GR_ravi_pcorrer--branco_ambientado.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--grafite_ambientado.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--olmo_ambientado.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--branco_FI.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--grafite_FI.jpg',
    '../imagens/linha_ravi/GR_ravi_pcorrer--olmo_FI.jpg'
  ]
  dot_ravi_pcorrer_1.classList.remove('dot__active')
  dot_ravi_pcorrer_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const ravi = [ravi_pcorrer_cor_1, ravi_pcorrer_cor_2, ravi_pcorrer_cor_3]
  const activeIndex = ravi.findIndex(item => item.classList.contains('active'))

  // DOT 1 = ambientada
  if(dot_ravi_pcorrer_1.classList.contains('dot__active')){
    imagem_ravi_pcorrer.src = img[activeIndex]
  }
  // DOT 2 = interno
  if(dot_ravi_pcorrer_2.classList.contains('dot__active')){
    imagem_ravi_pcorrer.src = img[activeIndex + 3]
  }
}

/* Ravi 6 Portas */
function mudar_cor_ravi_6_portas(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 6P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 6P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
  }else{
    const ravi = [ravi_6p_cor_1, ravi_6p_cor_2]
    ravi.forEach((item) => {
      if (item === local){
        item.classList.add('active')
      }else{
        item.classList.remove('active')
      }
    })
  }
 
  imagem_ravi_6p.src = ravi_6p_cor_1.classList.contains('active') ? img[0] : img[1]
  reset(dot_ravi_6p_1, dot_ravi_6p_2)
}
function ravi_6p_aberto(div){
  const local = div.target
  // ordem: [0] Grafite ambientada, [1] Olmo ambientada, [2] Interno Grafite, [3] Interno Olmo
  const img = ['../imagens/Roup. RAVI 6P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 6P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 6P Interno - Grafite.jpg', '../imagens/Roup RAVI 6P Interno - Olmo.jpg']
  dot_ravi_6p_1.classList.remove('dot__active')
  dot_ravi_6p_2.classList.remove('dot__active')
  local.classList.add('dot__active')
 
  const cor1 = ravi_6p_cor_1.classList.contains('active');
 
  // DOT 1 = ambientada
  if(dot_ravi_6p_1.classList.contains('dot__active')){
    imagem_ravi_6p.src = cor1 ? img[0] : img[1];
  }
  // DOT 2 = interno
  if(dot_ravi_6p_2.classList.contains('dot__active')){
    imagem_ravi_6p.src = cor1 ? img[2] : img[3];
  }
}
 

/* Ravi 4 Portas */
function mudar_cor_ravi_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 4P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 4P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_4p_cor_1,ravi_4p_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_4p_cor_1.classList.contains('active')){
    imagem_ravi_4p.src= img[0]
  }else{
    imagem_ravi_4p.src=img[1]
  }
  reset(dot_ravi_4p_1,dot_ravi_4p_2)
}
function ravi_4p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 4P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 4P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 4P Interno - Grafite.jpg', '../imagens/Roup RAVI 4P Interno - Olmo.jpg']
  dot_ravi_4p_1.classList.remove('dot__active')
  dot_ravi_4p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_4p_cor_1.classList.contains('active');
  const cor2 = ravi_4p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_4p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_4p.src = img[0];
    else imagem_ravi_4p.src = img[1];
  }

  // DOT 2 = interno
  if(dot_ravi_4p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_4p.src = img[2];
    else imagem_ravi_4p.src = img[3];
  }
}

/* Ravi 3 Portas */
function mudar_cor_ravi_3_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 3P Reflectas - grafite.jpg','../imagens/Roup. RAVI 3P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_3p_cor_1,ravi_3p_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_3p_cor_1.classList.contains('active')){
    imagem_ravi_3p.src= img[0]
  }else{
    imagem_ravi_3p.src=img[1]
  }
  reset(dot_ravi_3p_1,dot_ravi_3p_2)
}
function ravi_3p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 3P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 3P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 3P Interno - Grafite.jpg', '../imagens/Roup RAVI 3P Interno - Olmo.jpg']
  dot_ravi_3p_1.classList.remove('dot__active')
  dot_ravi_3p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_3p_cor_1.classList.contains('active');
  const cor2 = ravi_3p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_3p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_3p.src = img[0];
    else imagem_ravi_3p.src = img[1];
  }

  // DOT 2 = interno
  if(dot_ravi_3p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_3p.src = img[2];
    else imagem_ravi_3p.src = img[3];
  }
}

/* Ravi 2 Portas */
function mudar_cor_ravi_2_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 2P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 2P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_2p_cor_1,ravi_2p_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_2p_cor_1.classList.contains('active')){
    imagem_ravi_2p.src= img[0]
  }else{
    imagem_ravi_2p.src=img[1]
  }
  reset(dot_ravi_2p_1,dot_ravi_2p_2)
}
function ravi_2p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 2P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 2P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 2P Interno - Grafite.jpg', '../imagens/Roup RAVI 2P Interno - Olmo.jpg']
  dot_ravi_2p_1.classList.remove('dot__active')
  dot_ravi_2p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_2p_cor_1.classList.contains('active');
  const cor2 = ravi_2p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_2p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_2p.src = img[0];
    else imagem_ravi_2p.src = img[1];
  }

  // DOT 2 = interno
  if(dot_ravi_2p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_2p.src = img[2];
    else imagem_ravi_2p.src = img[3];
  }
}

/* Ravi 1 Porta */
function mudar_cor_ravi_1_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 1P Reflecta - Grafite.jpg','../imagens/Roup. RAVI 1P Reflecta - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_1p_cor_1,ravi_1p_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_1p_cor_1.classList.contains('active')){
    imagem_ravi_1p.src= img[0]
  }else{
    imagem_ravi_1p.src=img[1]
  }
  reset(dot_ravi_1p_1,dot_ravi_1p_2)
}
function ravi_1p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 1P Reflecta - Grafite.jpg','../imagens/Roup. RAVI 1P Reflecta - Olmo.jpg', '../imagens/Roup RAVI 1P Interno v.1 - Grafite.jpg', '../imagens/Roup RAVI 1P Interno v.1 - Olmo.jpg']
  dot_ravi_1p_1.classList.remove('dot__active')
  dot_ravi_1p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_1p_cor_1.classList.contains('active');


  // DOT 1 = ambientada
  if(dot_ravi_1p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_1p.src = img[0];
    else imagem_ravi_1p.src = img[1];
  }

  // DOT 2 = interno
  if(dot_ravi_1p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_1p.src = img[2];
    else imagem_ravi_1p.src = img[3];
  }
}

/* Ravi Canto */
function mudar_cor_ravi_canto(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI Canto Reflecta - Grafite.jpg','../imagens/Roup. RAVI Canto Reflecta - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_canto_cor_1,ravi_canto_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_canto_cor_1.classList.contains('active')){
    imagem_ravi_canto.src= img[0]
  }else{
    imagem_ravi_canto.src=img[1]
  }
}

/* Ravi cabeceira */
function mudar_cor_ravi_cabeceira(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Modulado Ravi Mesa de Cabeceira 1208 Grafito - (1) F.I. Aberto Sem Decoração.jpg','../imagens/Modulado Ravi Mesa de Cabeceira 1208 Olmo - (1) F.I. Aberto Sem Decoração.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_cabeceira_cor_1,ravi_cabeceira_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_cabeceira_cor_1.classList.contains('active')){
    imagem_ravi_cabeceira.src= img[0]
  }else{
    imagem_ravi_cabeceira.src=img[1]
  }
}

/* Ravi aereo */
function mudar_cor_ravi_aereo(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/linha_ravi/aereo_ravi--grafite_FI.jpg','../imagens/linha_ravi/aereo_ravi--olmo_FI.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_aereo_cor_1,ravi_aereo_cor_2)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_aereo_cor_1.classList.contains('active')){
    imagem_ravi_aereo.src= img[0]
  }else{
    imagem_ravi_aereo.src=img[1]
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
ativarSwipe(imagem_ravi_pcorrer, dot_ravi_pcorrer_1, dot_ravi_pcorrer_2);
ativarSwipe(imagem_ravi_6p, dot_ravi_6p_1, dot_ravi_6p_2);
ativarSwipe(imagem_ravi_4p, dot_ravi_4p_1, dot_ravi_4p_2);
ativarSwipe(imagem_ravi_3p, dot_ravi_3p_1, dot_ravi_3p_2);
ativarSwipe(imagem_ravi_2p, dot_ravi_2p_1, dot_ravi_2p_2);
ativarSwipe(imagem_ravi_1p, dot_ravi_1p_1, dot_ravi_1p_2);


/* Event Listeners */
/* Ravi porta de correr */
ravi_pcorrer_cor_1.addEventListener('click', mudar_cor_ravi_pcorrer)
ravi_pcorrer_cor_2.addEventListener('click', mudar_cor_ravi_pcorrer)
ravi_pcorrer_cor_3.addEventListener('click', mudar_cor_ravi_pcorrer)
dot_ravi_pcorrer_1.addEventListener('click', ravi_pcorrer_aberto)
dot_ravi_pcorrer_2.addEventListener('click', ravi_pcorrer_aberto)

/* Ravi 6 Portas */
ravi_6p_cor_1.addEventListener('click', mudar_cor_ravi_6_portas)
ravi_6p_cor_2.addEventListener('click', mudar_cor_ravi_6_portas)
dot_ravi_6p_1.addEventListener('click', ravi_6p_aberto)
dot_ravi_6p_2.addEventListener('click', ravi_6p_aberto)

/* Ravi 4 portas */
ravi_4p_cor_1.addEventListener('click', mudar_cor_ravi_4_portas)
ravi_4p_cor_2.addEventListener('click', mudar_cor_ravi_4_portas)
dot_ravi_4p_1.addEventListener('click', ravi_4p_aberto)
dot_ravi_4p_2.addEventListener('click', ravi_4p_aberto)

/* Ravi 3 Portas */
ravi_3p_cor_1.addEventListener('click', mudar_cor_ravi_3_portas)
ravi_3p_cor_2.addEventListener('click', mudar_cor_ravi_3_portas)
dot_ravi_3p_1.addEventListener('click', ravi_3p_aberto)
dot_ravi_3p_2.addEventListener('click', ravi_3p_aberto)

/* Ravi 2 Portas */
ravi_2p_cor_1.addEventListener('click', mudar_cor_ravi_2_portas)
ravi_2p_cor_2.addEventListener('click', mudar_cor_ravi_2_portas)
dot_ravi_2p_1.addEventListener('click', ravi_2p_aberto)
dot_ravi_2p_2.addEventListener('click', ravi_2p_aberto)

/* Ravi 1 Porta */
ravi_1p_cor_1.addEventListener('click', mudar_cor_ravi_1_portas)
ravi_1p_cor_2.addEventListener('click', mudar_cor_ravi_1_portas)
dot_ravi_1p_1.addEventListener('click', ravi_1p_aberto)
dot_ravi_1p_2.addEventListener('click', ravi_1p_aberto)

/* Ravi Canto */
ravi_canto_cor_1.addEventListener('click', mudar_cor_ravi_canto)
ravi_canto_cor_2.addEventListener('click', mudar_cor_ravi_canto)

/* Ravi cabeceira */
ravi_cabeceira_cor_1.addEventListener('click', mudar_cor_ravi_cabeceira)
ravi_cabeceira_cor_2.addEventListener('click', mudar_cor_ravi_cabeceira)

/* Ravi Aereo */
ravi_aereo_cor_1.addEventListener('click', mudar_cor_ravi_aereo)
ravi_aereo_cor_2.addEventListener('click', mudar_cor_ravi_aereo)
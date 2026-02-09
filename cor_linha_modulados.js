/* Modulados */
/* Ravi 6 Portas */
const ravi_6p_cor_1 = document.getElementById('ravi_cor_1')
const ravi_6p_cor_2 = document.getElementById('ravi_cor_2')
const ravi_6p_cor_3 = document.getElementById('ravi_cor_3')
const dot_ravi_6p_1 = document.getElementById('ravi_6p_dot-1')
const dot_ravi_6p_2 = document.getElementById('ravi_6p_dot-2')
const imagem_ravi_6p = document.getElementById('imagem_ravi_6_portas')

/* Ravi 4 Portas */
const ravi_4p_cor_1 = document.getElementById('ravi_4p_cor_1')
const ravi_4p_cor_2 = document.getElementById('ravi_4p_cor_2')
const ravi_4p_cor_3 = document.getElementById('ravi_4p_cor_3')
const dot_ravi_4p_1 = document.getElementById('ravi_4p_dot-1')
const dot_ravi_4p_2 = document.getElementById('ravi_4p_dot-2')
const imagem_ravi_4p = document.getElementById('imagem_ravi_4_portas')

/* Ravi 3 Portas */
const ravi_3p_cor_1 = document.getElementById('ravi_3p_cor_1')
const ravi_3p_cor_2 = document.getElementById('ravi_3p_cor_2')
const ravi_3p_cor_3 = document.getElementById('ravi_3p_cor_3')
const dot_ravi_3p_1 = document.getElementById('ravi_3p_dot-1')
const dot_ravi_3p_2 = document.getElementById('ravi_3p_dot-2')
const imagem_ravi_3p = document.getElementById('imagem_ravi_3_portas')

/* Ravi 2 Portas */
const ravi_2p_cor_1 = document.getElementById('ravi_2p_cor_1')
const ravi_2p_cor_2 = document.getElementById('ravi_2p_cor_2')
const ravi_2p_cor_3 = document.getElementById('ravi_2p_cor_3')
const dot_ravi_2p_1 = document.getElementById('ravi_2p_dot-1')
const dot_ravi_2p_2 = document.getElementById('ravi_2p_dot-2')
const imagem_ravi_2p = document.getElementById('imagem_ravi_2_portas')

/* Ravi 1 Porta */
const ravi_1p_cor_1 = document.getElementById('ravi_1p_cor_1')
const ravi_1p_cor_2 = document.getElementById('ravi_1p_cor_2')
const ravi_1p_cor_3 = document.getElementById('ravi_1p_cor_3')
const dot_ravi_1p_1 = document.getElementById('ravi_1p_dot-1')
const dot_ravi_1p_2 = document.getElementById('ravi_1p_dot-2')
const imagem_ravi_1p = document.getElementById('imagem_ravi_1_porta')

/* Ravi canto */
const ravi_canto_cor_1 = document.getElementById('ravi_canto_cor_1')
const ravi_canto_cor_2 = document.getElementById('ravi_canto_cor_2')
const ravi_canto_cor_3 = document.getElementById('ravi_canto_cor_3')
const dot_ravi_canto_1 = document.getElementById('ravi_canto_dot-1')
const dot_ravi_canto_2 = document.getElementById('ravi_canto_dot-2')
const imagem_ravi_canto = document.getElementById('imagem_ravi_canto')


/* Functions */
/* Function de reset do ponto abaixo da imagem */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}

/* Ravi 6 Portas */
function mudar_cor_ravi_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 6P Reflectas - Branco.jpg','../imagens/Roup. RAVI 6P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 6P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_6p_cor_1,ravi_6p_cor_2,ravi_6p_cor_3)
        ravi.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(ravi_6p_cor_1.classList.contains('active')){
    imagem_ravi_6p.src= img[0]
  }else if(ravi_6p_cor_2.classList.contains('active')){
    imagem_ravi_6p.src=img[1]
  }else{
    imagem_ravi_6p.src=img[2]
  }
  reset(dot_ravi_6p_1,dot_ravi_6p_2)
}
function ravi_6p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 6P Reflectas - Branco.jpg','../imagens/Roup. RAVI 6P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 6P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 6P Interno - Branco.jpg', '../imagens/Roup RAVI 6P Interno - Grafite.jpg', '../imagens/Roup RAVI 6P Interno - Olmo.jpg']
  dot_ravi_6p_1.classList.remove('dot__active')
  dot_ravi_6p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_6p_cor_1.classList.contains('active');
  const cor2 = ravi_6p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_6p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_6p.src = img[0];
    else if(cor2) imagem_ravi_6p.src = img[1];
    else imagem_ravi_6p.src = img[2];
  }

  // DOT 2 = interno
  if(dot_ravi_6p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_6p.src = img[3];
    else if(cor2) imagem_ravi_6p.src = img[4];
    else imagem_ravi_6p.src = img[5];
  }
}

/* Ravi 4 Portas */
function mudar_cor_ravi_4_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 4P Reflectas - Branco.jpg','../imagens/Roup. RAVI 4P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 4P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_4p_cor_1,ravi_4p_cor_2,ravi_4p_cor_3)
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
  }else if(ravi_4p_cor_2.classList.contains('active')){
    imagem_ravi_4p.src=img[1]
  }else{
    imagem_ravi_4p.src=img[2]
  }
  reset(dot_ravi_4p_1,dot_ravi_4p_2)
}
function ravi_4p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 4P Reflectas - Branco.jpg','../imagens/Roup. RAVI 4P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 4P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 4P Interno - Branco.jpg', '../imagens/Roup RAVI 4P Interno - Grafite.jpg', '../imagens/Roup RAVI 4P Interno - Olmo.jpg']
  dot_ravi_4p_1.classList.remove('dot__active')
  dot_ravi_4p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_4p_cor_1.classList.contains('active');
  const cor2 = ravi_4p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_4p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_4p.src = img[0];
    else if(cor2) imagem_ravi_4p.src = img[1];
    else imagem_ravi_4p.src = img[2];
  }

  // DOT 2 = interno
  if(dot_ravi_4p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_4p.src = img[3];
    else if(cor2) imagem_ravi_4p.src = img[4];
    else imagem_ravi_4p.src = img[5];
  }
}

/* Ravi 3 Portas */
function mudar_cor_ravi_3_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 3P Reflectas - Branco.jpg','../imagens/Roup. RAVI 3P Reflectas - grafite.jpg','../imagens/Roup. RAVI 3P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_3p_cor_1,ravi_3p_cor_2,ravi_3p_cor_3)
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
  }else if(ravi_3p_cor_2.classList.contains('active')){
    imagem_ravi_3p.src=img[1]
  }else{
    imagem_ravi_3p.src=img[2]
  }
  reset(dot_ravi_3p_1,dot_ravi_3p_2)
}
function ravi_3p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 3P Reflectas - Branco.jpg','../imagens/Roup. RAVI 3P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 3P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 3P Interno - Branco.jpg', '../imagens/Roup RAVI 3P Interno - Grafite.jpg', '../imagens/Roup RAVI 3P Interno - Olmo.jpg']
  dot_ravi_3p_1.classList.remove('dot__active')
  dot_ravi_3p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_3p_cor_1.classList.contains('active');
  const cor2 = ravi_3p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_3p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_3p.src = img[0];
    else if(cor2) imagem_ravi_3p.src = img[1];
    else imagem_ravi_3p.src = img[2];
  }

  // DOT 2 = interno
  if(dot_ravi_3p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_3p.src = img[3];
    else if(cor2) imagem_ravi_3p.src = img[4];
    else imagem_ravi_3p.src = img[5];
  }
}

/* Ravi 2 Portas */
function mudar_cor_ravi_2_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 2P Reflectas - Branco.jpg','../imagens/Roup. RAVI 2P Reflectas - Grafite.jpg','../imagens/Roup. RAVI 2P Reflectas - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_2p_cor_1,ravi_2p_cor_2,ravi_2p_cor_3)
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
  }else if(ravi_2p_cor_2.classList.contains('active')){
    imagem_ravi_2p.src=img[1]
  }else{
    imagem_ravi_2p.src=img[2]
  }
  reset(dot_ravi_2p_1,dot_ravi_2p_2)
}
function ravi_2p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 2P Reflectas - Branco.jpg','../imagens/Roup. RAVI 2P Reflectas - Grafite.jpg', '../imagens/Roup. RAVI 2P Reflectas - Olmo.jpg', '../imagens/Roup RAVI 2P Interno - Branco.jpg', '../imagens/Roup RAVI 2P Interno - Grafite.jpg', '../imagens/Roup RAVI 2P Interno - Olmo.jpg']
  dot_ravi_2p_1.classList.remove('dot__active')
  dot_ravi_2p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_2p_cor_1.classList.contains('active');
  const cor2 = ravi_2p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_2p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_2p.src = img[0];
    else if(cor2) imagem_ravi_2p.src = img[1];
    else imagem_ravi_2p.src = img[2];
  }

  // DOT 2 = interno
  if(dot_ravi_2p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_2p.src = img[3];
    else if(cor2) imagem_ravi_2p.src = img[4];
    else imagem_ravi_2p.src = img[5];
  }
}

/* Ravi 1 Porta */
function mudar_cor_ravi_1_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI 1P Reflecta - Branco.jpg','../imagens/Roup. RAVI 1P Reflecta - Grafite.jpg','../imagens/Roup. RAVI 1P Reflecta - Olmo.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const ravi = new Array(ravi_1p_cor_1,ravi_1p_cor_2,ravi_1p_cor_3)
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
  }else if(ravi_1p_cor_2.classList.contains('active')){
    imagem_ravi_1p.src=img[1]
  }else{
    imagem_ravi_1p.src=img[2]
  }
  reset(dot_ravi_1p_1,dot_ravi_1p_2)
}
function ravi_1p_aberto(div){
  const local = div.target
  const img = ['../imagens/Roup. RAVI 1P Reflecta - Branco.jpg','../imagens/Roup. RAVI 1P Reflecta - Grafite.jpg', '../imagens/Roup. RAVI 1P Reflecta - Olmo.jpg', '../imagens/Roup RAVI 1P Interno v.1 - Branco.jpg', '../imagens/Roup RAVI 1P Interno v.1 - Grafite.jpg', '../imagens/Roup RAVI 1P Interno v.1 - Olmo.jpg']
  dot_ravi_1p_1.classList.remove('dot__active')
  dot_ravi_1p_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = ravi_1p_cor_1.classList.contains('active');
  const cor2 = ravi_1p_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(dot_ravi_1p_1.classList.contains('dot__active')){
    if(cor1) imagem_ravi_1p.src = img[0];
    else if(cor2) imagem_ravi_1p.src = img[1];
    else imagem_ravi_1p.src = img[2];
  }

  // DOT 2 = interno
  if(dot_ravi_1p_2.classList.contains('dot__active')){
    if(cor1) imagem_ravi_1p.src = img[3];
    else if(cor2) imagem_ravi_1p.src = img[4];
    else imagem_ravi_1p.src = img[5];
  }
}

/* Ravi Canto */
function mudar_cor_ravi_canto(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Roup. RAVI Canto Reflecta - Branco.jpg','../imagens/Roup. RAVI Canto Reflecta - Grafite.jpg','../imagens/Roup. RAVI Canto Reflecta - Olmo.jpg']
  if(local.classList.contains('active')){canto
    return
    }else{
        const ravi = new Array(ravi_canto_cor_1,ravi_canto_cor_2,ravi_canto_cor_3)
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
  }else if(ravi_canto_cor_2.classList.contains('active')){
    imagem_ravi_canto.src=img[1]
  }else{
    imagem_ravi_canto.src=img[2]
  }
  reset(dot_ravi_canto_1,dot_ravi_canto_2)
}

/* Event Listeners */
/* Ravi 6 Portas */
ravi_6p_cor_1.addEventListener('click', mudar_cor_ravi_6_portas)
ravi_6p_cor_2.addEventListener('click', mudar_cor_ravi_6_portas)
ravi_6p_cor_3.addEventListener('click', mudar_cor_ravi_6_portas)
dot_ravi_6p_1.addEventListener('click', ravi_6p_aberto)
dot_ravi_6p_2.addEventListener('click', ravi_6p_aberto)

/* Ravi 4 portas */
ravi_4p_cor_1.addEventListener('click', mudar_cor_ravi_4_portas)
ravi_4p_cor_2.addEventListener('click', mudar_cor_ravi_4_portas)
ravi_4p_cor_3.addEventListener('click', mudar_cor_ravi_4_portas)
dot_ravi_4p_1.addEventListener('click', ravi_4p_aberto)
dot_ravi_4p_2.addEventListener('click', ravi_4p_aberto)

/* Ravi 3 Portas */
ravi_3p_cor_1.addEventListener('click', mudar_cor_ravi_3_portas)
ravi_3p_cor_2.addEventListener('click', mudar_cor_ravi_3_portas)
ravi_3p_cor_3.addEventListener('click', mudar_cor_ravi_3_portas)
dot_ravi_3p_1.addEventListener('click', ravi_3p_aberto)
dot_ravi_3p_2.addEventListener('click', ravi_3p_aberto)

/* Ravi 2 Portas */
ravi_2p_cor_1.addEventListener('click', mudar_cor_ravi_2_portas)
ravi_2p_cor_2.addEventListener('click', mudar_cor_ravi_2_portas)
ravi_2p_cor_3.addEventListener('click', mudar_cor_ravi_2_portas)
dot_ravi_2p_1.addEventListener('click', ravi_2p_aberto)
dot_ravi_2p_2.addEventListener('click', ravi_2p_aberto)

/* Ravi 1 Porta */
ravi_1p_cor_1.addEventListener('click', mudar_cor_ravi_1_portas)
ravi_1p_cor_2.addEventListener('click', mudar_cor_ravi_1_portas)
ravi_1p_cor_3.addEventListener('click', mudar_cor_ravi_1_portas)
dot_ravi_1p_1.addEventListener('click', ravi_1p_aberto)
dot_ravi_1p_2.addEventListener('click', ravi_1p_aberto)

/* Ravi Canto */
ravi_canto_cor_1.addEventListener('click', mudar_cor_ravi_canto)
ravi_canto_cor_2.addEventListener('click', mudar_cor_ravi_canto)
ravi_canto_cor_3.addEventListener('click', mudar_cor_ravi_canto)

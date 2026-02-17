/* Variaveis */
const imagem_prime = document.getElementById('imagem_prime')
const prime_dot_1 = document.getElementById('prime_dot-1')
const prime_dot_2 = document.getElementById('prime_dot-2')
const prime_cor_1 = document.getElementById('prime_cor_1')
const prime_cor_2 = document.getElementById('prime_cor_2')


/* Functions */
/* Reset de dots */
function reset(dot_1, dot_2){
  dot_1.classList.remove('dot__active');
  dot_2.classList.remove('dot__active');
  
  // define o primeiro como ativo
  dot_1.classList.add('dot__active');
}
/* Mudança de imagens de cor prime */
function mudar_cor_prime(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/ROPEIRO PRIME.jpg','../imagens/ROPEIRO PRIME.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const prime = new Array(prime_cor_1,prime_cor_2)
        prime.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(prime_cor_1.classList.contains('active')){
    imagem_prime.src= img[0]
  }else{
    imagem_prime.src=img[1]
  }
  reset(prime_dot_1, prime_dot_2)
}
function prime_aberto(div){
  const local = div.target
  const img = ['../imagens/ROPEIRO PRIME.jpg','../imagens/ROPEIRO PRIME.jpg', '../imagens/Roupeiro star Nogueira - F.I.Aberto Decorado.jpg', '../imagens/Roupeiro star Nogueira - F.I.Aberto Decorado.jpg']
  prime_dot_1.classList.remove('dot__active')
  prime_dot_2.classList.remove('dot__active')
  local.classList.add('dot__active')

  const cor1 = prime_cor_1.classList.contains('active');
  const cor2 = prime_cor_2.classList.contains('active');

  // DOT 1 = ambientada
  if(prime_dot_1.classList.contains('dot__active')){
    if(cor1) imagem_prime.src = img[0];
    else imagem_prime.src = img[1];
  }

  // DOT 2 = interno
  if(prime_dot_2.classList.contains('dot__active')){
    if(cor1) imagem_prime.src = img[2];
    else imagem_prime.src = img[3];
  }
}


/* Event Listeners */
prime_cor_1.addEventListener('click', mudar_cor_prime)
prime_cor_2.addEventListener('click', mudar_cor_prime)
prime_dot_1.addEventListener('click', prime_aberto)
prime_dot_2.addEventListener('click', prime_aberto)
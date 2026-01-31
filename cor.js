/* Mudança de imagem nos produtos */

/* variaveis */
const logan_6_portas_cor_1 = document.getElementById('logan_cor_1')
const logan_6_portas_cor_2 = document.getElementById('logan_cor_2')
const imagem_logan_6_portas = document.getElementById('imagem_logan_6_portas')
const logan_4_portas_cor_1 = document.getElementById('logan_4p_cor_1')
const logan_4_portas_cor_2 = document.getElementById('logan_4p_cor_2')
const imagem_logan_4_portas = document.getElementById('imagem_logan_4_portas')


/* Functions */

/* Logan 6 portas */
function mudar_cor_logan_6_portas(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  if(local.classList.contains('active')){
    return
    }else{
    logan_6_portas_cor_1.classList.toggle('active')
    logan_6_portas_cor_2.classList.toggle('active')
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(logan_6_portas_cor_1.classList.contains('active')){
    imagem_logan_6_portas.src='../imagens/Roupeiro Logan 6P Branco - Ambientada.jpg'
  }else{
    imagem_logan_6_portas.src='../imagens/Roupeiro Logan 6P Olmo - Ambientada.jpg'
  }

}

/* ====================================================== */

/* Logan 4 portas */


function mudar_cor_logan_4_portas(div){
    const local = div.target
    if(local.classList.contains('active')){
        return
    }else{
        logan_4_portas_cor_1.classList.toggle('active')
        logan_4_portas_cor_2.classList.toggle('active')
    }

    if(logan_4_portas_cor_1.classList.contains('active')){
        imagem_logan_4_portas.src = '../imagens/Roupeiro Logan 4P Branco - Ambientada.jpg'
    }else{
        imagem_logan_4_portas.src = '../imagens/Roupeiro Logan 4P Olmo - Ambientada.jpg'
    }
}


/* Event Listeners */
logan_4_portas_cor_1.addEventListener('click', mudar_cor_logan_4_portas)
logan_4_portas_cor_2.addEventListener('click', mudar_cor_logan_4_portas)
logan_6_portas_cor_1.addEventListener('click', mudar_cor_logan_6_portas)
logan_6_portas_cor_2.addEventListener('click', mudar_cor_logan_6_portas)
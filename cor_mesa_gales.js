/* Variaveis */
const imagem_mesa_gales = document.getElementById('imagem_mesa_gales')
const mesa_gales_cor_1 = document.getElementById('mesa_gales_cor_1')
const mesa_gales_cor_2 = document.getElementById('mesa_gales_cor_2')
const mesa_gales_cor_3 = document.getElementById('mesa_gales_cor_3')

/* Functions */ 
/* Mudança de imagens de cor mesa_gales */
function mudar_cor_mesa_gales(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Criado Mudo Gales Branco - Ambientada.jpg','../imagens/Criado Mudo Gales Grafite - Ambientada.jpg','../imagens/Criado Mudo Gales Nogueira.Areia - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const mesa_gales = new Array(mesa_gales_cor_1,mesa_gales_cor_2,mesa_gales_cor_3)
        mesa_gales.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(mesa_gales_cor_1.classList.contains('active')){
    imagem_mesa_gales.src= img[0]
  }else if(mesa_gales_cor_2.classList.contains('active')){
    imagem_mesa_gales.src=img[1]
  }else{
    imagem_mesa_gales.src=img[2]
  }
}


/* Event Listeners */
mesa_gales_cor_1.addEventListener('click', mudar_cor_mesa_gales)
mesa_gales_cor_2.addEventListener('click', mudar_cor_mesa_gales)
mesa_gales_cor_3.addEventListener('click', mudar_cor_mesa_gales)
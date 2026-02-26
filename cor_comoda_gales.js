/* Variaveis */
const imagem_gales = document.getElementById('imagem_gales')
const gales_cor_1 = document.getElementById('gales_cor_1')
const gales_cor_2 = document.getElementById('gales_cor_2')

/* Functions */ 
/* Mudança de imagens de cor gales */
function mudar_cor_gales(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Comoda Gales Branca - Ambientada.jpg','../imagens/Comoda Gales Nogueira.Areia - Ambientada.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const gales = new Array(gales_cor_1,gales_cor_2)
        gales.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(gales_cor_1.classList.contains('active')){
    imagem_gales.src= img[0]
  }else{
    imagem_gales.src=img[1]
  }
}


/* Event Listeners */
gales_cor_1.addEventListener('click', mudar_cor_gales)
gales_cor_2.addEventListener('click', mudar_cor_gales)
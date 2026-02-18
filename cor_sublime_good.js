/* Variaveis */
const imagem_sublime = document.getElementById('imagem_sublime')
const sublime_cor_1 = document.getElementById('sublime_cor_1')
const sublime_cor_2 = document.getElementById('sublime_cor_2')
const sublime_cor_3 = document.getElementById('sublime_cor_3')

/* Functions */ 
/* Mudança de imagens de cor sublime */
function mudar_cor_sublime(div){
  /* troca a borda para a cor da imagem mostrada */
  const local = div.target
  const img = ['../imagens/Sapateira Sublime 2P Branca - Ambientada Aberta.jpg','../imagens/Sapateira Sublime 2P Grafitto - Ambientada Aberta.jpg','../imagens/Sapateira Sublime 2P Olmo - Ambientada Aberta.jpg']
  if(local.classList.contains('active')){
    return
    }else{
        const sublime = new Array(sublime_cor_1,sublime_cor_2,sublime_cor_3)
        sublime.forEach((item) => {
            if (item === local){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    
  }
  
  /* troca a imagem mostrada com referencia ao elemento que tem a class active */
  if(sublime_cor_1.classList.contains('active')){
    imagem_sublime.src= img[0]
  }else if(sublime_cor_2.classList.contains('active')){
    imagem_sublime.src=img[1]
  }else{
    imagem_sublime.src=img[2]
  }
}


/* Event Listeners */
sublime_cor_1.addEventListener('click', mudar_cor_sublime)
sublime_cor_2.addEventListener('click', mudar_cor_sublime)
sublime_cor_3.addEventListener('click', mudar_cor_sublime)
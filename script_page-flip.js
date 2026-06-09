/* ============================================================ */
/* 1. CONSTANTES E CONFIGURAÇÕES GLOBAIS                        */
/* ============================================================ */

const imagensCatalogo = [
  "./catalogo/page_1.jpg", "./catalogo/page_2.jpg", "./catalogo/page_3.jpg", "./catalogo/page_4.jpg", "./catalogo/page_5.jpg",
  "./catalogo/page_6.jpg", "./catalogo/page_7.jpg", "./catalogo/page_8.jpg", "./catalogo/page_9.jpg", "./catalogo/page_10.jpg",
  "./catalogo/page_11.jpg", "./catalogo/page_12.jpg", "./catalogo/page_13.jpg", "./catalogo/page_14.jpg", "./catalogo/page_15.jpg",
  "./catalogo/page_16.jpg", "./catalogo/page_17.jpg", "./catalogo/page_18.jpg", "./catalogo/page_19.jpg", "./catalogo/page_20.jpg",
  "./catalogo/page_21.jpg", "./catalogo/page_22.jpg", "./catalogo/page_23.jpg", "./catalogo/page_24.jpg", "./catalogo/page_25.jpg",
  "./catalogo/page_26.jpg", "./catalogo/page_27.jpg", "./catalogo/page_28.jpg", "./catalogo/page_29.jpg", "./catalogo/page_30.jpg",
  "./catalogo/page_31.jpg", "./catalogo/page_32.jpg", "./catalogo/page_33.jpg", "./catalogo/page_34.jpg", "./catalogo/page_35.jpg",
  "./catalogo/page_36.jpg", "./catalogo/page_37.jpg", "./catalogo/page_38.jpg", "./catalogo/page_39.jpg", "./catalogo/page_40.jpg",
  "./catalogo/page_41.jpg", "./catalogo/page_42.jpg", "./catalogo/page_43.jpg", "./catalogo/page_44.jpg", "./catalogo/page_45.jpg",
  "./catalogo/page_46.jpg", "./catalogo/page_47.jpg", "./catalogo/page_48.jpg", "./catalogo/page_49.jpg", "./catalogo/page_50.jpg",
  "./catalogo/page_51.jpg", "./catalogo/page_52.jpg"
];

// Elementos do DOM
const btnLeitura = document.getElementById('btn-leitura');
const overlayLeitura = document.getElementById('overlay-leitura');
const btnFechar = document.getElementById('btn-fechar-leitura');
const containerLeitura = document.getElementById('container-leitura');
const wrapperLeitura = document.getElementById('wrapper-leitura');
const imgLeituraEsq = document.getElementById('img-leitura-esq');
const imgLeituraDir = document.getElementById('img-leitura-dir');

// Variáveis de controle para o Motor 2D (Transform)
let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX, startY;

/* ============================================================ */
/* 2. INICIALIZAÇÃO DO STPAGEFLIP (CATÁLOGO BASE)               */
/* ============================================================ */

const pageFlip = new St.PageFlip(document.getElementById("book"), {
  width: 3662,
  height: 2835,
  minWidth: 320,
  maxWidth: 1000,
  minHeight: 248,
  maxHeight: 774,
  size: "stretch",
  showCover: true,
  usePortrait: true,
  autosize: true,
  mobileScrollSupport: true,
  maxShadowOpacity: 0.5,
});

pageFlip.loadFromImages(imagensCatalogo);

document.getElementById("prev").onclick = () => pageFlip.flipPrev();
document.getElementById("next").onclick = () => pageFlip.flipNext();

setTimeout(fixCanvasDPR, 100);
pageFlip.on("flip", fixCanvasDPR);
window.addEventListener("resize", fixCanvasDPR);

function fixCanvasDPR() {
  const canvas = document.querySelector(".stf__canvas");
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* ============================================================ */
/* 3. MODO LEITURA E FUNÇÃO DE TRANSFORM                        */
/* ============================================================ */

// Aplica a matriz de transformação na GPU
function aplicarTransform() {
  wrapperLeitura.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
}

btnLeitura.addEventListener('click', () => {
  const paginaAtual = pageFlip.getCurrentPageIndex();
  const orientacao = pageFlip.getOrientation(); 

  if (orientacao === 'landscape') {
    imgLeituraEsq.src = imagensCatalogo[paginaAtual];
    if (imagensCatalogo[paginaAtual + 1]) {
      imgLeituraDir.src = imagensCatalogo[paginaAtual + 1];
      imgLeituraDir.classList.remove('hidden');
    } else {
      imgLeituraDir.src = '';
      imgLeituraDir.classList.add('hidden');
    }
  } else {
    imgLeituraEsq.src = imagensCatalogo[paginaAtual];
    imgLeituraDir.src = '';
    imgLeituraDir.classList.add('hidden');
  }

  overlayLeitura.classList.remove('hidden');
  overlayLeitura.classList.add('flex');
  document.body.style.overflow = 'hidden';
});

btnFechar.addEventListener('click', () => {
  overlayLeitura.classList.add('hidden');
  overlayLeitura.classList.remove('flex');
  document.body.style.overflow = '';
  
  imgLeituraEsq.src = '';
  imgLeituraDir.src = '';
  
  // Reseta o motor 2D
  zoomScale = 1;
  panX = 0;
  panY = 0;
  wrapperLeitura.style.transition = 'none';
  aplicarTransform();
});

/* ============================================================ */
/* 4. MODO LEITURA: MOTOR DE ZOOM E ARRASTE (DESKTOP)           */
/* ============================================================ */

// 4.1. Evento de Zoom (Rolagem do Mouse)
containerLeitura.addEventListener('wheel', (e) => {
  if (e.ctrlKey) return; 
  e.preventDefault();

  const zoomSensitivity = 0.25;
  const delta = e.deltaY < 0 ? 1 : -1;
  
  zoomScale += delta * zoomSensitivity;
  zoomScale = Math.min(Math.max(1, zoomScale), 4); 
  
  // Se voltou ao tamanho normal, centraliza
  if (zoomScale === 1) {
    panX = 0;
    panY = 0;
  }

  // Ativa transição suave apenas pro zoom
  wrapperLeitura.style.transition = 'transform 0.1s ease-out';
  aplicarTransform();
}, { passive: false });

// 4.2. Iniciar Arraste (Mousedown)
containerLeitura.addEventListener('mousedown', (e) => {
  e.preventDefault();
  
  // Só permite arrastar se houver zoom aplicado
  if (zoomScale === 1) return; 

  isDragging = true;
  
  // Captura o ponto de clique compensando a posição atual (pan)
  startX = e.clientX - panX;
  startY = e.clientY - panY;
  
  // Desativa a transição para o arraste acompanhar o mouse instantaneamente
  wrapperLeitura.style.transition = 'none';

  containerLeitura.classList.remove('cursor-grab');
  containerLeitura.classList.add('cursor-grabbing');
});

// 4.3. Durante o Arraste (Mousemove no Window)
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  
  aplicarTransform();
});

// 4.4. Encerrar Arraste (Mouseup)
window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  
  containerLeitura.classList.remove('cursor-grabbing');
  containerLeitura.classList.add('cursor-grab');
});

const texto_zoom = document.getElementById('texto_zoom');

function atualizarTextoZoom() {
  if (!texto_zoom) return; // Segurança: se o elemento não existir, não faz nada

  // Verifica se o dispositivo tem suporte a toque
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    texto_zoom.innerHTML = 'Use dois dedos para dar zoom';
  } else {
    texto_zoom.innerHTML = 'Utilize o scroll do mouse para dar zoom';
  }
}

// Executa ao carregar a página
atualizarTextoZoom();

// Executa sempre que o usuário redimensionar a janela
window.addEventListener('resize', atualizarTextoZoom);
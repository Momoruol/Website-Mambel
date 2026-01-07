const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const backdrop = document.getElementById('backdrop')

/* ======================================================= */

btn.addEventListener('click', navToggle)
backdrop.addEventListener('click', sideClose)

/* ======================================================= */

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('open')
  body.classList.toggle('no-scroll')
}

function sideClose(){
  btn.classList.remove('open')
  menu.classList.remove('open')
  body.classList.remove('no-scroll')
}

/* ====================================================== */
/* stpageflip para flipbook do catalogo */

const pageFlip = new St.PageFlip(document.getElementById("book"), {
  width: 320,
  height: 248,
  minWidth:320,
  maxWidth:1000,
  minHeight:248,
  maxHeight:774,
  size: "stretch",
  showCover: true,
  mobileScrollSupport: true,
  maxShadowOpacity:0.5,
});

pageFlip.loadFromImages([
  "./catalogo/page_1.jpg",
  "./catalogo/page_2.jpg",
  "./catalogo/page_3.jpg",
  "./catalogo/page_4.jpg",
  "./catalogo/page_5.jpg",
  "./catalogo/page_6.jpg",
  "./catalogo/page_7.jpg",
  "./catalogo/page_8.jpg",
  "./catalogo/page_9.jpg",
  "./catalogo/page_10.jpg",
  "./catalogo/page_11.jpg",
  "./catalogo/page_12.jpg",
  "./catalogo/page_13.jpg",
  "./catalogo/page_14.jpg",
  "./catalogo/page_15.jpg",
  "./catalogo/page_16.jpg",
  "./catalogo/page_17.jpg",
  "./catalogo/page_18.jpg",
  "./catalogo/page_19.jpg",
  "./catalogo/page_20.jpg",
  "./catalogo/page_21.jpg",
  "./catalogo/page_22.jpg",
  "./catalogo/page_23.jpg",
  "./catalogo/page_24.jpg",
  "./catalogo/page_25.jpg",
  "./catalogo/page_26.jpg",
  "./catalogo/page_27.jpg",
  "./catalogo/page_28.jpg",
  "./catalogo/page_29.jpg",
  "./catalogo/page_30.jpg",
  "./catalogo/page_31.jpg",
  "./catalogo/page_32.jpg",
  "./catalogo/page_33.jpg",
  "./catalogo/page_34.jpg",
  "./catalogo/page_35.jpg",
  "./catalogo/page_36.jpg",
  "./catalogo/page_37.jpg",
  "./catalogo/page_38.jpg",
  "./catalogo/page_39.jpg",
  "./catalogo/page_40.jpg",
  "./catalogo/page_41.jpg",
  "./catalogo/page_42.jpg",
  "./catalogo/page_43.jpg",
  "./catalogo/page_44.jpg",
  "./catalogo/page_45.jpg",
  "./catalogo/page_46.jpg",
  "./catalogo/page_47.jpg",
  "./catalogo/page_48.jpg",
  "./catalogo/page_49.jpg",
  "./catalogo/page_50.jpg",
  "./catalogo/page_51.jpg",
  "./catalogo/page_52.jpg",
]);

document.getElementById("prev").onclick = () => pageFlip.flipPrev();
document.getElementById("next").onclick = () => pageFlip.flipNext();

const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.hamburger');


imagenes.forEach(imagen => {
    imagen.addEventListener('click' , ()=> {
        aparecerImagen(imagen.getAttribute('src'))


    })
})


    
$(document).ready(function() {
    $(".elprimer").click(function() {
      $(".video-gallery").slick("slickPrev");
    });

    $(".eldegundo").click(function() {
      $(".video-gallery").slick("slickNext");
    });
    
    // Inicializa el carousel con slick
    $(".video-gallery").slick({
      // Aquí puedes configurar las opciones de slick según tus necesidades
      slidesToShow: 3,
      slidesToScroll: 1,
      // ... otras opciones ...
    });
  });
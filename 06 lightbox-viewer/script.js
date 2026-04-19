/**
 * ============================================
 * LIGHTBOX VIEWER - GALERÍA DE IMÁGENES
 * ============================================
 * 
 * ¿QUÉ ES ESTO?
 * Un lightbox es un overlay (capa superpuesta) que aparece
 * al hacer clic en una imagen, mostrando esa imagen en grande
 * sobre un fondo oscuro.
 * 
 * ¿CÓMO FUNCIONA?
 * 1. Las miniaturas están en la galería
 * 2. Al hacer clic, se abre el lightbox con la imagen grande
 * 3. Al hacer clic en la X o fuera de la imagen, se cierra
 * 
 * ============================================
 * VARIABLES GLOBALES
 * ============================================
 */

/**
 * lightbox: El contenedor del overlay (fondo oscuro + imagen + botón)
 * lightboxImage: La etiqueta <img> dentro del lightbox que mostrará la imagen grande
 */
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightbox-image");

/**
 * ============================================
 * FUNCIÓN: openLightbox
 * ============================================
 * ¿QUÉ HACE?
 * Recibe una ruta de imagen y la muestra en el lightbox.
 * 
 * ¿CÓMO LO HACE?
 * 1. Cambia el atributo 'src' de lightboxImage por la nueva imagen
 * 2. Cambia el display del lightbox de 'none' a 'flex' (lo hace visible)
 * 
 * @param {string} src - Ruta completa de la imagen a mostrar
 */
function openLightbox(src) {
  lightboxImage.src = src;           // Asigna la nueva imagen
  lightbox.style.display = "flex";   // Muestra el lightbox
}

/**
 * ============================================
 * FUNCIÓN: closeLightbox
 * ============================================
 * ¿QUÉ HACE?
 * Oculta el lightbox completamente.
 * 
 * ¿CÓMO LO HACE?
 * Cambia el display del lightbox de 'flex' a 'none'
 */
function closeLightbox() {
  lightbox.style.display = "none";    // Oculta el lightbox
}

/**
 * ============================================
 * EVENTO 1: Botón de cerrar (X)
 * ============================================
 * Cuando el usuario hace clic en el botón ✖️,
 * se ejecuta closeLightbox()
 */
var closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeLightbox);

/**
 * ============================================
 * EVENTO 2: Clic fuera de la imagen
 * ============================================
 * Si el usuario hace clic en el fondo oscuro (no en la imagen),
 * también se cierra el lightbox.
 * 
 * ¿Cómo sabe que fue en el fondo?
 * e.target es el elemento donde se hizo clic.
 * Si e.target === lightbox, significa que el clic fue en el overlay,
 * no en la imagen ni en el botón.
 */
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {   // ¿El clic fue en el fondo oscuro?
    closeLightbox();              // Si sí, cerrar
  }
});

/**
 * ============================================
 * EVENTO 3: Clic en miniaturas de la galería
 * ============================================
 * ¿QUÉ HACE?
 * Escucha todos los elementos con clase "gallery-item"
 * y cuando uno es clickeado, abre el lightbox con su imagen grande.
 * 
 * ¿Por qué usar replace?
 * Las miniaturas tienen nombres como "stonehenge-thumbnail.jpg"
 * La imagen grande es "stonehenge.jpg" (sin "-thumbnail")
 * replace("-thumbnail", "") elimina esa parte del nombre.
 */
var galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Paso 1: Crear la URL de la imagen grande
    var fullSrc = item.src.replace("-thumbnail", "");
    
    // Paso 2: Abrir el lightbox con esa imagen
    openLightbox(fullSrc);
  });
});



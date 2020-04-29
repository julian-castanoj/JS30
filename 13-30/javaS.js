// Funcion para el movimiento de la imagen
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

// Seleccion de imagenes por la etiqueta dada
const sliderImages = document.querySelectorAll('.slide-in');

// Funcion activada por el desplazamiento
function checkSlide(e) {
    sliderImages.forEach(sliderImage => { // Saber donde mostrar la imagen
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // Deslizar por la posicion en el 50%
        const imageBottom = sliderImage.offsetTop + sliderImage.height; 
        const isHalfShown = slideInAt > sliderImage.offsetTop; 
        const isNotScrolledPast = window.scrollY < imageBottom; // Desplazamiento mas alla de la imagen 
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    }); 
}

window.addEventListener('scroll', debounce(checkSlide)); // Cada que se desplace la pagina 
const divs = document.querySelectorAll('div'); // Selecciona las etiquetas div
const button = document.querySelector('button'); // Selecciona los botones

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); 
    //console.log(this);
}

// Funcion de registro 
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, 
    //capture: true, 
    once: true, 
}));

button.addEventListener('click', () => {
    console.log('Click!');
}, {
    once:true,
});
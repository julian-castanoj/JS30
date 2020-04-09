
// Transforma el codigo abierto cuando se haga click en las imagene, primero activa el css luego el codigo 
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
};

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');    
    }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //Bucle del click
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
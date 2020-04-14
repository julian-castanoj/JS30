// Empezando pantalla de color
const canvas = document.querySelector('#draw');

// Modo de pintar
const ctx = canvas.getContext('2d'); // Pintada 2d

//Largo y ancho
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // Color
ctx.lineJoin = 'round'; // Forma de rellenar
ctx.lineCap = 'round'; // Extremos de la linea redondeados
ctx.lineWidth =  100;
ctx.globalCompositeOperation = 'multiply'; // Mezclar cuando se soprepongan las lineas

let isDrawing = false; // Pintar o pazar sobre la pantalla

// Inicio y fin de la linea
let lastX = 0;
let lastY = 0;

// HSL color
let hue = 0;

let direction = true;


// Llamar la funcion dibujar
function draw(e) {
    if (!isDrawing) return; // Detener la ejecucuion cuando 
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // HSL Empieza en rojo 100% S, 50% L
    ctx.beginPath(); 
    ctx.moveTo(lastX, lastY); // Seguimiento del raton
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); // Click linea

    [lastX, lastY] = [e.offsetX, e.offsetY]; // Actualizar X,Y
    
    // Incremento cambio de color
    hue++;
    if (hue >= 360) { // Restablecer
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { // Cambio de direccion
        direction = !direction; 
    }    

    // + o - ancho de linea segun la direccion 
    if (direction) {
        ctx.lineWidth++; // T para +
    } else {
        ctx.lineWidth--; // F para -
    }
}

// No empezar desde 0
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Actualizar X,Y

    
});

canvas.addEventListener('mousemove', draw); 
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; 

function shadow(e) {
    // Obtiene largo y ancho de del hero
    const { offsetWidth: width, offsetHeight: height } = hero;
    // Otra forma 
    //const width = hero.offsetWidth;
    //const height= hero.offsetHeight;

    // Ubicacion del cursor 
    let { offsetX: x, offsetY : y } = e;

    // Cambio de e.target
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    // Margenes del sombreado del texto
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    // Estilo de texto
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), 
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow); // La funcion se activa al mover el mouse 
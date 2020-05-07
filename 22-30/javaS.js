const triggers = document.querySelectorAll('a'); // Selecciona todos los links
const highlight = document.createElement('span'); // Subrayado
highlight.classList.add('highlight'); // Agrega la clase anterior 
document.body.appendChild(highlight); // Agregar en el dominio

function highlightLink () {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  
  // Aplica Style
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Click para ejecutar la funcion
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
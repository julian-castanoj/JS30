const speed = document.querySelector('.speed'); // Velociad
const bar = document.querySelector('.speed-bar'); // Barra de velocidad
const video = document.querySelector('.flex'); // Video

speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop; // Mostrar la velociad
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%'; 
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height; // Estilo y posicion de la barra
    bar.textContent = playbackRate.toFixed(2) + '×'; // Actualizar # de la barra
    video.playbackRate = playbackRate; // Aplicar velocidad
});
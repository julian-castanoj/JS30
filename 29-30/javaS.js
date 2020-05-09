let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]'); // Atributo de date-time de datos 

function timer (seconds) {
  // Borrar temporizadores existentes 
  clearInterval(countdown);
  
 const now = Date.now(); // Tiempo actual
 const then = now + seconds * 1000 // Temporizador en milisegundos * 1000 = segundos
 displayTimeLeft(seconds); // Correr inmediatamente 
 displayEndTime(then);

 // Mostrar tiempo por segundo
 countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); 
    if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
    displayTimeLeft(secondsLeft);
 }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`; 
    document.title = display // Actualizar titulo
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Se termina a las: ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }
  
  buttons.forEach(button => button.addEventListener('click', startTimer));
  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });
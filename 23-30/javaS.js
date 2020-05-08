const msg = new SpeechSynthesisUtterance(); 
let voices = []; // Array de voces
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak'); // Empezar a hablar
const stopButton = document.querySelector('#stop'); // Parar de hablar
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
    voices = this.getVoices(); // Sobre-escribir array de voces
    voicesDropdown.innerHTML = voices
    //.filter(voice => voice.lang.includes('es')) // Voces en español
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) // Todas la voces en español 
    .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value); // Seleccion de voz
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel(); // Parar de hablar
    // Resetear hablar
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices); // Variable global para las diferentes voces
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
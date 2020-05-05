window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Variable local

const recognition = new SpeechRecognition();
recognition.interimResults = true; // Ver lo que hablamos
recognition.lang = 'es-CO'; // API de Google Chrome para el soporte de idiomas 'es-CO' español Colombia  

let p = document.createElement('p'); // Crear nuevo parrafo
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // Convierte en String
    const transcript = Array.from(e.results) 
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
        p.textContent = poopScript; // Crear otro parrafo
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
    
});

recognition.addEventListener('end', recognition.start); // Al finalizar vuelve a ejecutar la funcion

recognition.start();
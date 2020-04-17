const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; // Asignar una constante

function handleCheck(e) {

   // Marcar o no marcar

  let inBetween = false;

  if (e.shiftKey && this.checked) {

    // Verificacion
    
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            console.log('Starting to check them inBetween!');
        }

        if (inBetween) {
            checkbox.checked = true;
        }
    });
  }
    
    lastChecked = this;
};


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); // Click para activar la funcion
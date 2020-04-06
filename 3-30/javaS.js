// Selecciona todos los controls <div> llamando a todos los input
const inputs = document.querySelectorAll('.controls input'); //Los llama como nodos

// Creamos una funcion para manejar las actualizaciones

function handleUpdate(){ // Saca los valores
 const suffix = this.dataset.sizing || ''; // Dataset: un objeto que contendrá todos los atributos de datos de ese elemento / tamaño específico (||) , o, nada ('')
 document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Actualiza la variable
}

// Bucle utilizado para cada funcion 
inputs.forEach(input =>input.addEventListener('change', handleUpdate));
inputs.forEach(input =>input.addEventListener('mousemove', handleUpdate));

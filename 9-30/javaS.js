

const  dogs = [{ name: 'Pancho', age: 5 }, { name: 'Horus', age: 7 }];

// Pintar de verde al click
function makeGreen(){
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hola');

// Interpolar
console.log('hola yo soy %s una cadena', '💩'); // Intercambia %s con con la siguiente 

// Estilo
console.log('%c Yo soy un lindo texto :3', 'font-Size: 50px; background: green; text-shadow: 10px 10px 0 white')

// Advertencia
console.warn('Ñero me dañaron'); // Muestra un advertencia en la consola

// Error
console.error('La cago, mi perro'); // Muestra un error en la consola

// Info 
console.info('Un nea se deleita 3-4 ñeras a la semana');

// Prueba, T o F si es T no muestra el mensaje de error
console.assert(1 === 1, 'Ñero esto esta mal'); // Este mensaje no saldra ya que es T
console.assert(1 === 2, 'Ñero esto esta mal');

const p = document.querySelector('p');
console.assert(p.classList.contains('Duele'), 'que asare!');

// Limpiar consola
// console.crear();

// Ver elementos DOM
console.log(p);
console.dir(p);

// Agrupar
dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`Nombre ${dog.name}`);
        console.log(`${dog.name} tiene ${dog.age} años`);
        console.log(`${dog.name} tiene ${dog.age * 7} años de perro`);
        console.groupEnd(`${dog.name}`);
});

// Contador de palabras, numeros, objetos entre otros
console.count('Jimmy');
console.count('Jimmy');
console.count('Topo');
console.count('Topo');
console.count('Jimmy');
console.count('Topo');
console.count('Jimmy');
console.count('Topo');
console.count('Topo');
console.count('Topo');
console.count('Topo');
console.count('Topo'); 

// Tiempo de consumo
 console.time('Recuperacion de datos');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('Recuperacion de datos');
        console.log(data);
});
      
console.table(dogs);


//Iniciamos un array

const inventors = [
					{ first: 'El topo' , last: 'Rodríguez', year: 1995, passed: 2020 },
					{ first: 'Ochoqu' , last: 'Chupel', year: 1671, passed: 2006 },
					{ first: 'Gordoo' , last: 'Obeso', year: 1873, passed: 1908 },
					{ first: 'El Yisus' , last: 'Santa Mariana', year: 1654, passed: 1679 },
					{ first: 'Ingrato' , last: 'Quintero', year: 1777, passed: 1922 },
					{ first: 'El cojo' , last: 'Sin pierna', year: 1583, passed: 2013 },
					{ first: 'La Waifu' , last: 'Hardcore', year: 1943, passed: 1978 }
				];

const people  = [
				 'Luciana, Rodríguez','José, Martínez','Santiago, Gómez','Matías, González','Salomé, García',
				 'Samuel, López','Isabella, Gómez','Jerónimo, Hernández','Emmanuel, Pérez','Emiliano, Sánchez',
				 'Maximiliano, Díaz','Mathias, Ramírez','Mariana, Torres','Sebastián, Muñoz','Martín, Rojas',
				 'Raquel, Jiménez','Gabriela, Moreno','Juliana, Ortíz','Mariange, Vargas','Manuel, Asprilla',
				 'Felie, Perez','Valentina, Castaño','Andres, Jimenez','Yulith, Alvares','Laura, Rojas',
				 'Carlos, Andrade','Antonella, Mesa','Hasel, Betancur','Duvan, Ren','David, Gómez',
				 'Samantha, Arsilla ','Camila, Torres','Valeria, Isaza','Daniel, Loaiza','Camilo, Velez',
				  'Susana, Perez','Sofia, Cordero','Andrea, Olarte','Daniela, Jaramillo','Daniel, Herrera','Anni, Demacia'
				];	

//Filtrar un array "Array.prototype.filter()"
const result = inventors.filter(function(inventor) {
	if (inventor.year >= 1500 && inventor.year < 1600) {
		return true; 
	}
});
console.log(result);

// Filtrar mas organizado 
const results = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(results); // Imprime en tabla 

// Filtrado de datos espesificos Array.prototype.map()
// Consulta por nombres y apellidos 
const nombreCompleto = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(nombreCompleto);

const NomAp = inventors.map(inventor=> inventor.first + ' ' + inventor.last);
console.log(NomAp);

// Filtrado por orden Array.prototype.sort()
// De mayor a menor
const orden = inventors.sort(function (a, b)) {
	if (a.year > b.year) {
		return 1;
	} else {
		return -1;
	} 
}

console.table(orden);

//Otra forma de hacerlo
const ordenado = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordenado);

// Operacion dentro de un Array Array.prototype.reduce()
// Años vividos 
const totalAños = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(totalAños);

// Mas viejo  
const viejo = inventors.sort(function (a, b){
	const primero = a.passed - a.year;
	const segundo = b.passed - b.year;
	return primero > segundo ? -1 : 1;

});
console.table(viejo);

/*const categoria = document.querySelector('.mw-category');
const links = array.from(categoria.querySelector('a'));
const de = links
			  .map(link => link.textContent)
			  .filter(streetName => streetName.includes('de'));*/

// Ordenar por nombre
const alpha = people.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.table(alpha);

// Mirar cantidad en un array
const datos = ['carro', 'carro', 'camion', 'camion', 'bicicleta', 'como nando', 'carro', 'van', 'bicicleta', 'como nando', 'carro', 'van', 'carro', 'camion' ];
const transportacion = datos.reduce(function(obj, item){
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {}); // Nuevo array en blanco
console.log(transportacion);		  
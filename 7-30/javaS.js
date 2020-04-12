// Array Cardio 2.0

const people = [
                  { name: 'Julia', year: 1988 },
                  { name: 'Maria', year: 1986 },
                  { name: 'Juaquin', year: 1970 },
                  { name: 'Pedro', year: 2015 }
                ];

  const comments = [
                      { text: 'Excelente', id: 523423 },
                      { text: 'Bueno', id: 823423 },
                      { text: 'Eres crack', id: 2039842 },
                      { text: 'Solo pastas loka', id: 123523 },
                      { text: 'Ome ome ome', id: 542328 }
                    ];


// Consulta si una persona tiene masde 19 años
const isAdult = people.some(function(person) {
    const currentYear  = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
});

console.log(isAdult); // O console.log({isAdult});

// Otra forma de hacerlo
const isAdulto = people.some(person => {
    const currentYear  = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

console.log(isAdulto); // O console.log({isAdulto});

// Otra mas
const isAdultos = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log(isAdultos); // O console.log({isAdultos});


  // Array.prototype.every() // Todos tienen => 19?
  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
  console.log(allAdults); // O console.log({allAdults});


  // Array.prototype.find()
  // Filtrar pero devuelve todo
  // Comentario que coincide con 823423
const coment = comments.find(function(coment) {
    if (coment.id === 823423) {
        return true;
    } else {
        return false;
    }
});
console.log(coment);

// Otra forma:
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);


  // Array.prototype.findIndex()
  // Buscar ID 823423 y eliminar comentario
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// Eliminando
// comment.splice(index, 1); 

// Otra forma:
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];
console.log(newComments);
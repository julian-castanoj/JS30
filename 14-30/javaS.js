let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

// Crear un array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// Hacer una copia 
const team = players;
console.log(players, team);

team[3] = 'Lux'; // Reemplaza la 3 posicion del array 

console.log(team);

console.log(players); // Pero tambien se reemplaza en la original 

// El problema es que es una referencia no una copia del array original 

// Devolver toda la matris o concatenar en la nueva 
const team2 = players.slice();
const team3 = [].concat(players);

console.log(team2);
console.log(team3);

// Usar ES6
const team4 = [...players];
team4[3] = 'heee haww'
console.log(team4);

const team5 = Array.from(players);

// Esto solcuiona el primer error 
// lo mismo sucede con los objetos 

const person = {
  name: 'Wes Bos',
  age: 80
};

const cap2 = Object.assign({}, person, {number: 99, age:12});
console.log(cap2);

const wes = {
    name: 'Wes',
    age:100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};

console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
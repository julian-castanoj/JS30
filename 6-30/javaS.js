// Llama al json creado en gist.github
const endpoint = 'https://gist.githubusercontent.com/julian-castanoj/10061e2b9f2fc0c8eb80ec58fecfff58/raw/e61794dc32d3ce90727fb3854fb2d7533715bc4d/Colombia.json'; //all info about cities

/// Array para las ciudades
const cities = [];

// Obtiene los datos
fetch(endpoint) //convierte los blob en formato json
    .then(blob => blob.json())
    .then(data => cities.push(...data)); //agrega a array ciudades

//crea una funcion que filtra el array en un subconjunto
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
    //  Coincide con el buscado (ciudad o estado)
        const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex) 
    });
}

// Funcion para crear ','
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

// Funcion para visualizar lo buscado
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html  = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // Reemplaza lo que coincida con una clase de resaltado
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
         <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
         </li>
       `;
    }).join('');
    suggestions.innerHTML = html;
  }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // Hace que cuando se llame el evento se ejecuta 
searchInput.addEventListener('keyup', displayMatches);
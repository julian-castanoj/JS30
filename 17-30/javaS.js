const bands = ['Vens', 'Prado', 'Converse', 'Normal Jean', 'The Bl3d', 'Numa', 'Roxana', 'Adios', 'Like', 'Daniel', 'Tuma', 'Sunbucks coffe', 'CocaColla'];


function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Forma corta
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
    // Forma larga
//const sortedBands = bands.sort(function(a, b) {
    //if (strip(a) > strip(b)) {
        //return 1;
    //} else {
        //return -1;
    //}
//});

document.querySelector('#bands').innerHTML = 
sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);
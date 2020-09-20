var hbs = require('hbs');

// helpers, es una funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

// MOnstrar un arreglo de palabras, la primera en mayuscula y el resto en minuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); // elimina los espacios
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    // juntar el arreglo y separarlo por un espacio
    return palabras.join(' ');
})
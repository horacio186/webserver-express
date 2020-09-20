const express = require('express')
const app = express()

var hbs = require('hbs');

// importacion de los helpers
require('./hbs/helpers');

// variable global para definir el puerto para HEROKU, sino existe asume 3000
const port = process.env.PORT || 3000;

// indica la carpeta publica
app.use(express.static(__dirname + '/public'));

// Express HBS engine, indica el path de los parciales
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


// renderiza el archivo home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'horacio'
            //  anio: new Date().getFullYear()
    });
});

// llamar al about
app.get('/about', (req, res) => {
    res.render('about');
    // anio: new Date().getFullYear()

});

/*
app.get('/', (req, res) => {
    // res.send('Hola mundo')
    let salida = {
        nombre: 'horacio',
        edad: 44,
        url: req.url
    };

    res.send(salida);

}) */


app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
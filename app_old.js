const http = require('http');


// cear servidor para peticiones http
http.createServer((req, res) => {
        // enviar un servicio json, 200 indica que se hace correctamente
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
                nombre: 'horacio',
                edad: 44,
                url: req.url
            }
            //res.write('hola mundo');
            // enviar el objeto
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('escuchando el puerto 8080');
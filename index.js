//const Math = require('./modules/math.js');
//const os = require('os');
//const fs = require('fs');
//const http = require('http');
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');


//console.log(Math);

//console.log(Math.add(1,2));
//console.log(Math.substract(1,2));
//console.log(Math.multiply(1,2));
//console.log(Math.divide(2,1));

/*
console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divide(1,1));
*/

//console.log(os.arch(),os.release(),os.endianness(),os.platform());

//codigo async  ejemplo de creacion de archivo explicacion de codigo asyn y bloqueante
/*
fs.writeFile('./texto.txt','ejemplo 1', function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Archivo Creado');
        }
});

console.log('Ultima linea del script');*/

// para leer archivos 
/*fs.readFile('./texto.txt',function(err,datos){
    if(err){
        console.log(err);
    }else{
        console.log(datos.toString());
    }
});*/


// part HTTP
/*
const handleServer = function(req, res){
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1> Hello World From NodeJs</h1>');
    res.end();
}


const  server = http.createServer(handleServer);
 server.listen(2019, function(){
     console.log('server on port 2019'.underline.green);
 });*/

// parte minima de framework express
/*
const server = express();

server.get('/', function(req,res){
    res.send('<h1> Hello World From NodeJs + Express </h1>');
    res.end();
});

server.listen(2019, function(){
    console.log('Server On port 2019'.underline.green);
});*/


//Middleware tratan objetos o informacion que reciben del navegador
const server = express();
const route = require('./route');
const routeApi = require('./route-api');
// setting lo que nos permite es configurar o add variables

server.set('serverName', 'First Server on Nodejs');
server.set('views',__dirname + '/views');
//console.log(__dirname);

//morgan middleware
server.use(morgan('combined'));
/*
ya esto lo podemos hacer con morgan solo con la linea de arriba
server.use((req,res, next) => {
    console.log('request url :' + req.url);
    next(); 
});*/

/*
esto es otro middleware basic creado
server.use((req,res,next)=>{
    console.log('Ha pasado por esta funcion');
    next();
});*/
//routes

server.use(route);
// usando api para otra ruta 
server.use('/api',routeApi);

server.get('*',(req,res)=>{
    res.end('Not Found');
    });

server.listen(5000, ()=>{
    console.log('Server On port 5000'.underline.green);
    console.log('Nombre del Server: '.underline.green,server.get('serverName').underline.green);
});

// MIDDLEWARE puedes crealos o usar los ya hechos 
// Motores de plantillas para express EJS, ERB, PUG

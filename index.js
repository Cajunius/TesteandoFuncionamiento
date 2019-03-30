//Require de express
const express = require('express')
const app = express()

//Require de un modulo creado por el usuario. Desustructuración de los datos.
const {argv, obtenerPromedio} = require ('./datos.js');

console.log(argv);
if (argv._[0] == 'promedio'){
  texto=('El promedio de ' + argv.n + " es: " + obtenerPromedio(argv.m, argv.i, argv.p));
}
else{
  texto='Promedio no calculado';
}
console.log(texto);
 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)
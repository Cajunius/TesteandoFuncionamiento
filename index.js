/*
A continuación tenemos una implementación con demaisada información....

const estudiante1 = require ('./Segundo_require_interno_calculos');

console.log(estudiante1.estudiante);
console.log("El promedio del estudiante es: " + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.programacion));

... pero si le aplicamos la desesturturación quedaría:
*/

//Require de un modulo creado por el usuario. Desustructuración de los datos.
const {estudiante, obtenerPromedio} = require ('./Segundo_require_interno_calculos');
//Require interno (modulo propio de Node.js)
const fs = require('fs'); //modulo nativo de Node.js 'FileSystem' que permite el manejo de archivos.

console.log("El nombre del estudiante es: " + estudiante.nombre);
console.log("El promedio del estudiante es: " + obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

//Aún hay exceso de información. Sigamos desestructurando los datos, para optimizar el código y facilitar la escritura.
let {nombre, edad : años, notas: {matematicas, ingles, programacion}} = estudiante;
console.log("El nombre del estuiante es: " + nombre);
console.log("El promedio del estudiante es: " + obtenerPromedio(matematicas,ingles,programacion));
console.log("La edad del estudiante es: " + años); // Con el operador ':' podemos definir sinonimos par alas variables...Ej.: edad : años
// console.log("o... " + edad + " años"); ESTO DARIA ERROR YA QUE AHORA 'edad' es 'años'

let crearArchivo = (estudiante) => {
  //Función flecha (=>) que crea un archivo con el texto indicado.
  texto = 'El nombre del estudiante es: ' + nombre + '\n' +
          'Ha obtenido un promedio de: ' + obtenerPromedio(matematicas,ingles,programacion);
  fs.writeFile('Promedio.txt', texto, (err) => {
    if(err) throw (err); //Si hay un error _arroja_ un mensaje de error
    console.log("Se ha creado el archivo exitosamente."); //Sino, indica que se creo el archivo exitosamente.
  });
}

//Ahora, creemos el archivo.
crearArchivo (estudiante); 
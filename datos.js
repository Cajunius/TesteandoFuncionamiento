const opciones = {
  nombre: {
    default: 'PP',
    alias: 'n'
  },
  matematicas: {
    default: 0,
    alias: 'm'
  },
  ingles: {
    default: 0,
    alias: 'i'
  },
  programacion: {
    //default: 0,
    demand: true,
    alias: 'p'
  }
}


//Require externo (un modulo del NPM, en este caso 'yargs')
const argv = require('yargs')
            .command('promedio','Calcular el promedio', opciones)
            .argv

let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos + nota_tres) / 3;

//console.log(obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

module.exports = {
  argv,
  obtenerPromedio
};
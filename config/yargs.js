const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
      .command('crear','Crear un elemento por hacer',{
        descripcion
      })
      .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado,
      })
      .command('borrar','Borrar un elemento por hacer',{
        descripcion
      })
      .command('listar','Lista todas las tareas por hacer')
      .help().argv;

module.exports = {
  argv
}

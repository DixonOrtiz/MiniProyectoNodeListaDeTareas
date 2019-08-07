//Se configuran los comando de consola que admite la aplicación utilizando yargs
const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente una tarea."

}

const argv = require("yargs")
    .command("crear", "Se crea una tarea por hacer", {
        descripcion
    })
    .command("actualizar", "Se actualiza una tarea por hacer.", {
        descripcion,
        completado              
    })
    .command("borrar", "Se borra una tarea de lo registros.", {
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }
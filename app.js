const {argumentos} = require("./configuraciones/yargs");
const {agregarTarea, listarTareas, actualizarTarea, borrarTarea} = require("./funciones/por-hacer");

let comando = argumentos._[0];

switch(comando){
    case "crear":
        agregarTarea(argumentos.descripcion);
        break;
    
    case "listar":
        listarTareas();
        break;

    case "actualizar":
        actualizarTarea(argumentos.descripcion, argumentos.completado);
        break;
    
    case "borrar":
        borrarTarea(argumentos.descripcion);
        break;
    
    default:
        console.log("Comando no reconocido.");
}
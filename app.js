const {argv} = require("./configuraciones/yargs");
const {agregarTarea, listarTareas, actualizarTarea, borrarTarea} = require("./funciones/por-hacer");

let comando = argv._[0];

switch(comando){
    case "crear":
        agregarTarea(argv.descripcion);
        break;
    
    case "listar":
        listarTareas();
        break;

    case "actualizar":
        actualizarTarea(argv.descripcion, argv.completado);
        break;
    
    case "borrar":
        borrarTarea(argv.descripcion);
        break;
    
    default:
        console.log("Comando no reconocido.");
}
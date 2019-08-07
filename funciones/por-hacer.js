const fs = require("fs");
const colors = require("colors");

//Se manipulan los datos del json a través de este arreglo (cargando y guardando)
let arregloTareas = [];

//Función que carga lo datos de "data.json" en el arreglo "arregloTareas"
let cargarDB = () => {
    try {
        arregloTareas = require("../db/data.json");       
    } catch (err) {
        arregloTareas = [];        
    }
}

//Función que actualiza el archivo "data.json"
let guardarDB = () => {
    let data = JSON.stringify(arregloTareas);

    fs.writeFile("db/data.json", data, (err) => {
        if(err) throw new Error("No se pudo grabar.", err);
    })
}

//Función que agregar una tarea a data.json
let agregarTarea = (descripcion) => {
    cargarDB();

    let index = arregloTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index === -1){
        let porHacer = {
            descripcion,
            completado: false
        };

        arregloTareas.push(porHacer);   
    
        guardarDB();  
        
        console.log(`La tarea "${descripcion}" fue agregada satisfactoriamente.`);
    }

    else{
        console.log("Esta tarea ya existe.");
    }
}

//Función que imprime una tarea de color amarillo si está por hacer y verde si está hecha
let imprimirTareaSegunCompletado = (tarea, contador) => {
    if(tarea.completado === false){
        console.log("======Por Hacer======".yellow);
        console.log(`${contador}) Tarea: ${tarea.descripcion}\n   Completado: ${tarea.completado}`);
        console.log("=====================".yellow, "\n");
    }

    else{
        console.log("========Hecha========".green);
        console.log(`${contador}) Tarea: ${tarea.descripcion}\n   Completado: ${tarea.completado}`);
        console.log("=====================".green, "\n");
    }
}

//Función que lista todas las tareas de "data.json"
let listarTareas = () => {
    cargarDB();

    let contador = 1;
    arregloTareas.forEach(tarea => {
        imprimirTareaSegunCompletado(tarea, contador)
        contador++;
    });
}

//Función que permite marchar una tarea como completada o no completada
let actualizarTarea = (descripcion, completado = true) => {
    cargarDB();
    
    let index = arregloTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index != -1){
        if(completado == "false")
            arregloTareas[index].completado = false;
        else{
            arregloTareas[index].completado = true;
        }
        
        guardarDB();
    }

    else{
        console.log(`No se encontró la tarea ${descripcion}`);
    }
}

//Función que permite borrar una tarea de los registros
let borrarTarea = (descripcion) => {
    cargarDB();
    
    let index = arregloTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index != -1){
        arregloTareas.splice(index, 1);
        guardarDB();
    }

    else{
        console.log(`No se encontró la tarea ${descripcion}`);
    }

}

module.exports = {
    agregarTarea,
    listarTareas,
    actualizarTarea,
    borrarTarea
}
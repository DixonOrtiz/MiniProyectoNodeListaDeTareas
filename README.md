## Aplicación de consola que simula una lista de tareas por hacer

Para instalar las dependencias:
```
npm install
```

Para crear tareas:
```
node app crear -d "Sacar a pasear al perro"
```

Para listar las tareas:
```
node app listar
```

Para marcar una tarea como completada:
```
node app actualizar -d "Sacar a pasear al perro"
```

Para marcar una tarea como no completada:
```
node app actualizar -d "Sacar a pasear al perro" -c false
```

Para borrar una tarea:
```
node app borrar -d "Sacar a pasear al perro"
```
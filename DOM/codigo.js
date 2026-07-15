//      ------ DOM ------
//      --- Document ---
let parrafo = document.getElementById("parrafo"); // Por ID
document.write(parrafo);
let parrafos = document.getElementsByTagName("p"); // Por Etiqueta
document.write(parrafos[1]);
let clase = document.querySelector(".francia"); // Por Clase, para ver un ID se utiliza # y el nombre del id.
document.write(clase);
let todos = document.querySelectorAll(".argentina"); // Selecciona todos los elementos que contengan la clase.
document.write(todos[3]);

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

//      --- Definir, Obtener y Eliminar ---
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type", "text"); //    Defino/Modifico el atributo type
let valorDelAtributo = rangoEtario.getAttribute("type"); // Obtengo el valor del atributo type
document.write(valorDelAtributo); // Muestro el valor que obtuvimos
rangoEtario.removeAttribute("type"); // Elimina el atributo type


//      --- Atributos Globales ---
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true"); //   Permite editar el contenido desde la pagina, no guarda el texto editado.
titulo.setAttribute("dir","rtl"); //        Recomendable hacer dentro de CSS.
titulo.removeAttribute("hidden"); //    Lo hicimos Aparecer con JavaScript.
const link = document.querySelector(".link");
link.setAttribute("tabindex", "3"); //    Permite hacer focus a un objeto
titulo.setAttribute("title","jajjajaja xd");


//      --- Atributos de Inputs ---
const input = document.querySelector(".input-normal");
const input2 = document.querySelector(".input-file");
document.write("<br><br>" + input.className); // Nos muestra el nombre de la clase
document.write("<br><br>" + input.value); //     Muestra el valor del input.
input.type = "range"; //    Cambiamos el tipo tambien
input2.accept = "image/png"; // con el tipo file en el HTML, aca podemos aceptar que clase de archivo se puede subir en este caso imagen en png.
const input3 = document.querySelector(".input-form");
input3.minLenght = 4; // le asigno al inpput la cantidad permitida de carecteres para enviar.
// input3.setAttribute("minLength","4"); otra manera
input3.placeholder = "a que no me podes escribir"; // modificamos el atributo placeholder
// input3.setAttribute("placeholder","a que no podes escribirme"); otra manera
input3.required = " "; //   Hace que el cuadro sea requerido(contenga texto) para enviar.


//      --- Atributo Style ---
const tituloh1 = document.querySelector(".tituloh1");
tituloh1.style.padding = "30px";
tituloh1.style.border = "2px solid #f00";
tituloh1.style.backgroundColor = "#000";
tituloh1.style.color = "#ddd";

//      --- ClassList ---
const tcl = document.querySelector(".titulo-cl")
tcl.classList.add("grande"); // Agrego una clase al elmento que lleva .titulo-cl rm
tcl.classList.remove("rm"); // Elimino la clase rm del elemento que lleva .titulo-cl rm
let item = tcl.classList.item(1); // accedo a una de las clases
document.write(item); // Muestro que clase.
let contains = tcl.classList.contains("grandes"); // Pregunto si se encuentra esta clase.
if (contains) {
    document.write("la clase existe");
    tcl.classList.remove("grande");
} else {
    document.write("la clase no existe.");
    tcl.classList.add("grande");
}
tcl.classList.toggle("grande", true); // Hace el mismo procedimiento del IF, y con el true se fuerza a que siempre la agregue.

tcl.classList.replace("rm", "add"); // remplaza la clase que tenga el elemento por otra que le asignemos(si existe).

//      --- Obtencion y Modificacion de Elementos ---
const obtencion = document.querySelector(".Obte");
let resultado = obtencion.textContent; // Nos devuelve el mismo texto, pero sin el HTML
document.write(resultado);
let resultado2 = obtencion.innerContent; // Nos devuelve el mismo texto, pero sin el HTML
document.write(resultado2);
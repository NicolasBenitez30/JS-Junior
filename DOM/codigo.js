//      ------ DOM ------
//      --- Document ---
let parrafo = document.getElementById("parrafo"); // Por ID
document.write(`<br> Mostrando Elemento por ID Parrafo: ${parrafo} efectivamente lo es.<br><br>`);
let parrafos = document.getElementsByTagName("p"); // Por Etiqueta
document.write(`Mostrando Elemento con la Etiqueta P nro2: ${parrafos[1]} efectivamente lo es.<br><br>`);
let clase = document.querySelector(".francia"); // Por Clase, para ver un ID se utiliza # y el nombre del id.
document.write(`Mostrando clase: ${clase} efectivamente lo es.br><br>`);
let todos = document.querySelectorAll(".argentina"); // Selecciona todos los elementos que contengan la clase.
document.write(`Mostrando todos los elementos de una clase: ${todos[3]} efectivamente lo es.<br><br>`);

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
document.write(`Mostrando nombre de la clase: ${input.className} <br><br>`); // Nos muestra el nombre de la clase
document.write(`Mostrando el valor de la clase: ${input.value} <br><br>`); //     Muestra el valor del input.
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
document.write(`Mostrando clase: ${item} <br><br>`); // Muestro que clase.
let contains = tcl.classList.contains("grandes"); // Pregunto si se encuentra esta clase.
if (contains) {
    tcl.classList.remove("grande");
} else {
    tcl.classList.add("grande");
}
tcl.classList.toggle("grande", true); // Hace el mismo procedimiento del IF, y con el true se fuerza a que siempre la agregue.

tcl.classList.replace("rm", "add"); // remplaza la clase que tenga el elemento por otra que le asignemos(si existe).

//      --- Obtencion y Modificacion de Elementos ---
const obtencion = document.querySelector(".Obte");
let resultadoTC = obtencion.textContent; // Nos devuelve el mismo texto, pero sin el HTML
document.write(`Resultado textContent: ${resultadoTC} <br><br>`);
let resultadoIT = obtencion.innerText; // Nos devuelve el mismo texto con estilos, pero sin el HTML
document.write(`Resultado innerText: ${resultadoIT} <br><br>`);
let resultadoIHTML = obtencion.innerHTML; // Nos muestra todo el contenino HTML
alert(resultadoIHTML);
let resultadoOHTML = obtencion.outerHTML; // Nos muestra todo el contenido incluyendo la propia etiqueta
alert(resultadoOHTML);

//      --- Creacion de Elementos ---
const contenedor = document.querySelector(".contenedor");

const item1 = document.createElement("LI"); // Creamos un elemento con la etiqueta LI

const textDelItem = document.createTextNode("Este es un item de la lista"); // Creamos un objeto texto

item1.appendChild(textDelItem); // Lo insertamos dentro del LI

contenedor.appendChild(item1); // Insertamos el LI dentro del contenedor DIV

const item2 = document.createElement("LI");
//      Esta es otra manera de modificar el valor o crear un text node y nos ahorramos 1 linea de codigo, pero esto no es un objeto texto.
item2.textContent = "Este es un segundo item de la lista";

contenedor.appendChild(item2);
//      Ahora lo que se hace para consumir menos recursos y agregar los items con su texto
const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++) {
    const item3 = document.createElement("LI");
    item3.innerHTML = "Esta es la nueva manera de agregar item en la lista"
    fragmento.appendChild(item3);
}
contenedor.appendChild(fragmento);


//      --- Obtencion y Modificacion de Childs
const contenedor2 = document.querySelector(".contenedor2")
const primerHijo = contenedor2.firstChild;
console.log(primerHijo); // Mostramos al primer hijo que seria texto, porque el texto es un objeto.
const ultimoHijo = contenedor2.lastChild;
console.log(ultimoHijo); // Mostramos al ultimo hijo igual que al anterior.
const primerElementoHijo = contenedor2.firstElementChild;
console.log(primerElementoHijo); // Mostramos al primer elemento hijo.
const ultimoElementoHijo = contenedor2.lastElementChild;
console.log(ultimoElementoHijo); // Mostramos al ultimo elemento hijo, de estas dos ultimas maneras lo podemos dejar bien identado.
const hijos = contenedor2.childNodes;
console.log(hijos); // Devulve un Node List de todos los hijos, no es un array, pero se puede recorrer con un foreach.
hijos.forEach(hijo => console.log(hijo));
const children = contenedor2.children;
console.log(children); // Devulve las etiquetas HTML, y con un for lo podemos recorrer.
for (child of children){
    console.log(child);
}


//      --- Metodos de Childs ---
const contenedor3 = document.querySelector(".contenedor3");
const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");
contenedor3.replaceChild(h2_nuevo,h2_antiguo); // Remplazamos el hijo antiguo por el nuevo.
const h4 = document.querySelector(".h4");
contenedor3.removeChild(h4); // Eliminamos el hijo

let respuestaHCN = contenedor3.hasChildNodes();

if (respuestaHCN) {
    document.write("El elemento tiene hijos")
} else {
    document.write("El elemeento no tiene hijos");
}


//      --- Propiedades de Parents ---
console.log(h2_antiguo.parentElement); // Devuelve el padre en HTML.
console.log(contenedor.parentNode); // Devuelve el padre sea una etiqueta HTML u otra cosa.


//      --- Propiedades de Siblings ---
console.log(h2_antiguo.nextSibling); // Devuelve el hermano siguiente, en este caso objeto texto
console.log(h2_antiguo.previousSibling); // Devuelve el hermano anterior, en este caso objeto texto
console.log(h2_antiguo.nextElementSibling); // Devuelve el Elemento siguiente, en este caso el h4.
console.log(h2_antiguo.previusElementSibling); // Devuelve el Elemento previo, en este caso es nada (undefined).


//      --- Nodos - Extra ---
const div = document.querySelector(".div-3");
console.log(div.closest(".div")); // Busca al padre ascendete mas cercano que contenga lo que seleccione.
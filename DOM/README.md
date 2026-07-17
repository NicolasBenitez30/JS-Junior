# DOM
Document Object Model es una interfaz que contiene todo los objetos estanderes que nos permiten representar un documento HTML, XSML o XHTML; Que a su vez tiene una interfaz que nos permite combinar elementos segun su identificador y otra que nos permite trabajarla con JavaScript.

## Nodo
Un Nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista; No siempre son etiquetas pueden ser otro tipo de elementos.
- Document: El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
- Element: Nodos definidos por etiquetas HTML.
- Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
- Attribute: Los atributos de las etiquetas definen nodos (en JavaScript no los veremos como nodos, sino como informacion asociada al nodo de tipo element).
- Comentarios y Otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

## Document - Metodos de Seleccion de Elementos
- getElementById(): Selecciona un elemento por ID
- getElementByTagName(): Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
- querySelector(): Devuelve el primer elemento que coincida con el grupo especificado de selectores.
- querySelectorAll(): Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

## Metodos para Definir, Obtener y Eliminar valores de Atributos.
- setAttribute(): Modifica el valor de un atributo.
- getAttribute(): Obtiene el valor de un atributo.
- removeAttribute(): Remueve el valor de un atributo.

## Atributos globales
- class: Lista de clases del elemento separadas por espacios.
- contenteditable: Indica si el elemento puede ser modificable por el usuario (bool).
- dir: Indica la direccionalidad del texto.
- hidden: Indica si el elemento aun no es, o ya no es, relevante.
- id: define un identificador unico.
- style: Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
- tabindex: Indica si el elemento puede obtener un focus de input.
- title: Contiene un texto con informacion relacionada al elemento al que pertenece.

##  Atributos de Imputs
- className:
- value:
- type:
- accept:
- form:
- minLenght:
- placeholder:
- required:

## Atributo Style
Nos permite modificar algo de CSS del atributo

## Classlist, Metodos de Classlit
Es una particularidad de las clases de los objetos
- add(): Añade una clase.
- remove(): Remueve una clase.
- item(): Devuelve la clase del indice especificado.
- contains(): Verifica si ese elemento posee o no, la clase especificada.
- replace(): reemplaza una clase por otra.
- toggle(): Si no tiene la clase especificada, la agrega, si ya le tiene, la elimina.

## Obtencion y Modificacion de Elementos
- textContent: Devuelve el texto de cualquier nodo.
- innerText: Devuelve el texto visible de un node element.
- outerText: Devuelve el texto de las etiquetas html incluidas las etiquetas. __Ya no se utiliza__

- innerHTML: Devuelve el contenido HTML de un elemento.
- outerHTML: Devuelve el codigo HTML completo del elemento.
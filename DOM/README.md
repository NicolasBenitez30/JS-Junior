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
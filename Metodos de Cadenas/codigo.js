let cadena = "cadena de prueba ";
let cadena2 = "cadena";
// UNE LAS DOS CADENAS
let resultado = cadena.concat(cadena2); 
document.write(resultado); // CADENA DE PRUEBA CADENA
//  COMPARA SI EMPIEZAN ESTRICATAMENTE IGUAL
let resultado1 = cadena.startsWith(cadena2);
document.write(resultado1); // TRUE
// COMPARA SI TERMINAN ESTRICTAMENTE IGUAL
let cadena3 = "prueba";
let resultado2 = cadena.endsWith(cadena3);
document.write(resultado2); // FALSE
// BUSCA CADENAS EN CUALQUIER PARTE
let resultado3 = cadena.includes("de ");
document.write(resultado3); // TRUE
// ES EXACTAMENTE IGUAL A LA ANTERIOR, PERO NOS DEVUELVE LA POSICION DONDE COMIENZA LA CADENA, SI LA ENCUENTRA SI NO DEVUELVE FALSE.
let resultado4 = cadena.indexOf("de ");
document.write(resultado4); // 7
// BUSCA ENTRE TODA LA CADENA LA ULTIMA COINCIDENCIA CON LA CADENA QUE BUSCAMOS Y NOS DEVUELVE SU POSICION. 
let cadena5 = "NICOLAS capo capo capo";
let resultado5 = cadena5.lastIndexOf("capo");
document.write(resultado5); // 18
// VA RELLENANDO LA CADENA DESDE EL INICIO CON LA CADENA QUE LE PASEMOS, HASTA QUE EL FINAL DE LA CADENA INICIAL LLEGUE A LOS CARACTERES PEDIDOS.
let resultado6 = cadena2.padStart(20, "8avos");
document.write(resultado6); // 8avos8avos8avocadena
// VA RELLENANDO PERO AL CONTRARIO QUE LA ANTERIOR, RELLENA EL FINAL DE LA CADENA. DESPUES ES EXACTAMENTE IGUAL.
let resultado7 = cadena2.padEnd(10, "8avos");
document.write(resultado7); // cadena8avo 
// DEVUELVE LA MISMA CADENA PERO LA CANTIDAD QUE QUERRAMOS.
let resultado8 = cadena2.repeat(3);
document.write(resultado8);
// DIVIDE LA CADENA COMO LE PIDAMOS
let cadena6 = "Hola como estas";
let resultado9 = cadena6.split("como");
document.write(resultado9[1]); // estas
// NOS DEVUELVE LO QUE SELECCIONAMOS DE LA CADENA, VALOR 1: DONDE INICIA, VALOR 2: LA CANTIDAD DE CARACTERES. 
let resultado10 = cadena6.substring(0, 3);
document.write(resultado10); // Hol
// CONVIERTE LA CADENA A MINUSCULA
let resultado11 = cadena5.toLowerCase();
document.write(resultado11); // nicolas capo capo capo
// CONVIERTE TODA LA CADENA A MAYUSCULA
let resultado12 = cadena5.toUpperCase();
document.write(resultado12); // NICOLAS CAPO CAPO CAPO
// CONVIERTE UNA CADENA EN STRING, SIRVE MAS QUE NADA PARA LOS NUMEROS.
let cadena7 = 50;
let resultado13 = cadena7.toString();
document.write(2 + resultado13); // 250
// ELIMINA TODOS LOS ESPACIOS DE LA CADENA
let resultado14 = cadena6.trim();
document.write(resultado14.length); // 13
// ELIMINA TODOS LOS ESPACIOS DEL FINAL
let cadena8 = "     cadena      ";
let resultado15 = cadena8.trimEnd();
document.write(resultado15.length); // 11
// ELIMINA TODOS LOS ESPACIOS DEL INICIO
let resultado16 = cadena8.trimStart();
document.write(resultado16.length + "<br><br>"); // 12


//      ------ METODOS DE ARRAYS ------
//          --- TRANSFORMADORES ---
let nombres = ["pedro", "maria", "jorge"];
document.write("Array Original: <b>" + nombres + "</b><br>");
//  POP: Muestra y Saca el ultimo Elemento de la lista(Array).
let resultadoPop = nombres.pop();
document.write("Elemento Removido: <b style='color:red'>" + resultadoPop.toUpperCase() + "</b><br>");
document.write("Resultado: <b>" + nombres + "</b><br><br>");
//  SHIFT: Remueve el primero elemento de la lista y lo devuelve.
let nombres2 = ["pedro", "maria", "jorge"];
document.write("Array Original: <b>" + nombres2 + "</b><br>");
let resultadoShift = nombres2.shift(); 
document.write("Elemento Removido: <b style='color:red'>" + resultadoShift.toUpperCase() + "</b><br>");
document.write("Resultado: <b>" + nombres2 + "</b><br><br>");
//  PUSH: Agrega elementos al final de la lista.
document.write("Array Original: <b>" + nombres + "</b><br>");
nombres.push("juancito", "julian");
document.write("Resultado: <b>" + nombres + "</b><br><br>");
// REVERSE: Devuelve el Array pero alreves.
let numeros = [1,2,3,4,5];
document.write(`Array Original: <b>${numeros}</b><br>`);
numeros.reverse();
document.write(`Reverse: <b>${numeros}</b><br><br>`);
//  UNSHIFT: Agrega elementos al principio de la lista.
document.write(`Array: <b>${numeros}</b><br>`);
numeros.unshift(0,9,8,7,6);
document.write(`UnShift: <b>${numeros}</b><br><br>`);
// SORT: Ordena los elementos de la lista de manera alfabetica lexico grafico.
document.write(`Array: <b>${numeros}</b><br>`);
numeros.sort();
document.write(`Sort: <b>${numeros}</b><br>`);
document.write("Nombres: <b>" + nombres + "</b><br>");
nombres.sort();
document.write("Nombres Sort: <b>" + nombres + "</b><br><br>");
// SPLICE: Elimina elementos de la lista segun la posicion y la cantidad que le indiquemos, tambien podemos reemplazar esos elementos indicandolo despues de las otras dos condiciones, tambien se puede solamente agregar elementos, indicando la posicion, indicando 0 elementos a eliminar y luego indicar los elementos a agregar al array.
document.write("Nombres: <b>" + nombres + "</b><br>");
nombres.splice(1,1, "julian", "enzo", "lionel");
document.write("Nombres Splice: <b>" + nombres + "</b><br><br>");

//      --- ACCESORES ---
//  JOIN: Nos separa los elementos de la lista de distinta manera
document.write("Nombres: <b>" + nombres + "</b><br>");
let resultadoJoin = nombres.join(" - ");
document.write("Resultado: <b>" + resultadoJoin + "</b><br><br>");
//  SLICE: Nos muestra los elementos a partir de la posicion y la cantidad
document.write("Nombres: <b>" + nombres + "</b><br>");
let resultadoSlice = nombres.slice(0, 2);// si queremos ver todos, usamos -1 en lugar de la cantidad o en este caso 2.
document.write("Resultado: <b>" + resultadoSlice + "</b><br><br>");


//          --- DE REPETECCION ---
//  FILTER: Crea un nuevo array con todos los elementos que cumplan la condicion.
document.write("Array: <b>" + nombres + "</b><br>");
let nombre;
let resultadoFilter = nombres.filter(nombre => nombre.length > 5);
document.write("Resultado: <b>" + resultadoFilter + "</b><br><br>");



//      ------ OBJETO MATH: BASICO ------
//          --- METODOS ---
//  SQRT: Devuelve la Raiz cuadrada del numero que indiquemos.
let numeroSQRT = Math.sqrt(25);
document.write(`Resultado Raiz Cuadrada de 25: <b>${numeroSQRT}</b><br>`);
// CBRT: Devuelve la Raiz Cubica del numero que indiquemos.
let numeroCBRT = Math.cbrt(27);
document.write(`Resultado Raiz cubica de 27: <b>${numeroCBRT}</b><br><br>`);
//  MAX: Devuelve el numero mas grande de la lista que le asignamos.
document.write(`Lista de numeros: <b>12,300,33,912,25,543</b><br>`);
let numeroMAX = Math.max(12,300,33,912,25,543);
document.write(`El Mas Grande: <b>${numeroMAX}</b><br><br>`);
//  MIN: Devuelve el numero mas chico de la lista que le asignamos.
document.write(`Lista de numeros: <b>12,300,33,912,25,543</b><br>`);
let numeroMIN = Math.min(12,300,33,912,25,543);
document.write(`El Mas CHICO: <b>${numeroMIN}</b><br><br>`);
//  RANDOM: Nos devuelve un numeor random entre 0 y 1.
let numeroRANDOM = Math.random()*100; // Si queremos que se entre 0 a 100 de esta manera lo logramos
document.write(`Numero Random entre 0 a 100: <b>${numeroRANDOM}</b><br><br>`);
// ROUND: Nos devuelve un numero entero redondeando mas cercano.
let numeroROUND = Math.round(numeroRANDOM);
document.write(`Numero Random entre 0 y 100 ENTERO: <b>${numeroROUND}</b><br><br>`);
// FLOOR: Nos da un numero en decimales redondeando a Entero para Abajo.
let numRAM2 = Math.random()*99
let numeroFLOOR = Math.floor(numRAM2+1);
document.write(`Numero Random entre 0 a 100 ENTERO: <b>${numeroFLOOR}</b><br><br>`);
// FROUND: Nos devuelve un numero redondeado de 4 bits decimales.
let numeroFROUND = Math.fround(7.777777712832213213432144212421);
document.write(`Numero : <b>${numeroFROUND}</b><br><br>`);
// TRUNC: Devuelve el numero sin sus decimales
let numeroTRUNC = Math.trunc(5.9999);
document.write(`Numero sin Decimales: <b>${numeroTRUNC}</b><br><br>`);

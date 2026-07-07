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
let resultado7 = cadena2.padEnds(10, "8avos")
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
document.write(resultado16.length); // 12
let numero = null; // Estamos Declarando una variable VACIA osea que tiene un valor (VACIO) 

let numero2 = 4;
let numero3 = "pedro";

alert(numero2 * numero3); // Estamos concatenando porque multiplicamos un number con string, Como resultado nos da NaN = NO es un numero, No podemos realizar esta operacion 

prompt("hola mundo"); // Es una funcion y dentro tiene un parametro. lo que hace esta funcion es que nos puede almacenar datos. 

let nombre = prompt("Escribe tu nombre"); // Le estamos diciendo que lo que escriba se guarde en la variable NOMBRE. 

alert(nombre); // Le pedimos que nos devuelva el resultado. 

let nombre2 = prompt("Dime tu nombre");

alert("hola " + nombre2);

let numero4 = 10;

numero4 += 5; // Le estamos dando a la variable una asignacion de adiccion "+=", le estoy sumando 5. 

document.write(numero4);

//      OPERADORES de ASIGNACION       
    Asignacion: =; Adiccion: +=; Sustraccion: -=; Multiplicacion: *=; division: /=; resto: %=; exponenciacion: **; desplazamiento a la izquierda: <<=; desplazamiento a la derecha: >>=; sin signo de desplazamiento a la derecha: >>>=; AND: &=; XOR: ^=; OR: |=; 


let numero5 = 10;

let numero6 = 5;

let resultado = numero5 + numero6;

alert(resultado);

numero6--; // Primero se define 

let resultado2 = numero6; // Despues se asigna. Para ejecutarlo bien. 

alert(resultado2); // Si queremos poner la variable aca con el operador argimetico, nos va a devolver el valor que le asignamos sin aplicar el operador "alert(numero6--);" porque se ejecuta despues, tenemos que asignarlo antes y despues ejecutar o llamar la variable como vemos arriba.  

//      OPERADORES ARIGMETICOS      
    Adiccion: numeroX + numeroX; Decreciente: numeroX--; Division: numeroX / numeroX; Exponencial: numeroX**numeroX; Incrementacion: numeroX++; Multiplicacion: numeroX * numeroX; Remainder: numeroX&numeroX; resta: numeroX - numeroX; unary negation: -numeroX; unary plus: +numeroX CREO;


//      CONCATENACION       
let saludo = "¡Hola Juan!";
let pregunta = " ¿Como estas?";

let frase = saludo + pregunta;

document.write(frase);

let texto = "" + numero2 + numero5;

document.write(texto);

let numero7 = "84";

let texto2 = numero7.concat(numero5); // la variabble que aplicamos la funcion tiene que ser un string, es decir que si fuera al reves por ejemplo "numero5.concat(numero7)" se rompe. 

document.write(texto2);

let nombre3 = "nicolas benitez";

let linea = ` soy ${nombre3} y estoy aprendiendo JS`;

document.write(linea);

//      Operadores de Comparacion        

let numero8 = 54;
let numero9 = 90;

document.write(numero8 == numero9);

let numero10 = 54;

document.write(numero8 == numero10); // preguntamos si la primera variable es igual a la segunda.  

let texto3 = "hola";
let texto4 = "como estas?";

document.write(texto3 != texto4); // Preguntamos si la primera variable no es igual a la segunda. 

let texto5 = "54";

document.write(numero10 === texto5); // Le preguntamos si la primera variabrle es estrictamente igual a la segunda variable.  

document.write(numero10 != texto5);
document.write(numero10 !== texto5); // Le preguntamos si la primera variabrle es estrictamente distinta a la segunda variable.  

document.write(numero8 > numero9); // Le preguntamos si la primera variable es mayor a la segunda. 
document.write(numero8 >= numero9); // Le preguntamos si la primera variable es mayor o igual a la segunda. 
document.write(numero8 < numero9); // Le preguntamos si la primera variable es menor a la segunda. 
document.write(numero8 <= numero9); // Le preguntamos si la primera variable es menor o igual a la segunda. 

//      Operadores Logicos       

let valor1 = true;
let valor2 = true;

let resultado3 = valor1 && valor2; // Si los dos valores son true devuelve TRUE, si un valor es False devuelve False, si ambos son false devuelve false. Asi funciona AND
let resultado4 = valor1 || valor2; // OR: Si hay aunque sea un valor verdadero devuelve true, si los dos son verdadero devuelve true, si los dos son falsos devuelve false
let resultado5 = !valor1; // NOT: Devuelve el valor contrario de la variable, si es verdadero devuelve False y si es Falso devuelve True

document.write(resultado3);

//      CONDICIONALES

let nombre4 = "esteban";
// Si cumpla esta condicion devuelve "tu nombre es nicolas". Se escribe por unica vez. Porque si escribimos otro if por mas que se cumpla el primer if, se ejecuta el segundo tambien, con el else if si se ejecuta la primera condicion no se ejecuta el else if.
if (nombre == "nicolas") {
    alert(`tu nombre es ` + nombre);
}
// Si la condicion anterior no se cumple y esta si cumple devuelve "tu nombre es benitez". Se puede poner la cantidad de else if que quieras
else if (nombre == "benitez") {
    alert(`tu nombre es ` + nombre);
}
// si ninguna de las anteriores se cumple devuelve "tu nombre es otro". Se escribe por unica vez.
else {
    alert("tu nombre es otro");
}


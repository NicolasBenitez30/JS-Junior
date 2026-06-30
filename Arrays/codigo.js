//      ------ ARRAY ------
let frutas = [" banana", " manzana", " mango", " frutilla"];

document.write(frutas[3]);
//      ------ ARRAY ASOCIATIVO ------
let pc1 = {
    nombre: "nicoPC",
    procesador: "Ryzen 7 2700u",
    ram: "12GB",
    almacenamiento: "256GB"
}

let pc2 = [" nicoPC", " Ryzen 7 2700u", " 12GB", " 256GB"];

document.write(pc2);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let almacenamiento = pc1["almacenamiento"];

let frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
             El procesador es: <b>${procesador}</b> <br>
             La ram es: <b>${ram}</b> <br>
             El Almacenamiento es: <b>${almacenamiento}</b>`

document.write(frase);
//      ------ BUCLE E ITERACION ------
//      WHILE: Si cumple la condicion ejecuta la tarea.
let numero = 0;
while (numero < 10) {
    numero++;
    document.write(numero + "<br>");
}
//      DO WHILE: primero ejecuta el codigo y despues pregunta la condicion, si se cumple la ejecuta hasta que de false.
let numero1 = 0;
do {
    document.write(numero1 + "<br>");
    numero1++;
}
while (numero1 <= 10);
//      BREAKE: Se va ejecutando hasta que se ejecute el break, el break finaliza el bucle.
let numero2 = 0;
while (numero2 < 1000) {
    numero2++;
    document.write(numero2);
    if (numero2 == 10) {
        break;
    }
}
document.write("fin");
//      FOR:
for (let i = 0; i < 20; i++) {
    if (i == 12) {
        continue;
    }
    document.write(i + "<br>");
}
//      CONTINUE: Se utiliza para saltear la iteracion y continuar el bucle.

//      FOR IN:
let animales = [" Elefante", " Mono", " Gato", " Gallina", " Perro"];
for (animal in animales) {
    document.write(animal + "<br>");
}
document.write("<br>");
//      FOR OF:
for (animal of animales) {
    document.write(animal + "<br>");
}

//      LABEL:
array1 = ["maria", "josefina", "roberta"];
array2 = ["pedro", "marcelo", array1, "marta"];

forBella:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1)
        {
         document.write(array + "<br>");
         continue forBella;   
        }
    }    
    else {
        document.write(array2[array] + "<br>");
    }
}

//      ------ FUNCIONES ------
//      DECLARANDO FUNCION
function saludar(){
    respuesta = prompt("¡Hola Nicolas! ¿Como fue tu dia?");
    if (respuesta == "bien") {
        alert("me alegro");
    }
    else {
        alert("una pena");
    }
}
//      LLAMANDO FUNCION
saludar();

//      RETURN:

function despedir(){
    alert("chau");
    return "La funcion se ejecuto correctamente.";
}

let despido = despedir();

document.write(despido);

//      PARAMETROS:
// Primera manera de hacer una funcion.
function suma(nombre, num1, num2){
    let res = num1 + num2;
    document.write(`¡Hola ${nombre}! Tu Resultado es el siguiente:`+ res + "<br>" );
}
suma("Nicolas",9,12); 

// Segunda manera de hacer una funcion.
const resta = function(nombre, num1, num2){
    let res = num1 - num2;
    document.write(`¡Hola ${nombre}! Tu Resultado es el siguiente:`+ res + "<br>" );
}
resta("ENZO",19,86);

// Tercera manera de hacer una funcion. Si hay un para metro va sin (), si no hay parametro va solo con (). Y si solo es una linea de codigo puede quedar asi "const multiplicar = nombre => document.write(`¡Hola ${nombre}! + "<br>");" para simplificarlo aun mas, esto se returna solo, no hace falta agregarlo.
const multiplicar = (nombre, num1, num2)=>{
    let res = num1*num2;
    document.write(`¡Hola ${nombre}! Tu Resultado es el siguiente:`+ res + "<br>" );
}
multiplicar("Marcelo",19,93);
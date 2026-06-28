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
//      FOR OF:
for (animal of animales) {
    document.write(animal + "<br>");
}
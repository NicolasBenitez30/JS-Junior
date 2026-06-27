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

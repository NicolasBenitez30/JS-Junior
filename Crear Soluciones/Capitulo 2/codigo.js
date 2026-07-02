//      ------ PRIMER PROBLEMA ------

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?")
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert("Podes pasar Gratis! Sos la primera persona despues de las 2 AM")
            free = true;
        } 
        else {
            alert(`Son las ${time}hs, Podes pasar pero tendras que pagar la entrada.`)
        }
    }
    else {
        alert("Mira Papu, sos menor de edad por ende no va a pasar, MAQUINOLA.");
    }
}

validarCliente(23);
validarCliente(22);
validarCliente(0);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);

//      ------ SEGUNDO PROBLEMA ------

let cantidad = prompt("¿Cuantos Alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0]

}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Asistencias: <b>${alumnosTotales[alumno][1]}</b> <br>
    ______Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if(30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style= 'color:red'>    REPROBADO POR INASISTENCIAS.</b><br><br>";
    }
    else {
        resultado+= "<br><br>";
    }
    document.write(resultado);
}

//      ------TERCER PROBLEMA------

const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2); 
}
const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2); 
}
const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2); 
}
const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2); 
}

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero11 = prompt("Primer numero para sumar");
    let numero22 = prompt("Segundo numero para sumar");
    let resultado2 = sumar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);
}
else if (operacion == 2) {
    let numero11 = prompt("Primer numero para restar");
    let numero22 = prompt("Segundo numero para restar");
    let resultado2 = restar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);

}
else if (operacion == 3) {
    let numero11 = prompt("Primer numero para dividir");
    let numero22 = prompt("Segundo numero para dividir");
    let resultado2 = dividir(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);

}
else if (operacion == 4) {
    let numero11 = prompt("Primer numero para multiplicar");
    let numero22 = prompt("Segundo numero para multiplicar");
    let resultado2 = multiplicar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);
}
else {
    alert("NO SE HA ENCONTRADO LA OPERACION.");
}
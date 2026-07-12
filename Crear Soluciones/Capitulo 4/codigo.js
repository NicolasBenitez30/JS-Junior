//      PROBLEMA 1: PERFECCIONAR CALCULADORA
class Calculadora {
    constructor(){}
sumar(num1, num2){
    return parseInt(num1) + parseInt(num2); 
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2); 
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2); 
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2); 
}
potenciar(num,exp){
    return num**exp;
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();
alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
    let numero11 = prompt("Primer numero para sumar");
    let numero22 = prompt("Segundo numero para sumar");
    let resultado2 =  calculadora.sumar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);
}
else if (operacion == 2) {
    let numero11 = prompt("Primer numero para restar");
    let numero22 = prompt("Segundo numero para restar");
    let resultado2 = calculadora.restar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);

}
else if (operacion == 3) {
    let numero11 = prompt("Primer numero para dividir");
    let numero22 = prompt("Segundo numero para dividir");
    let resultado2 = calculadora.dividir(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);

}
else if (operacion == 4) {
    let numero11 = prompt("Primer numero para multiplicar");
    let numero22 = prompt("Segundo numero para multiplicar");
    let resultado2 = calculadora.multiplicar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);
}
else if (operacion == 5) {
    let numero11 = prompt("Numero a potenciar");
    let numero22 = prompt("Exponente");
    let resultado2 = calculadora.potenciar(numero11, numero22);
    alert(`Tu resultado es: ${resultado2}`);
}
else if (operacion == 6) {
    let numero11 = prompt("Raiz Cuadrada de:");
    let resultado2 = calculadora.raizCuadrada(numero11);
    alert(`Tu resultado es: ${resultado2}`);
}
else if (operacion == 7) {
    let numero11 = prompt("Raiz Cubica de:");
    let resultado2 = calculadora.raizCubica(numero11);
    alert(`Tu resultado es: ${resultado2}`);
}
else {
    alert("NO SE HA ENCONTRADO LA OPERACION.");
}

//      PROBLEMA 2: FACULTAD

const obternerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto","pedro", "juan", "pepito"],
        logica: ["Benitez","pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez","pedro", "juan", "pepito", "cofla", "maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obternerInformacion(materia);
    if (informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`El Profesor de <b>${informacion[1]}</b> es: <b style='color: blue'>${profesor}</b><br> Los Alumnos presentes son: <b style='color: green'>${alumnos}</b><br><br>`)
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obternerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:green'>${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color: brown'>${clasesPresentes}</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));



//      PROBLEMA 3: INSCRIPCION

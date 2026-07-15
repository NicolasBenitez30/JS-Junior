//          PROBLEMA 1: TERMINO EL SEMESTRE
const materias = {
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    bbdd: [98,9,1,"bbdd"],
    biologia: [75,9,2,"biologia"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let puntaje = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencias >= 90) {
            console.log("%c     Asistencias en orden","color: #0f0");
        } else {
            console.log("%c     Falta de Asistencias","color: #f00");
        }

        if (puntaje >= 7){
            console.log("%c     Promedio Aprobado","color: #0f0");
        } else {
            console.log("%c     Promedio Desaprobado","color: #f00");
        }

        if (trabajos >= 3){
            console.log("%c     Trabajos Practicos Entregados","color: #0f0");
        } else {
            console.log("%c     Falta de Trabajos Practicos","color: #f00");
        }
    }
}

aprobo();

//          PROBLEMA 2: ORGANIZACION SEMANAL COFLA

let trabajo = "240 minutos de trabajo";
let descanso = "10 minutos de descanso";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos tareas de la casa";

console.log("TAREAS");
for (var i = 0; i < 14; i++) {
    if (i == 0){
        console.groupCollapsed("Semana 1");
    }
}
console.groupCollapsed("dia" + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7){
    console.groupEnd();
    console.groupCollapsed("Semana 2");    
}

console.groupEnd();
console.groupEnd();
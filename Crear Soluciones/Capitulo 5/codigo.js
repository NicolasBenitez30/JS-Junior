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

const asistencia = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        if (asistencias >= 90) {
            console.log(materias[materia][3]);
            console.log("%cAprobado","color: #0f0");
        } else {
            console.log(materias[materia][3]);
            console.log("%cDesaprobado","color: #f00");
        }
    }
}

asistencia();

//          PROBLEMA 2: TAREAS EN CASA
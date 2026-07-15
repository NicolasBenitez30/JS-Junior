//      --- FUNCIONES DE REGISTRO ---
console.assert(5 > 4);  // Pregunta si esta condicion es acertada, devuelve un Error si esto no es acertado.
console.clear();    // Limpia la consola.
console.error("¿Que carajo haces?");    // Muestra un Error con lo que asignemos.
console.info("buen trabajo, pero fijate que esta obsoleto"); // Mensaje de Informacion.
console.log("buen trabajo, pero fijate que esta obsoleto"); // Mensaje de Depuracion.
console.table([3,4,76,89,9,12,14]); // Crea una tabla con la posicion que se encuentra el elemento y el valor. Es importante que le asignemos un Objeto o Array, porque si no se muestra igual que .log
console.warn("che capo, venis bien, pero cuidado porque..."); // Mensaje de Advertencia.
console.dir([3,4,76,89,9,12,14]);   // Despliega los datos y protos mas especificado que .log
//      --- FUNCIONES DE CONTEO ---
console.count(); // Cuenta las veces que se ejecuto.
console.count(); // Cuenta las veces que se ejecuto.
console.count(); // Cuenta las veces que se ejecuto.
console.count(); // Cuenta las veces que se ejecuto.
console.count(); // Cuenta las veces que se ejecuto.
console.countReset(); // Corta el Conteo y lo resetea a 0
console.count(); // Cuenta las veces que se ejecuto.
//      --- FUNCIONES DE AGRUPACION ---
console.group(); // Crea un grupo y todo lo que se ejecute luego estara dentro del mismo, se muestra abierto.
console.log("nicolas");
console.log("lucas");
console.group("amigos"); // Grupo dentro de otro pero con nombre personalizado.
console.log("nicolas");
console.log("lucas");
console.log("fernando");
console.groupEnd(); // Cerramos el grupo y todo lo que sigue se guarda dentro del grupo inicial.
console.log("argentina");
console.groupEnd(); // Cerramos el grupo inicial.
console.groupCollapsed(); // Es igual que .group() pero en consola el grupo se muestra cerrado.
//      --- FUNCIONES DE TEMPORIZACION ---
console.time(); // Inicia un contador.
console.timeLog(); // Muestra hace cuanto comenzo el contador.
console.timeEnd(); // Finaliza el contador.

//      --- ESTILO ---
console.log("%cAguante River","color: #f00,background-color: #fff,padding:20px 100px,border:3px solid black,text-decoration:bold;");
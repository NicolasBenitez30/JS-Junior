//      PROBLEMA 1: CELULAR
class Celular {
    constructor(color,peso,tamano,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    precionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }
        else{
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if(this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamano}</b><br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        `
    }
}

// celular1.precionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.precionarBotonEncendido();

// const celular2 = new Celular("negro", "180g", "6'", "full hd", "4GB");
// const celular3 = new Celular("blanco", "155g", "4'", "hd", "2GB");
// const celular1 = new Celular("rojo", "150g", "5'", "full hd", "3GB");

// document.write(`${celular1.mostrarInfo()} <br> ${celular2.mostrarInfo()} <br> ${celular3.mostrarInfo()} <br> `);

//      PROBLEMA 2: CELULAR ALTA GAMA
class CelularAltaGama extends Celular {
    constructor(color, peso,tamano,rdc,ram,rdce){
        super(color,peso,tamano,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}
const celular1 = new CelularAltaGama("rojo", "130g", "5.2'", "4K","3GB", "full hd");
const celular2 = new CelularAltaGama("negro", "142g", "6'", "4K","4GB", "hd");
const celular3 = new CelularAltaGama("blanco", "150g", "6'", "4K","6GB", "ultra hd");

document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
    ${celular3.infoAltaGama()} <br>
    `);



//      PROBLEMA 3: APP
class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;

    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app abierta");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

const app1 = new App("16.000", "5 estrellas", "900MB");

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

const app2 = new App("6.000", "4 estrellas", "400MB");
const app3 = new App("1.000", "4.5 estrellas", "100MB");
const app4 = new App("23.000", "4.8 estrellas", "1GB");
const app5 = new App("900", "5 estrellas", "250MB");
const app6 = new App("17", "3.7 estrellas", "522MB");
const app7 = new App("42.981", "2.9 estrellas", "723MB");

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `);
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

const celular1 = new Celular("rojo", "150g", "5'", "full hd", "3GB");
const celular2 = new Celular("negro", "180g", "6'", "full hd", "4GB");
const celular3 = new Celular("blanco", "155g", "4'", "hd", "2GB");


// celular1.precionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.precionarBotonEncendido();

document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
    `);
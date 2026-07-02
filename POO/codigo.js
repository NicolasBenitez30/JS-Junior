//      CLASE Y OBJETO
class animal {
    //      CONSTUCTOR
    constructor(especie, edad, color) {
        // THIS: Hace referencia al objeto. .especie: Hace referencia al Atributo.
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    }
    //      METODO
    verInfo(){
        document.write(this.info + "<br>");
    }
}
//      HERENCIA
class Perro extends animal {
    constructor(especie,edad, color, raza){
        super(especie,edad,color);
        this.raza = null;
    }
    //      METODO ESTATICO
    ladrar() {
        document.write("¡WaW!" + "<br>");
    }
    //      METODO SETTER: Funciona como Propiedad, Modifica un valor.
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    // METODO GETTER: Funciona como Propiedad, Obtiene informacion.
    get getRaza(){
        return this.raza;
    }
}

//      INSTANCIACION
// Los objetos se definen con CONST, se puede hacer con LET pero en caso de que haya un error no va a saltar por ende, estaria fallando su programa.  
const perro = new Perro("perro",3,"Marron");
const gallina = new animal("gallina",3,"blanca y roja");
const gato = new animal("gato",1,"blanco y negro");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(gallina.info + "<br>");

perro.verInfo();
gato.verInfo();
gallina.verInfo();

perro.ladrar();

perro.setRaza = "Dobberman";
document.write(perro.getRaza);

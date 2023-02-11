class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; // en este momento es que se crea la propiedad 'nombre' para esta Persona
        this._apellido = apellido;
    }// NOTA: si no se define un constructor, JS agrega uno vacio automaticamente.
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){ // dentro de una clase no es necesario agregar la plabra function
        return this._nombre + ' ' + this._apellido;
    }
    // Sobreescribir el método toString() de la clase Object
    toString(){
        // Se aplica polimorfismo(multiples formas n tiempo de ejecucion)
        // el método que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llama al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobrescritura de método
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre); // AQUI LE LLAMA AL METODO GET

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre); // se ha heredado el GET nombre
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
/**Todas las clases heredadn de la clase Object */
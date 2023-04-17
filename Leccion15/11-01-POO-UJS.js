class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Juan', 3000);

let gerente1 = new Gerente('Carlos', 5000,'Sistemas');

imprimir(empleado1);
imprimir(gerente1);
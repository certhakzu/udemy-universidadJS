class Empleado extends Persona{

    constructor(sueldo){
        this._idEmpleado = Persona.contadorPersonas +1;
        Persona.contadorPersonas++;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString} - ${this._idEmpleado} \$ ${this._sueldo}`;
    }
}
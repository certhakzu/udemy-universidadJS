class Cliente extends Persona{

    constructor(fechaRegistro){
        this._idCliente = Persona.contadorPersonas + 1;
        Persona.contadorPersonas++;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} - ${this._idCliente} Fecha: ${this._fechaRegistro}`;
    }
}
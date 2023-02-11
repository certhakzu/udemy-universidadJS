/*
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
console.log(persona.nombreCompleto());

// crear un objeto con operador new
let persona2 = new Object(); // una vez crerado este objeto, se le pueden agregar atributos y métodos dinamicamente:::
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '55443322';

console.log(persona2.telefono);

// otra forma de acceder a propiedades de los objetos en JS
console.log(persona['nombre']);

// lo que permite recorrer un objeto con un ciclo for in
for (const nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// Agregar o Eliminar propiedades a un objeto
// si llamamos al objeto y le añadimos una propiedad que no tiene, entonces se la agrerga

persona.tel = '55443322'; // agrega la propiedad 'tel'
console.log(persona);

delete persona.tel; // elimina la propiedad 'tel'

console.log(persona);
 
// otras formas de imprimir un Objeto:

// A) Concatenar cada valor de cada propiedad
console.log(persona2.nombre + ', ' + persona.apellido);

// B) con 'for in'
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// C) usando el método 'values()'

let personaArray = Object.values(persona);
console.log(personaArray);

// D) convertir objeto a una cadena: con JSON.stringify
let personaString = JSON.stringify(persona);

//-----------------------------------

let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){ // Métodos Set de Objetos
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){ // Métodos Get de Objetos
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona3.nombreCompleto);
console.log(persona3.lang);

persona3.lang = 'en'; // se llama indirectamente el método SET lang()
console.log(persona3.idioma);
console.log(persona3.lang);

*/


/*
//-----------Método constructor (new)

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);
padre.telefono = '111111';
console.log(padre);

// Distintas formas de Crear Objetos
let miObjeto1 = new Object();
let miObjeto2 = {}; // RECOMENDADA

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; // RECOMENDADA

let miNumero1 = new Number(1);
let miNumero2 = 1; //RECOMENDADA

let miBoolean1 = new Boolean(false);
let miBoolean2 = false; //RECOMENDADA

let miArreglo1 = new Array();
let miArreglo2 = []; //RECOMENDADA

let miFuncion1 = new Function(); //por eso en JS las funciones son Objetos
let miFuncion2 = function(){};
--------------------------------------------------------------*/

// USO de Prototype

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211'; // PROTOTYPE añede la la propiedad 'tel' al tipo 'Persona'


let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '11223344';
console.log(padre.tel);


let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '66778899';
console.log(madre.tel);

//-----------------------------

// Metodo CALL
/*Nos permite llamar un metodo que esta definido en un objetoA desde otro objetoB */

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de CALL para usar nombreCompleto() que pertenece a persona1
// con los datos de persona2

console.log(persona1.nombreCompleto('Lic', '44223311'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '55443322'));


//-----------------------------------------

// Metodo APPLY, similar a CALL
let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
        //return this.nombre + ' ' + this.apellido;
    }
}

let persona4 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de APPLY para usar nombreCompleto() que pertenece a persona3
// con los datos de persona4

console.log(persona3.nombreCompleto('Lic', '55889966'));

let argumentos = ['Ing', '8877455'];
console.log(persona3.nombreCompleto.apply(persona4, argumentos));

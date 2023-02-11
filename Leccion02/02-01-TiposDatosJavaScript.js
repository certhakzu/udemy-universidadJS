/*
// Tipo de dato string
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre)

//Tipo de dato númerico
var numero = 1000;
console.log(numero);

// Tipo de dato objeto - object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "5554445"
}
console.log(objeto);
console.log(typeof objeto);

// Tipo de dato boolean
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato funcion - function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Simbolo - Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo de dato clase (es una funcion)
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Tipo de dato undefined - indefinido (puede ser un valor de variable tambien)
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

// null = ausencia de valor (es un object)
var y = null;
console.log(y);
console.log(typeof y);

// Arreglos - Arrays (son object)
var autos = ['DMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//
var z = '';
console.log(z);
console.log(typeof z);


var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 123 + 77;
console.log(x);

x = nombre + (123 + 77);
console.log(x);
*/

let nombre;
nombre  = "Juan";
console.log(nombre);

const apellido = "Perez";
//apellido = "Lara";
console.log(apellido);
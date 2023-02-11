// Declaracion de funcion
function miFuncion(a, b) {
    //console.log('Suma: ' + (a + b));
    console.log(arguments.length);
    return a + b;
}

let  resultado = miFuncion(2, 3);

console.log(resultado);


//---------------------------------------------------
// Declaracion de Funcion de tipo expresion
let sumar = function (a, b) {
    console.log(arguments);
    for (let index = 0; arguments < arguments.length; index++) {
        console.log(arguments[index]);
    }
    return a + b
};

resultado = sumar(3, 2);
console.log(resultado);


// Lo mismo con una funcion Flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;

resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

//----------------------------------------------------
// Funcion que se llama a si misma Self Invoking
(function(){ //puede tener parámetros
    console.log('Ejecutando la función');
})();

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
//----------------------------------------------------

let resultado2 = sumarTodo(1,2,3,4,5);
console.log(resultado2);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma = suma + arguments[i];
    }

    return suma;
}
//-------------------------------------
// Paso por Valor y por Referencia
//se pasa por Valor cuando se pasan tipos primitivos (que no tienen atributos ni métodos)
// se pasan por referencia los Objetos (funciones, arrays, clases) 

// Ejemplo de Paso por valor
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);// vale inicialmente x = 10
console.log(x);

// Ejemplo de paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);
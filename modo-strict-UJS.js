"use strict"

x = 10; //marcaria error por el use strict
console.log(x);

miFuncion(); // marcaria error porque la funcion no esta definida antes

function miFuncion(){
    y = 15; // marcaria error porque no esta definica con let, var o const
    console.log(y);
}
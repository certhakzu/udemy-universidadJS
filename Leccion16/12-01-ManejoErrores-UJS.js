// 'use strict'

// try {
//     let x = 10;
//     //miFuncion();
//     throw 'Mi error';
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('Termina la revisión de errores');
// }

// console.log('continuamos...');

let resultado = '';

try {
    if (isNaN(resultado)) throw 'No es un numero';
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
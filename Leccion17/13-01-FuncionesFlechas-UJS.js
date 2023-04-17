function miFuncionNormal(){
    console.log('Saludos desde mi funcion Normal');
}

miFuncionNormal();

let miFuncionAnonima = function(){
    console.log('Saludos desde mi funcion Anonima');
}

miFuncionAnonima();

// let miFuncionFlecha = () => { //tambien se puede usar const para que no se pueda modificar la referencia
//     console.log('Saludos desde mi funcion Flecha');
// }

// const miFuncionFlecha = () => console.log('Saludos desde mi funcion Flecha');

// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funcion Flecha';
// }

const saludar = () => 'Saludos desde funcion Flecha';
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos funcion con Parametros');

const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3, 5));
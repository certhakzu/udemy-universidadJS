/**
 * FUNCIONES SIMPLE
 * 
 * Se llaman de manera secuencial. Asi pues, en el ejemplo siguiente primero se llama miFuncion2() y despues de llama miFuncion1()
 */

function miFuncion1(){
    console.log('Funcion 1');
}
function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion2();
miFuncion1();

//--------------------------------------------------------------------
/**
 * FUNCIONES TIPO CALLBACK
 * 
 * es una funcion que se mpasa como parametro a otra funcion
 */
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);


/**
 * LLAMADAS ASÍNCRONAS CON USO DE setTimeout
 * 
 * Nos permite iniciar una nueva tarea
 * 
 * Ejemplo: pasaremos una funcion callback para que una vez se cumpla un tiempo determinado, se dispare la llamada a la callback
 */

function miFuncionCallback(){
    console.log('saludo asíncrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 segundos

/**
 * a setTimeout Tambien puede recibir el nombre de la funcion o directamente el nombre de la funcion
 */

setTimeout(function(){console.log('Saludo asíncrono en 2 seg')}, 2000);

setTimeout(() => console.log('Saludo asíncrono en 1 seg'), 1000);
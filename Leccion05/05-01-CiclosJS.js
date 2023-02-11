/*let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

do {
    console.log(contador);
    contador++;
} while (contador < 3);
*/

inicio: // ejemplo de una etiqueta/label en JS se pueden usar con break o continue
for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 !== 0) {
        continue inicio;
    }
    console.log(contador);
}
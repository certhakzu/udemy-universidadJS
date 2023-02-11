
let a = 3, b = 2;
let z = a + b;
/*
console.log("La suma es: " + z  );

z = a - b;
console.log("La resta es: " + z  );

z = a * b;
console.log("La multiplicacion es: " + z  );

z = a / b;
console.log("La division es: " + z  );

z = a % b;
console.log("EL modulo es: " + z  );

z = a ** b;
console.log("El exponente es: " + z  );

// INCREMENTO
// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

// Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);
*/

let miNumero = "18";
let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un numero");
}
else{
    if (edad >=18) {
        console.log("Puede Votar");
    } else {
        console.log("Muy joven para Votar");
    }
}
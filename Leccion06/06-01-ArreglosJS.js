//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

for (let i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}

autos.push('Audi');

console.log(autos);

autos[autos.length] = 'Cadillad';

console.log(autos);

// Preguntar si es un array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
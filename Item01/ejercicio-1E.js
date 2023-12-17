// Hacer un algoritmo con JavaScript que reciba cualquier letra del abecedario y muestre en consola el valor booleano que indique si es o no una vocal.

const letra = prompt("Ingresa una letra").toLowerCase;

let vocal = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";

console.log(`La letra ingresada es una vocal: ${vocal}`);



// Crear una fórmula para saber si un número es o no es un múltiplo de 2.
const numero = prompt("Ingresa un numero");
const formula = numero % 2;

console.log( `Si el resto es igual a 0, es un numero multiplo de dos. De lo contrario, no consideraremos que el número ingresado sea un multiplo. \n`);

console.log(`El resto de ${numero} es igual a ${formula}`)

// if(formula == 0) {
//     console.log( `El numero ${numero} es multiplo de dos, ya que el resto da como resultado: ${formula}`);
// } else {
//     console.log(El numero ${numero} no es multiplo de dos, ya que el resto da como resultado: ${formula}`));
// }





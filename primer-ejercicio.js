// Eejercio 1.A: De un operario se conoce su sueldo y años de antigüedad. Se pide crear  un programa que lea los datos de entrada y muestre en consola el valor  booleano de las siguientes comparaciones:


/* Datos al usuario */
const sueldo = prompt("Por favor ingrese su sueldo");
const antiguedad = prompt("Por favor ingrese su antiguedad");

//   i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?

// prueba 1 -> sueldo 3000 y antiguedad 10
const sueldoInferior2000 = Number(sueldo) < 2000 //F
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10 // V  || F = V
const ejercicioa = sueldoInferior2000 && antiguedad10 // F && V = F

console.log("respuesta 1.a: " + ejercicioa)

// Ejercio 1.b
//   ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?
// prueba 1 -> sueldo 3000 y antiguedad 10
const antiguedadmenor10 = Number(antiguedad) < 10 //F
const ejerciciob = sueldoInferior2000 || antiguedadmenor10  // F || F = F

console.log("respuesta 1.b: "+ ejerciciob)

//Ejercicio 1.c
//   iii. ¿El sueldo es mayor o igual a $2000 US?
// prueba 1 -> sueldo 3000 y antiguedad 10
const ejercicioc = !sueldoInferior2000
console.log("respuesta 1.c: "+ejercicioc)

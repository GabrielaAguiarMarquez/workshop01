// De un operario se conoce su sueldo y años de antigüedad. Se pide crear  un programa que lea los datos de entrada y muestre en consola el valor  booleano de las siguientes comparaciones:


/* Datos al usuario */
const sueldo = prompt("Por favor ingrese su sueldo");
const antiguedad = prompt("Por favor ingrese su antiguedad");

//   i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?

// prueba 1 -> sueldo 3000 y antiguedad 10
const sueldoInferior2000 = Number(sueldo) < 2000 //F
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10 // V  || F = V
const ejercicioA = sueldoInferior2000 && antiguedad10 // F && V = F

console.log("Su sueldo es inferior a $2000 US: " + ejercicioA)

//   ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?
// prueba 1 -> sueldo 3000 y antiguedad 10
const antiguedadMenor10 = Number(antiguedad) < 10 //F
const ejercicioB = sueldoInferior2000 || antiguedadMenor10  // F || F = F

console.log("Sueldo es inferior a $2000 US o su antigüedad es menor a 10 años: "+ ejercicioB)

//   iii. ¿El sueldo es mayor o igual a $2000 US?
// prueba 1 -> sueldo 3000 y antiguedad 10
const ejercicioC = !sueldoInferior2000
console.log("Sueldo es mayor o igual a $2000 US: "+ejercicioC)

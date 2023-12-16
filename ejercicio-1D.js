/*
Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario básico por horas y el número de horas trabajadas en un mes y realice lo siguiente:
*/

const nombre = prompt("Escribe tu nombre y apellido");
const salario = prompt("Ingrese su salario por horas");
const horas = prompt("¿Cuantas horas trabajastes este mes?");

// i. Calcular su salario básico mensual
const salarioMensual = salario * horas;
alert(`Su salario basico mensual es de: ${salarioMensual}`);

// ii. Determinar si recibe o no subsidio de transportes. Un empleado recibe este subsidio cuando el salario mensual básico es menor o igual a $700.000 COP
const subsidio = salarioMensual <= 700000;
alert(`Resives subsidio de transporte: ${subsidio}`);

// iii. Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte.

console.log(`
    ========DATOS DEL EMPLEADO========\n
    Empleado: ${nombre} \n
    Salario basico mensual: ${salarioMensual} \n
    Subsidio de transporte: ${subsidio}
`);

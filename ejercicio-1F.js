/*El aeropuerto El Dorado se encuentra en remodelación y requiere un programa para suministrarlo
a su personal de seguridad con el objetivo de brindar información a los turistas sobre donde se 
debe tramitar las salidas internacionales para nacionales y extranjeros. Se le solicita diseñar 
este programa para que reciba el primer dígito de un número de pasaporte y que muestre el valor 
booleano que indique si el turista es del país o extranjero. Todos los No. de pasaporte que inicien
con la letra A son nacionales.
__________
- Programa tramitar salidas intenacionales para nacionales y extranjeros.
+ Indicar si el turista es del país o si es extranjero (booleano)
+ Los números de pasaporte que inicien con A son nacionales */ 

const pasaporteLetra = prompt("Ingrese las letra que identifica su pasaporte")
const pasaporte = prompt("Ingrese el número de su pasaporte");

//NACIONAL
let pasaporteNacional = pasaporteLetra === "A";

//EXTRANJERO
const pasaporteExtranjero = !pasaporteNacional

const programa = pasaporteNacional == !false
console.log("El usuario es Nacional: "+ programa) 

if (pasaporteNacional == !false){
    alert ("Es nacional")
} else {
    alert ("Es extranjero")
}








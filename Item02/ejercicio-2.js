//Realizar y mostrar el resultado sí 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10;

//BASICS
const a = 4; 
const b =7; 
const c = 2 * b;
const u = 6;
const w = 10;
const x = a;
const y = 3 * x;
const z = 2;

//2A. Operación: a/bc 
let operacionA = a / (b * c);
console.log("El resultado de la operaciónA es: "+ operacionA);

//2B. Operación (elevado): a(2) + b(92)
let operacionB = Math.pow(a, 2) + Math.pow(b, 92);
console.log("El resultado de la operaciónB es: "+ operacionB);

//2C. Operación x + y / u + w / a
let operacionC = (x + y) / (u + (w / a));
console.log("El resultado de la operaciónC es: "+ operacionC);

//2D. Operación x / y (z + w)
let operacionD = (x / y) * (z + w);
console.log("El resultado de la operaciónD es: "+ operacionD);

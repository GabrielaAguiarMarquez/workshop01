/*1B. La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando un descuento 
del 50% para compras mayores o iguales a los $100.000 COP. 
Realizar un algoritmo que reciba el  valor de una compra y muestre en consola el valor booleano 
que indique si la compra recibe o no el descuento.*/

let precioCompra = prompt("Ingresa el precio del articulo");
let mayor100 = precioCompra >= 100000;
if (mayor100 == !false){
    alert ("Felicidades tienes un descuento del 50%")
} else {
    alert ("Lo siento no tienes descuento")
}
console.log("La compra tiene descuento: " + mayor100);



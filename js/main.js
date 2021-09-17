//  let nombre = prompt("Ingrese su nombre")
//  let apellido = prompt("Ingrese su apellido")
//  let remerasCelestes = parseInt(prompt("Cuantas remeras celestes quiere?"))
//  let remerasBlancas = parseInt(prompt("Cuantas remeras blancas quiere?"))


//  let totalRemeras = remerasBlancas + remerasCelestes


// alert ("Nombre:" + " " +  nombre  +  "\nApellido:" + " " + apellido + "\nCompraste" + " " + totalRemeras + " " + "remeras" )

// if ((nombre != "") && (apellido != "" )){
//    if(remerasBlancas + remerasCelestes <=5){
//        alert("Hola" + " " + nombre + " " + apellido + " " + "las remeras cuestan $300 C/u")
//     }else if(remerasBlancas + remerasCelestes <=10){
//            alert("Hola" + " " +  nombre + " " + apellido + " " + "las remeras cuestan $200 C/u")
//         }else{

//            alert("Hola" + " " +  nombre + " " + apellido + " " + "Las remeras cuestan $100 C/u")
//        }

// }else{
//     alert("Debe ingresar nombre y apellido")
// }

// let remeras = prompt("Elija un color de remera. Para salir escriba ESC")

// do {

//     if (remeras != "ESC") {
//         console.log("Usted ha elegido las remeras de color" + " " + remeras);
//     }else{
//         alert("Usted no ha elegido ningun color");

   
//     }
//     remeras = prompt("Elija otro color de remera");
// } while (remeras != "ESC");


alert("Bienvenido")


do {

    let producto = parseInt(prompt(menu))
    if (producto === 5) break
    let cantidad = parseInt(prompt(selecCantidad))


    addToCart(producto, cantidad)
    resp = prompt("¿Desea agregar otro producto al carrito? SI / NO")


} while (resp === "SI");

if (total > 0) {

    alert(`El total de su compra es de ${total}`)
}

alert("Gracias por su compra")


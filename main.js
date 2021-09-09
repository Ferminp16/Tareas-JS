 let nombre = prompt("Ingrese su nombre")
 let apellido = prompt("Ingrese su apellido")
 let remerasCelestes = parseInt(prompt("Cuantas remeras celestes quiere?"))
 let remerasBlancas = parseInt(prompt("Cuantas remeras blancas quiere?"))


 let totalRemeras = remerasBlancas + remerasCelestes


// alert ("Nombre:" + " " +  nombre  +  "\nApellido:" + " " + apellido + "\nCompraste" + " " + totalRemeras + " " + "remeras" )

if ((nombre != "") && (apellido != "" )){
    let remerasCelestes = parseInt(prompt("Cuantas remeras celestes quiere?"))
 let remerasBlancas = parseInt(prompt("Cuantas remeras blancas quiere?"))
   if(remerasBlancas + remerasCelestes <=5){
       alert("Hola" + " " + nombre + " " + apellido + " " + "las remeras cuestan $300 C/u")
    }else if(remerasBlancas + remerasCelestes <=10){
           alert("Hola" + " " +  nombre + " " + apellido + " " + "las remeras cuestan $200 C/u")
        }else{

           alert("Hola" + " " +  nombre + " " + apellido + " " + "Las remeras cuestan $100 C/u")
       }
   
}else{
    alert("Debe ingresar nombre y apellido")
}
   
    




// Esta es la tarea 3 y 4 //

// alert("Bienvenido")


// do {

//     let producto = parseInt(prompt(menu))
//     if (producto === 5) break
//     let cantidad = parseInt(prompt(selecCantidad))


//     addToCart(producto, cantidad)
//     resp = prompt("¿Desea agregar otro producto al carrito? SI / NO")


// } while (resp === "SI");

// if (total > 0) {

//     alert(`El total de su compra es de ${total}`)
// }

// alert("Gracias por su compra")




//Esta es la tarea de objetos//

class futbolista{
    constructor(nombre, numero, piernaHabil, altura, peso){
        this.nombre = nombre
        this.numero = numero
        this.piernaHabil = piernaHabil
        this.altura = altura
        this.peso = peso
    }

    patea() {
        return ` ${this.nombre} patea`;
    }

    salta(){
        return ` ${this.nombre} salta`;
    }

    cabecea(){
        return  `${this.nombre} cabecea`
    }

    toString(){
        return `Nombre: ${this.nombre}
                Numero: ${this.numero}
                Pierna habil: ${this.piernaHabil}
                Altura: ${this.altura} cm
                Peso: ${this.peso} kg
        `
    }
}
   

const nombre = prompt(`Ingrese el nombre su jugador`)
const numero = parseInt(prompt(`Ingrese el numero de ${nombre}`))
const piernaHabil = prompt(`Ingrese la pierna habil de ${nombre}`)
const altura = parseInt(prompt(`Ingrese la altura de ${nombre} en cm`))
const peso = parseInt(prompt(`Ingrese el peso de ${nombre} en kg`))

const jugador1 = new futbolista(nombre, numero, piernaHabil, altura, peso)


alert (jugador1.toString())
console.log (jugador1.toString())


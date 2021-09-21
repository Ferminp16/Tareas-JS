

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


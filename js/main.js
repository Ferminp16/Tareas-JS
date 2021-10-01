alert("Bienvenido a EVAHome")

for (const producto of productos){
    let container = document.createElement("div");
    container.innerHTML = `<h3>Producto: ${producto.name}</h3>
                           <p>Precio: ${producto.price}</p>
                           <p>Stock: ${producto.stock}</p>
                           <p>Codico: ${producto.id}</p>`
document.body.appendChild(container)

container.classList.add("containerProducto")

}

do {
    
    let option = mostrarMenu();
    if (option === productos.length + 1) break
    let cantidad = parseInt(prompt(selecCantidad))
    
    
    addToCart(option, cantidad)
    
    resp = prompt("¿Desea agregar otro producto al carrito? SI / NO")
    resp = resp.toUpperCase()
    
} while (resp === "SI");

if (total > 0) {
    
    alert(`El total de su compra es de $${total}`)
}

alert("Gracias por su compra")






const hayStock = (cantidad, stock) => {
    if (cantidad > stock) {
        alert(`No hay suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;

}



const addToCart = (option, cantidad) => {
    const found = productos.find(producto => producto.id === option)
    if (hayStock(cantidad, found.stock)) {
        total += (cantidad * found.price);
        productos[option - 1].stock -= cantidad;
        alert(`${found.name} ha sido agregado al carrito`);
    }

}


const mostrarMenu = () => {
    let menu = "Elija el numero del producto que desea. \n";
    productos.forEach((producto) => {
        menu += producto.id + ".-" + producto.name + "\n";
    });
    menu += (productos.length + 1) + ".-Salir";
    let test = parseInt(prompt(menu))
    return test;
}


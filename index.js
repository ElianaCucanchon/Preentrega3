

const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
    productos.forEach( producto => {
        const nuevaPrenda = document.createElement("div");
        nuevaPrenda.classList = "tarjeta-producto";
        nuevaPrenda.innerHTML = `
        <img src= ${producto.img}>
        <h3>${producto.nombre} </h3>
        <p>$${producto.precio} </p>
        <button>Agregar al Carrito</button>
        `
        contenedorTarjetas.appendChild(nuevaPrenda);
        nuevaPrenda.getElementsByTagName("button") [0].addEventListener("click", () => agregarAlCarrito(producto))
    })
}

crearTarjetasProductosInicio(prendas);
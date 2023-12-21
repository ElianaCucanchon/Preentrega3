const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("prendas"));
    console.log(productos)
    if (productos && productos.length > 0) {


        productos.forEach(producto => {
            const nuevaPrenda = document.createElement("div");
            nuevaPrenda.classList = "tarjeta-producto";
            nuevaPrenda.innerHTML = `
        <img src="${producto.id}">
        <h3>${producto.nombre} </h3>
        <p>$${producto.precio} </p>
        <div>
          <button>-</button>
          <span class="cantidad">0</span>
          <button>+</button>
        </div>
        `;
            contenedorTarjetas.appendChild(nuevaPrenda);
            nuevaPrenda
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e) => {
                agregarAlCarrito(producto);
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
            
            });

            nuevaPrenda
            .getElementsByTagName ("button")[0]
            addEventListener ("click",(e)=> {
                restarAlCarrito(producto);
                crearTarjetasProductosInicio();

            
            });
            
        });
    }
}

crearTarjetasProductosInicio();
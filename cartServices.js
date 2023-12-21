function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("prendas"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("prendas", JSON.stringify([nuevoProducto]));
        //para transfar loq ue contiene nuevo producto en un string utilizamos Json
    }// hasta este punto no tengo memoria pero se creara cuando se agrege al carrito un objeto
    else{
        const indiceProducto = memoria.findIndex(prenda => prenda.id === producto.id)
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta = 1;
        }else{
          nuevaMemoria[indiceProducto].cantidad ++;

        }
        localStorage.setItem("prendas", JSON.stringify(nuevaMemoria));
        return cuenta;
    }

 actualizarNumeroCarrito(); //para que funcione el contador siempre se debe ejecutar la funcion despues de actualizar el carrito
}

function getNuevoProductoParaMemoriaAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("prendas"));
    const indiceProducto = memoria.findIndex(prenda => prenda.id === producto.id)
    if(memoria[indiceProducto].cantidad === 1){
        nuevaMemoriamemoria.splice(indiceProducto,1); 

    }else{
        nuevaMemoriamemoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("prendas",JSON.stringify(nuevamemoria));
}
actualizarNumeroCarrito();



//Toma un producto le agrega cantidad 1 y lo devuelve//
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito")

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("prendas")); // contar cuantas prendas hay 
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;

}


actualizarNumeroCarrito();


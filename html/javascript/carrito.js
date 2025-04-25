document.addEventListener("DOMContentLoaded", function () {
    // Se seleccionan los elementos donde se mostrarán los productos del carrito y el total
    const cartItemsContainer = document.getElementById("cart-items");
    const totalItemsEl = document.getElementById("total-items");
    const totalPriceEl = document.getElementById("total-price");

    // Cargar productos desde el localStorage (almacenados previamente)
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Si no hay productos en el carrito, se inicia con un arreglo vacío

    // Variables para llevar el conteo de los artículos y el precio total
    let totalItems = 0;
    let totalPrice = 0;

    // Si el carrito está vacío, se muestra un mensaje en la interfaz
    if (carrito.length === 0) {
    cartItemsContainer.innerHTML = `<div class="alert alert-info">Tu carrito está vacío </div>`;
    } else {
      // Si hay productos, se iteran y se generan los elementos HTML para cada producto
    carrito.forEach((producto, index) => {
        // Calculamos el subtotal de cada producto (precio por cantidad)
        const subtotal = producto.precio * producto.cantidad;
        // Sumamos los totales de artículos y precio
        totalItems += producto.cantidad;
        totalPrice += subtotal;

        // Se crea el HTML para mostrar el producto en el carrito
        const itemHTML = `
        <div class="card mb-3">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                <p class="card-text"><strong>Precio: $${producto.precio.toLocaleString()}</strong></p>
                <p class="card-text text-end"><small class="text-muted">Subtotal: $${subtotal.toLocaleString()}</small></p>
                </div>
            </div>
            </div>
        </div>
        `;
        // Se añade el HTML del producto al contenedor de productos del carrito
        cartItemsContainer.innerHTML += itemHTML;
    });
    }

    // Se actualizan los elementos de total de artículos y total de precio en la interfaz
    totalItemsEl.textContent = totalItems;
    totalPriceEl.textContent = `$${totalPrice.toLocaleString()}`;
});

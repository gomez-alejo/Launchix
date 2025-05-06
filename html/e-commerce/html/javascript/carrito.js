document.addEventListener("DOMContentLoaded", () => {
    // Cargar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function mostrarCarrito() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-3');
            cartItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.titulo}" class="me-3" style="width: 100px; height: 100px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h5>${item.titulo}</h5>
                    <p>$${item.precio.toLocaleString()}</p>
                </div>
                <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });

        // Actualizar el resumen del carrito
        document.getElementById('total-items').textContent = cart.length;
        const totalPrice = cart.reduce((total, item) => total + item.precio, 0);
        document.getElementById('total-price').textContent = `$${totalPrice.toLocaleString()}`;
    }

    function eliminarProducto(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        mostrarCarrito();
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-from-cart')) {
            const index = e.target.getAttribute('data-index');
            eliminarProducto(index);
        }
    });

    mostrarCarrito();
});

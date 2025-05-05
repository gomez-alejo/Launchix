// Script para manejar el filtro por categoría
document.querySelectorAll('.dropdown-item[data-categoria]').forEach(item => {
  // Se agrega un evento 'click' a cada ítem del menú desplegable de categorías
  item.addEventListener('click', () => {
    // Se obtiene la categoría seleccionada del atributo 'data-categoria'
    const categoria = item.getAttribute('data-categoria');
    // Se seleccionan todos los elementos con la clase 'product-card' (todos los productos)
    const productos = document.querySelectorAll('.product-card');

    // Iteramos sobre todos los productos para mostrar u ocultar según la categoría seleccionada
    productos.forEach(producto => {
      // Si la categoría es 'todos', mostramos todos los productos
      if (categoria === 'todos') {
        producto.style.display = 'block';
      } else {
        // Si el producto tiene la clase correspondiente a la categoría, lo mostramos
        if (producto.classList.contains(`categoria-${categoria}`)) {
          producto.style.display = 'block';
        } else {
          // Si el producto no tiene la clase correspondiente, lo ocultamos
          producto.style.display = 'none';
        }
      }
    });
  });
});

// Script para la búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', function () {
  // Obtenemos el valor del campo de búsqueda y lo convertimos a minúsculas
  const searchTerm = this.value.toLowerCase();
  // Seleccionamos todos los productos
  const productos = document.querySelectorAll('.product-card');

  // Iteramos sobre los productos para comprobar si el título o la descripción coinciden con el término de búsqueda
  productos.forEach(producto => {
    // Obtenemos el título y la descripción del producto, y los convertimos a minúsculas
    const titulo = producto.querySelector('.card-title').textContent.toLowerCase();
    const descripcion = producto.querySelector('.card-text').textContent.toLowerCase();

    // Si el título o la descripción incluyen el término de búsqueda, mostramos el producto
    if (titulo.includes(searchTerm) || descripcion.includes(searchTerm)) {
      producto.style.display = 'block';
    } else {
      // Si no coinciden, lo ocultamos
      producto.style.display = 'none';
    }
  });
});

// Script para añadir al carrito
let cartCount = 0; // Contador inicial del carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  // Se agrega un evento 'click' a cada botón de añadir al carrito
  button.addEventListener('click', () => {
    // Incrementamos el contador del carrito
    cartCount++;
    // Actualizamos el contador visual del carrito en la interfaz
    document.getElementById('cart-count').textContent = cartCount;
  });
});

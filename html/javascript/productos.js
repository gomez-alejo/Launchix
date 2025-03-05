// Variables globales para el contador de artículos y el total del carrito
let cartItemCount = 0; 
let cartTotal = 0.00;  

/**
 * Filtra los productos según la búsqueda y la categoría seleccionada
 */
function filterProducts() {   
   // Obtiene el valor de búsqueda en minúsculas
  const searchInput = document.getElementById('search').value.toLowerCase();   
   // Obtiene el valor del filtro de categoría
  const filterInput = document.getElementById('filter').value;   
   // Selecciona todos los elementos de producto
  const productItems = document.querySelectorAll('.product-item');    
  
   // Recorre cada producto para aplicar el filtro
  productItems.forEach(item => {     
     // Obtiene el título del producto en minúsculas
    const title = item.querySelector('.card-title').textContent.toLowerCase();     
     // Obtiene la categoría del producto del atributo data-category
    const category = item.getAttribute('data-category');     
     // Verifica si el producto coincide con la búsqueda
    const matchesSearch = title.includes(searchInput);     
     // Verifica si coincide con el filtro (muestra todos si filter='all')
    const matchesFilter = filterInput === 'all' || category === filterInput;      
    
     // Muestra u oculta el producto según los criterios
    if (matchesSearch && matchesFilter) {       
      item.style.display = '';     
    } else {       
    item.style.display = 'none';     
    }   
  }); 
}  

/**
 * Añade un producto al carrito de compras
 * @param {string} productName - Nombre del producto
 * @param {number} price - Precio del producto
 * @param {string} imageSrc - URL de la imagen del producto
 */
function addToCart(productName, price, imageSrc) {   
   // Obtiene el elemento del carrito
  const cart = document.getElementById('cart');   
   // Crea un nuevo elemento de lista para el producto
  const listItem = document.createElement('li');   
   // Aplica clases de Bootstrap para estilizar
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';   
   // Establece el contenido HTML con el nombre, precio y botón para eliminar
  listItem.innerHTML = `     
    ${productName} - $${price.toFixed(2)}     
    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${price.toFixed(2)})">Eliminar</button>   
  `;   
   // Añade el elemento al carrito
  cart.appendChild(listItem);    

   // Incrementa el contador del carrito y actualiza la visualización
  cartItemCount++;   
  document.getElementById('cart-count').textContent = cartItemCount;   
   // Actualiza el total del carrito
  cartTotal += price;   
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2); 
}  

/**
 * Elimina el último producto añadido al carrito
 * @param {number} price - Precio del producto a eliminar
 */
function removeFromCart(price) {   
   // Obtiene el elemento del carrito
  const cart = document.getElementById('cart');   
   // Verifica si hay elementos en el carrito
  if (cart.lastChild) {     
     // Elimina el último elemento añadido
    cart.removeChild(cart.lastChild);     
     // Decrementa el contador y actualiza la visualización
    cartItemCount--;     
    document.getElementById('cart-count').textContent = cartItemCount;     
     // Actualiza el total del carrito
    cartTotal -= price;     
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);   
  } 
}  

/**
 * Muestra u oculta el dropdown del carrito
 */
function toggleCartDropdown() {   
   // Obtiene el elemento dropdown del carrito
  const cartDropdown = document.getElementById('cart-dropdown');   
   // Alterna la clase 'show' para mostrar u ocultar
  if (cartDropdown.classList.contains('show')) {     
    cartDropdown.classList.remove('show');   
  } else {     
    cartDropdown.classList.add('show');   
  } 
}  

// Cierra el dropdown del carrito si se hace clic fuera de él 
window.addEventListener('click', function(event) {   
  const cartDropdown = document.getElementById('cart-dropdown');   
  const cartIcon = document.querySelector('.cart-icon');   
   // Verifica si el clic fue fuera del carrito y del icono
  if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {     
    cartDropdown.classList.remove('show');   
  } 
});
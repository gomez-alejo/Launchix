document.addEventListener("DOMContentLoaded", () => {
    // Función para filtrar productos por categoría
    function filtrarProductosPorCategoria(categoria) {
      const productosFiltrados = categoria === 'todos' ? window.productosData : window.productosData.filter(producto => producto.categoria === categoria);
      window.mostrarProductos(productosFiltrados); // Mostrar los productos filtrados
    }
  
    // Función para filtrar productos por término de búsqueda
    function filtrarProductosPorBusqueda(searchTerm) {
      const productosFiltrados = window.productosData.filter(producto =>
        producto.titulo.toLowerCase().includes(searchTerm) ||
        producto.descripcion.toLowerCase().includes(searchTerm)
      );
      window.mostrarProductos(productosFiltrados); // Mostrar los productos filtrados
    }
  
    // Event listeners para filtrado por categoría
    document.querySelectorAll('.dropdown-item[data-categoria]').forEach(item => {
      item.addEventListener('click', () => {
        const categoria = item.getAttribute('data-categoria');
        filtrarProductosPorCategoria(categoria); // Filtrar productos al hacer clic en una categoría
      });
    });
  
    // Event listener para filtrado por búsqueda
    document.getElementById('searchInput').addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      filtrarProductosPorBusqueda(searchTerm); // Filtrar productos al escribir en el campo de búsqueda
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const productosData = [
      {
        titulo: "Llanta Deportiva X200",
        descripcion: "Llanta de alto rendimiento para vehículos deportivos, con compuesto de caucho reforzado y banda de rodadura asimétrica para óptimo agarre.",
        imagen: "https://i.pinimg.com/736x/9a/d0/93/9ad0935d34464546387dad7f6c3e6f0d.jpg",
        precio: 249900,
        categoria: "llantas"
      },
      {
        titulo: "Camiseta Estampada",
        descripcion: "Camiseta de algodón con estampado moderno, ideal para cualquier ocasión.",
        imagen: "https://i.pinimg.com/736x/bd/0a/9d/bd0a9dfcecfbba0f0cdab4a5cbbb9e42.jpg",
        precio: 49900,
        categoria: "ropa"
      },
      {
        titulo: "Licuadora Profesional",
        descripcion: "Licuadora de alta potencia para uso doméstico o profesional.",
        imagen: "https://via.placeholder.com/400",
        precio: 399900,
        categoria: "electrodomesticos"
      },
      {
        titulo: "Sofá Modular",
        descripcion: "Sofá modular de alta calidad, perfecto para cualquier sala de estar.",
        imagen: "https://via.placeholder.com/400",
        precio: 1299900,
        categoria: "muebles"
      },
      {
        titulo: "Smartphone XYZ",
        descripcion: "Smartphone de última generación con cámara de alta resolución y procesador rápido.",
        imagen: "https://via.placeholder.com/400",
        precio: 999900,
        categoria: "tecnologia"
      },
      {
        titulo: "Bicicleta de Montaña",
        descripcion: "Bicicleta de montaña con suspensión completa y frenos de disco.",
        imagen: "https://via.placeholder.com/400",
        precio: 1499900,
        categoria: "deportes"
      },
      {
        titulo: "Cafetera Espresso",
        descripcion: "Cafetera espresso automática con molinillo integrado.",
        imagen: "https://via.placeholder.com/400",
        precio: 599900,
        categoria: "electrodomesticos"
      },
      {
        titulo: "Zapatillas Deportivas",
        descripcion: "Zapatillas deportivas con amortiguación avanzada para corredores.",
        imagen: "https://via.placeholder.com/400",
        precio: 299900,
        categoria: "ropa"
      },
      {
        titulo: "Monitor Gaming 27\"",
        descripcion: "Monitor de 27 pulgadas con tasa de refresco de 144Hz y resolución 4K.",
        imagen: "https://via.placeholder.com/400",
        precio: 1199900,
        categoria: "tecnologia"
      },
      {
        titulo: "Mesa de Comedor",
        descripcion: "Mesa de comedor de madera maciza con capacidad para 6 personas.",
        imagen: "https://via.placeholder.com/400",
        precio: 899900,
        categoria: "muebles"
      },
      {
        titulo: "Cámara DSLR",
        descripcion: "Cámara DSLR profesional con lente intercambiable y sensor de alta sensibilidad.",
        imagen: "https://via.placeholder.com/400",
        precio: 2299900,
        categoria: "tecnologia"
      },
      {
        titulo: "Reloj Inteligente",
        descripcion: "Reloj inteligente con seguimiento de actividad física y notificaciones.",
        imagen: "https://via.placeholder.com/400",
        precio: 499900,
        categoria: "tecnologia"
      },
      {
        titulo: "Set de Ollas",
        descripcion: "Set de ollas de acero inoxidable con fondo difusor de calor.",
        imagen: "https://via.placeholder.com/400",
        precio: 699900,
        categoria: "electrodomesticos"
      },
      {
        titulo: "Gafas de Sol",
        descripcion: "Gafas de sol polarizadas con protección UV.",
        imagen: "https://via.placeholder.com/400",
        precio: 149900,
        categoria: "ropa"
      },
      {
        titulo: "Altavoz Bluetooth",
        descripcion: "Altavoz portátil Bluetooth con sonido envolvente y batería de larga duración.",
        imagen: "https://via.placeholder.com/400",
        precio: 299900,
        categoria: "tecnologia"
      },
      {
        titulo: "Laptop Gamer",
        descripcion: "Laptop para gaming con tarjeta gráfica dedicada y pantalla de alta resolución.",
        imagen: "https://via.placeholder.com/400",
        precio: 3499900,
        categoria: "tecnologia"
      },
      {
        titulo: "Silla Ergonómica",
        descripcion: "Silla de oficina ergonómica con soporte lumbar ajustable.",
        imagen: "https://via.placeholder.com/400",
        precio: 799900,
        categoria: "muebles"
      },
      {
        titulo: "Audífonos Inalámbricos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido y alta fidelidad de sonido.",
        imagen: "https://via.placeholder.com/400",
        precio: 899900,
        categoria: "tecnologia"
      },
      {
        titulo: "Teclado Mecánico",
        descripcion: "Teclado mecánico con interruptores personalizables y retroiluminación RGB.",
        imagen: "https://via.placeholder.com/400",
        precio: 499900,
        categoria: "tecnologia"
      },
      {
        titulo: "Cámara de Seguridad",
        descripcion: "Cámara de seguridad con visión nocturna y detección de movimiento.",
        imagen: "https://via.placeholder.com/400",
        precio: 399900,
        categoria: "electrodomesticos"
      },
      {
        titulo: "Impresora Multifuncional",
        descripcion: "Impresora multifuncional con escáner y copiadora integrados.",
        imagen: "https://via.placeholder.com/400",
        precio: 599900,
        categoria: "electrodomesticos"
      }
    ];

    // Cargar el carrito desde localStorage o inicializarlo como un array vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para mostrar los productos en la página
    window.mostrarProductos = function(productos) {
      const productContainer = document.getElementById('product-container');
      if (!productContainer) return; // Verificar si el contenedor existe

      productContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

      productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'col-lg-3', 'mb-4', 'product-card', `categoria-${producto.categoria}`);
        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img card-img-top">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <div class="mt-auto price-cart">
                <span class="fw-bold fs-5">$${producto.precio.toLocaleString()}</span>
                <button class="btn btn-primary btn-sm add-to-cart" data-index="${index}">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        `;
        productContainer.appendChild(card);
      });
    }

    // Función para actualizar el contador del carrito y guardar en localStorage
    function actualizarCarrito() {
      const cartCountElement = document.getElementById('cart-count');
      if (cartCountElement) {
        cartCountElement.textContent = cart.length; // Actualizar el contador de productos en el carrito
      }
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito actualizado en localStorage
    }

    // Event listener para agregar productos al carrito
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('add-to-cart')) {
        const index = e.target.getAttribute('data-index');
        if (index !== null) {
          cart.push(productosData[index]); // Agregar el producto al carrito
          actualizarCarrito(); // Actualizar el contador del carrito y guardar en localStorage
        }
      }
    });

    // Mostrar todos los productos al cargar la página
    mostrarProductos(productosData);
    actualizarCarrito();

    // Exponer los datos de productos para que filtros.js pueda acceder a ellos
    window.productosData = productosData;
  });

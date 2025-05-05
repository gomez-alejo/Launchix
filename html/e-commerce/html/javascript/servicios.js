document.addEventListener("DOMContentLoaded", () => {
    let serviciosData = [
        {
            titulo: "Restaurante Launch",
            descripcion: "Ofrecemos comidas para eventos, almuerzos diarios, con domicilio a todo Timbío.",
            imagenes: [
                "https://cdn-icons-png.flaticon.com/512/11086/11086607.png",
                "https://cdn-icons-png.flaticon.com/512/11086/11086607.png",
                "imagenes/restaurante3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 320 123 4567",
            categoria: "restaurantes"
        },
        {
            titulo: "Hotel Paradise",
            descripcion: "Hospedaje cómodo y accesible, a pocos metros de la plaza central.",
            ubicacion: "Timbio, Cauca",
            contacto: "+57 301 987 6543",
            imagenes: [
                "https://i.pinimg.com/736x/c5/1f/78/c51f7835c815bbf83f8e4d15b3de91be.jpg",
                "https://i.pinimg.com/736x/14/5c/d7/145cd7da77c2542cbfb58cbccd8a4145.jpg",
                "imagenes/hotel2.webp"
            ],
            categoria: "hoteles"
        },
        {
            titulo: "Drogueria Timbio",
            descripcion: "Te enviamos domicilios a cualquier parte de Timbio y lo puedes contratar fácilmente desde esta plataforma.",
            imagenes: [
                "https://i.pinimg.com/736x/92/5a/2a/925a2af38bcd45dfdb8c7cf4e7ae9dc9.jpg",
                "https://i.pinimg.com/736x/f0/60/23/f06023ce1a86b4c61b3097feebbb0fbc.jpg",
                "https://i.pinimg.com/736x/e6/cd/a9/e6cda9d9eb93ef44a316582e67a4bada.jpg"
            ],
            ubicacion: "Popayán, Cauca",
            contacto: "+57 310 222 3344",
            categoria: "droguerias"
        },
        {
            titulo: "Tienda de Ropa Chic",
            descripcion: "Venta de ropa de moda para todas las edades, con envíos a domicilio.",
            imagenes: [
                "https://example.com/ropa1.jpg",
                "https://example.com/ropa2.jpg",
                "https://example.com/ropa3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 315 444 5566",
            categoria: "ropa"
        },
        {
            titulo: "Electrodomésticos Súper",
            descripcion: "Ofrecemos una amplia gama de electrodomésticos para el hogar.",
            imagenes: [
                "https://example.com/electro1.jpg",
                "https://example.com/electro2.jpg",
                "https://example.com/electro3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 316 777 8899",
            categoria: "electrodomesticos"
        },
        {
            titulo: "Muebles Elegantes",
            descripcion: "Muebles de alta calidad para tu hogar u oficina.",
            imagenes: [
                "https://example.com/mueble1.jpg",
                "https://example.com/mueble2.jpg",
                "https://example.com/mueble3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 317 222 3344",
            categoria: "muebles"
        },
        {
            titulo: "Juguetes Felices",
            descripcion: "Juguetes educativos y divertidos para niños de todas las edades.",
            imagenes: [
                "https://example.com/juguete1.jpg",
                "https://example.com/juguete2.jpg",
                "https://example.com/juguete3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 318 999 0011",
            categoria: "juguetes"
        },
        {
            titulo: "Tecnología Avanzada",
            descripcion: "Productos tecnológicos de última generación para tu hogar y oficina.",
            imagenes: [
                "https://example.com/tecno1.jpg",
                "https://example.com/tecno2.jpg",
                "https://example.com/tecno3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 319 555 6677",
            categoria: "tecnologia"
        },
        {
            titulo: "Llantas Seguras",
            descripcion: "Venta y montaje de llantas para todo tipo de vehículos.",
            imagenes: [
                "https://example.com/llanta1.jpg",
                "https://example.com/llanta2.jpg",
                "https://example.com/llanta3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 320 111 2233",
            categoria: "llantas"
        },
        {
            titulo: "Restaurante Sabores",
            descripcion: "Cocina tradicional y platos internacionales con opciones de delivery.",
            imagenes: [
                "https://example.com/sabores1.jpg",
                "https://example.com/sabores2.jpg",
                "https://example.com/sabores3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 321 444 5566",
            categoria: "restaurantes"
        },
        {
            titulo: "Hotel Estelar",
            descripcion: "Hotel de lujo con todas las comodidades para una estancia inolvidable.",
            imagenes: [
                "https://example.com/estelar1.jpg",
                "https://example.com/estelar2.jpg",
                "https://example.com/estelar3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 322 777 8899",
            categoria: "hoteles"
        },
        {
            titulo: "Droguería Salud",
            descripcion: "Productos farmacéuticos y de cuidado personal con entrega a domicilio.",
            imagenes: [
                "https://example.com/salud1.jpg",
                "https://example.com/salud2.jpg",
                "https://example.com/salud3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 323 222 3344",
            categoria: "droguerias"
        }
        // Puedes continuar agregando más...
    ];

    // Ordenar los servicios por título
    serviciosData.sort((a, b) => a.titulo.localeCompare(b.titulo));

    // Función para mostrar los productos
    function mostrarProductos(productos) {
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = ''; // Limpiar el contenedor

        productos.forEach((producto, index) => {
            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                <div class="card h-100 product-card categoria-todos categoria-${producto.categoria}">
                    <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Ingresar</a>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

        // Agregar eventos a las nuevas tarjetas
        document.querySelectorAll(".card").forEach((tarjeta, index) => {
            tarjeta.addEventListener("click", () => {
                let servicio = serviciosData[index];

                // Asignar datos al modal
                document.getElementById("modalTitulo").innerText = servicio.titulo;
                document.getElementById("modalDescripcion").innerText = servicio.descripcion;
                document.querySelector("#servicioModal .modal-body p:nth-of-type(1)").innerHTML = `<strong>Ubicación:</strong> ${servicio.ubicacion}`;
                document.querySelector("#servicioModal .modal-body p:nth-of-type(2)").innerHTML = `<strong>Contacto:</strong> ${servicio.contacto}`;

                // Imagen principal
                document.getElementById("modalImagen").src = servicio.imagenes[0] || "";

                // Imágenes adicionales
                const extraImages = servicio.imagenes.slice(1); // Ignora la principal
                const extraContainer = document.getElementById("modalImagen").nextElementSibling;
                extraContainer.innerHTML = "";

                extraImages.forEach(src => {
                    let img = document.createElement("img");
                    img.src = src;
                    img.className = "img-thumbnail me-2";
                    img.width = 80;

                    // Al hacer clic en la miniatura, cambia la imagen principal
                    img.addEventListener("click", () => {
                        document.getElementById("modalImagen").src = src;
                    });

                    extraContainer.appendChild(img);
                });

                // Mostrar el modal
                const modal = new bootstrap.Modal(document.getElementById("servicioModal"));
                modal.show();
            });
        });

        // Botones "Ingresar" alerta
        const botonesIngresar = document.querySelectorAll(".btn-primary");
        botonesIngresar.forEach(boton => {
            boton.addEventListener("click", (e) => {
                e.stopPropagation(); // Evita que el clic dispare también el modal
                alert("Redirigiendo al servicio...");
            });
        });
    }

    // Mostrar los productos ordenados
    mostrarProductos(serviciosData);

    // Script para manejar el filtro por categoría
    document.querySelectorAll('.dropdown-item[data-categoria]').forEach(item => {
        item.addEventListener('click', () => {
            const categoria = item.getAttribute('data-categoria');
            const productosFiltrados = serviciosData.filter(producto =>
                categoria === 'todos' ? true : producto.categoria === categoria
            );
            mostrarProductos(productosFiltrados);
        });
    });

    // Script para la búsqueda en tiempo real
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const productosFiltrados = serviciosData.filter(producto =>
            producto.titulo.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm)
        );
        mostrarProductos(productosFiltrados);
    });
});

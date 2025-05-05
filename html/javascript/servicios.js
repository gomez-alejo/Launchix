document.addEventListener("DOMContentLoaded", () => {
    let imagenesServicios = [
        "https://cdn-icons-png.flaticon.com/512/11086/11086607.png",
        "https://img.freepik.com/vector-premium/3d-numero-2-dos-numero-signo-color-rojo_165488-5565.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/011/288/274/small_2x/golden-number-3-png.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    let serviciosData = [
        {
            titulo: "Restaurante Launch",
            descripcion: "Ofrecemos comidas para eventos, almuerzos diarios, con domicilio a todo Timbío.",
            imagenes: [
                "imagenes/restaurante.jpg",
                "imagenes/restaurante2.jpg",
                "imagenes/restaurante3.jpg"
            ],
            ubicacion: "Timbío, Cauca",
            contacto: "+57 320 123 4567"
        },
        {
            titulo: "Hotel Paradise",
            descripcion: "Hospedaje cómodo y accesible, a pocos metros de la plaza central.",
            ubicacion: "Timbio, Cauca",
            contacto: "+57 301 987 6543",
            imagenes: [
              "imagenes/hotel4.jpg", // Imagen principal
              "imagenes/hotel 3.jpg", // Miniatura 1
              "imagenes/hotel 2.webp"  // Miniatura 2
            ],
             ubicacion: "Timbío, Cauca",
            contacto: "+57 301 987 6543" 
          },
        {
            titulo: "Drogueria Timbio",
            descripcion: "te enviamos domicilios a cualquier parte de timbio y lo puedes contratar fácilmente desde esta plataforma.",
            imagenes: [
                "imagenes/drogueria2.jpg",
                "imagenes/drogueria3.jpg",
                "imagenes/drogueria4.jpg"
            ],
            ubicacion: "Popayán, Cauca",
            contacto: "+57 310 222 3344"
        }
        // Puedes continuar agregando más...
    ];

    let tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach((tarjeta, index) => {
        let imgTag = tarjeta.querySelector(".card-img-top");
        if (imgTag && imagenesServicios[index]) {
            imgTag.src = imagenesServicios[index];
            imgTag.alt = "Imagen de servicio " + (index + 1);
        }

        tarjeta.addEventListener("click", () => {
            let servicio = serviciosData[index] || serviciosData[0];

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

        // ✅ Al hacer clic en la miniatura, cambia la imagen principal
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
});

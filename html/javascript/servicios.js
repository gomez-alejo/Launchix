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

    let tarjetas = document.querySelectorAll(".card"); // Selecciona todas las tarjetas

    tarjetas.forEach((tarjeta, index) => {
        let imgTag = tarjeta.querySelector(".card-img-top"); // Encuentra la imagen dentro de cada tarjeta

        if (imgTag && imagenesServicios[index]) {
            imgTag.src = imagenesServicios[index]; // Asigna la URL de la imagen
            imgTag.alt = "Imagen de servicio " + (index + 1);
        }
    });
});

// Seleccionar todos los botones "Ingresar"
const botonesIngresar = document.querySelectorAll(".btn-primary");

// Agregar un evento de clic a cada botón
botonesIngresar.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("Redirigiendo al servicio...");
        // Aquí podrías redirigir a otra página o ejecutar más lógica
    });
});

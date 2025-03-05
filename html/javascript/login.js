// Función para mostrar la sección de recuperación de contraseña
function mostrarRecuperacion() {
    // Oculta el formulario de inicio de sesión
    document.getElementById("login").style.display = "none";
    // Muestra el formulario de recuperación de contraseña
    document.getElementById("forgot").style.display = "block";
}

// Función para cerrar la sección de recuperación de contraseña
function cerrarRecuperacion() {
    // Oculta el formulario de recuperación de contraseña
    document.getElementById("forgot").style.display = "none";
    // Muestra nuevamente el formulario de inicio de sesión
    document.getElementById("login").style.display = "block";
}

// Función para mostrar la sección de registro de usuario
function mostrarRegistro() {
    // Oculta el formulario de inicio de sesión
    document.getElementById("login").style.display = "none";
    // Muestra el formulario de registro de usuario
    document.getElementById("register").style.display = "block";
}

// Función para procesar el registro de un nuevo usuario
function registrarse() {
    // Obtiene los valores ingresados por el usuario en los campos del formulario de registro
    var username = document.getElementById("new-username").value;
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    // Obtiene el elemento donde se mostrará el mensaje de error o éxito
    var registerMessage = document.getElementById("register-message");

    // Verifica si las contraseñas ingresadas coinciden
    if (password !== confirmPassword) {
        // Si las contraseñas no coinciden, muestra un mensaje de error
        registerMessage.textContent = "Las contraseñas no coinciden";
    } else {
        // Si las contraseñas coinciden, muestra una alerta de éxito
        alert("Registro exitoso");
        // Oculta el formulario de registro
        document.getElementById("register").style.display = "none";
        // Muestra nuevamente el formulario de inicio de sesión
        document.getElementById("login").style.display = "block";
    }
}

// Función para procesar la recuperación de contraseña
function recuperarContrasena() {
    // Obtiene el valor del campo de correo electrónico ingresado por el usuario
    var email = document.getElementById("recover-email").value;
    
    // Obtiene el elemento donde se mostrará el mensaje de error o éxito
    var recoverMessage = document.getElementById("recover-message");

    // Verifica si el correo ingresado contiene el carácter "@", lo cual es un requisito básico para un email válido
    if (email.includes("@")) {
        // Si el correo es válido, muestra una alerta de confirmación
        alert("Se ha enviado un correo de recuperación");
        // Llama a la función para cerrar la sección de recuperación y volver al inicio de sesión
        cerrarRecuperacion();
    } else {
        // Si el correo no es válido, muestra un mensaje de error
        recoverMessage.textContent = "Ingrese un correo válido";
    }
}

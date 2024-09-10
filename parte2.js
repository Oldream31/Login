document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Usuario y contraseña predefinidos

    // Obtener los valores ingresados
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Validar usuario y contraseña
    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        window.location.href = "hola.html"; // Redirigir si es correcto
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo."); // Mostrar mensaje de error
    }
});

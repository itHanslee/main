document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        const genero = document.getElementById('genero').value;

        // Guardar en localStorage (simulación de registro)
        const usuario = { nombre, apellidos, correo, contrasena, genero };
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Redirigir a la página de inicio de sesión
        window.location.href = 'inicio_sesion.html';
    });
});

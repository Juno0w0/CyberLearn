document.addEventListener('DOMContentLoaded', function() {
    
    /* LOGO con redireccionamiento */
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    /* Lógica del formulario de registro */
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            /* VALIDACIÓN DE CONTRASEÑA */
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden.");
                return; // Detiene la ejecución si no coinciden
            }
            if (password.length < 8) {
                alert("La contraseña debe tener al menos 8 caracteres.");
                return; // Detiene la ejecución si es muy corta
            }
            /* FIN DE VALIDACIÓN */

            // Captura de datos y envío con fetch
            const username = registerForm.name.value;
            const email = registerForm.email.value;
            
            const userData = {
                username: username,
                email: email,
                password: password,
            };

            const apiUrl = 'http://127.0.0.1:8000/api/registro/';

            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Error: ' + data.error);
                } else {
                    alert(data.mensaje);
                    // Opcional: Redirigir al login
                    // window.location.href = 'login.html';
                }
            })
            .catch(error => {
                console.error('Error de conexión:', error);
                alert('Ocurrió un error al conectar con el servidor.');
            });
        });
    }

    /* Footer year automático */
    const yearLogin = new Date().getFullYear();
    const footer = document.querySelector(".footer-login");
    if (footer) {
        footer.innerHTML = `Desarrollado por Juno © ${yearLogin} CyberLearn. Todos los derechos reservados`;
    }
});
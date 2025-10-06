document.addEventListener('DOMContentLoaded', function() {
    
    /* LOGO con redireccionamiento */
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    /* Lógica del formulario de login */
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            const userData = {
                username: username,
                password: password,
            };

            const apiUrl = 'http://127.0.0.1:8000/api/login/';

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Error: ' + data.error);
                } else {
                    alert(data.mensaje);
                    // Redirigir a la página principal después de un login exitoso
                    window.location.href = 'index.html'; 
                }
            })
            .catch(error => {
                console.error('Error de conexión:', error);
                alert('Ocurrió un error al conectar con el servidor.');
            });
        });
    }
});
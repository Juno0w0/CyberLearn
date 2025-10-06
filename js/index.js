/*LOGO con redireccionamiento*/
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
/*Año automatico en el footer*/
const year = new Date().getFullYear();
document.querySelector(".footer-text").innerHTML = `Desarrollado por JWD © ${year} CyberLearn. Todos los derechos reservados`;
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://127.0.0.1:8000/api/hola/';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Muestra el objeto completo en la consola
            // Aquí es donde podrías poner el mensaje en tu página web
            // Por ejemplo: document.body.innerHTML += `<h1>${data.mensaje}</h1>`;
        })
        .catch(error => {
            console.error('Error al llamar a la API:', error);
        });
});
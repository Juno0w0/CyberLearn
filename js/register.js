/*LOGO con redireccionamiento*/
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
/***************** Confirmar contrasenia *****************/
const form = document.getElementById('registerForm');

form.addEventListener("submit", function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        e.preventDefault(); // Evitar el envío del formulario
        alert("Las contraseñas no coinciden.");
        return;
    }
    if (password. length < 8) {
        e.preventDefault(); // Evitar el envío del formulario
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }
});


/***********************Footer year automatico ***********/
const yearLogin = new Date().getFullYear();
document.querySelector(".footer-login").innerHTML = `Desarrollado por Juno © ${yearLogin} CyberLearn. Todos los derechos reservados`;

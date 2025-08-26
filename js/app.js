/*LOGO con redireccionamiento*/
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
/*Año automatico en el footer*/
const year = new Date().getFullYear();
document.querySelector(".footer-text").innerHTML = `Desarrollado por Juno © ${year} CyberLearn. Todos los derechos reservados`;

const yearLogin = new Date().getFullYear();
document.querySelector(".footer-login").innerHTML = `Desarrollado por Juno © ${yearLogin} CyberLearn. Todos los derechos reservados`;

/*Boton de busqueda*/
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener("click", () => {
    alert("Buscando: " + searchInput.value);
});
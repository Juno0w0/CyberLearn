/*LOGO con redireccionamiento*/
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
/*Año automatico en el footer*/
const year = new Date().getFullYear();
document.querySelector(".footer-text").innerHTML = `Desarrollado por Juno © ${year} CyberLearn. Todos los derechos reservados`;

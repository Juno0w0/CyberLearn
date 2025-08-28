
/*Boton de busqueda*/
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener("click", () => {
    alert("Buscando: " + searchInput.value);
});
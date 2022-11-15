//Menú hamburguesa
const btnToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-list");

btnToggle.addEventListener("click", () => {
    links.classList.toggle("d-none");
})


// Cuando se hace scroll hacia abajo se le agrega una clase al header
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("bottom" ,window.scrollY > 0);
})
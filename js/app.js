const btnToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-list");

btnToggle.addEventListener("click", () => {
    links.classList.toggle("d-none");
})
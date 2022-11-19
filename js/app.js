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


// Slider de certificados
const certificates = [
    {
        img: "../img/frontend.png"
    },
    {
        img: "../img/dw.png"

    },
    {
        img: "../img/js.png"
    },
    {
        img: "../img/react.png"
    }
]

const certImg = document.getElementById("certificates-img");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

function showItem() {
    const item = certificates[currentItem];
    certImg.src = item.img;
}

window.addEventListener("DOMContentLoaded", () => {
    showItem(currentItem)
})

nextBtn.addEventListener("click", () => {
    currentItem++
    if (currentItem > certificates.length - 1) {
        currentItem = 0;
    }
    showItem()
})

prevBtn.addEventListener("click", () => {
    currentItem--
        if (currentItem < 0) {
        currentItem = certificates.length - 1;
    }
    showItem()
})
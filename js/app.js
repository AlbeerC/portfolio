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
const slides = document.querySelectorAll(".cert-slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides.length -1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
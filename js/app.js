//Menú hamburguesa
const btnToggle = document.querySelector(".nav-toggle");
const linkList = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li a");

btnToggle.addEventListener("click", () => {
    linkList.classList.toggle("d-none");
});
links.forEach( (link) => {
  link.addEventListener("click", () => {
    linkList.classList.add("d-none");
  })
});

// Cuando se scrollea de sección a sección se agrega una clase en la que se vea en pantalla
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.nav-list a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".nav-list a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

links.forEach((link) => {
  link.addEventListener("click", function () {
    nav-list.classList.remove("d-none");
  });

  const hash = link.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});



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
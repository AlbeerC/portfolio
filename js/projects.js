const projects = [
    {
        id: 1,
        img1: "../img/project1.1.png",
        img2: "../img/project1.2.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - SASS - JAVASCRIPT"
    },
    {
        id: 2,
        img1: "../img/project2.1.png",
        img2: "../img/project2.2.png",
        name: "Gamer Shop",
        link: "https://gamershop.vercel.app/",
        text: "Página realizada para el proyecto final del curso de React de CoderHouse. Es un e-commerce de juegos de playstation 5.",
        tecnologies: "REACT - SASS - FIREBASE"
    },
    {
        id: 3,
        img1: "../img/project3.1.png",
        img2: "../img/project3.2.png",
        name: "Tiago PZK",
        link: "https://tiago-pzk.vercel.app/",
        text: "Replica de la página oficial del cantante Tiago PZK, con algunas funcionalidades extras",
        tecnologies: "HTML - SASS - JAVASCRIPT"
    }
]

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((prod) => {
    const item = document.createElement("div");
    item.className = "card";
    item.innerHTML = `
                    <div class="card-imgs">
                        <img src="${prod.img1}" class="img-web" />
                        <img src="${prod.img2}" class="img-mobile" />
                    </div>

                    <div class="card-flex">
                        <div class="card-flex-left">
                            <h3>${prod.name}</h3>
                            <p>${prod.text}</p>
                        </div>

                        <div class="card-flex-right">
                            <a href="${prod.link}" target="_blank">Ver web</a>
                            <p>${prod.tecnologies}</p>
                        </div>
                    </div>
    `

    projectsContainer.appendChild(item) 
})
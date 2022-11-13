const projects = [
    {
        id: 1,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
    {
        id: 2,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
    {
        id: 3,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
    {
        id: 4,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
    {
        id: 5,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
    {
        id: 5,
        img: "../img/project1.png",
        name: "Sneakers ARG",
        link: "https://albeerc.github.io/Proyecto-Final-JS/",
        text: "Página realizada para el proyecto final del curso de JavaScript de CoderHouse. Es un simulador de un e-commerce de zapatillas",
        tecnologies: "HTML - CSS - JAVASCRIPT"
    },
]

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((prod) => {
    const item = document.createElement("div");
    item.className = "project-card";
    item.innerHTML = `
                    <img src="${prod.img}"/>
                    <div class="project-card-title"> 
                        <h3> ${prod.name} </h3>
                        <a href="${prod.link}" target="blank">Demo</a>
                    </div>
                    <p> ${prod.text} </p>
                    <p class="tecnologies"> ${prod.tecnologies} </p>
    `

    projectsContainer.appendChild(item)
})
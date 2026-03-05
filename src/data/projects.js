import img1 from "../assets/imgAppMonopatines/adminController.png";
import img2 from "../assets/imgAppMonopatines/adminService.png";
import img3 from "../assets/imgAppMonopatines/applicationProperties.png";
import img4 from "../assets/imgAppMonopatines/dockercompose.png";
import imgUX1 from "../assets/imgUXResearch/img1.png";
import imgUX2 from "../assets/imgUXResearch/img2.png";
import imgUX3 from "../assets/imgUXResearch/img3.png";
import imgUX4 from "../assets/imgUXResearch/img4.png";
import imgUX5 from "../assets/imgUXResearch/img5.png";
import imgS1 from "../assets/imgsSpidey/imgS1.png";
import imgS2 from "../assets/imgsSpidey/imgS2.png";
import imgS3 from "../assets/imgsSpidey/imgS3.png";
import imgS4 from "../assets/imgsSpidey/imgS4.png";
import imgA1 from "../assets/imgApi/imgApi1.png";
import imgA2 from "../assets/imgApi/imgApi2.png";
import imgA3 from "../assets/imgApi/imgApi3.png";
import imgA4 from "../assets/imgApi/imgApi4.png";
const monopatinesImages = [img1, img2, img3, img4];
const uxImgs = [imgUX1, imgUX2, imgUX3, imgUX4, imgUX5];
const Simgs = [imgS1, imgS2, imgS3, imgS4];
const Aimgs = [imgA1, imgA2, imgA3, imgA4];
export const projects = [
    {
        slug: "aplicacion-monopatines-electricos",
        title: "Aplicación para Monopatines Eléctricos",
        description: "Implementación de un backend de microservicios REST, con bases de datos independientes por servicio y comunicación vía REST.",
        longDescription: "Backend basado en una arquitectura de microservicios REST desarrollada con Spring Boot. Cada servicio cuenta con su propia base de datos y se comunican entre sí mediante APIs REST, permitiendo escalabilidad, modularidad y fácil mantenimiento. El proyecto incluye dockerización de servicios y pruebas con Postman.",
        images: [...monopatinesImages],
        tags: ["Java", "Spring Boot", "REST", "SQL", "MongoDB", "Docker Desktop", "Postman"],
        github: "https://github.com/FlorenciaVivar/integrador3_Grupo23_Arquitectura",
        active: false,
        date: "Oct, 2024",
        features: [
            "Arquitectura de microservicios",
            "Bases de datos independientes por servicio",
            "APIs REST",
            "Dockerización",
            "Testing con Postman",
        ],
    },
    {
        slug: "ux-research-tour-de-cafeterias",
        title: "Ux Research 'Tour de cafeterias' (Codo a Codo)",
        description: "Investigación UX para una app de turismo gastronómico.",
        longDescription: "Proyecto de investigación y diseño UX enfocado en una app de recorrido por cafeterías. Incluye análisis de usuarios, benchmark de aplicaciones similares, creación de proto personas, validación mediante encuestas y entrevistas, definición de MVP, user journey map, storytelling y diseño de arquitectura de la información.",
        images: [...uxImgs],
        tags: [],
        github: null,
        active: false,
        date: "2024",
        features: [
            "Investigación de usuarios",
            "Benchmark de competidores",
            "Proto personas",
            "User Journey Map",
            "Card Sorting",
            "Mapa de sitio",
        ],
    },
    {
        slug: "spidey-ui-parallax",
        title: "Spidey",
        description: "Implementación del diseño ‘Spidey’, incorporando efecto parallax y animaciones.",
        longDescription: "Proyecto de maquetación web donde se implementa una interfaz visual inspirada en Spiderman, utilizando HTML y CSS. Se trabajaron animaciones con keyframes y un efecto parallax para mejorar la experiencia visual del usuario.",
        images: [...Simgs],
        tags: ["UX", "UI", "HTML", "CSS", "Animaciones"],
        github: "https://github.com/FlorenciaVivar/interfaces",
        active: false,
        date: "Sep, 2023",
        features: [
            "Diseño visual interactivo",
            "Efecto parallax",
            "Animaciones con CSS",
            "Layout responsive",
        ],
    },
    {
        slug: "go-travel-app",
        title: "Go Travel",
        description: "Aplicación web para la gestión de viajes y aerolíneas.",
        longDescription: "Aplicación web desarrollada bajo el patrón MVC que permite gestionar viajes y aerolíneas. Incluye funcionalidades CRUD, sistema de autenticación, control de acceso, paginación de resultados y diseño responsive con Bootstrap.",
        images: [...Aimgs],
        tags: ["PHP", "MVC", "MySQL", "Bootstrap", "Smarty"],
        github: "https://github.com/FlorenciaVivar/WEB2TPE",
        active: false,
        date: "Oct, 2022",
        features: [
            "CRUD de viajes y aerolíneas",
            "Autenticación de usuarios",
            "Paginación",
            "Arquitectura MVC",
            "Diseño responsive",
        ],
    },
];

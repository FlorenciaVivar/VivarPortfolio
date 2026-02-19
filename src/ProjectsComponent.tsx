import {type Easing, motion} from "framer-motion";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};

const projects = [
    {
        title: "Aplicación para Monopatines Eléctricos",
        description: "Implementación de un backend de microservicios REST, con bases de datos independientes por servicio y comunicación vía REST para escalabilidad y modularidad. \n" ,
        tags: ["Java", "Spring Boot", "REST","SQL", "MongoDB","Docker Desktop", "Postman"],
    },
    {
        title: "Ux Research 'Tour de cafeterias' (Codo a Codo)",
        description: "Desarrollo de investigación y diseño de UX para una app: identificación de usuarios y problemática, análisis de apps competidoras, creación de proto personas y validación con encuestas y entrevistas, Focus Group, User Journey Map, POV, Storytelling, definición de MVP y funcionalidades, Card Sorting y diseño de Mapa de Sitio validado por usuarios.",
        tags: [],
    },
    {
        title: "Spidey",
        description: "Implementación del diseño ‘Spidey’, incorporando efecto parallax y animaciones mediante keyframes.",
        tags: ["Diseño de experiencia de usuario (UX)", "Diseño de la interfaz de usuario", "HTML", "CSS", "animaciones"],
    },
    {
        title: "Go Travel",
        description: "GoTravel es una aplicación web para la gestión de viajes y aerolíneas, con funcionalidades de listar, ver, agregar, modificar y eliminar viajes y aerolíneas, incluyendo control de acceso para usuarios autenticados y paginación.",
        tags: ["PHP", "Modelo-Vista-Controlador (MVC)", "MySQL", "Bootstrap", "Smarty"],
    },
];

export function ProjectsComponent(){
    return (
        <section id="proyectos" className="py-24">
            <div className="section-container">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12"
                >
                    Mis <span className="text-gradient">Proyectos</span>
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 1}
                            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                                    >
                  {tag}
                </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )}
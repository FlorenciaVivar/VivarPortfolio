import {type Easing, motion} from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../src/assets/imgAppMonopatines/adminController.png";
import img2 from "../src/assets/imgAppMonopatines/adminService.png";
import img3 from "../src/assets/imgAppMonopatines/applicationProperties.png";
import img4 from "../src/assets/imgAppMonopatines/dockercompose.png";
import imgUX1 from "../src/assets/imgUXResearch/img1.png";
import imgUX2 from "../src/assets/imgUXResearch/img2.png";
import imgUX3 from "../src/assets/imgUXResearch/img3.png";
import imgUX4 from "../src/assets/imgUXResearch/img4.png";
import imgUX5 from "../src/assets/imgUXResearch/img5.png";
import imgS1 from "../src/assets/imgsSpidey/imgS1.png";
import imgS2 from "../src/assets/imgsSpidey/imgS2.png";
import imgS3 from "../src/assets/imgsSpidey/imgS3.png";
import imgS4 from "../src/assets/imgsSpidey/imgS4.png";
import imgA1 from "../src/assets/imgApi/imgApi1.png";
import imgA2 from "../src/assets/imgApi/imgApi2.png";
import imgA3 from "../src/assets/imgApi/imgApi3.png";
import imgA4 from "../src/assets/imgApi/imgApi4.png";



const monopatinesImages = [img1, img2, img3,img4];
const uxImgs = [imgUX1, imgUX2, imgUX3,imgUX4,imgUX5];
const Simgs = [imgS1,imgS2,imgS3,imgS4];
const Aimgs = [imgA1,imgA2,imgA3,imgA4];

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
        images: [            ...monopatinesImages        ],
        tags: ["Java", "Spring Boot", "REST","SQL", "MongoDB","Docker Desktop", "Postman"],
    },
    {
        title: "Ux Research 'Tour de cafeterias' (Codo a Codo)",
        description: "Desarrollo de investigación y diseño de UX para una app: identificación de usuarios y problemática, análisis de apps competidoras, creación de proto personas y validación con encuestas y entrevistas, Focus Group, User Journey Map, POV, Storytelling, definición de MVP y funcionalidades, Card Sorting y diseño de Mapa de Sitio validado por usuarios.",
        images: [ ...uxImgs],
        tags: [],
    },
    {
        title: "Spidey",
        description: "Implementación del diseño ‘Spidey’, incorporando efecto parallax y animaciones mediante keyframes.",
        images: [...Simgs        ],
        tags: ["Diseño de experiencia de usuario (UX)", "Diseño de la interfaz de usuario", "HTML", "CSS", "animaciones"],
    },
    {
        title: "Go Travel",
        description: "GoTravel es una aplicación web para la gestión de viajes y aerolíneas, con funcionalidades de listar, ver, agregar, modificar y eliminar viajes y aerolíneas, incluyendo control de acceso para usuarios autenticados y paginación.",
        images: [...Aimgs        ],
        tags: ["PHP", "Modelo-Vista-Controlador (MVC)", "MySQL", "Bootstrap", "Smarty"],
    },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    return (
        <div className="relative overflow-hidden rounded-t-lg aspect-[3/2] bg-secondary">
            <div
                ref={containerRef}
                className="flex transition-transform duration-300 ease-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                        loading="lazy"
                    />
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight size={16} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    i === current ? "bg-primary" : "bg-foreground/30"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};


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
                            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <ImageCarousel images={project.images} />
                            <div className="p-5">
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )}
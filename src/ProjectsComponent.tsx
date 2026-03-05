import {type Easing, motion} from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {ArrowRight, ChevronLeft, ChevronRight, Clock, ExternalLink, Github} from "lucide-react";
import { projects } from "@/data/projects";


const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};


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
                    viewport={{once: true}}
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
                            viewport={{once: true}}
                            custom={i + 1}
                            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <ImageCarousel images={project.images}/>
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-heading text-xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>

                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap overflow-hidden${
                                            project.active
                                                ? "bg-emerald-500/15 text-emerald-400"
                                                : "bg-muted text-muted-foreground"
                                        }`}>
                                         {project.active ? "En desarrollo" : "Finalizado"}
                                    </span>

                                </div>
                                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                                    <Clock size={12}/>
                                    <span>{project.date}</span>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
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

                                {project.github && (
                                    <>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-2 px-5 mb-2"
                                        >
                                            <Github size={16} />
                                            Ver en GitHub
                                            <ExternalLink size={12} />
                                        </a>

                                        <Link
                                            to={`/proyecto/${project.slug}`}
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                        >
                                            Ver más
                                            <ArrowRight size={14} />
                                        </Link>
                                    </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Clock, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import {projects} from "./data/projects";


export function ProjectsDetail(){
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Proyecto no encontrado</h1>
                    <Link to="/" className="text-primary hover:opacity-80 transition-opacity">← Volver al inicio</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-background">
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <nav className="section-container flex items-center h-16">
                    <Link to="/#proyectos" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <ArrowLeft size={18} />
                        Volver a proyectos
                    </Link>
                </nav>
            </header>
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">{project.title}</h1>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.active ? "bg-emerald-500/15 text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                {project.active ? "En desarrollo" : "Finalizado"}
              </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-8">
                            <Clock size={14} />
                            <span>{project.date}</span>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <DetailCarousel images={project.images} />
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <motion.div className="md:col-span-2 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <div>
                                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Descripción</h2>
                                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                            </div>
                            <div>
                                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Características</h2>
                                <ul className="space-y-2">
                                    {project.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-muted-foreground">
                                            <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <div>
                                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Tecnologías</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Enlaces</h2>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
                                    <Github size={16} />
                                    Ver en GitHub
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};
const DetailCarousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    return (
        <>
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-secondary">
                <div className="flex transition-transform duration-300 ease-out h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {images.map((src, i) => (
                        <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover flex-shrink-0 cursor-pointer" loading="lazy"  />
                    ))}
                </div>
                {images.length > 1 && (
                    <>
                        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"><ChevronLeft size={20} /></button>
                        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"><ChevronRight size={20} /></button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, i) => (
                                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-foreground/30"}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

        </>
    );
};

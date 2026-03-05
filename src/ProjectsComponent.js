import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};
const ImageCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);
    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    return (_jsxs("div", { className: "relative overflow-hidden rounded-t-lg aspect-[3/2] bg-secondary", children: [_jsx("div", { ref: containerRef, className: "flex transition-transform duration-300 ease-out h-full", style: { transform: `translateX(-${current * 100}%)` }, children: images.map((src, i) => (_jsx("img", { src: src, alt: `Screenshot ${i + 1}`, className: "w-full h-full object-cover flex-shrink-0", loading: "lazy" }, i))) }), images.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: prev, className: "absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors", "aria-label": "Previous image", children: _jsx(ChevronLeft, { size: 16 }) }), _jsx("button", { onClick: next, className: "absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors", "aria-label": "Next image", children: _jsx(ChevronRight, { size: 16 }) }), _jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5", children: images.map((_, i) => (_jsx("button", { onClick: () => setCurrent(i), className: `w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-foreground/30"}`, "aria-label": `Go to image ${i + 1}` }, i))) })] }))] }));
};
export function ProjectsComponent() {
    return (_jsx("section", { id: "proyectos", className: "py-24", children: _jsxs("div", { className: "section-container", children: [_jsxs(motion.h2, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0, className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-12", children: ["Mis ", _jsx("span", { className: "text-gradient", children: "Proyectos" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, i) => (_jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: i + 1, className: "group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors", children: [_jsx(ImageCarousel, { images: project.images }), _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "font-heading text-xl font-semibold text-foreground", children: project.title }), _jsx("span", { className: `text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap overflow-hidden${project.active
                                                    ? "bg-emerald-500/15 text-emerald-400"
                                                    : "bg-muted text-muted-foreground"}`, children: project.active ? "En desarrollo" : "Finalizado" })] }), _jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground text-xs mb-3", children: [_jsx(Clock, { size: 12 }), _jsx("span", { children: project.date })] }), _jsx("p", { className: "text-muted-foreground text-sm mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map((tag) => (_jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground", children: tag }, tag))) })] }), project.github && (_jsxs(_Fragment, { children: [_jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm font-medium text-primary mt-2 px-5 mb-2", children: [_jsx(Github, { size: 16 }), "Ver en GitHub", _jsx(ExternalLink, { size: 12 })] }), _jsxs(Link, { to: `/proyecto/${project.slug}`, className: "inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors", children: ["Ver m\u00E1s", _jsx(ArrowRight, { size: 14 })] })] }))] }, project.title))) })] }) }));
}

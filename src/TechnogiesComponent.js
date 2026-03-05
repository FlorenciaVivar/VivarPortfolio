import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};
const technologies = [
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Git", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Python", level: 70 },
    { name: "Docker", level: 65 },
    { name: "React", level: 50 },
    { name: "Angular", level: 40 },
];
export function TechnogiesComponent() {
    return (_jsx("section", { id: "tecnologias", className: "py-24", children: _jsxs("div", { className: "section-container", children: [_jsx(motion.h2, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0, className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-12", children: _jsx("span", { className: "text-gradient", children: "Tecnolog\u00EDas" }) }), _jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-2xl", children: technologies.map((tech, i) => (_jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: i * 0.5, children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-foreground font-heading font-medium text-sm", children: tech.name }), _jsxs("span", { className: "text-muted-foreground text-xs", children: [tech.level, "%"] })] }), _jsx("div", { className: "h-2 bg-secondary rounded-full overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-primary rounded-full", initial: { width: 0 }, whileInView: { width: `${tech.level}%` }, viewport: { once: true }, transition: { duration: 1, delay: i * 0.1, ease: "easeOut" } }) })] }, tech.name))) })] }) }));
}

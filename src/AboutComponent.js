import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import fotoPerfil from "../src/assets/fotoPerfil.jpg";
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};
export function AboutComponent() {
    return (_jsx("section", { id: "sobre-mi", className: "py-24", children: _jsxs("div", { className: "section-container", children: [_jsxs(motion.h2, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0, className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-8", children: ["Sobre ", _jsx("span", { className: "text-gradient", children: "m\u00ED" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8, rotate: -5 }, whileInView: { opacity: 1, scale: 1, rotate: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease }, className: "relative flex-shrink-0", children: [_jsx(motion.div, { animate: { rotate: [0, 3, -3, 0] }, transition: { duration: 6, repeat: Infinity, ease }, className: "w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10", children: _jsx("img", { src: fotoPerfil, alt: "Florencia Vivar", className: "w-full h-full object-cover" }) }), _jsx(motion.div, { animate: { y: [-5, 5, -5], x: [-3, 3, -3] }, transition: { duration: 4, repeat: Infinity, ease }, className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/30 blur-sm" }), _jsx(motion.div, { animate: { y: [5, -5, 5], x: [3, -3, 3] }, transition: { duration: 5, repeat: Infinity, ease, delay: 1 }, className: "absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/20 blur-sm" })] }), _jsxs(motion.p, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 1, className: "text-muted-foreground text-lg leading-relaxed max-w-2xl", children: ["Soy un desarrolladora web interesada en crear experiencias digitales modernas y funcionales. Me especializo en el desarrollo frontend y backend, con un enfoque en c\u00F3digo limpio, rendimiento y dise\u00F1o atractivo. Siempre estoy aprendiendo nuevas tecnolog\u00EDas y buscando mejorar mis habilidades. Cuento con formaci\u00F3n universitaria como  ", _jsx("span", { className: "font-semibold text-primary", children: "T\u00E9cnica en Desarrollo de Aplicaciones Inform\u00E1ticas" }), " y contin\u00FAo perfeccionando mis conocimientos de forma autodidacta mediante cursos especializados en React en Devtalles."] })] })] }) }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo4.jpeg";
const links = ["Sobre mí", "Proyectos", "Tecnologías", "Contacto"];
export function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border", children: [_jsxs("nav", { className: "section-container flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: logo, alt: "Logo Florencia Vivar", className: "w-9 h-9 rounded-full border border-primary/40 object-cover" }), _jsx("span", { className: "font-heading font-bold text-lg text-foreground transition hover:scale-110", children: "Florencia Vivar" })] }), _jsx("div", { className: "hidden md:flex gap-8", children: links.map((item) => (_jsx("a", { href: `#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`, className: "text-sm text-muted-foreground hover:text-primary transition hover:scale-110", children: item }, item))) }), _jsx("button", { className: "md:hidden text-foreground", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Toggle menu", children: menuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), menuOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "md:hidden bg-background border-b border-border px-6 py-4 space-y-3", children: links.map((item) => (_jsx("a", { href: `#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`, onClick: () => setMenuOpen(false), className: "block text-sm text-muted-foreground hover:text-primary transition-colors", children: item }, item))) }))] }));
}
;

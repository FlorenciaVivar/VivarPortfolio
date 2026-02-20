import { motion } from "framer-motion";
import {useState} from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo4.jpeg";


const links = ["Sobre mí", "Proyectos", "Tecnologías", "Contacto"];

export function HeaderComponent(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="section-container flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Logo Florencia Vivar"
                        className="w-9 h-9 rounded-full border border-primary/40 object-cover"
                    />
                    <span className="font-heading font-bold text-lg text-foreground transition hover:scale-110">Florencia Vivar</span>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex gap-8">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`}
                            className="text-sm text-muted-foreground hover:text-primary transition hover:scale-110"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3"
                >
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`}
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

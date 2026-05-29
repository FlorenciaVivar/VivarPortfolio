import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X ,Sun, Moon} from "lucide-react";
import logo from "../assets/images/logo4.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = ["Sobre mí", "Proyectos", "Tecnologías", "Contacto"];

export function HeaderComponent(){
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return document.documentElement.classList.contains("dark");
    });

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setMenuOpen(false);
        if (location.pathname === "/") {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(targetId);
                element?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="section-container flex items-center justify-between h-16">
                <Link to="/" onClick={(e) => handleNavigation(e, "sobre-mi")}>
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Logo Florencia Vivar"
                            className="w-9 h-9 rounded-full border border-primary/40 object-cover"
                        />
                        <span className="font-heading font-bold text-lg text-foreground transition hover:scale-110">Florencia Vivar</span>
                    </div>
                </Link>

                {/* Contenedor derecho */}
                <div className="flex items-center gap-6">
                    {/* Desktop nav */}
                    <div className="hidden md:flex gap-8">
                        {links.map((item) => {
                            const targetId = item.toLowerCase().replace(/\s/g, "-").replace("í", "i");
                            return (
                                <a
                                    key={item}
                                    href={`/#${targetId}`}
                                    onClick={(e) => handleNavigation(e, targetId)}
                                    className="text-sm text-muted-foreground hover:text-primary transition hover:scale-110"
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </div>


                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors focus:outline-none"
                        aria-label="Cambiar tema"
                    >
                        {darkMode ? (
                            <Sun size={20} className="text-amber-400" />
                        ) : (
                            <Moon size={20} className="text-indigo-400" />
                        )}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-foreground p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3"
                >
                    {links.map((item) => {
                        const targetId = item.toLowerCase().replace(/\s/g, "-").replace("í", "i");
                        return (
                            <a
                                key={item}
                                href={`/#${targetId}`}
                                onClick={(e) => handleNavigation(e, targetId)}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        );
                    })}
                </motion.div>
            )}
        </header>
    );
}
export function HeaderComponent(){
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="section-container flex items-center justify-between h-16">
                <span className="font-heading font-bold text-lg text-foreground">Florencia Vivar Dev</span>
                <div className="hidden md:flex gap-8">
                    {["Sobre mí", "Proyectos", "Tecnologías", "Contacto"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )

}

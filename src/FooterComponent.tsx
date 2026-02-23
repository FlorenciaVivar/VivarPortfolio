import {LinkedinIcon,GithubIcon} from "lucide-react";

export function FooterComponent() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Florencia Vivar. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/florenciavivar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon size={20} className="transition-transform hover:scale-110"/>
                    </a>
                    <a
                        href="https://github.com/FlorenciaVivar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon size={20} className="transition-transform hover:scale-110" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
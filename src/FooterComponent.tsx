export function FooterComponent() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="section-container text-center text-muted-foreground text-sm">
                © {new Date().getFullYear()} Florencia Vivar. Todos los derechos reservados.
            </div>
        </footer>
    )
}
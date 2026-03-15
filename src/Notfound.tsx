import {Link} from "react-router-dom";

export function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold">404 - Página no encontrada</h1>
            <Link
                to="/"
                className="text-primary mt-4 inline-block"
            >
                ← Volver al inicio
            </Link>
        </div>
    );
}
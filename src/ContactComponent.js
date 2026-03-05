import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};
export function ContactComponent() {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formRef.current)
            return;
        const formData = new FormData(formRef.current);
        const name = (formData.get("from_name") || "").trim();
        const email = (formData.get("from_email") || "").trim();
        const message = (formData.get("message") || "").trim();
        if (!name || !email || !message) {
            toast.error("Por favor completá todos los campos.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Ingresá un email válido.");
            return;
        }
        setSending(true);
        try {
            await emailjs.sendForm("service_39fk3zy", "template_sdevk1i", formRef.current, "_jfRt1RGCfVZwgDq4");
            toast.success("¡Mensaje enviado con éxito!");
            formRef.current.reset();
        }
        catch {
            toast.error("Error al enviar el mensaje. Intentá de nuevo.");
        }
        finally {
            setSending(false);
        }
    };
    return (_jsx("section", { id: "contacto", className: "py-24", children: _jsxs("div", { className: "section-container", children: [_jsx(motion.h2, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0, className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-8", children: _jsx("span", { className: "text-gradient", children: "Contacto" }) }), _jsx(motion.p, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 1, className: "text-muted-foreground text-lg mb-10 max-w-lg", children: "\u00BFTienes un proyecto en mente? \u00A1Hablemos!" }), _jsxs(motion.form, { ref: formRef, variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 2, className: "max-w-lg space-y-4", onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "from_name", placeholder: "Tu nombre", maxLength: 100, className: "w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" }), _jsx("input", { type: "email", name: "from_email", placeholder: "Tu email", maxLength: 255, className: "w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" }), _jsx("textarea", { name: "message", placeholder: "Tu mensaje", rows: 4, maxLength: 1000, className: "w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" }), _jsxs("button", { type: "submit", disabled: sending, className: "w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2", children: [sending && _jsx(Loader2, { size: 18, className: "animate-spin" }), sending ? "Enviando..." : "Enviar mensaje"] })] })] }) }));
}

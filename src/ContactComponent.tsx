import { type Easing, motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";


const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};

export function ContactComponent() {
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const name = (formData.get("from_name") as string || "").trim();
        const email = (formData.get("from_email") as string || "").trim();
        const message = (formData.get("message") as string || "").trim();

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
            await emailjs.sendForm(
                "service_39fk3zy",
                "template_sdevk1i",
                formRef.current,
                "_jfRt1RGCfVZwgDq4"
            );
            toast.success("¡Mensaje enviado con éxito!");
            formRef.current.reset();
        } catch {
            toast.error("Error al enviar el mensaje. Intentá de nuevo.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contacto" className="py-24">
            <div className="section-container">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
                >
                    <span className="text-gradient">Contacto</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-muted-foreground text-lg mb-10 max-w-lg"
                >
                    ¿Tienes un proyecto en mente? ¡Hablemos!
                </motion.p>

                <motion.form
                    ref={formRef}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="max-w-lg space-y-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Tu nombre"
                        maxLength={100}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Tu email"
                        maxLength={255}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />

                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        rows={4}
                        maxLength={1000}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {sending && <Loader2 size={18} className="animate-spin" />}
                        {sending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
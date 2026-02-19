import {type Easing, motion} from "framer-motion";

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
    return (<section id="contacto" className="py-24">
        <div className="section-container">
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                custom={0}
                className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
            >
                <span className="text-gradient">Contacto</span>
            </motion.h2>
            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                custom={1}
                className="text-muted-foreground text-lg mb-10 max-w-lg"
            >
                ¿Tienes un proyecto en mente? ¡Hablemos!
            </motion.p>
            <motion.form
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                custom={2}
                className="max-w-lg space-y-4"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                    placeholder="Tu mensaje"
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                    Enviar mensaje
                </button>
            </motion.form>
        </div>
    </section>)
}
import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease },
    }),
};

export function AboutComponent(){
    return (
        <section id="sobre-mi" className="py-24">
            <div className="section-container">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    custom={0}
                    className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
                >
                    Sobre <span className="text-gradient">mí</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    custom={1}
                    className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
                >
                    Soy un desarrolladora web apasionada por crear experiencias digitales modernas y funcionales.
                    Me especializo en el desarrollo frontend y backend, con un enfoque en código limpio,
                    rendimiento y diseño atractivo. Siempre estoy aprendiendo nuevas tecnologías y buscando
                    mejorar mis habilidades.
                </motion.p>
            </div>
        </section>
    )
}
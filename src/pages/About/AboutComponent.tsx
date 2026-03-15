import { motion, type Easing } from "framer-motion";
import fotoPerfil from "../../assets/fotoPerfil.jpg";

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
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                        className="relative flex-shrink-0"
                    >
                        <motion.div
                            animate={{ rotate: [0, 3, -3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease }}
                            className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10"
                        >
                            <img
                                src={fotoPerfil}
                                alt="Florencia Vivar"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                            transition={{ duration: 4, repeat: Infinity, ease }}
                            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/30 blur-sm"
                        />
                        <motion.div
                            animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                            transition={{ duration: 5, repeat: Infinity, ease, delay: 1 }}
                            className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/20 blur-sm"
                        />
                    </motion.div>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
                    >
                    Soy un desarrolladora web interesada en crear experiencias digitales modernas y funcionales.
                    Me especializo en el desarrollo frontend y backend, con un enfoque en código limpio,
                    rendimiento y diseño atractivo. Siempre estoy aprendiendo nuevas tecnologías y buscando
                    mejorar mis habilidades.
                        Cuento con formación universitaria como  <span className="font-semibold text-primary">Técnica en Desarrollo de Aplicaciones Informáticas</span> y
                    continúo perfeccionando mis conocimientos de forma autodidacta mediante cursos especializados en React en Devtalles.
                </motion.p>
                </div>
            </div>
        </section>
    )
}
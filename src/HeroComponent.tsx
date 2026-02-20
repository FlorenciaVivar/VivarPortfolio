import { motion } from "framer-motion";
export function HeroComponent(){
    return (
        <section className="min-h-screen flex items-center pt-16">
                <div className="section-container">
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6}}
                        className="text-primary font-heading text-lg mb-4"
                    >
                        Hola, soy
                    </motion.p>
                    <motion.h1
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.2}}
                        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
                    >
                        Florencia Vivar
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.5}}
                        className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-xl"
                    >
                        Desarrolladora Web Full Stack
                    </motion.p>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.8}}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#proyectos"
                            className="px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="px-6 py-3 border border-border text-foreground font-heading font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-center"
                        >
                            Contacto
                        </a>
                    </motion.div>
                </div>
            </section>

            )
            }

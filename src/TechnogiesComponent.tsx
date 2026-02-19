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
const technologies = [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Git", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Python", level: 70 },
    { name: "Docker", level: 65 }
];

export function TechnogiesComponent() {
   return (        <section id="tecnologias" className="py-24">
            <div className="section-container">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12"
                >
                    <span className="text-gradient">Tecnologías</span>
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i * 0.5}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-foreground font-heading font-medium text-sm">{tech.name}</span>
                                <span className="text-muted-foreground text-xs">{tech.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${tech.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
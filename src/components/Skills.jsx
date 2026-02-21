import React from 'react';
import { motion } from 'framer-motion';

const SkillChip = ({ name, index, color, glowColor }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`group relative px-4 py-3 rounded-lg border cursor-default transition-all duration-300 ${color}`}
    >
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${glowColor} blur-md -z-10`} />

        {/* Terminal-style prefix */}
        <div className="flex items-center gap-2">
            <span className="text-[10px] opacity-40 font-mono select-none">▹</span>
            <span className="text-sm font-mono text-text-primary group-hover:text-white transition-colors">{name}</span>
        </div>
    </motion.div>
);

const Skills = () => {
    const skills = {
        frontend: [
            'React.js', 'Tailwind CSS', 'JavaScript/ES6+', 'HTML5/CSS3', 'Framer Motion', 'Responsive Design'
        ],
        backend: [
            'Node.js/Express', 'Spring Boot', 'PostgreSQL', 'Supabase', 'REST APIs', 'MongoDB','JWT Authentication'
        ],
        security: [
            'OWASP Top 10', 'Web Penetration Testing', 'Burp Suite', 'Caido', 'Linux/Kali', 'CTF Challenges'
        ]
    };

    const columns = [
        {
            key: 'frontend',
            title: '[ FRONTEND ]',
            titleColor: 'text-accent-tertiary',
            borderHover: 'hover:border-accent-tertiary/30',
            chipColor: 'bg-accent-tertiary/5 border-accent-tertiary/20 hover:border-accent-tertiary/60 hover:bg-accent-tertiary/10',
            glowColor: 'bg-accent-tertiary/20',
            delay: 0.1,
        },
        {
            key: 'backend',
            title: '[ BACKEND ]',
            titleColor: 'text-accent-primary',
            borderHover: 'hover:border-accent-primary/30',
            chipColor: 'bg-accent-primary/5 border-accent-primary/20 hover:border-accent-primary/60 hover:bg-accent-primary/10',
            glowColor: 'bg-accent-primary/20',
            delay: 0.2,
        },
        {
            key: 'security',
            title: '[ SECURITY ]',
            titleColor: 'text-accent-secondary',
            borderHover: 'hover:border-accent-secondary/30',
            chipColor: 'bg-accent-secondary/5 border-accent-secondary/20 hover:border-accent-secondary/60 hover:bg-accent-secondary/10',
            glowColor: 'bg-accent-secondary/20',
            delay: 0.3,
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-mono text-text-primary mb-12 flex items-center gap-3">
                    <span className="text-accent-secondary">02.</span>
                    <span>TECH ARSENAL</span>
                    <span className="h-px bg-accent-secondary/30 flex-grow ml-4"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {columns.map(col => (
                        <motion.div
                            key={col.key}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: col.delay }}
                            className={`bg-bg-secondary/40 backdrop-blur p-6 rounded-xl border border-white/5 ${col.borderHover} transition-colors`}
                        >
                            <h3 className={`text-xl font-mono ${col.titleColor} mb-6 border-b border-white/10 pb-2`}>{col.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills[col.key].map((skill, i) => (
                                    <SkillChip
                                        key={skill}
                                        name={skill}
                                        index={i}
                                        color={col.chipColor}
                                        glowColor={col.glowColor}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-16 text-center font-mono text-sm text-text-secondary opacity-50">
                    <p>System Architecture: Microservices • REST API • Secure Authentication</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;

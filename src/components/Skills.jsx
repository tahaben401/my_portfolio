import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, color = 'bg-accent-primary' }) => (
    <div className="mb-4">
        <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-text-primary">{name}</span>
            <span className={`${color.replace('bg-', 'text-')}`}>{level}%</span>
        </div>
        <div className="w-full h-2 bg-bg-primary rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
            />
        </div>
    </div>
);

const Skills = () => {
    const skills = {
        frontend: [
            { name: 'React.js', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'JavaScript/ES6+', level: 85 },
            { name: 'HTML5/CSS3', level: 95 },
        ],
        backend: [
            { name: 'Node.js/Express', level: 80 },
            { name: 'Spring Boot', level: 75 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'Supabase', level: 85 },
        ],
        security: [
            { name: 'OWASP Top 10', level: 85 },
            { name: 'Penetration Testing', level: 60 },
            { name: 'Burp Suite', level: 70 },
            { name: 'Network Security', level: 65 },
        ]
    };

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-mono text-text-primary mb-12 flex items-center gap-3">
                    <span className="text-accent-secondary">02.</span>
                    <span>TECH ARSENAL</span>
                    <span className="h-px bg-accent-secondary/30 flex-grow ml-4"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend Column */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-bg-secondary/40 backdrop-blur p-6 rounded-xl border border-white/5 hover:border-accent-tertiary/30 transition-colors"
                    >
                        <h3 className="text-xl font-mono text-accent-tertiary mb-6 border-b border-white/10 pb-2">[ FRONTEND ]</h3>
                        {skills.frontend.map(s => <SkillBar key={s.name} {...s} color="bg-accent-tertiary" />)}
                    </motion.div>

                    {/* Backend Column */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-bg-secondary/40 backdrop-blur p-6 rounded-xl border border-white/5 hover:border-accent-primary/30 transition-colors"
                    >
                        <h3 className="text-xl font-mono text-accent-primary mb-6 border-b border-white/10 pb-2">[ BACKEND ]</h3>
                        {skills.backend.map(s => <SkillBar key={s.name} {...s} color="bg-accent-primary" />)}
                    </motion.div>

                    {/* Security Column */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-bg-secondary/40 backdrop-blur p-6 rounded-xl border border-white/5 hover:border-accent-secondary/30 transition-colors"
                    >
                        <h3 className="text-xl font-mono text-accent-secondary mb-6 border-b border-white/10 pb-2">[ SECURITY ]</h3>
                        {skills.security.map(s => <SkillBar key={s.name} {...s} color="bg-accent-secondary" />)}
                    </motion.div>
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

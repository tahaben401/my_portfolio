import React from 'react';
import { motion } from 'framer-motion';
import TerminalWindow from './TerminalWindow';
import { User, Cpu, Activity, Globe,Code,Shield } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl px-4"
            >
                <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

                    {/* Profile / Stats */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-accent-primary bg-bg-secondary p-1">
                                <div className="w-full h-full rounded-full bg-bg-primary overflow-hidden relative">
                                    {/* Placeholder for user image or avatar */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-accent-primary">
                                        <User size={64} />
                                    </div>
                                    <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay scanlines"></div>
                                </div>
                            </div>
                        </div>

                        <TerminalWindow title="user_stats.exe" className="w-full">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-text-secondary">Role:</span>
                                    <span className="text-accent-primary">Fullstack & Security</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-text-secondary">Status:</span>
                                    <span className="text-accent-tertiary flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-text-secondary">Location:</span>
                                    <span className="text-text-primary">Worldwide</span>
                                </div>
                                <div className="border-t border-white/10 pt-2 mt-2">
                                    <div className="text-xs text-text-secondary mb-1">System Integrity</div>
                                    <div className="w-full h-2 bg-bg-primary rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-primary w-[98%] shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
                                    </div>
                                    <div className="text-right text-xs text-accent-primary mt-1">98%</div>
                                </div>
                            </div>
                        </TerminalWindow>
                    </div>

                    {/* Bio / Content */}
                    <div className="w-full lg:w-2/3 space-y-8">
                        <h2 className="text-3xl font-mono text-text-primary flex items-center gap-3">
                            <span className="text-accent-primary">01.</span>
                            <span>SYSTEM INFORMATION</span>
                            <span className="h-px bg-accent-primary/30 flex-grow ml-4"></span>
                        </h2>

                        <div className="font-sans text-text-secondary space-y-4 text-lg leading-relaxed">
                            <p>
                                <span className="text-accent-primary font-mono">$ init_sequence: </span>
                                Hello! I'm Taha Benahmadi, a Software Engineering student driven by the intersection of building robust applications and breaking them.
                            </p>
                            <p>
                                My journey started with fullstack development, mastering the React ecosystem and Spring Boot. However, the thrill of understanding "how things break" led me down the rabbit hole of cybersecurity.
                            </p>
                            <p>
                                Today, I build secure-by-design systems and hunt for vulnerabilities in others. My goal is to become a world-class Vulnerability Researcher, contributing to a safer digital future.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-bg-secondary/50 p-4 border-l-2 border-accent-secondary">
                                <h3 className="text-accent-secondary font-mono mb-2 flex items-center gap-2">
                                    <Code size={18} /> Fullstack Dev
                                </h3>
                                <p className="text-sm text-text-secondary">Building scalable, responsive web applications with modern tech stacks.</p>
                            </div>
                            <div className="bg-bg-secondary/50 p-4 border-l-2 border-accent-primary">
                                <h3 className="text-accent-primary font-mono mb-2 flex items-center gap-2">
                                    <Shield size={18} /> Security Research
                                </h3>
                                <p className="text-sm text-text-secondary">Identifying vulnerabilities (XSS, SQLi, CSRF) and securing codebases.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <span className="font-mono text-accent-tertiary">➜ </span>
                            <a href="#contact" className="text-text-primary hover:text-accent-primary underline decoration-accent-primary/30 hover:decoration-accent-primary transition-all">
                                Download Resume (Encrypted)
                            </a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default About;

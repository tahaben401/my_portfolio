import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, ChevronDown } from 'lucide-react';
import GlitchText from './GlitchText';

const Hero = () => {
    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center relative">
            <div className="w-full max-w-4xl space-y-8">

                {/* Intro */}
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                        </span>
                        System Online
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight">
                        <span className="text-text-primary">HI, I'M </span>
                        <span className="text-accent-primary inline-block">
                            <GlitchText text="TAHA" />
                        </span>
                    </h1>

                    <div className="text-lg sm:text-2xl font-mono text-text-secondary h-8">
                        <span>$ </span>
                        <Typewriter
                            words={['Fullstack Developer', 'Security Researcher', 'Vulnerability Hunter', 'Software Engineer']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

                {/* Terminal Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-bg-secondary/80 backdrop-blur border border-accent-primary/30 rounded-lg overflow-hidden max-w-2xl mx-auto shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                >
                    <div className="bg-bg-primary px-4 py-2 flex items-center border-b border-accent-primary/20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 text-xs font-mono text-text-secondary">root@taha-portfolio:~</div>
                    </div>
                    <div className="p-4 sm:p-6 font-mono text-sm sm:text-base space-y-2">
                        <div className="flex gap-2">
                            <span className="text-accent-tertiary">➜</span>
                            <span className="text-accent-secondary">~</span>
                            <span className="text-text-primary">$ whoami</span>
                        </div>
                        <div className="text-text-secondary pl-4">
                            "Software Engineering Student passionate about Web Security & Vulnerability Research."
                        </div>

                        <div className="flex gap-2 pt-2">
                            <span className="text-accent-tertiary">➜</span>
                            <span className="text-accent-secondary">~</span>
                            <span className="text-text-primary">$ cat skills.txt</span>
                        </div>
                        <div className="text-text-secondary pl-4 grid grid-cols-2 gap-x-4">
                            <span>• React.js & Express.js</span>
                            <span>• Spring Boot</span>
                            <span>• PostgreSQL & Supabase</span>
                            <span>• Web Vulnerability Research</span>
                        </div>

                        <div className="flex gap-2 pt-2 animate-pulse">
                            <span className="text-accent-tertiary">➜</span>
                            <span className="text-accent-secondary">~</span>
                            <span className="text-accent-primary">_</span>
                        </div>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                >
                    <a href="#projects" className="group relative px-6 py-3 font-mono font-bold text-bg-primary bg-accent-primary rounded overflow-hidden">
                        <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative flex items-center gap-2">
                            <Code size={18} /> VIEW PROJECTS
                        </span>
                    </a>

                    <a href="#contact" className="group px-6 py-3 font-mono font-bold text-accent-primary border border-accent-primary rounded hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all">
                        <span className="flex items-center gap-2">
                            <Shield size={18} /> CONTACT ME
                        </span>
                    </a>
                </motion.div>

            </div>

            <motion.button
                onClick={handleScrollDown}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 text-accent-primary hover:text-white transition-colors"
            >
                <ChevronDown size={32} />
            </motion.button>
        </section>
    );
};

export default Hero;

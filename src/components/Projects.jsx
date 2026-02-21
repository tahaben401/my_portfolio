import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Play, Server, Database, Brain } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-tertiary rounded-lg opacity-20 group-hover:opacity-75 transition duration-500 blur"></div>
            <div className="relative h-full bg-bg-secondary border border-white/10 rounded-lg overflow-hidden flex flex-col">

                {/* Terminal Header */}
                <div className="bg-bg-primary/90 px-3 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[10px] font-mono text-text-secondary opacity-70">
                        ./{project.id}_deploy.sh
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold font-mono text-text-primary group-hover:text-accent-primary transition-colors">
                                {project.title}
                            </h3>
                            <span className="text-xs font-mono text-accent-tertiary">{project.type}</span>
                        </div>
                        <Terminal size={20} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
                        {project.description}
                    </p>

                    <div className="mt-auto space-y-4">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono border border-accent-primary/20 text-accent-primary/80 rounded bg-accent-primary/5">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
                            {project.frontendRepo && (
                                <a href={project.frontendRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-text-primary hover:text-accent-tertiary transition-colors">
                                    <Github size={14} /> Frontend
                                </a>
                            )}
                            {project.backendRepo && (
                                <a href={project.backendRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-text-primary hover:text-accent-primary transition-colors">
                                    <Server size={14} /> Backend
                                </a>
                            )}
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-text-primary hover:text-accent-secondary transition-colors">
                                    <Play size={14} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: "campus_2d",
            title: "Campus 2D",
            type: "Real-time Interactive Platform",
            description: "A 2D virtual campus giving real-time state of all rooms. Includes student tracking, room details, and an integrated AI chatbot for campus assistance.",
            stack: ["React.js", "Express.js", "Flask", "AI/LLM", "Socket.io"],
            frontendRepo: "https://github.com/tahaben401/2d-campus",
            backendRepo: "https://github.com/tahaben401/2d-campus-backend",
        },
        {
            id: "elearn",
            title: "E-Learn Platform",
            type: "Educational System",
            description: "Comprehensive university e-learning platform. Features course management, student progress tracking, and secure resource distribution.",
            stack: ["React.js", "Spring Boot", "PostgreSQL", "JWT Auth", "REST API"],
            frontendRepo: "https://github.com/OmarBouhlal/elearning-front",
            backendRepo: "https://github.com/tahaben401/Elearning-platform",
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-primary/5 -skew-x-12 opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-mono text-text-primary mb-12 flex items-center gap-3">
                    <span className="text-accent-primary">03.</span>
                    <span>PROJECT EXECUTABLES</span>
                    <span className="h-px bg-accent-primary/30 flex-grow ml-4"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/tahaben401" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-text-secondary text-text-secondary hover:text-bg-primary hover:bg-text-secondary font-mono transition-all">
                        View Full Archive on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

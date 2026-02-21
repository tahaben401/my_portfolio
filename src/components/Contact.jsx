import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const TerminalInput = ({ label, type = "text", placeholder }) => (
    <div className="mb-4">
        <label className="block text-xs font-mono text-accent-primary mb-1 pl-2">{label}</label>
        <div className="relative group">
            <span className="absolute left-3 top-2.5 text-accent-secondary font-mono">{'>'}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-bg-secondary/50 border border-white/10 rounded px-8 py-2 font-mono text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all placeholder:text-text-secondary/30"
            />
            <div className="absolute inset-0 border border-accent-primary/0 group-hover:border-accent-primary/20 rounded pointer-events-none transition-colors"></div>
        </div>
    </div>
);

const Contact = () => {
    const [formStatus, setFormStatus] = useState('IDLE'); // IDLE, SENDING, SENT

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('SENDING');
        setTimeout(() => setFormStatus('SENT'), 1500);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4">

                <div className="bg-bg-secondary/30 backdrop-blur border border-accent-primary/20 rounded-lg overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="bg-bg-primary/90 px-4 py-2 flex items-center justify-between border-b border-accent-primary/20">
                        <div className="flex items-center gap-2">
                            <Terminal size={14} className="text-text-secondary" />
                            <span className="text-xs font-mono text-text-secondary">secure_connection_v2.ssh</span>
                        </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Left: Contact Form */}
                        <div>
                            <h3 className="text-xl font-mono text-text-primary mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-primary animate-pulse rounded-full"></span>
                                ESTABLISH_UPLINK
                            </h3>

                            {formStatus === 'SENT' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-64 flex flex-col items-center justify-center text-center space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary border border-accent-primary">
                                        <Send size={32} />
                                    </div>
                                    <div className="font-mono text-accent-primary">Message Encrypted & Sent!</div>
                                    <p className="text-xs text-text-secondary">Target acknowledged receipt.</p>
                                    <button
                                        onClick={() => setFormStatus('IDLE')}
                                        className="text-xs text-accent-tertiary underline mt-4"
                                    >
                                        Send another packet
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <TerminalInput label="source_id (Name)" placeholder="Enter your name..." />
                                    <TerminalInput label="return_address (Email)" type="email" placeholder="Enter your email..." />

                                    <div className="mb-6">
                                        <label className="block text-xs font-mono text-accent-primary mb-1 pl-2">payload (Message)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-accent-secondary font-mono">{'>'}</span>
                                            <textarea
                                                rows="4"
                                                placeholder="Type your message..."
                                                className="w-full bg-bg-secondary/50 border border-white/10 rounded px-8 py-2 font-mono text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all placeholder:text-text-secondary/30 resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'SENDING'}
                                        className="w-full bg-accent-primary/10 hover:bg-accent-primary/20 border border-accent-primary text-accent-primary font-mono py-2 rounded transition-all flex items-center justify-center gap-2 group"
                                    >
                                        {formStatus === 'SENDING' ? (
                                            <span>INITIALIZING HANDSHAKE...</span>
                                        ) : (
                                            <>
                                                <span>EXECUTE_SEND</span>
                                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right: Connect Links */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <p className="font-mono text-sm text-text-secondary mb-4 opacity-70">// DIRECT_CONNECT_CHANNELS</p>

                                <a href="https://github.com/tahaben401" target="_blank" rel="noopener noreferrer" className="block group">
                                    <div className="flex items-center gap-4 p-3 rounded hover:bg-white/5 transition-colors border border-transparent hover:border-accent-primary/30">
                                        <Github className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                                        <div className="font-mono text-sm">
                                            <div className="text-text-primary group-hover:text-accent-primary">$ ssh github</div>
                                            <div className="text-[10px] text-text-secondary">Repositories & Gists</div>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://ma.linkedin.com/in/taha-benahmadi-85353a3a9" target="_blank" rel="noopener noreferrer" className="block group">
                                    <div className="flex items-center gap-4 p-3 rounded hover:bg-white/5 transition-colors border border-transparent hover:border-accent-secondary/30">
                                        <Linkedin className="text-text-secondary group-hover:text-accent-secondary transition-colors" />
                                        <div className="font-mono text-sm">
                                            <div className="text-text-primary group-hover:text-accent-secondary">$ connect linkedin</div>
                                            <div className="text-[10px] text-text-secondary">Professional Network</div>
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto:bentaha2004@gmail.com" className="block group">
                                    <div className="flex items-center gap-4 p-3 rounded hover:bg-white/5 transition-colors border border-transparent hover:border-accent-tertiary/30">
                                        <Mail className="text-text-secondary group-hover:text-accent-tertiary transition-colors" />
                                        <div className="font-mono text-sm">
                                            <div className="text-text-primary group-hover:text-accent-tertiary">$ mail -s "Hello"</div>
                                            <div className="text-[10px] text-text-secondary">Encrypted Channel</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="bg-bg-primary/50 p-4 rounded text-xs font-mono text-text-secondary border border-white/5">
                                <div>System Status: <span className="text-green-500">OPERATIONAL</span></div>
                                <div>Uptime: <span className="text-accent-tertiary">99.999%</span></div>
                                <div>Last Login: <span className="text-white">Just now</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-20 text-center text-xs font-mono text-text-secondary/50">
                    <p className="mb-2">This system is protected by quantum-resistant encryption.</p>
                    <p>&copy; {new Date().getFullYear()} Taha Benahmadi. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;

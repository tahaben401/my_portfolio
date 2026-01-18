import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: '~/about', href: '#about' },
        { title: '~/skills', href: '#skills' },
        { title: '~/projects', href: '#projects' },
        { title: '~/security', href: '#security' },
        { title: '~/contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-bg-secondary/80 backdrop-blur-md border border-accent-primary/30 rounded-lg px-6 py-3 w-full max-w-5xl shadow-lg shadow-accent-primary/10">
                <div className="flex justify-between items-center sm:hidden">
                    <span className="text-accent-primary font-mono text-lg flex items-center gap-2">
                        <Terminal size={18} />
                        sys.root
                    </span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text-primary hover:text-accent-primary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 mt-4 sm:mt-0 font-mono text-sm`}>
                    <li className="hidden sm:block absolute left-6 text-accent-primary font-bold tracking-wider">
                        <span className="flex items-center gap-2"><Terminal size={16} /> TAHA_BENAHMADI</span>
                    </li>
                    {navLinks.map((link) => (
                        <li key={link.title} className="w-full sm:w-auto text-center">
                            <a
                                href={link.href}
                                className="relative block px-3 py-2 text-text-secondary hover:text-accent-primary transition-colors group"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

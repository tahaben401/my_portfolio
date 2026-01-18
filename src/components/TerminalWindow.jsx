import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { motion } from 'framer-motion';

const TerminalWindow = ({ title = 'user@portfolio', children, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-bg-secondary/90 backdrop-blur border border-accent-primary/20 rounded-lg overflow-hidden shadow-lg shadow-accent-primary/5 ${className}`}
        >
            {/* Terminal Header */}
            <div className="bg-bg-primary/90 px-4 py-2 flex items-center justify-between border-b border-accent-primary/20">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-text-secondary text-xs font-mono select-none">{title}</div>
                <div className="flex items-center gap-2 text-text-secondary">
                    <Minus size={12} />
                    <Square size={10} />
                    <X size={12} />
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm sm:text-base text-text-primary">
                {children}
            </div>
        </motion.div>
    );
};

export default TerminalWindow;

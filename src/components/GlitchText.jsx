import React from 'react';

const GlitchText = ({ text }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent-primary opacity-0 group-hover:opacity-100 group-hover:animate-glitch select-none">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent-secondary opacity-0 group-hover:opacity-100 group-hover:animate-glitch select-none" style={{ animationDelay: '0.1s' }}>
                {text}
            </span>
        </span>
    );
};

export default GlitchText;

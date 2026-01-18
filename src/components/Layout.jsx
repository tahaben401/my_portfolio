import React from 'react';
import MatrixBackground from './MatrixBackground';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-bg-primary text-text-primary font-sans selection:bg-accent-primary selection:text-bg-primary">
            {/* Background Effects */}
            <MatrixBackground />
            <div className="fixed inset-0 bg-repeat bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>

            {/* Scanline & CRT Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 crt-overlay"></div>
            <div className="fixed inset-0 pointer-events-none z-50 animate-scanline bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent h-24 w-full"></div>

            {/* Main Content */}
            <Navbar />
            <main className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
                {children}
            </main>
        </div>
    );
};

export default Layout;

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lock, ShieldAlert, Bug } from 'lucide-react';

const VulnerabilityCard = ({ title, severity, status, description }) => {
    const severityColors = {
        CRITICAL: 'text-red-500 border-red-500/50 bg-red-500/10',
        HIGH: 'text-orange-500 border-orange-500/50 bg-orange-500/10',
        MEDIUM: 'text-yellow-500 border-yellow-500/50 bg-yellow-500/10',
    };

    return (
        <div className={`border-l-4 p-4 mb-4 bg-bg-secondary/50 backdrop-blur rounded-r-lg ${severityColors[severity].replace('text-', 'border-')}`}>
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-mono font-bold text-text-primary flex items-center gap-2">
                    <Bug size={16} className={severityColors[severity].split(' ')[0]} />
                    {title}
                </h4>
                <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${severityColors[severity]}`}>
                    {severity}
                </span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-text-secondary leading-snug max-w-[80%]">{description}</p>
                <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 rounded">
                    {status}
                </span>
            </div>
        </div>
    );
};

const Vulnerabilities = () => {
    return (
        <section id="security" className="py-20 bg-bg-secondary/20 relative">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-mono text-text-primary mb-12 flex items-center gap-3">
                    <span className="text-text-alert">04.</span>
                    <span>SECURITY RESEARCH</span>
                    <span className="h-px bg-text-alert/30 flex-grow ml-4"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: Intro/Stats */}
                    <div className="space-y-6">
                        <div className="bg-bg-primary p-6 rounded-lg border border-accent-primary/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <h3 className="text-xl font-mono text-accent-primary mb-4">[ TARGET SCOPE ]</h3>
                            <ul className="space-y-3 font-mono text-sm text-text-secondary">
                                <li className="flex items-center gap-2">
                                    <span className="text-accent-tertiary">➜</span> Web Application Security
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent-tertiary">➜</span> API Vulnerability Assessment
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent-tertiary">➜</span> Secure Code Review
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent-tertiary">➜</span> CTF Player (pwn/web)
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 border border-text-alert/20 bg-text-alert/5 rounded flex items-center gap-4">
                            <AlertTriangle className="text-text-alert" size={32} />
                            <div>
                                <div className="text-text-alert font-bold font-mono">DISCLAIMER</div>
                                <p className="text-xs text-text-secondary">All security research is conducted within legal boundaries and ethical disclosure policies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Findings/Cards */}
                    <div>
                        <h3 className="text-sm font-mono text-text-secondary mb-4 opacity-70">
                 // RECENT FINDINGS & LABS
                        </h3>

                        <VulnerabilityCard
                            title="Stored XSS in Campus Portal"
                            severity="HIGH"
                            status="PATCHED"
                            description="Discovered a persistent Cross-Site Scripting vulnerability in the student bio section allowing session hijacking."
                        />
                        <VulnerabilityCard
                            title="IDOR in API Endpoint"
                            severity="MEDIUM"
                            status="REPORTED"
                            description="Insecure Direct Object Reference allowed unauthorized access to other user's resource files."
                        />
                        <VulnerabilityCard
                            title="SQL Injection (Blind)"
                            severity="CRITICAL"
                            status="LAB SOLVED"
                            description="Successfully exploited a blind SQLi in a CTF challenge environment to extract admin credentials."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vulnerabilities;

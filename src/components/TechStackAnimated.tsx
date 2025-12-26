"use client";

import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiVuedotjs,
    SiNuxtdotjs,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiDocker,
    SiGit,
    SiAwsamplify,
    SiVercel,
    SiRedis,
    SiGithubactions,
    SiJsonwebtokens,
    SiZod,
    SiNginx,
    SiAstro,
    SiRust,
    SiTauri,
    SiSupabase,
    SiSqlite,
    SiGreensock,
    SiStripe,
    SiApplepay,
    SiGooglepay
} from 'react-icons/si';
import { FaShieldAlt, FaLock, FaUserShield, FaKey, FaDatabase, FaFingerprint } from 'react-icons/fa';
import { GiShield } from 'react-icons/gi';

const technologies = {
    frontend: [
        { name: "React", color: "#61DAFB", icon: SiReact, usage: "Stock Manager, Car Rental, PreonCheque Desktop" },
        { name: "Astro", color: "#FF5D01", icon: SiAstro, usage: "Alpha TV, IMEI Checker SaaS - Static-first SSG" },
        { name: "Next.js", color: "#ffffff", icon: SiNextdotjs, usage: "Stock Manager, Portfolio" },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript, usage: "All major projects for type safety" },
        { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss, usage: "All projects - utility-first CSS" },
        { name: "GSAP", color: "#88CE02", icon: SiGreensock, usage: "Nazim Wholesale - scroll animations" },
        { name: "Vue.js", color: "#4FC08D", icon: SiVuedotjs, usage: "Hive dApp Platform" },
    ],
    backend: [
        { name: "Rust", color: "#DEA584", icon: SiRust, usage: "PreonCheque - Tauri backend, license security" },
        { name: "Tauri", color: "#24C8D8", icon: SiTauri, usage: "PreonCheque - Desktop runtime (10x smaller than Electron)" },
        { name: "Node.js", color: "#339933", icon: SiNodedotjs, usage: "License Server, API backends" },
        { name: "Express.js", color: "#FFFFFF", icon: SiExpress, usage: "Car Rental API, License Server" },
        { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql, usage: "IMEI Checker, License Server, Stock Manager" },
        { name: "Supabase", color: "#3ECF8E", icon: SiSupabase, usage: "IMEI Checker SaaS - RLS multi-tenant" },
        { name: "SQLite", color: "#003B57", icon: SiSqlite, usage: "PreonCheque - local crash-safe storage" },
        { name: "Prisma", color: "#2D3748", icon: SiPrisma, usage: "Car Rental ORM, Database management" },
    ],
    payments: [
        { name: "Stripe", color: "#635BFF", icon: SiStripe, usage: "Alpha TV, FameJuice - Payment processing" },
        { name: "Apple Pay", color: "#000000", icon: SiApplepay, usage: "Alpha TV - One-click mobile payments" },
        { name: "Google Pay", color: "#4285F4", icon: SiGooglepay, usage: "Alpha TV - Android payments" },
    ],
    security: [
        { name: "HMAC-SHA256", color: "#E74C3C", icon: FaKey, usage: "PreonCheque - signed API requests, Stripe webhooks" },
        { name: "AES-256", color: "#9B59B6", icon: FaLock, usage: "PreonCheque - encrypted license tokens" },
        { name: "Row Level Security", color: "#3ECF8E", icon: FaDatabase, usage: "IMEI Checker - multi-tenant data isolation" },
        { name: "Machine Binding", color: "#E67E22", icon: FaFingerprint, usage: "PreonCheque - hardware fingerprint license lock" },
        { name: "Rate Limiting", color: "#FF6B6B", icon: FaShieldAlt, usage: "Block brute-force & DDoS (30 req/min)" },
        { name: "Backend Proxy", color: "#F38181", icon: FaUserShield, usage: "Stripe/IMEI API keys never exposed to client" },
        { name: "JWT", color: "#FB015B", icon: SiJsonwebtokens, usage: "Secure admin auth & token management" },
        { name: "Input Validation", color: "#3B82F6", icon: SiZod, usage: "Zod/Joi - SQL injection & XSS prevention" },
        { name: "Helmet.js", color: "#FFD93D", icon: GiShield, usage: "Secure HTTP headers (CSP, HSTS, XSS)" },
    ],
    tools: [
        { name: "Docker", color: "#2496ED", icon: SiDocker, usage: "Containerization, Deployment" },
        { name: "Git", color: "#F05032", icon: SiGit, usage: "Version control for all projects" },
        { name: "CI/CD", color: "#2088FF", icon: SiGithubactions, usage: "Automated testing & deployment" },
        { name: "AWS", color: "#FF9900", icon: SiAwsamplify, usage: "Cloud infrastructure, Hosting" },
        { name: "Vercel", color: "#FFFFFF", icon: SiVercel, usage: "Next.js deployments, Edge functions" },
        { name: "VPS", color: "#6366F1", icon: SiDocker, usage: "DigitalOcean, Hetzner, OVH servers" },
        { name: "SSH", color: "#38BDF8", icon: FaKey, usage: "Secure server access & deployment" },
        { name: "Redis", color: "#DC382D", icon: SiRedis, usage: "Caching, Session management" },
        { name: "Nginx", color: "#009639", icon: SiNginx, usage: "Reverse proxy, Load balancing" },
    ],
};

interface TechCardProps {
    tech: { name: string; color: string; icon: React.ComponentType<any>; usage: string };
    index: number;
}

function TechCard({ tech, index }: TechCardProps) {
    const Icon = tech.icon;
    return (
        <div
            className="group relative bg-[#111111] hover:bg-[#161616] p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer flex-shrink-0 mx-2 min-w-[120px] overflow-hidden"
            title={tech.usage}
        >
            {/* Glare Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${tech.color}40 0%, transparent 50%)`
                }}
            />
            <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <Icon
                        className="w-full h-full transition-all duration-300 group-hover:drop-shadow-lg"
                        style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
                    />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                    {tech.name}
                </span>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20 border border-gray-700">
                {tech.usage}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800" />
            </div>
        </div>
    );
}

function SecurityCard({ tech }: { tech: typeof technologies.security[0] }) {
    const Icon = tech.icon;
    return (
        <div
            className="group relative bg-gradient-to-br from-[#111111] to-[#0d0d0d] hover:from-[#161616] hover:to-[#111111] p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-900/30 cursor-pointer flex-shrink-0 mx-2 min-w-[140px] border border-green-900/20 overflow-hidden"
            title={tech.usage}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${tech.color}30 0%, transparent 50%)`
                }}
            />
            <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <Icon
                        className="w-full h-full transition-all duration-300 group-hover:drop-shadow-lg"
                        style={{ color: tech.color, filter: `drop-shadow(0 0 10px ${tech.color}50)` }}
                    />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                    {tech.name}
                </span>
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-normal max-w-[200px] z-20 border border-gray-700">
                {tech.usage}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800" />
            </div>
        </div>
    );
}

export default function TechStackAnimated() {
    return (
        <section id="skills" className="py-6 md:py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6 }}
                >
                    Technologies & Skills
                </motion.h2>

                {/* Frontend - Scrolling Animation */}
                <div className="mb-12">
                    <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Frontend
                    </motion.h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-loop">
                            {[...technologies.frontend, ...technologies.frontend].map((tech, index) => (
                                <TechCard key={`${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backend & Database - Scrolling Animation (reverse) */}
                <div className="mb-12">
                    <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Backend & Database
                    </motion.h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-loop-reverse">
                            {[...technologies.backend, ...technologies.backend].map((tech, index) => (
                                <TechCard key={`${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Security - Scrolling Animation */}
                <div className="mb-12">
                    <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <FaShieldAlt className="text-green-500" />
                        Security & Best Practices
                    </motion.h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-loop">
                            {[...technologies.security, ...technologies.security].map((tech, index) => (
                                <SecurityCard key={`${tech.name}-${index}`} tech={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Security Info Box */}
                    <motion.div
                        className="mt-8 p-6 md:p-8 bg-gradient-to-r from-green-900/10 to-blue-900/10 rounded-xl border border-green-800/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FaUserShield className="text-xl text-green-400" />
                            <h4 className="text-lg font-semibold text-green-400">Secure Architecture</h4>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Production-ready security with backend proxy patterns, rate limiting, input validation, and comprehensive protection against common vulnerabilities.
                        </p>
                    </motion.div>
                </div>

                {/* Tools & DevOps - Scrolling Animation (reverse) */}
                <div>
                    <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Tools & DevOps
                    </motion.h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-loop-reverse">
                            {[...technologies.tools, ...technologies.tools].map((tech, index) => (
                                <TechCard key={`${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const personal = {
    name: "Younes Saribey",
    title: "Full-Stack Software Engineer",
    tagline: "Security-focused, production-ready applications",
    description: "I build scalable web platforms that simplify complex operations. Specialized in enterprise e-commerce, real-time dashboards, and high-performance backend systems.",
    email: "younessaribey1@gmail.com",
    emailDisplay: "me@younessaribey.dev",
    linkedin: "https://www.linkedin.com/in/younes-saribey-6178a8258/",
    github: "https://github.com/younessaribey",
    resumeUrl: "/pdf/younes.pdf",
    location: "Algeria",
    available: true
};

export const techStack = {
    frontend: [
        { name: "React", color: "#61DAFB", usage: "Stock Manager, Car Rental, PreonCheque" },
        { name: "Astro", color: "#FF5D01", usage: "Alpha TV, IMEI Checker SaaS" },
        { name: "Next.js", color: "#000000", usage: "Stock Manager, Portfolio" },
        { name: "TypeScript", color: "#3178C6", usage: "All major projects" },
        { name: "TailwindCSS", color: "#06B6D4", usage: "All projects" },
        { name: "GSAP", color: "#88CE02", usage: "Nazim Wholesale animations" },
        { name: "Vue.js", color: "#4FC08D", usage: "Hive dApp Platform" },
    ],
    backend: [
        { name: "Rust", color: "#DEA584", usage: "PreonCheque Tauri backend" },
        { name: "Tauri", color: "#24C8D8", usage: "PreonCheque desktop runtime" },
        { name: "Node.js", color: "#339933", usage: "License Server, API backends" },
        { name: "Express.js", color: "#FFFFFF", usage: "Car Rental API, License Server" },
        { name: "PostgreSQL", color: "#4169E1", usage: "IMEI Checker, Stock Manager" },
        { name: "Supabase", color: "#3ECF8E", usage: "IMEI Checker SaaS RLS" },
        { name: "SQLite", color: "#003B57", usage: "PreonCheque local storage" },
        { name: "Prisma", color: "#2D3748", usage: "Car Rental ORM" },
    ],
    security: [
        { name: "HMAC-SHA256", color: "#E74C3C", usage: "Signed API requests, webhooks" },
        { name: "AES-256", color: "#9B59B6", usage: "License token encryption" },
        { name: "Row Level Security", color: "#3ECF8E", usage: "Multi-tenant data isolation" },
        { name: "Machine Binding", color: "#E67E22", usage: "Hardware fingerprint locks" },
        { name: "Rate Limiting", color: "#FF6B6B", usage: "DDoS/brute-force protection" },
        { name: "Backend Proxy", color: "#F38181", usage: "API key protection" },
        { name: "JWT", color: "#FB015B", usage: "Secure authentication" },
        { name: "Input Validation", color: "#3B82F6", usage: "SQL injection prevention" },
    ],
    tools: [
        { name: "Docker", color: "#2496ED", usage: "Containerization" },
        { name: "Git", color: "#F05032", usage: "Version control" },
        { name: "CI/CD", color: "#2088FF", usage: "Automated deployment" },
        { name: "AWS", color: "#FF9900", usage: "Cloud infrastructure" },
        { name: "Vercel", color: "#FFFFFF", usage: "Next.js deployments" },
        { name: "Redis", color: "#DC382D", usage: "Caching, sessions" },
        { name: "Nginx", color: "#009639", usage: "Reverse proxy" },
    ],
};

export const securitySkills = [
    { name: "HMAC-SHA256", description: "Signed API requests prevent tampering", projects: ["PreonCheque", "Alpha TV"] },
    { name: "AES-256", description: "Military-grade encryption for sensitive data", projects: ["PreonCheque"] },
    { name: "Row Level Security", description: "Multi-tenant data isolation (IDOR prevention)", projects: ["IMEI Checker SaaS"] },
    { name: "Machine Binding", description: "Hardware fingerprint locks licenses to devices", projects: ["PreonCheque"] },
    { name: "Rate Limiting", description: "Blocks brute-force and DDoS (30 req/min)", projects: ["PreonCheque", "IMEI SaaS"] },
    { name: "Backend Proxy", description: "API keys never exposed to client", projects: ["Alpha TV", "IMEI SaaS"] },
];

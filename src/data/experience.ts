export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
    highlight?: string;
}

export const experiences: Experience[] = [
    {
        title: "Software Engineer",
        company: "Banque Nationale de l'Habitat (BNH)",
        period: "Oct 2023 – Present",
        location: "Algeria, On-site",
        highlight: "Current Role",
        description: [
            "Designed, maintained, and optimized the SQL backend of the bank's internal systems, focusing on secure and high-performance API development.",
            "Developed and optimized RESTful APIs connecting HR and operational systems, implementing strict role-based access control (RBAC), API keys, and mutual TLS.",
            "Enhanced database security using advanced SQL procedures, indexing, encryption at rest and in transit, and auditing mechanisms.",
            "Contributed to the bank's digital transformation by ensuring data integrity, scalability, and system stability."
        ],
        technologies: ["SQL", "REST APIs", "Python", "Node.js", "PostgreSQL", "RBAC", "FastAPI", "Express.js", "React.js", "TypeScript", "Docker", "CI/CD"]
    },
    {
        title: "Tech Lead | Web, Mobile, Databases & Architecture",
        company: "Brothers Phone",
        period: "Sep 2022 – May 2024",
        location: "Algiers, Algeria | Hybrid",
        highlight: "Leadership Role",
        description: [
            "Oversaw all IT operations, from development to system administration, ensuring scalable, secure, and high-performance solutions.",
            "Led the design, development, and maintenance of web and mobile applications tailored to business requirements.",
            "Designed database schemas, optimized queries, and managed database performance for reliability and efficiency.",
            "Enforced cybersecurity best practices, including data protection, access controls, and system monitoring."
        ],
        technologies: ["Full-Stack Development", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Python", "Docker", "System Architecture", "Cybersecurity"]
    },
    {
        title: "IT Solutions Developer",
        company: "DXG",
        period: "Mar 2021 – Jan 2023",
        location: "Remote",
        description: [
            "Designed and deployed full e-commerce platforms covering web, mobile, landing pages, payments, and fraud prevention.",
            "Developed a Shopify extension automating order management and delivery integration.",
            "Integrated payment gateways, pixel tracking (frontend), and API conversions (backend) with PCI-DSS compliance.",
            "Implemented anti-fraud systems (rules engine, risk scoring) and optimized performance using Redis and Elasticsearch."
        ],
        technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "Cloud Deployment"]
    },
    {
        title: "Full-Stack Developer",
        company: "NMD EURL Importation",
        period: "Sept 2020 – May 2022",
        location: "Algiers, Algeria | On-site",
        description: [
            "Developed full-stack applications to optimize logistics, order management, and real-time shipment tracking.",
            "Designed a logistics synchronization API connecting warehouses, suppliers, and delivery partners.",
            "Built a real-time dashboard displaying shipment, customs clearance, and delivery statuses.",
            "Implemented advanced security mechanisms including authentication, access control, and data protection."
        ],
        technologies: ["React", "Node.js", "Express", "REST APIs", "WebSockets", "PostgreSQL", "Redis", "Docker", "CI/CD", "Real-time Dashboards"]
    },
    {
        title: "Front-End Developer",
        company: "COD TOOP",
        period: "Feb 2020 – Aug 2020",
        location: "Algiers, Algeria | On-site",
        description: [
            "Developed user-facing interfaces using React.js, Next.js and TypeScript with responsive design.",
            "Built dashboards and live statistics components for tracking shipments and order statuses in real time.",
            "Connected frontend with backend services for COD transactions, delivery estimates, and inventory.",
            "Optimized performance with reduced load times, efficient async data handling, and lazy loading."
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "Express.js", "PostgreSQL", "REST APIs", "Responsive UI", "Performance Optimization"]
    }
];

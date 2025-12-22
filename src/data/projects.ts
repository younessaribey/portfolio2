export interface TechArchitecture {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    technologies: string[];
    securityFeatures?: string[];
    technicalChallenges?: string[];
    architecture?: TechArchitecture;
    adminCredentials?: {
        email: string;
        password: string;
        access: string;
    };
    liveUrl?: string;
    adminUrl?: string;
    githubUrl?: string;
    caseStudyUrl?: string;
    screenshots: {
        src: string;
        label: 'desktop' | 'mobile';
        title: string;
    }[];
    featured: boolean;
    order: number;
}

export const projects: Project[] = [
    {
        id: "alpha-tv",
        title: "Alpha TV",
        subtitle: "IPTV E-commerce Platform",
        description: "🎯 Problem Solved: Built an e-commerce platform with abandoned cart recovery system that captures lost leads through WhatsApp rescue popups. 💡 Technical Challenges: Implemented 5 smart triggers (exit intent, 30s timer, inactivity, tab switch, back button) for lead capture. Built backend proxy architecture so Stripe API keys never touch the client (XSS prevention). Integrated Google Sheets webhook for progressive form tracking (started → typing → abandoned → completed). Multi-platform analytics with Meta Pixel + TikTok Pixel + Google Analytics. 🔐 Security: Backend proxy for Stripe, HMAC webhook verification, input sanitization. 📈 Business Impact: Real-time order automation (MAC/PIN → Google Sheets → WhatsApp auto-message), 100% Lighthouse SEO score with Astro SSG, bilingual FR/EN support.",
        problem: "High cart abandonment rates were causing lost sales. Needed multi-channel analytics and secure payment processing.",
        solution: "Implemented 5 smart triggers (exit intent, 30s timer, inactivity, tab switch, back button) for lead capture. Backend proxy architecture for Stripe. Google Sheets webhook integration.",
        impact: "Real-time order automation (MAC/PIN → Google Sheets → WhatsApp auto-message). 100% Lighthouse SEO score. Bilingual FR/EN support.",
        technologies: ["Astro 5", "React Islands", "TailwindCSS 4", "Stripe API", "Apple Pay", "Google Pay", "Vercel Serverless", "Google Sheets API", "WhatsApp API", "Meta Pixel", "TikTok Events API"],
        securityFeatures: ["Backend Proxy", "HMAC Webhooks", "Input Sanitization"],
        technicalChallenges: [
            "5-trigger WhatsApp rescue: scroll-to-top exit, inactivity detection, tab switch, back button, 30s timer",
            "TikTok/Meta pixel deduplication with event_id pattern prevents double-counting",
            "Real-time lead tracking as user types (debounced 1s) for instant follow-up",
            "Stripe subscription with 24h free trial and Apple Pay/Google Pay",
            "Google Sheets webhook for instant order automation",
            "ttclid/fbclid attribution preservation in localStorage for accurate campaign tracking",
            "Mobile-optimized triggers (90% of traffic is mobile)"
        ],
        architecture: {
            frontend: ["Astro 5 Static", "React Islands", "TailwindCSS", "Stripe Elements", "Responsive design"],
            backend: ["Vercel Serverless", "Stripe Webhooks", "Google Sheets API", "WhatsApp Business API"],
            infrastructure: ["Vercel Edge", "Meta Conversions API", "TikTok Events API", "Google Analytics"]
        },
        liveUrl: "https://alpha-tv-last.vercel.app/",
        caseStudyUrl: "/projects/alpha-tv",
        screenshots: [
            { src: "/screenshots/alphatv/03.png", label: "desktop", title: "Homepage Hero" },
            { src: "/screenshots/alphatv/18.png", label: "mobile", title: "Mobile Homepage" },
            { src: "/screenshots/alphatv/09.png", label: "desktop", title: "Checkout Flow" },
            { src: "/screenshots/alphatv/19.png", label: "mobile", title: "Mobile Checkout" },
            { src: "/screenshots/alphatv/08.png", label: "desktop", title: "WhatsApp Popup" },
            { src: "/screenshots/alphatv/02.png", label: "desktop", title: "Pricing Section" }
        ],
        featured: true,
        order: 1
    },
    {
        id: "imei-saas",
        title: "IMEI Checker SaaS",
        subtitle: "checkerimei.com",
        description: "🎯 Problem Solved: B2B SaaS platform for phone resellers with enterprise-grade security and dynamic multi-currency pricing. 💡 Technical Challenges: Built 3-tier pricing engine (Basic, Pro, Enterprise) with automatic markup calculation. Implemented real-time DZD/USD conversion via configurable exchange rate in PostgreSQL. Per-user custom pricing overrides stored in JSONB columns. API aggregation layer connecting multiple IMEI providers with fallback logic. 🔐 Security: Row Level Security (RLS) for multi-tenant isolation (IDOR prevention), backend API proxy (keys never exposed to client), per-user rate limiting, IMEI format validation + SQL injection prevention. 📈 Business Impact: User dashboard with balance management + order history, reseller tiered pricing with volume discounts, rate limiting reduces API abuse costs.",
        problem: "Phone resellers needed a reliable IMEI checking service with multi-tenant isolation, tiered pricing, and secure API access.",
        solution: "Built 3-tier pricing engine with automatic markup calculation. Row Level Security (RLS) for multi-tenant isolation. Backend API proxy so keys never exposed to client.",
        impact: "User dashboard with balance management + order history. Per-user rate limiting reduces API abuse costs. Real-time DZD/USD conversion.",
        technologies: ["Astro 5", "React Islands", "PostgreSQL", "Supabase RLS", "Zustand", "TailwindCSS 4", "Rate Limiting"],
        securityFeatures: ["Row Level Security", "Backend Proxy", "Rate Limiting", "SQL Injection Prevention", "Input Validation"],
        technicalChallenges: [
            "Row Level Security (RLS) policies for complete multi-tenant data isolation",
            "3-tier pricing engine (Basic/Pro/Enterprise) with per-user custom price overrides",
            "Real-time USD/DZD currency conversion with admin-configurable exchange rate",
            "Backend API proxy - third-party API keys never exposed to client",
            "Session-based auth with HTTP-only cookies (XSS protection)",
            "Profit calculator for resellers to preview margins",
            "Category filtering with 50+ IMEI check services"
        ],
        architecture: {
            frontend: ["Astro 5 SSR", "React Islands", "TailwindCSS", "Zustand state", "Bilingual AR/EN/FR"],
            backend: ["Supabase PostgreSQL", "Row Level Security", "Edge Functions", "Real-time subscriptions"],
            infrastructure: ["Vercel deployment", "Supabase Auth", "Rate limiting middleware", "Background jobs"]
        },
        adminCredentials: {
            email: "admin@checkerimei.com",
            password: "demo123",
            access: "Full Admin Panel"
        },
        liveUrl: "https://www.checkerimei.com",
        caseStudyUrl: "/projects/imei-saas",
        screenshots: [
            { src: "/screenshots/imei-saas/01.png", label: "desktop", title: "Dashboard" },
            { src: "/screenshots/imei-saas/10.png", label: "mobile", title: "Mobile View" },
            { src: "/screenshots/imei-saas/05.png", label: "desktop", title: "Services List" },
            { src: "/screenshots/imei-saas/15.png", label: "desktop", title: "Admin Panel" },
            { src: "/screenshots/imei-saas/03.png", label: "desktop", title: "Check Result" },
            { src: "/screenshots/imei-saas/20.png", label: "mobile", title: "Mobile Dashboard" }
        ],
        featured: true,
        order: 2
    },
    {
        id: "preoncheque",
        title: "PreonCheque",
        subtitle: "Enterprise Desktop Application",
        description: "🎯 Problem Solved: Licensed Windows desktop app for cheque management with military-grade security to prevent piracy while enabling offline use. 💡 Technical Challenges: HMAC-SHA256 signed API requests (timestamp + appId + signature) prevent replay attacks. Machine binding via hardware fingerprint (canvas, screen, CPU cores, timezone) locked with SHA-256 hash. AES-256 encryption for license tokens with machine-derived keys. Anti-time-manipulation via server time sync detects clock tampering. Rate limiting (30 req/min per IP) prevents brute force. Request expiry with 5-minute timestamp window. Obfuscated storage with SHA256/MD5 derived keys. 🦀 Rust Backend: Tauri 2 runtime (10x smaller than Electron), native performance. 🔐 Security: HMAC-SHA256, AES-256, JWT admin auth, XSS/IDOR protection on admin endpoints. 📈 Business Impact: Admin dashboard for license CRUD, machine unbinding, configurable recheck intervals per customer, auto-update via Tauri updater.",
        problem: "Businesses needed a secure, offline-capable cheque management system that prevents software piracy while allowing regular use without constant internet.",
        solution: "Built a Tauri 2 desktop app with HMAC-SHA256 signed API requests, AES-256 encrypted license tokens, and machine binding via hardware fingerprints. Anti-time-manipulation detects clock tampering.",
        impact: "Admin dashboard for license CRUD, machine unbinding, configurable recheck intervals. Auto-update via Tauri updater. 10x smaller than Electron.",
        technologies: ["Tauri 2", "Rust", "React 19", "TypeScript", "SQLite", "Node.js", "Express", "PostgreSQL", "Radix UI", "TailwindCSS"],
        securityFeatures: ["HMAC-SHA256", "AES-256", "Machine Binding", "Rate Limiting", "JWT", "Request Expiry"],
        technicalChallenges: [
            "HMAC-SHA256 signed API requests (timestamp + appId + signature) prevent replay attacks",
            "Machine binding via hardware fingerprint (canvas, screen, CPU cores, timezone) locked with SHA-256 hash",
            "AES-256 encryption for license tokens with machine-derived keys",
            "Anti-time-manipulation via server time sync detects clock tampering",
            "Rate limiting (30 req/min per IP) prevents brute force attacks",
            "Request expiry with 5-minute timestamp window",
            "Obfuscated storage with SHA256/MD5 derived keys"
        ],
        architecture: {
            frontend: ["React 19 with TypeScript", "Radix UI primitives", "TailwindCSS 4", "Recharts for analytics", "Lucide icons"],
            backend: ["Rust/Tauri 2 runtime", "SQLite local database", "Node.js license server", "PostgreSQL cloud DB", "Express.js REST API"],
            infrastructure: ["Tauri auto-updater", "GitHub Actions CI/CD", "Vercel Edge Functions", "Encrypted local storage"]
        },
        caseStudyUrl: "/projects/preoncheque",
        screenshots: [
            { src: "/screenshots/preoncheque/03.png", label: "desktop", title: "Dashboard" },
            { src: "/screenshots/preoncheque/01.png", label: "desktop", title: "License Activation" },
            { src: "/screenshots/preoncheque/04.png", label: "desktop", title: "Cheque List" },
            { src: "/screenshots/preoncheque/05.png", label: "desktop", title: "Statistics" },
            { src: "/screenshots/preoncheque/06.png", label: "desktop", title: "Print Preview" },
            { src: "/screenshots/preoncheque/08.png", label: "desktop", title: "Settings" }
        ],
        featured: true,
        order: 3
    },
    {
        id: "nazim-wholesale",
        title: "Nazim Wholesale",
        subtitle: "Premium B2B E-commerce",
        description: "🎯 Problem Solved: Premium wholesale platform with modern UI/UX that elevates brand perception through advanced animations. 💡 Technical Challenges: GSAP scroll-triggered animations create engaging micro-interactions. Glassmorphism design with backdrop blur and vibrant gradients. Dark/light theming via CSS custom properties for consistent brand colors. Type-safe component variants using Class Variance Authority (CVA). React 19 with latest concurrent features. 📈 Business Impact: Premium brand perception through modern animations, improved user engagement with smooth transitions, scalable component architecture for rapid feature development.",
        problem: "Wholesale business needed a premium digital presence that converts visitors through engaging design.",
        solution: "GSAP scroll-triggered animations with glassmorphism design. Dark/light theming via CSS custom properties. Type-safe component variants using Class Variance Authority.",
        impact: "Premium brand perception through modern animations. Improved user engagement with smooth transitions. Scalable component architecture.",
        technologies: ["Vite 7", "React 19", "GSAP", "TailwindCSS", "React Router v7", "Class Variance Authority", "CSS Custom Properties"],
        technicalChallenges: [
            "GSAP scroll-triggered animations with stagger effects and smooth reveals",
            "Glassmorphism design with backdrop-blur and gradient borders",
            "Dark/light theme toggle with CSS custom properties and persistent state",
            "Class Variance Authority for type-safe component variants",
            "React Router v7 with loader patterns for data fetching",
            "SVG brand icons with hover animations",
            "Mobile-first responsive breakpoints"
        ],
        architecture: {
            frontend: ["Vite 7 bundler", "React 19", "React Router v7", "TailwindCSS", "GSAP animations"],
            backend: ["Static site (no backend)", "JSON data files", "Client-side state"],
            infrastructure: ["Vercel deployment", "GitHub Actions", "Asset optimization"]
        },
        caseStudyUrl: "/projects/nazim-wholesale",
        screenshots: [
            { src: "/screenshots/nazim/01.png", label: "desktop", title: "Hero with GSAP" },
            { src: "/screenshots/nazim/08.png", label: "mobile", title: "Mobile View" },
            { src: "/screenshots/nazim/03.png", label: "desktop", title: "Shop Page" },
            { src: "/screenshots/nazim/09.png", label: "mobile", title: "Mobile Shop" },
            { src: "/screenshots/nazim/05.png", label: "desktop", title: "Dark Mode" },
            { src: "/screenshots/nazim/10.png", label: "desktop", title: "Light Mode" }
        ],
        featured: true,
        order: 4
    },
    {
        id: "stock-manager",
        title: "Stock Manager",
        subtitle: "Enterprise E-commerce Platform",
        description: "🎯 Problem Solved: Comprehensive enterprise-grade stock management and e-commerce platform designed for modern businesses to streamline inventory operations, sales management, and customer relationships. 💡 Technical Challenges: Production-ready architecture featuring PostgreSQL database integration, real-time inventory tracking, automated stock alerts, and advanced analytics dashboard. Multi-role user management with secure authentication, comprehensive product catalog management, order processing workflows. 📈 Business Impact: Automated stock alerts prevent stockouts. Comprehensive dashboards enable data-driven inventory decisions. Dark/Light themes, responsive design for mobile and desktop access.",
        problem: "Businesses needed a comprehensive solution for inventory tracking with multi-location support and real-time notifications.",
        solution: "Built with Next.js 14 App Router, featuring smart stock prediction, low-inventory alerts, and PostgreSQL backend with real-time sync.",
        impact: "Automated stock alerts prevent stockouts. Comprehensive dashboards enable data-driven inventory decisions.",
        technologies: ["Next.js 14", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS", "Chart.js", "JWT Auth"],
        securityFeatures: ["JWT", "Role-Based Access", "Input Validation"],
        architecture: {
            frontend: ["Next.js 14 App Router", "React", "TailwindCSS", "Chart.js dashboards", "Dark/Light themes"],
            backend: ["Node.js API", "PostgreSQL", "Prisma ORM", "Express.js"],
            infrastructure: ["Vercel deployment", "Automated notifications", "Multi-role access control"]
        },
        adminCredentials: {
            email: "admin@demo.com",
            password: "admin123",
            access: "Full Admin Panel"
        },
        liveUrl: "https://stock-manager-ecomm-platforme.vercel.app/",
        adminUrl: "https://stock-manager-ecomm-platforme.vercel.app/admin/login",
        caseStudyUrl: "/projects/stock-manager",
        screenshots: [
            { src: "/screenshots/screenshots stock manager/home_desktop_light.png", label: "desktop", title: "Dashboard Light" },
            { src: "/screenshots/screenshots stock manager/home_desktop_dark.png", label: "desktop", title: "Dashboard Dark" },
            { src: "/screenshots/screenshots stock manager/products_desktop_light.png", label: "desktop", title: "Products" },
            { src: "/screenshots/screenshots stock manager/admin_dashboard_desktop_light.png", label: "desktop", title: "Admin Panel" },
            { src: "/screenshots/screenshots stock manager/home_mobile_light.png", label: "mobile", title: "Mobile View" },
            { src: "/screenshots/screenshots stock manager/admin-dashboard-category-smart-wizard.png", label: "desktop", title: "Smart Wizard" }
        ],
        featured: false,
        order: 5
    },
    {
        id: "car-rental",
        title: "Car Rental Dashboard",
        subtitle: "BrothersCars Admin Panel",
        description: "🎯 Problem Solved: As Tech Leader at BrothersPhone, Algeria's biggest phone seller company, I spearheaded the development of this enterprise-grade car rental management platform when the company launched their new branch, BrothersCars. 💡 Technical Challenges: Real-time data synchronization across all devices, mobile-responsive design for seamless administration on any screen size, and advanced tracking statistics. Built with React 19, Express.js backend, Prisma ORM for database management. 📈 Business Impact: Revolutionary admin experience with live dashboard updates, cross-device data consistency, and comprehensive analytics—all designed to scale for Algeria's growing car rental market.",
        problem: "Car rental business needed a modern admin panel to manage their fleet with search, filtering, and export capabilities.",
        solution: "Built with Express.js backend with PostgreSQL. REST API design with proper error handling. Mobile-first responsive UI.",
        impact: "Streamlined fleet management operations with intuitive UI. Advanced filtering saves time for staff.",
        technologies: ["React 19", "TypeScript", "TailwindCSS", "Express.js", "Prisma", "PostgreSQL", "JWT Auth", "Axios"],
        architecture: {
            frontend: ["React 19 with latest features", "TypeScript for type safety", "Tailwind CSS responsive design", "React Router v6 navigation"],
            backend: ["Express.js REST API", "Prisma ORM with PostgreSQL", "JWT authentication", "Real-time WebSocket updates"],
            infrastructure: ["Vercel deployment", "Cross-device synchronization", "Advanced analytics dashboard"]
        },
        adminCredentials: {
            email: "demo",
            password: "younes",
            access: "Full Admin Panel"
        },
        liveUrl: "https://car-rental-admin-2.vercel.app/",
        screenshots: [
            { src: "/screenshots/car-rental-dashboard-1.png", label: "desktop", title: "Dashboard" },
            { src: "/screenshots/car-rental-dashboard-2.png", label: "desktop", title: "Cars List" },
            { src: "/screenshots/car-rental-dashboard-3.png", label: "desktop", title: "Add Car" },
            { src: "/screenshots/car-rental-dashboard-4.png", label: "desktop", title: "Car Details" },
            { src: "/screenshots/car-rental-dashboard-5.png", label: "desktop", title: "Analytics" },
            { src: "/screenshots/car-rental-dashboard-6.png", label: "desktop", title: "Reports" }
        ],
        featured: false,
        order: 6
    },
    {
        id: "famejuice",
        title: "FameJuice",
        subtitle: "Social Media Growth Platform",
        description: "🎯 Problem Solved: Social media growth platform designed to elevate online presence for influencers, brands, and individuals. 💡 Technical Challenges: Stripe integration for secure payment processing with payment intents and webhooks. Facebook Pixel and Conversion API integration for detailed tracking of user behavior from page views to purchases. Server-side Conversion API ensures accurate data collection even with ad blockers. 📈 Business Impact: Seamless checkout experience, accurate marketing analytics, custom audience creation for Facebook ads, maximizing ROI for marketing efforts.",
        problem: "Social media service providers needed a platform to showcase and sell their services with secure payments.",
        solution: "E-commerce flow with Stripe Checkout Sessions. Product management system with categories and pricing tiers.",
        impact: "Streamlined purchasing flow increased conversions. Payment processing handles subscriptions and one-time purchases.",
        technologies: ["React", "TypeScript", "Next.js", "TailwindCSS", "Stripe Integration", "Facebook Pixel", "Conversion API"],
        screenshots: [
            { src: "/screenshots/famejuice/01-homepage-hero.png", label: "desktop", title: "Homepage" },
            { src: "/screenshots/famejuice/02-homepage-videos.png", label: "desktop", title: "Services" },
            { src: "/screenshots/famejuice/03-instagram-followers-page.png", label: "desktop", title: "Followers" },
            { src: "/screenshots/famejuice/06-homepage-mobile.png", label: "mobile", title: "Mobile View" },
            { src: "/screenshots/famejuice/12-followers-step1-checkout.png", label: "mobile", title: "Checkout" },
            { src: "/screenshots/famejuice/stripe testing.png", label: "desktop", title: "Stripe Test" }
        ],
        liveUrl: "https://www.famejuice.net/",
        featured: false,
        order: 7
    },
    {
        id: "imei-checker-app",
        title: "IMEI Checker App",
        subtitle: "Enterprise Verification Tool",
        description: "🎯 Problem Solved: Modern, enterprise-grade IMEI verification tool empowering phone buyers, resellers, and repair shops to trade confidently. 💡 Technical Challenges: Fast, reliable IMEI lookups revealing blacklist/stolen status, MDM locks, SIM-lock restrictions, warranty, and activation history. ShadCN UI components, Tailwind CSS styling, smooth animations. Batch scanning, QR code lookups, exportable reports. 📈 Business Impact: Admins enjoy audit logs, user management, and API integration for POS systems. Privacy-focused with secure, minimal-data lookups.",
        problem: "Users needed a quick way to verify phone IMEI numbers before purchasing used devices.",
        solution: "Clean, focused UI for IMEI input and result display. Integration with verification APIs. Mobile-first design.",
        impact: "Simple, fast verification process builds user trust. Clear results presentation.",
        technologies: ["React", "TypeScript", "ShadCN UI", "TailwindCSS", "Next.js", "QR Code Scanner"],
        architecture: {
            frontend: ["Next.js 14 with App Router", "ShadCN UI components", "Tailwind CSS styling", "QR code scanner integration"],
            backend: ["RESTful API architecture", "Third-party IMEI databases", "Rate limiting & caching"],
            infrastructure: ["Encrypted data transmission", "Audit logging system", "Role-based access control"]
        },
        liveUrl: "https://imei-checker2-0-app.vercel.app/",
        screenshots: [
            { src: "/screenshots/checker app/1.png", label: "desktop", title: "Homepage" },
            { src: "/screenshots/checker app/2.png", label: "desktop", title: "Check Form" },
            { src: "/screenshots/checker app/3.png", label: "desktop", title: "Results" },
            { src: "/screenshots/checker app/4.png", label: "desktop", title: "Details" },
            { src: "/screenshots/checker app/5.png", label: "desktop", title: "History" },
            { src: "/screenshots/checker app/6.png", label: "mobile", title: "Mobile View" }
        ],
        featured: false,
        order: 8
    },
    {
        id: "hive-dapp",
        title: "Hive Plug & Play",
        subtitle: "Blockchain dApp Platform",
        description: "🎯 Problem Solved: Build dApps on Hive, easily. Customizable layer 2 microservice that simplifies building custom_json centric dApps on the Hive blockchain. 💡 Technical Challenges: Serverless deployment leveraging public node to develop and deploy without setting up your own server. Built with Nuxt.js and modern web technologies. Seamless blockchain integration, API management, database schemas. 📈 Business Impact: Perfect for blockchain developers, dApp creators, and anyone looking to build on the Hive ecosystem with enterprise-grade infrastructure.",
        problem: "Hive blockchain users needed a user-friendly interface to manage their accounts and view transactions.",
        solution: "Vue.js SPA with Hive Keychain integration. Real-time balance display and transaction history.",
        impact: "Simplified blockchain interaction for non-technical users. Clean dashboard improves user experience.",
        technologies: ["Nuxt.js", "Vue.js", "Hive Blockchain", "Custom JSON", "Serverless", "Microservices"],
        screenshots: [
            { src: "/screenshots/hive/Screenshot 2025-10-06 at 12.27.15.png", label: "desktop", title: "Dashboard" }
        ],
        liveUrl: "https://63763637393632092c948e3e--dashing-fairy-234fd8.netlify.app/",
        featured: false,
        order: 9
    }
];

// Derived exports for components
export const featuredProjects = projects.filter(p => p.featured).sort((a, b) => a.order - b.order);
export const allProjects = projects.sort((a, b) => a.order - b.order);

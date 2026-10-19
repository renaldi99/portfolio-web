export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Development" | "Mobile & UI/UX" | "Landing Page";
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend & 3D" | "Backend & Mobile" | "UI/UX & Tools";
  level: string;
  logo?: string;
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: "Palette" | "Code2" | "Smartphone" | "Sparkles";
  accent: string;
}

export interface TimelineItem {
  step: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  skills: string[];
}

export const personalInfo = {
  name: "Renaldi",
  brand: "Renaldi.",
  role: "Creative Developer & UI/UX Designer",
  roles: [
    "Full-Stack Web Developer",
    "UI/UX Product Designer",
    "Mobile App Developer",
    "Creative 3D Web Engineer",
  ],
  location: "Indonesia",
  availability: "Available for Freelance & Full-Time Collaboration",
  heroTagline: "Hi, I’m Renaldi",
  heroHeadline: {
    prefix: "Create creative",
    highlight1: "design",
    middle: "and",
    highlight2: "writing",
    suffix: "scalable code.",
  },
  heroDescription:
    "I transform complex business problems into high-impact digital experiences. From interactive UI/UX design to full-stack web and mobile applications—let's build and tell your story.",
  aboutParagraph1:
    "My name is Renaldi. Based in Indonesia, I specialize in crafting intuitive UI/UX Design, modern Web Development, and cross-platform Mobile Applications. I have partnered with businesses and startups to design and engineer web & mobile products that accelerate their growth.",
  aboutParagraph2:
    "I am deeply passionate about technology and continuous learning—superficial knowledge is never enough for me. With strong product thinking, attention to detail, and collaborative teamwork, I am ready to bring your next digital vision to life!",
  email: "itcode.ren@gmail.com",
  whatsappNumber: "6281299627757",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=6281299627757&text=Hi%20Renaldi,%20I%20visited%20your%20portfolio%20website%20and%20would%20love%20to%20discuss%20a%20project!&app_absent=0",
  instagramHandle: "@renaldi_smmra",
  instagramUrl: "https://www.instagram.com/renaldi_smmra/",
  githubUrl: "https://github.com/renaldi99",
  legacyPortfolioUrl: "https://renaldi02.netlify.app",
  stats: [
    { label: "Core Disciplines", value: "3+", detail: "UI/UX, Web & Mobile" },
    { label: "Projects Delivered", value: "15+", detail: "Business & Client Apps" },
    { label: "Tech Stack Mastery", value: "19+", detail: "Modern Frameworks & Tools" },
    { label: "Commitment", value: "100%", detail: "Deep Technical Craft" },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    description:
      "Designing user-centered interfaces, interactive prototypes, and design systems that elevate brand identity and conversion.",
    deliverables: [
      "User Research & Wireframing",
      "High-Fidelity UI in Figma & Adobe XD",
      "Interactive Prototyping & Design Systems",
    ],
    iconName: "Palette",
    accent: "from-[#686de0] to-[#a29bfe]",
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Engineering",
    description:
      "Building fast, responsive, and interactive web applications from modern Next.js/React frontends to robust Laravel & API backends.",
    deliverables: [
      "Next.js, React & TypeScript Web Apps",
      "Laravel Backend & Payment Gateways",
      "3D WebGL / Interactive Landing Pages",
    ],
    iconName: "Code2",
    accent: "from-[#20bf6b] to-[#0fb9b1]",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "Crafting smooth, native-feel mobile applications for iOS and Android designed to scale your business reach.",
    deliverables: [
      "Cross-Platform Mobile Architecture",
      "Seamless API & Real-time Integration",
      "Mobile-First UX Optimization",
    ],
    iconName: "Smartphone",
    accent: "from-[#ff9900] to-[#f368e0]",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "raya-tour-travel",
    title: "Raya Tour Travel",
    subtitle: "End-to-End Travel & Ticket Booking Platform",
    category: "Web Development",
    description:
      "Raya Tour Travel is a company serving travel tour and ticket booking services. After analyzing their business process and goals, I created custom creative web designs, built a responsive interactive frontend, and engineered the backend system with Laravel integrated with a seamless payment gateway for effortless customer transactions.",
    highlights: [
      "Business process analysis & custom booking UX flow",
      "Full-stack Laravel backend architecture",
      "Integrated online payment gateway for instant ticket checkout",
    ],
    image: "/assets/projects/project-1.jpg",
    tags: ["Laravel", "Payment Gateway", "UI/UX Design", "Bootstrap", "JavaScript", "MySQL"],
    liveUrl: "https://renaldi99.github.io/raya-tour.github.io/",
    featured: true,
    accentColor: "#686de0",
  },
  {
    id: "audix-mobile-app",
    title: "Audix",
    subtitle: "Next-Gen Audio & Music Mobile Experience",
    category: "Mobile & UI/UX",
    description:
      "Designed a modern mobile application focused on elevating the user interface and listener user experience. Crafted sleek dark-mode visuals, intuitive gesture navigation, and micro-interactions tailored for seamless audio discovery and playback.",
    highlights: [
      "End-to-end mobile UI/UX design & user journey mapping",
      "High-contrast modern visual hierarchy & component library",
      "Interactive mobile prototype for usability validation",
    ],
    image: "/assets/projects/project-2.jpg",
    tags: ["Mobile App", "UI/UX Design", "Figma", "Adobe XD", "Prototyping", "Design System"],
    liveUrl: "#contact",
    featured: true,
    accentColor: "#20bf6b",
  },
  {
    id: "personal-portfolio-landing",
    title: "Executive Portfolio Landing Page",
    subtitle: "Personal Branding & Business Promotion Website",
    category: "Landing Page",
    description:
      "Built a dedicated client personal branding website to boost their business promotion and digital presence. Designed the complete visual language from scratch and translated the user interface into a clean, responsive, high-performing web experience.",
    highlights: [
      "Custom personal branding visual identity",
      "Pixel-perfect responsive layout across mobile & desktop",
      "Optimized performance & semantic HTML/CSS/JS architecture",
    ],
    image: "/assets/projects/project-3.jpg",
    tags: ["HTML5", "CSS3 / SASS", "JavaScript", "UI Design", "Responsive Web"],
    liveUrl: "https://renaldi99.github.io/portfolio-bagus.github.io/",
    featured: true,
    accentColor: "#ff9900",
  },
];

export const skillsData: SkillItem[] = [
  // Frontend & 3D
  {
    name: "React",
    category: "Frontend & 3D",
    level: "Advanced",
    logo: "/assets/logos/react.png",
    badgeColor: "#61DAFB",
  },
  {
    name: "Next.js & TypeScript",
    category: "Frontend & 3D",
    level: "Advanced",
    badgeColor: "#686de0",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend & 3D",
    level: "Advanced",
    logo: "/assets/logos/javascript.png",
    badgeColor: "#F7DF1E",
  },
  {
    name: "Three.js / WebGL",
    category: "Frontend & 3D",
    level: "Modern 3D UI",
    badgeColor: "#20bf6b",
  },
  {
    name: "HTML5",
    category: "Frontend & 3D",
    level: "Expert",
    logo: "/assets/logos/html.png",
    badgeColor: "#E34F26",
  },
  {
    name: "CSS3 & Tailwind",
    category: "Frontend & 3D",
    level: "Expert",
    logo: "/assets/logos/css.png",
    badgeColor: "#1572B6",
  },
  {
    name: "Sass / SCSS",
    category: "Frontend & 3D",
    level: "Advanced",
    logo: "/assets/logos/sass.png",
    badgeColor: "#CC6699",
  },
  {
    name: "Bootstrap",
    category: "Frontend & 3D",
    level: "Expert",
    logo: "/assets/logos/bootstrap.png",
    badgeColor: "#7952B3",
  },

  // Backend & Mobile
  {
    name: "Spring Boot Framework",
    category: "Backend & Mobile",
    level: "Advanced",
    logo: "/assets/logos/springboot.svg",
    badgeColor: "#6DB33F",
  },
  {
    name: ".NET Core Framework",
    category: "Backend & Mobile",
    level: "Advanced",
    logo: "/assets/logos/dotnetcore.svg",
    badgeColor: "#512BD4",
  },
  {
    name: "Laravel",
    category: "Backend & Mobile",
    level: "Advanced",
    logo: "/assets/logos/laravel.png",
    badgeColor: "#FF2D20",
  },
  {
    name: "Redis",
    category: "Backend & Mobile",
    level: "Production",
    logo: "/assets/logos/redis.svg",
    badgeColor: "#DC382D",
  },
  {
    name: "Elasticsearch",
    category: "Backend & Mobile",
    level: "Production",
    logo: "/assets/logos/elasticsearch.svg",
    badgeColor: "#005571",
  },
  {
    name: "Mobile App Dev",
    category: "Backend & Mobile",
    level: "Cross-Platform",
    badgeColor: "#20bf6b",
  },
  {
    name: "RESTful API & Payment Gateway",
    category: "Backend & Mobile",
    level: "Production",
    badgeColor: "#ff9900",
  },

  // UI/UX & Tools
  {
    name: "Jenkins",
    category: "UI/UX & Tools",
    level: "CI/CD Pipeline",
    logo: "/assets/logos/jenkins.svg",
    badgeColor: "#D24939",
  },
  {
    name: "Figma",
    category: "UI/UX & Tools",
    level: "Expert",
    logo: "/assets/logos/figma.png",
    badgeColor: "#F24E1E",
  },
  {
    name: "Adobe XD",
    category: "UI/UX & Tools",
    level: "Advanced",
    logo: "/assets/logos/adobe-xd.png",
    badgeColor: "#FF61F6",
  },
  {
    name: "Git & GitHub",
    category: "UI/UX & Tools",
    level: "Advanced",
    logo: "/assets/logos/git.png",
    badgeColor: "#F05032",
  },
  {
    name: "VS Code",
    category: "UI/UX & Tools",
    level: "Daily Driver",
    logo: "/assets/logos/vscode.png",
    badgeColor: "#007ACC",
  },
];

export const timelineData: TimelineItem[] = [
  {
    step: "01",
    period: "Discovery & Strategy",
    role: "Business Process & UX Analyst",
    organization: "Client & Product Discovery",
    description:
      "Every great product starts with understanding the business problem. I analyze user needs, business goals, and conversion bottlenecks before writing a single line of code.",
    skills: ["Business Analysis", "User Journey", "Information Architecture"],
  },
  {
    step: "02",
    period: "Creative UI/UX Design",
    role: "UI/UX Product Designer",
    organization: "Visual & Interactive Prototyping",
    description:
      "Translating ideas into modern, high-converting interfaces using Figma and Adobe XD. Crafting cohesive design systems, mobile app flows (like Audix), and interactive prototypes.",
    skills: ["Figma", "Adobe XD", "Design Systems", "Interactive UI"],
  },
  {
    step: "03",
    period: "Full-Stack & Mobile Engineering",
    role: "Web & Mobile Developer",
    organization: "End-to-End Implementation",
    description:
      "Building responsive frontends with React, Next.js, TypeScript, and 3D WebGL, paired with reliable Laravel backends, payment gateways (like Raya Tour Travel), and mobile apps.",
    skills: ["Next.js", "TypeScript", "React", "Laravel", "Payment Gateway", "Mobile Apps"],
  },
  {
    step: "04",
    period: "Launch & Continuous Growth",
    role: "Technical Partner",
    organization: "Deployment & Optimization",
    description:
      "Delivering production-ready applications with clean code, SEO optimization, and fast performance to help businesses grow and scale sustainably.",
    skills: ["Performance", "SEO", "Git Workflow", "Scalable Architecture"],
  },
];

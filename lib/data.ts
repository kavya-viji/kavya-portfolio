export const profile = {
  name: "Kavya K",
  title: "Full Stack Developer",
  tagline: "React.js · Next.js · Node.js · TypeScript",
  location: "Coimbatore, Tamil Nadu, India",
  email: "kavyak6999@gmail.com",
  phone: "+91 8903184518",
  linkedin: "https://linkedin.com/in/kavya-k-1b623918b",
  github: "https://github.com/kavya-viji",
  summary:
    "Results-driven Full Stack Developer with 4 years of experience building web applications using React.js, Next.js, Node.js, TypeScript, and JavaScript. Skilled in developing reusable UI components, integrating REST APIs, and managing application state with Redux. Proficient in accessibility (WCAG), performance optimisation via SSR/SSG, and cross-browser responsive development.",
  aiNote:
    "Actively integrates AI tools (Claude AI, Cursor) into daily engineering workflows to accelerate delivery, improve code quality, and support technical research — aligned with an AI-native engineering culture.",
  resumeUrl: "/resume/Kavya_K_Fullstack_Developer_Resume.pdf",
  photoUrl: "/photo/kavya.jpg",
};

export const stats = [
  { label: "Years of Experience", value: "4" },
  { label: "Companies", value: "3" },
  { label: "Modules Shipped", value: "10+" },
  { label: "WCAG-Compliant Delivery", value: "A11y" },
];

export const heroCode = {
  varName: "dev",
  fields: [
    { key: "name", value: "Kavya K", type: "string" as const },
    { key: "role", value: "Full Stack Developer", type: "string" as const },
    {
      key: "stack",
      value: ["React", "Next.js", "Node.js", "TypeScript", "Redux"],
      type: "array" as const,
    },
    { key: "experience", value: "4 years", type: "string" as const },
    {
      key: "focus",
      value: ["accessibility", "performance"],
      type: "array" as const,
    },
    { key: "aiNative", value: true, type: "boolean" as const },
  ],
};

export type SkillIcon =
  | "frontend"
  | "backend"
  | "state"
  | "api"
  | "practices"
  | "tools"
  | "ai";

export type SkillGroup = {
  category: string;
  icon: SkillIcon;
  color: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "frontend",
    color: "#818cf8",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: "backend",
    color: "#34d399",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "SQL"],
  },
  {
    category: "State Management",
    icon: "state",
    color: "#c084fc",
    skills: ["Redux", "Redux-Saga"],
  },
  {
    category: "API Integration",
    icon: "api",
    color: "#22d3ee",
    skills: ["REST APIs", "Google APIs"],
  },
  {
    category: "Frontend Practices",
    icon: "practices",
    color: "#fb923c",
    skills: [
      "SSR",
      "SSG",
      "Performance Optimisation",
      "Accessibility (A11y / WCAG)",
      "Debugging & Troubleshooting",
      "Responsive Web Design",
      "Cross-Browser Compatibility",
      "SEO",
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    color: "#f472b6",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Yarn",
      "Postman",
      "VS Code",
      "Cursor",
      "CI/CD",
      "Vite",
      "Webpack",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    category: "AI Tools",
    icon: "ai",
    color: "#facc15",
    skills: [
      "Claude AI",
      "ChatGPT",
      "Gemini",
      "Prompt Engineering",
      "Context Engineering",
      "Cursor",
    ],
  },
];

export type Module = {
  title: string;
  description: string;
  tech: string[];
};

export type CaseStudy = {
  name: string;
  tagline: string;
  modules: Module[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights?: string[];
  caseStudies?: CaseStudy[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "TartLabs",
    role: "Frontend Developer",
    location: "Coimbatore",
    period: "May 2023 — Present",
    summary:
      "Building and maintaining B2C web applications with React.js, Next.js, and TypeScript — from reusable component systems to production-grade feature work across two flagship products.",
    caseStudies: [
      {
        name: "ArcherReview",
        tagline: "A learning & assessment platform with role-based experiences",
        modules: [
          {
            title: "Login Revamp",
            description:
              "Improved and modernised the authentication and login experience, focusing on a smoother, more reliable user journey.",
            tech: ["React.js", "Next.js", "Redux"],
          },
          {
            title: "Verified Domain Integration",
            description:
              "Implemented verified-domain functionality within email-related workflows and integrated it into the existing application flow.",
            tech: ["Next.js", "REST APIs"],
          },
          {
            title: "Google API — Address Integration",
            description:
              "Integrated Google APIs for address search and autocomplete, making address entry faster and more user-friendly.",
            tech: ["Google APIs", "React.js"],
          },
          {
            title: "Product Showcase",
            description:
              "Worked on presenting and organising products within the platform, helping users discover and understand available offerings.",
            tech: ["React.js", "Tailwind CSS"],
          },
          {
            title: "Cart & Purchase Flow",
            description:
              "Contributed to the end-to-end purchasing journey, including cart functionality, checkout steps, and the overall purchase experience.",
            tech: ["React.js", "Redux", "REST APIs"],
          },
          {
            title: "Payment Gateway Integration",
            description:
              "Worked on integrating the payment gateway and connecting it with the application's purchase and transaction flows.",
            tech: ["REST APIs", "Next.js"],
          },
          {
            title: "Assessment Module",
            description:
              "Worked extensively on the assessment system, including functionality for creating and managing various types of tests and assessments.",
            tech: ["React.js", "TypeScript", "Redux"],
          },
        ],
      },
      {
        name: "PulsedIn",
        tagline: "A community & learning platform for content and engagement",
        modules: [
          {
            title: "Login Revamp",
            description:
              "Redesigned and improved the authentication experience and related user flows with multiple state validations for better reliability.",
            tech: ["React.js", "Next.js"],
          },
          {
            title: "Package & Dependency Upgrades",
            description:
              "Upgraded application packages and dependencies while handling compatibility issues, migrations, and the changes required to keep the app stable.",
            tech: ["Next.js", "Yarn"],
          },
          {
            title: "Profiles & Community APIs",
            description:
              "Integrated REST APIs powering user profiles, community engagement, content sharing, and learning resources across the platform.",
            tech: ["REST APIs", "Redux"],
          },
          {
            title: "Real-Time Chat & Messaging",
            description:
              "Implemented real-time chat and messaging using WebSockets, enabling instant communication between users without repeated HTTP polling.",
            tech: ["WebSockets", "React.js", "Node.js"],
          },
          {
            title: "Social Feed & Engagement",
            description:
              "Developed social networking features including post creation, likes/unlikes, sharing, and interactive feeds.",
            tech: ["React.js", "Redux", "REST APIs"],
          },
        ],
      },
    ],
  },
  {
    company: "Fabevy",
    role: "Web Developer Intern",
    location: "Chennai",
    period: "Oct 2022 — Apr 2023",
    summary:
      "Built and optimised responsive web pages, focused on cross-browser compatibility and clean, reusable frontend sections.",
    highlights: [
      "Developed responsive web pages using HTML, CSS, and JavaScript with a focus on cross-browser compatibility.",
      "Built reusable frontend sections and optimised layouts for multiple screen sizes.",
      "Collaborated with development teams to debug and deliver assigned features on schedule.",
      "Gained exposure to SQL fundamentals and database concepts.",
    ],
  },
  {
    company: "Infosys",
    role: "Operations Executive",
    location: "Mysore",
    period: "May 2022 — Sep 2022",
    summary:
      "Completed enterprise workflow training in a large-scale corporate environment, building a strong foundation in process and collaboration.",
    highlights: [
      "Completed enterprise workflow training and developed professional communication and collaboration skills in a large-scale corporate environment.",
    ],
  },
];

export type Project = {
  name: string;
  category: "professional" | "personal";
  company?: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "ArcherReview",
    category: "professional",
    company: "TartLabs",
    description:
      "A learning & assessment platform with role-based experiences — course catalogues, assessments, and a full purchase flow, built on a reusable component library.",
    highlights: [
      "Built role-based user experiences with robust Redux state management.",
      "Delivered the assessment system end to end, from test creation to results.",
      "Integrated Google APIs for address search and a full cart-to-payment purchase flow.",
      "Full WCAG-compliant accessibility across the product.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "REST APIs", "Google APIs", "Tailwind CSS"],
  },
  {
    name: "PulsedIn",
    category: "professional",
    company: "TartLabs",
    description:
      "A community & learning platform for content and engagement — profiles, social feeds, and real-time chat, with a revamped, validation-driven auth flow.",
    highlights: [
      "Implemented real-time chat and messaging over WebSockets, replacing HTTP polling.",
      "Built social features: post creation, likes, sharing, and interactive feeds.",
      "Revamped login/signup with multi-step state validation for reliability.",
      "Owned package and dependency upgrades across the application.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "WebSockets", "REST APIs", "Tailwind CSS"],
  },
  {
    name: "Gym Management System",
    category: "personal",
    description:
      "A full-stack gym management platform that lets gym owners and staff run day-to-day operations — members, schedules, and billing — from one dashboard, solving the spreadsheet-and-paperwork chaos most small gyms rely on.",
    highlights: [
      "Built end-to-end with Next.js, covering both the UI and server-side logic in a single codebase.",
      "Modelled and queried relational data with Prisma ORM on top of a Supabase-hosted PostgreSQL database.",
      "Implemented secure authentication and a protected, role-aware dashboard experience for gym staff.",
      "Designed a clean, responsive interface so gym operations can be managed from any device.",
    ],
    tech: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "TypeScript"],
    link: "https://gym-management-roan-seven.vercel.app",
    featured: true,
  },
];

export const education = {
  school: "Ethiraj College for Women",
  degree: "Bachelor of Science — Mathematics with Computer Applications",
  period: "2017 — 2020",
};

export type MilestoneIcon =
  | "graduation"
  | "brain"
  | "prompt"
  | "testing"
  | "webflow"
  | "growth";

export type Milestone = {
  title: string;
  subtitle?: string;
  description: string;
  period?: string;
  icon: MilestoneIcon;
};

export const learningJourney: Milestone[] = [
  {
    title: "B.Sc. Mathematics with Computer Applications",
    subtitle: education.school,
    description:
      "The analytical foundation that still shows up in how I break down and debug frontend logic today.",
    period: education.period,
    icon: "graduation",
  },
  {
    title: "AI-Assisted Development",
    subtitle: "Anthropic learning programs",
    description:
      "Completed Anthropic learning programs focused on Claude AI and AI-assisted development workflows.",
    icon: "brain",
  },
  {
    title: "Prompt & Context Engineering",
    description:
      "Working knowledge of prompt engineering and context engineering to get reliable, useful output from AI tools.",
    icon: "prompt",
  },
  {
    title: "Testing with Vitest & RTL",
    description:
      "Vitest and React Testing Library, for frontends that don't break quietly.",
    icon: "testing",
  },
  {
    title: "Exploring Webflow",
    description:
      "Exploring Webflow as a modern, visual-first way to ship websites.",
    icon: "webflow",
  },
  {
    title: "Always Upskilling",
    description:
      "Continuously upskilling in frontend design systems, accessibility standards, and performance optimisation.",
    icon: "growth",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Fluent" },
  { name: "Telugu", level: "Native" },
];

export type Hobby = {
  title: string;
  blurb: string;
  icon: "cooking" | "craft" | "Mehandi";
  rotate: number;
};

export const hobbies: Hobby[] = [
  {
    title: "Cooking",
    blurb:
      "Experimenting in the kitchen the way I debug code — a bit of trial, error, and the occasional happy accident.",
    icon: "cooking",
    rotate: -4,
  },
  {
    title: "Craft & DIY",
    blurb:
      "Turning odds and ends into something new — the same patience that goes into untangling a gnarly bug.",
    icon: "craft",
    rotate: 3,
  },
  {
    title: "Mehandi Art",
    blurb:
      "Freehand henna designs — my other favourite way to turn a blank canvas into something detailed and intentional.",
    icon: "Mehandi",
    rotate: -2,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

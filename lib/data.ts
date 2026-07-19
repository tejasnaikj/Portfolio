// ============================================================
// Central content store — all real portfolio data lives here.
// Swap values freely; every component reads from this file.
// ============================================================

export const profile = {
  name: "Tejas Naik",
  roles: ["Software Engineer", "AR Developer", "AI Researcher"],
  location: "Bengaluru, India",
  tagline: "Final-year CSE · PES University, Bengaluru",
  blurb:
    "I'm an ML researcher and full-stack engineer. I spend my time measuring how much a language model actually listens to what you give it, and building the systems around it that don't fall over in production.",
  email: "tejasnaikj9@gmail.com",
  github: "https://github.com/tejasnaikj?tab=repositories",
  linkedin: "https://www.linkedin.com/in/tejas-naik-j",
  resumeUrl: "/resume.pdf",
  avatar: "/images/tejas.jpg",
  available: true,
};

export const whatIDo = [
  {
    icon: "brain-circuit",
    title: "AI & Machine Learning",
    description:
      "Retrieval-augmented generation, hallucination detection, and the messy work of making language models tell the truth.",
    gradient: ["#8B5CF6", "#3B82F6"],
  },
  {
    icon: "glasses",
    title: "AR / VR Development",
    description:
      "Spatial computing and wayfinding — indoor navigation, multilingual speech, and interfaces that live in the real world.",
    gradient: ["#3B82F6", "#06B6D4"],
  },
  {
    icon: "layers",
    title: "Full-Stack Development",
    description:
      "End-to-end products — Next.js frontends, typed APIs, and databases that hold up once real users show up.",
    gradient: ["#06B6D4", "#EC4899"],
  },
  {
    icon: "flask-conical",
    title: "Research & Innovation",
    description:
      "Published work on attention-based hallucination metrics and AR-assisted hospital navigation, under active labs.",
    gradient: ["#EC4899", "#8B5CF6"],
  },
];

export const papers = [
  {
    year: "2026",
    venue: "IJCACI 2026",
    location: "IIT Patna",
    date: "Aug 2026",
    status: "Accepted",
    title: "CAR-HAL: Attention-Based Hallucination Detection in RAG",
    description:
      "A hallucination detector for retrieval-augmented generation that doesn't just look at the output text — it looks at whether the model's attention actually landed on the retrieved context, or drifted back to its own parametric memory instead.",
    tags: ["RAG", "Hallucination Detection", "Attention Analysis"],
    metrics: [
      { label: "Metric", value: "Context Attention Ratio (CAR)" },
      { label: "Retrieval", value: "Hybrid FAISS + BM25" },
      { label: "Taxonomy", value: "5-class hallucination types" },
    ],
    authors: "with Dr. S. Vanitha, CDSAML Lab",
    paperUrl: "/papers/CAR-HAL_IJCACI_2026.pdf",
  },
  {
    year: "2026",
    venue: "IEEE SmartNets 2026",
    location: "Rome",
    date: "Jul 2026",
    status: "Accepted",
    title: "CareNav: AR Indoor Navigation with Multilingual Speech",
    description:
      "Wayfinding inside hospitals is a language problem as much as a mapping one. CareNav pairs AR indoor navigation with real-time multilingual speech translation, so a patient who doesn't speak the hospital's default language can still find their way — and ask for help — on their own.",
    tags: ["AR", "Speech Translation", "Hospital Wayfinding"],
    metrics: [
      { label: "Domain", value: "AR + speech translation" },
      { label: "Setting", value: "Hospital wayfinding" },
    ],
    authors:
      "with Ashutosh Rajesh, Desai Vaishnavi Reddy, Sirigireddy Amitha Reddy — under Dr. Shylaja S.S.",
    paperUrl: "/papers/CareNav_SmartNets_2026.pdf",
  },
];

export const projects = [
  {
    category: "AI",
    tag: "AI Agent",
    title: "Skylark Ops Coordinator",
    description:
      "A drone operations agent with an 11-tool function-calling schema, a Streamlit control UI, and a live Google Sheets backend for mission logging.",
    stack: ["Gemini 2.5 Flash", "Streamlit", "Google Sheets API"],
    githubUrl: "https://github.com/tejasnaikj/Skylark_Operations",
    demoUrl: "https://skylarkoperations.streamlit.app/",
    featured: true,
  },
  {
    category: "Web",
    tag: "Full-Stack",
    title: "Allo Health Inventory & Reservations",
    description:
      "A take-home build for a full inventory and reservation system — real-time stock, booking flows, and a Postgres schema that doesn't fight you.",
    stack: ["Next.js", "Prisma", "Supabase", "Redis"],
    githubUrl: "https://github.com/tejasnaikj/Allo_Project",
    demoUrl: null,
    featured: true,
  },
  {
    category: "Web",
    tag: "Systems",
    title: "Kafka Clone",
    description:
      "A message broker built from scratch in Python — partitioned topics, consumer groups, and TLS/SSL wired in, not bolted on.",
    stack: ["Python", "SSL/TLS", "Sockets"],
    githubUrl: "https://github.com/tejasnaikj/KAFKA_BROKER",
    demoUrl: null,
    featured: false,
  },
  {
    category: "Research",
    tag: "Research",
    title: "CAR-HAL",
    description:
      "Attention-based hallucination detection for RAG pipelines — the research engine behind the IJCACI 2026 paper.",
    stack: ["PyTorch", "Transformers", "FAISS", "Mistral-7B"],
    githubUrl: "#",
    demoUrl: null,
    featured: false,
  },
  {
    category: "AR",
    tag: "AR",
    title: "CareNav",
    description:
      "AR indoor navigation with multilingual speech translation for hospital wayfinding, presented at IEEE SmartNets 2026.",
    stack: ["ARKit", "Speech-to-Text", "Indoor Mapping"],
    githubUrl: "https://github.com/tejasnaikj/CareNav",
    demoUrl: null,
    featured: false,
  },
  {
    category: "Web",
    tag: "Data Viz",
    title: "FinanceFlow Dashboard",
    description:
      "A personal finance dashboard with balance/income/expense summary cards, monthly trend and category-spend charts, and a searchable, role-based transaction table.",
    stack: ["React", "Vite", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/tejasnaikj/Finance-Dashboard",
    demoUrl: "https://finance-dashboard-zeta-murex.vercel.app/",
    featured: true,
  },
  {
    category: "AI",
    tag: "Data Analytics",
    title: "Customer Behavior Analysis",
    description:
      "An end-to-end analytics workflow — data cleaning, SQL-based analysis, and interactive Power BI dashboards to surface customer trends and purchase patterns.",
    stack: ["Python", "SQL", "Power BI"],
    githubUrl: "https://github.com/tejasnaikj/Customer_analysis",
    demoUrl: null,
    featured: false,
  },
  {
    category: "AR",
    tag: "3D Simulation",
    title: "HAL_HACK — Digital Twin",
    description:
      "A real-time digital twin of a Bendix RSA fuel injection system used in helicopters, modeled in Blender and rendered live with Three.js.",
    stack: ["Three.js", "Blender", "Vite"],
    githubUrl: "https://github.com/tejasnaikj/HAL_HACK",
    demoUrl: null,
    featured: false,
  },
];

export const projectFilters = ["All", "AI", "AR", "Web", "Research"];

export const experience = [
  {
    type: "current",
    icon: "graduation-cap",
    title: "B.Tech, Computer Science Engineering",
    org: "PES University, Bengaluru",
    period: "2022 — 2026",
    description:
      "SRN: PES1UG22CS651 · CGPA 7.89 · Final-year, graduating 2026.",
  },
  {
    type: "research",
    icon: "microscope",
    title: "Research Intern, CDSAML Lab",
    org: "Under Dr. S. Vanitha",
    period: "2025 — Present",
    description:
      "Hallucination detection in RAG systems. Output: CAR-HAL, accepted at IJCACI 2026.",
  },
  {
    type: "publication",
    icon: "file-text",
    title: "Publication — CareNav",
    org: "IEEE SmartNets 2026, Rome",
    period: "Jul 2026",
    description:
      "AR indoor navigation with multilingual speech translation for hospital wayfinding, with the CDSAML wayfinding team.",
  },
  {
    type: "publication",
    icon: "file-text",
    title: "Publication — CAR-HAL",
    org: "IJCACI 2026, IIT Patna",
    period: "Aug 2026",
    description:
      "Attention-based hallucination detection metric for retrieval-augmented generation, accepted for presentation.",
  },
  {
    type: "project",
    icon: "rocket",
    title: "Independent Projects",
    org: "Skylark, Allo Health, Kafka Clone, and more",
    period: "2024 — Present",
    description:
      "Shipped agentic tools, full-stack systems, and infrastructure clones outside of coursework and research.",
  },
];

export const skillCategories = [
  {
    key: "languages",
    label: "Programming Languages",
    icon: "code-2",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 75 },
    ],
  },
  {
    key: "web",
    label: "Web Development",
    icon: "globe",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 82 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    key: "aiml",
    label: "AI / ML",
    icon: "brain-circuit",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Transformers", level: 82 },
      { name: "RAG / FAISS", level: 88 },
      { name: "DeBERTa / Mistral-7B", level: 78 },
    ],
  },
  {
    key: "arvr",
    label: "AR / VR",
    icon: "glasses",
    skills: [
      { name: "ARKit", level: 76 },
      { name: "Spatial Mapping", level: 72 },
      { name: "Speech Translation APIs", level: 74 },
    ],
  },
  {
    key: "databases",
    label: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    icon: "wrench",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 70 },
      { name: "Git", level: 92 },
    ],
  },
];

export const stats = [
  { icon: "folder-kanban", value: 6, suffix: "+", label: "Projects Shipped" },
  { icon: "file-text", value: 2, suffix: "", label: "Research Papers" },
  { icon: "cpu", value: 20, suffix: "+", label: "Technologies" },
  { icon: "calendar", value: 2, suffix: "+", label: "Years Experience" },
];

export const education = [
  {
    title: "B.Tech, Computer Science Engineering",
    sub: "PES University, Bengaluru",
    metaLines: ["SRN: PES1UG22CS651", "CGPA: 7.89 · Class of 2026"],
  },
  {
    title: "Research Intern, CDSAML Lab",
    sub: "Under Dr. S. Vanitha — hallucination detection in RAG systems",
    metaLines: ["Output: CAR-HAL (IJCACI 2026)"],
  },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Theme tokens (change these in one place to re-skin the site)
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-cyan-500/30",
    accent: "border-cyan-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-cyan-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-cyan-500 to-cyan-600",
    gradientHover: "hover:from-cyan-600 hover:to-cyan-700",
    glow: "shadow-cyan-500/25",
    glowStrong: "shadow-cyan-500/40",
    glowSoft: "shadow-cyan-500/10",
    chip: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/20",
    chipSolid: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    overlayRight: "bg-gradient-to-r from-cyan-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-cyan-500/5 to-transparent",
    divider: "bg-gradient-to-b from-cyan-400 to-cyan-600",
    ring: "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    scrollShadow: "shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40",
  },
  shape: {
    glow: "bg-cyan-500/20",
    dot: "bg-cyan-400",
  },
  grid: {
    color: "rgba(34, 211, 238, 0.25)",
    size: "50px 50px",
  },
}

// Labels and copy centralized here
export const labels = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    blog: "Blog",
    publications: "Publications",
  },
  hero: {
    ctaContact: "Get in Touch",
    ctaLinkedIn: "LinkedIn",
    locationIconLabel: "Location",
  },
  sections: {
    summary: "Professional Summary",
    skills: "Core Competencies",
    experience: "Professional Experience",
    publications: "Patents & Publications",
    education: "Education",
    achievements: "Achievements",
    certifications: "Certifications",
    contact: "Get In Touch",
    requestResume: "Request Full Resume",
    schedule: "Schedule a Meeting",
    contactForm: "Send a Message",
  },
  forms: {
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      success: "Your message has been received and I typically respond within two business days.",
      error: "Oops! The request could not be completed. Please try again or email me directly",
    },
    resume: {
      email: "Your Email *",
      reason: "Reason for Request *",
      placeholder: "E.g., Job opportunity, consulting project, etc. with details.",
      submit: "Send Request",
      success: "I will send you my resume within two business days.",
      error: "Oops! The request could not be completed. Please try again or email me directly",
    },
  },
  status: {
    errorTitle: "Error",
    successTitle: "Thank You!",
    tryAgain: "Try Again",
    sendAnother: "Send Another Message",
    close: "Close",
    sending: "Sending...",
  },
  footer: {
    rightsPrefix: "(c)",
    rightsSuffix: "All rights reserved.",
  },
}

// Personal Info Section
export const personalInfo = {
  name: "Manthan Bhala",
  title: "ML Engineer",
  location: "Remote / India",
  tagline: "I build secure, scalable platforms and help teams ship with confidence.",
  email: "manthanbhala@gmail.com",
  linkedin: "https://www.linkedin.com/in/manthan-bhala-a11760136",
  github: "https://github.com/ManthanBhala",
  blogUrl: "https://yourblog.com",
  summary: [
    "Security-minded engineer with hands-on experience across cloud, infrastructure, and compliance. Focused on building resilient systems and practical security controls.",
    "Comfortable leading cross-functional initiatives, automating security checks, and translating risk into clear technical priorities."
  ]
}

// Languages
export const publications = [
  {
    name: "Patent (2501007631)",
    level: "A Hybrid Lexical-Semantic Retrieval Process for E-Commerce Search",
  },
  {
    name: "Patent (2501004476)",
    level: "A Hybrid LLM Process for Multi - Objective Reranking in E - Commerce",
  },
  {
    name: "Patent (2501004419)",
    level: "A Multilingual Phonetic BK-Tree Based Spelling Correction Process in E-Commerce",
  }
]

// Skills Section
export const skills = {
  "AI": [
    "HuggingFace",
    "Tensorflow",
    "PyTorch",
    "Python",
  ],
  "Backend": [
    "Node.js",
    "Flask",
    "Django",
  ],
  "Frontend": [
    "Next.js"
  ],
  "Cloud & Infrastructure": [
    "AWS",
    "Azure",
    "GCP",
    "Infrastructure as Code",
  ],
  "DevOps & Automation": [
    "CI/CD Pipelines",
    "Docker",
    "Kubernetes",
    "Terraform",
  ],
  "Monitoring & Evaluation": [
    "Grafana",
  ],
}

// Experience Section
export const experience = [
  {
    title: "Senior ML Engineer",
    company: "Makro PRO",
    period: "Dec 2023 - Present",
    location: "Remote",
    responsibilities: [
      "Led security program roadmap for multi-cloud environments and internal platforms",
      "Implemented guardrails and automation to reduce security review time"
    ]
  },
  {
    title: "ML Engineer",
    company: "Example Labs Co.",
    period: "Mar 2023 - Dec 2023",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed cloud security controls for workloads across AWS and Azure",
      "Built monitoring and alerting to surface misconfigurations early"
    ]
  },
  {
    title: "ML Engineer",
    company: "Example Labs Co.",
    period: "Mar 2023 - Dec 2023",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed cloud security controls for workloads across AWS and Azure",
      "Built monitoring and alerting to surface misconfigurations early"
    ]
  },
]

// Achievements Section
export const achievements = [
  "Personalized Ranking via LLM distillation (LLM4Rank + PEFT → LightGBM) that drove +43.9% conversion and +52.6% add-to-basket",
  "E-commerce recommendation system delivering 28% conversion and 70k+ weekly conversions",
]

// Certifications Section
export const certifications = [
  { name: "Certified Cloud Security Professional (CCSP)", issuer: "(ISC)2" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Microsoft Certified: Azure Security Engineer", issuer: "Microsoft" },
  { name: "CompTIA Security+", issuer: "CompTIA" }
]

// Education Section
export const education = [
  {
    degree: "B.Tech",
    institution: "IIT Bombay",
    location: "Mumbai, India",
    period: "2016 - 2020",
    details: "CGPA: 8.5"
  },
]

// Calendly appointment scheduling link
export const calendlyUrl = {
  enabled: true,
  url: "https://calendly.com/your-handle/intro-call",
}

// Resume request configuration - formspreeId
export const resumeRequest = {
  enabled: true,
  formspreeId: "your-formspree-id",
}

// Contact form configuration - formspreeId
export const contactForm = {
  enabled: true,
  formspreeId: "your-formspree-id",
}

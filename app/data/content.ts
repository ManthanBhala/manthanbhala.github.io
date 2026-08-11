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
    about: "Summary",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    publications: "Selected Work",
  },
  hero: {
    ctaContact: "Get in Touch",
    ctaLinkedIn: "LinkedIn",
    locationIconLabel: "Location",
  },
  sections: {
    summary: "Summary",
    skills: "Core Skills",
    experience: "Experience",
    publications: "Selected Work",
    education: "Education",
    achievements: "Impact",
    certifications: "Certifications",
    contact: "Contact",
    requestResume: "Resume",
    schedule: "Meeting",
    contactForm: "Message",
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
  title: "Machine Learning Engineer",
  location: "Gurugram, Haryana, India",
  tagline: "Machine learning engineer building production systems for search, ranking, and recommendations.",
  email: "manthanbhala@gmail.com",
  linkedin: "https://www.linkedin.com/in/manthan-bhala-a11760136",
  github: "https://github.com/ManthanBhala",
  summary: [
    "I build practical ML systems that improve e-commerce discovery, especially retrieval, ranking, and recommendation pipelines.",
    "My focus is turning model work into measurable product impact with production-ready implementation and careful iteration."
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
  "Machine Learning": [
    "HuggingFace",
    "Tensorflow",
    "PyTorch",
    "Python",
  ],
  "Applied AI": [
    "Information Retrieval",
    "Learning to Rank",
    "Recommendation Systems",
    "LLMs",
    "PEFT",
  ],
}

// Experience Section
export const experience = [
  {
    title: "Senior ML Engineer",
    company: "Makro PRO",
    period: "Dec 2023 - Present",
    location: "Gurugram, Haryana, India",
    responsibilities: [
      "Built ML systems for search, ranking, and recommendation workflows in e-commerce.",
      "Worked on model distillation, feature design, and production rollout for measurable conversion gains."
    ]
  },
]

// Achievements Section
export const achievements = [
  "Personalized Ranking via LLM distillation (LLM4Rank + PEFT → LightGBM) that drove +43.9% conversion and +52.6% add-to-basket",
  "E-commerce recommendation system delivering 28% conversion and 70k+ weekly conversions",
]

// Certifications Section
export const certifications: { name: string; issuer: string }[] = []

// Education Section
export const education: {
  degree: string
  institution: string
  location: string
  period: string
  details: string
}[] = []

// Calendly appointment scheduling link
export const calendlyUrl = {
  enabled: false,
  url: "",
}

// Resume request configuration - formspreeId
export const resumeRequest = {
  enabled: false,
  formspreeId: "",
}

// Contact form configuration - formspreeId
export const contactForm = {
  enabled: false,
  formspreeId: "",
}

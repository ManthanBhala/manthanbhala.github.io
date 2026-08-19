export const personalInfo = {
  name: 'Manthan Bhala',
  title: 'Machine Learning Engineer & Software Developer',
  location: 'Gurugram, Haryana, India',
  tagline: 'Machine learning engineer and software developer building production systems for search, ranking, and recommendations.',
  email: 'manthanbhala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manthan-bhala-a11760136',
  github: 'https://github.com/ManthanBhala',
  resume: '/Manthan_Bhala_Resume.pdf',
  summary: [
    'I build practical machine learning systems that improve e-commerce discovery, with a focus on retrieval, ranking, and recommendation pipelines.',
    'I enjoy turning model work into reliable software and measurable product impact through thoughtful experimentation, evaluation, and production-ready implementation.',
  ],
}

export const skills = {
  'ML engineering': ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face'],
  'Applied AI': ['Information Retrieval', 'Learning to Rank', 'Recommendation Systems', 'LLMs', 'PEFT'],
  'Data & Infrastructure': ['SQL', 'PySpark', 'Docker', 'Kubernetes', 'CI/CD', 'Redis', 'Vector Search'],
}

export const experience = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Makro PRO',
    period: 'Oct 2023 – Present',
    location: 'Remote',
    responsibilities: [
      'Developed e-commerce recommendation models that increased total basket additions by 52%.',
      'Built personalisation models by distilling LLMs into LightGBM for production-scale inference.',
      'Built a vector search system for e-commerce with p99 latency under 100ms using vLLM.',
      'Improved search results through autocategorization, autocorrect, query expansion, and query rewriting models.',
      'Built a chatbot POC with RAG pipeline and function calling, optimized with quantization and vLLM deployment.',
    ],
  },
  {
    title: 'Software Developer 2',
    company: 'Frinks AI',
    period: 'Mar 2023 – Jul 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed and optimized ML inference pipelines for real-time defect detection and counting on industrial production lines.',
      'Built computer vision and backend services for a quality inspection platform for dimensioning, surface defect, and crack detection.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Jaguar Land Rover',
    period: 'Sep 2020 – Feb 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed and maintained ML pipelines and backend services for Vehicle Algorithmic Self Diagnostics Tool.',
      'Worked on Advanced Driver Assistance Systems (ADAS) for autonomous and assisted driving features.',
    ],
  },
]

export const achievements = [
  'Personalized ranking via LLM distillation (LLM4Rank + PEFT → LightGBM) that delivered a 43.9% conversion lift and a 52.6% add-to-basket lift.',
  'E-commerce recommendation system delivering 28% conversion and more than 70,000 weekly conversions.',
]

export const publications = [
  { name: 'Patent 2501007631', level: 'A Hybrid Lexical-Semantic Retrieval Process for E-Commerce Search' },
  { name: 'Patent 2501004476', level: 'A Hybrid LLM Process for Multi-Objective Reranking in E-Commerce' },
  { name: 'Patent 2501004419', level: 'A Multilingual Phonetic BK-Tree Based Spelling Correction Process in E-Commerce' },
]

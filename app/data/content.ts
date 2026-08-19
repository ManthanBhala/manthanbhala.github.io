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
  'ML engineering': ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LightGBM', 'PEFT'],
  'Applied AI': ['LLMs', 'Recommendation Systems', 'Information Retrieval', 'Learning to Rank', 'RAG', 'Vector Search', 'Computer Vision', 'NLP'],
  'Data & Infrastructure': ['SQL', 'Docker', 'Kubernetes', 'CI/CD', 'Redis', 'vLLM'],
}

export const experience = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Makro PRO',
    period: 'Oct 2023 – Present',
    location: 'Remote',
    responsibilities: [
      'Built recommendation models using collaborative filtering, two-tower networks, and vector embeddings.',
      'Increased total basket additions by 52% through personalised user-based and product-based recommendations.',
      'Built vector search by fine-tuning LLM embeddings for semantic product retrieval.',
      'Built personalisation via e-commerce feature engineering and LLM distillation into LightGBM.',
      'Developed end-to-end recommendation pipeline with retrieval, ranking, and reranking stages.',
      'Improved search with autocategorization, autocorrect, query expansion, and query rewriting.',
      'Built a chatbot POC with RAG, function calling, quantization, and vLLM deployment.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Frinks AI',
    period: 'Mar 2023 – Jul 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed ML inference pipelines for real-time defect detection on production lines.',
      'Built CV and backend services for quality inspection: dimensioning, defect, and crack detection.',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Jaguar Land Rover',
    period: 'Sep 2020 – Feb 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed ML pipelines and backend services for Vehicle Algorithmic Self Diagnostics Tool.',
      'Worked on ADAS systems for autonomous and assisted driving features.',
    ],
  },
]

export const achievements = [
  'Personalized ranking via LLM distillation (LLM4Rank + PEFT → LightGBM) that delivered a 43.9% conversion lift and a 52.6% add-to-basket lift.',
  'E-commerce recommendation system delivering 28% conversion and more than 70,000 weekly conversions.',
]

export const publications = [
  { name: '2501007631', level: 'A Hybrid Lexical-Semantic Retrieval Process for E-Commerce Search' },
  { name: '2501004476', level: 'A Hybrid LLM Process for Multi-Objective Reranking in E-Commerce' },
  { name: '2501004419', level: 'A Multilingual Phonetic BK-Tree Based Spelling Correction Process in E-Commerce' },
]

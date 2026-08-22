export const personalInfo = {
  name: 'Manthan Bhala',
  title: 'Machine Learning Engineer',
  location: 'Gurugram, Haryana, India',
  tagline: 'Machine learning engineer building production systems for search, ranking, and recommendations.',
  email: 'manthanbhala@gmail.com',
  phone: '+91 7023540575',
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
  'Applied AI': ['LLMs', 'Recommendation Systems', 'Information Retrieval', 'Learning to Rank', 'RAG'],
  'Data & Infrastructure': ['SQL', 'Docker', 'Kubernetes', 'CI/CD', 'Redis', 'vLLM', 'Vector Database', 'Typesense'],
}

export const experience = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Makro PRO',
    period: 'Oct 2023 – Present',
    location: 'Remote',
    responsibilities: [
      'Built recommendation models: collaborative filtering, two-tower networks, and embeddings for 1M+ DAU.',
      'Increased basket adds by 52% through personalized user-based and product-based recommendations.',
      'Built multilingual (English, Thai) semantic product retrieval over 100k+ products with sub-100ms p99 latency.',
      'Built e-commerce image search combining SigLIP 2 image and text embeddings for cross-modal retrieval.',
      'Built personalization pipeline via feature engineering and LLM distillation into LightGBM.',
      'Created dynamic user segmentation for business visualization, product collection generation, and cold-start.',
      'Created a content generation POC using fine-tuned LLaMA 3 for multilingual titles, categories, descriptions.',
      'Developed end-to-end search and recommendation pipelines across retrieval, ranking, and reranking.',
      'Developed query suggestion and related-search models to improve customer search experience.',
      'Improved multilingual search via autocategorization, autocorrect, and query expansion.',
      'Built a multiuse RAG chatbot with FAQ handling, tool calling (search, order APIs), and guardrails.',
      'Built repeat purchase recommendations to predict reorder time and probability via fine-tuned LightGBM.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Frinks AI',
    period: 'Mar 2023 – Jul 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed real-time ML pipelines for defect detection and item counting on manufacturing lines.',
      'Built computer vision and backend services for quality inspection, dimensioning, and crack detection.',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Jaguar Land Rover',
    period: 'Sep 2020 – Feb 2023',
    location: 'Bengaluru, Karnataka, India',
    responsibilities: [
      'Developed ML pipelines and backend services for the Vehicle Algorithmic Self-Diagnostics Tool.',
      'Worked on ADAS systems enabling autonomous driving and driver-assistance features for vehicles.',
    ],
  },
  {
    title: 'Machine Learning Developer',
    company: 'Quantiphi Analytics',
    period: 'May 2019 – Jul 2019',
    location: 'Intern',
    responsibilities: [
      'Developed and deployed ML models for video action recognition using CNN + LSTM.',
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

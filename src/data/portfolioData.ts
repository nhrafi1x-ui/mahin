import { EducationItem, ProjectCaseStudy, SkillCategory, ShapFeature } from '../types';

export const PERSONAL_INFO = {
  name: "Mahin Alam",
  title: "Software Engineer & AI/ML Researcher",
  subTitle: "Final Year Software Engineering Student — 4 Months to Graduation",
  email: "alammahin301@gmail.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh",
  schoolCollege: "Shaheed Bir Uttam Lt. Anwar Girls College",
  graduationTimeline: "Last 4 Months Remaining (Graduating Late 2026)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "Final year Software Engineering student with a passion for building scalable web applications and applying explainable machine learning to solve real-world human behavioral problems. Strong foundation in full-stack engineering, algorithms, and data science.",
  sscResult: "4.89 / 5.00",
  hscResult: "5.00 / 5.00 (Golden GPA)",
  thesisTitle: "Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use Among Bangladeshi Students Using Explainable Machine Learning and Intervention Mapping"
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bsc-se",
    degree: "B.Sc. in Computer Science & Software Engineering",
    institution: "Shaheed Bir Uttam Lt. Anwar Girls College Campus / University Division",
    year: "2022 — 2026 (Final Year, Last 4 Months)",
    result: "Enrolled - Final Semester (4 Months Remaining)",
    description: "Specializing in Full-Stack Software Development, Machine Learning, Data Structures, Algorithms, and Explainable AI.",
    highlights: [
      "Thesis: Explainable Machine Learning & Behavioral Phenotyping",
      "Completed 12+ Core Engineering Projects",
      "Lead Organizer for Campus Women in Tech Hackathon",
      "Dean's List Academic Recognition"
    ]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Shaheed Bir Uttam Lt. Anwar Girls College",
    year: "2019 — 2021",
    result: "GPA 5.00 / 5.00 (Golden GPA)",
    description: "Achieved perfect GPA 5.00 with distinction in Physics, Chemistry, Higher Mathematics, and Biology.",
    highlights: [
      "Top Merit Scorer in Science Group",
      "Active participant in Science Club & Olympiads",
      "Awarded College Merit Scholarship"
    ]
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Shaheed Bir Uttam Lt. Anwar Girls College",
    year: "2017 — 2019",
    result: "GPA 4.89 / 5.00",
    description: "Strong foundation in Science & Mathematics with active participation in ICT extra-curriculars.",
    highlights: [
      "Excellence in Mathematics & Computer Studies",
      "School Science Fair Winner"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Core",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 92, tag: "Data Science & Backend" },
      { name: "TypeScript / JavaScript", level: 88, tag: "Full-Stack Development" },
      { name: "C++", level: 80, tag: "Data Structures & Algorithms" },
      { name: "SQL / PostgreSQL", level: 85, tag: "Database Querying" },
      { name: "HTML5 / CSS3", level: 95, tag: "Responsive UI" }
    ]
  },
  {
    title: "AI, Data Science & Explainable ML",
    iconName: "Brain",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: 90, tag: "Machine Learning Models" },
      { name: "Explainable AI (SHAP / LIME)", level: 88, tag: "Thesis Core Specialization" },
      { name: "Pandas & NumPy", level: 92, tag: "Data Wrangling & Analytics" },
      { name: "PyTorch & Deep Learning", level: 78, tag: "Neural Networks" },
      { name: "Gemini API & LLMs", level: 85, tag: "AI Integration" }
    ]
  },
  {
    title: "Web & Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 90, tag: "Frontend Framework" },
      { name: "Tailwind CSS", level: 95, tag: "Utility-First Styling" },
      { name: "Node.js & Express.js", level: 84, tag: "Backend REST APIs" },
      { name: "Vite & Build Tools", level: 88, tag: "Modern Tooling" },
      { name: "RESTful API Design", level: 90, tag: "System Integration" }
    ]
  },
  {
    title: "Tools, DevOps & Practice",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Docker", level: 75, tag: "Containerization" },
      { name: "PostgreSQL & Firebase", level: 82, tag: "Database Systems" },
      { name: "Agile & Scrum Methodologies", level: 85, tag: "Project Management" },
      { name: "System Design & OOP", level: 84, tag: "Software Architecture" }
    ]
  }
];

export const THESIS_DATA = {
  title: "Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use Among Bangladeshi Students Using Explainable Machine Learning and Intervention Mapping",
  tagline: "Bridging predictive machine learning with human-centered psychological intervention mapping for digital wellbeing in Bangladesh.",
  objective: "To move past simple classification of social media addiction by extracting interpretable behavioral phenotyping features (XAI) and mapping personalized interventions.",
  dataset: "1,200+ surveyed undergraduate students across major Bangladeshi institutions with multi-modal behavioral logging.",
  accuracy: "94.2% XGBoost ROC-AUC",
  xaiFramework: "SHAP (SHapley Additive exPlanations) & LIME for local and global model interpretability.",
  interventionMapping: "6-step health promotion mapping matching behavioral triggers to digital detox prompts and targeted screen-time constraints."
};

export const THESIS_SHAP_FEATURES: ShapFeature[] = [
  {
    feature: "Late Night Scrolling (> 2 AM)",
    importance: 0.38,
    impact: "high",
    category: "Circadian Disruption",
    description: "Strongest predictor of compulsive usage spikes and poor sleep quality.",
    intervention: "Automated blue-light lockout & bedtime wind-down notifications."
  },
  {
    feature: "Notification Recheck Frequency",
    importance: 0.29,
    impact: "high",
    category: "Attentional Hijacking",
    description: "Checking notifications within 3 minutes of arrival increases daily screen time by +1.8 hrs.",
    intervention: "Batching notifications every 2 hours during focus study windows."
  },
  {
    feature: "Fear of Missing Out (FOMO Index)",
    importance: 0.21,
    impact: "medium",
    category: "Psychological Trigger",
    description: "High social comparison scores correlate with emotional distress during app usage.",
    intervention: "Cognitive reframing micro-journaling prompts inside app session locks."
  },
  {
    feature: "Academic Stress Level",
    importance: 0.18,
    impact: "medium",
    category: "Coping Mechanism",
    description: "Procrastination-induced social media spikes during exam periods.",
    intervention: "Pomodoro study timer integration with reward system."
  },
  {
    feature: "Endless Infinite Scroll Exposure",
    importance: 0.14,
    impact: "low",
    category: "UI Design Friction",
    description: "Lack of pagination or natural stopping points extends session duration by 45%.",
    intervention: "Synthetic pagination break overlays after 15 minutes of continuous scrolling."
  }
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "thesis-xai",
    title: "Behavioral Phenotyping & XAI Intervention Platform",
    category: "research",
    categoryLabel: "Thesis & ML Research",
    shortDesc: "Explainable ML system predicting problematic social media behavior in Bangladeshi students with SHAP interpretability and intervention mapping.",
    fullDescription: "An end-to-end Machine Learning research pipeline and web portal that collects behavioral metrics, classifies usage phenotypes using XGBoost and Random Forest, interprets predictions via SHAP feature importance, and generates tailored health intervention plans based on intervention mapping protocols.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ],
    techStack: ["Python", "XGBoost", "SHAP", "LIME", "React", "FastAPI", "Pandas", "Scikit-Learn"],
    metrics: [
      { label: "Predictive Accuracy", value: "94.2% ROC-AUC" },
      { label: "Surveyed Cohort", value: "1,200+ Students" },
      { label: "XAI Transparency Score", value: "98.5%" }
    ],
    problemStatement: "Traditional social media addiction detection tools provide binary predictions without explaining 'why' or providing actionable psychological interventions relevant to Bangladeshi university students.",
    solution: "We combined XGBoost model predictions with SHAP global/local feature attributions and mapped each risk cluster to evidence-based intervention strategies.",
    keyFeatures: [
      "Interactive SHAP Waterfall & Summary Plot Visualizer",
      "Individual Behavioral Phenotype Report Generator",
      "Personalized Intervention Mapping Dashboard",
      "Multi-dimensional Survey & Behavioral Data Pipeline"
    ],
    githubUrl: "https://github.com",
    isThesis: true
  },
  {
    id: "medisync-app",
    title: "MediSync - Healthcare Scheduling & Telemedicine Hub",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    shortDesc: "Comprehensive patient appointment booking, prescription tracker, and doctor dashboard built with React, Node.js, and Express.",
    fullDescription: "A full-stack healthcare management web application enabling patients to search specialist doctors, book real-time appointments, access digitized prescriptions, and manage medical histories smoothly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "REST API"],
    metrics: [
      { label: "Simulated Appointments", value: "500+" },
      { label: "API Response Time", value: "< 120ms" },
      { label: "Mobile Score", value: "98/100" }
    ],
    problemStatement: "Patients in urban Bangladesh experience long queues and fragmented paper prescriptions when scheduling outpatient visits.",
    solution: "MediSync centralizes doctor schedules with instant confirmation, digital prescriptions, and notification reminders.",
    keyFeatures: [
      "Real-time Slot Booking with Calendar View",
      "Doctor Diagnostic & Prescription Generator Portal",
      "Patient Medical File Upload & History Vault",
      "Role-Based Access Control (Patient, Doctor, Admin)"
    ],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com"
  },
  {
    id: "edupulse-nlp",
    title: "EduPulse - Intelligent Essay & Feedback Analyzer",
    category: "ml",
    categoryLabel: "Machine Learning & NLP",
    shortDesc: "AI-assisted feedback engine assessing essay coherence, grammatical clarity, and thematic scoring for student writing.",
    fullDescription: "An intelligent web app using NLP techniques and Gemini API to analyze student essays, provide constructive line-by-line feedback, score vocabulary diversity, and detect AI-generated content indicators.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80"
    ],
    techStack: ["Python", "Gemini API", "React", "Tailwind CSS", "Flask", "NLTK"],
    metrics: [
      { label: "Feedback Processing", value: "< 2.5 secs" },
      { label: "Evaluation Criteria", value: "5 Dimensions" }
    ],
    problemStatement: "High school and college educators spend dozens of hours manually grading repetitive essays without delivering immediate, personalized feedback to every student.",
    solution: "EduPulse automates preliminary rubrics scoring, highlighting weak argument transitions and suggesting contextual vocabulary improvements.",
    keyFeatures: [
      "Real-time Essay Readability & Sentiment Analysis",
      "Constructive Improvement Suggestions Card",
      "Grammar & Syntax Error Highlighting",
      "PDF Summary Export for Teachers & Students"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "devflow-hub",
    title: "DevFlow - Developer Task & Code Snippet Hub",
    category: "web",
    categoryLabel: "Web Utility",
    shortDesc: "Productivity dashboard for software engineers featuring kanban task tracking, syntax-highlighted code vault, and project sprint metrics.",
    fullDescription: "A sleek developer-first productivity environment designed to keep track of bug fixes, code snippets, documentation references, and active sprint goals with seamless local and cloud persistence.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "IndexedDB"],
    metrics: [
      { label: "Load Speed", value: "0.4s" },
      { label: "Offline First", value: "100% Functional" }
    ],
    problemStatement: "Engineers lose focus constantly switching between issue trackers, notepad apps, and browser code snippet extensions.",
    solution: "DevFlow unifies task boards, code snippet tagging, and rapid copy commands into one distraction-free dashboard.",
    keyFeatures: [
      "Interactive Drag-and-Drop Kanban Board",
      "Syntax Highlighted Code Snippet Stash with Tag Filter",
      "Focus Pomodoro Timer with Sound Cues",
      "Exportable Sprint Productivity Reports"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "ecommerce-recommender",
    title: "Collaborative Filtering Product Recommender",
    category: "ml",
    categoryLabel: "Data Science & Recommender",
    shortDesc: "E-Commerce recommendation engine built with matrix factorization and cosine similarity for user personalized feeds.",
    fullDescription: "A data science project evaluating user-item interaction matrices to deliver item recommendations, reducing churn rate and boosting product discovery.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Python", "Pandas", "Scikit-Learn", "PostgreSQL", "Flask"],
    metrics: [
      { label: "Mean Reciprocal Rank", value: "0.82" },
      { label: "Recommendation Speed", value: "45ms" }
    ],
    problemStatement: "Generic e-commerce storefronts struggle to convert visitors due to non-personalized item carousels.",
    solution: "Implemented user-based and item-based collaborative filtering to surface hyper-relevant products.",
    keyFeatures: [
      "Real-time Cosine Similarity Score Matrix",
      "Cold-start Hybrid Rule Fallback Engine",
      "Interactive Analytics Dashboard"
    ],
    githubUrl: "https://github.com"
  }
];

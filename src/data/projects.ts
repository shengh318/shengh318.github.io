export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  skills: { label: string; percent: number }[];
  status: 'PRODUCTION' | 'ACTIVE' | 'BETA' | 'ARCHIVED';
  role: 'Solo' | 'Lead' | 'Team';
  highlights: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'metadata-analyzer',
    icon: 'database',
    name: 'Metadata Analyzer',
    description: 'Examining the origins of n-grams and investigating how and why these phrases have spread to news sources. Designed and created software to analyze 10TB of data.',
    status: 'PRODUCTION',
    role: 'Solo',
    highlights: [
      'Processed 10TB of n-gram data from news sources',
      'Designed custom analysis pipeline for phrase tracing',
      'Tracked linguistic pattern origins across publications',
    ],
    skills: [
      { label: 'Python', percent: 65 },
      { label: 'SQLite', percent: 30 },
      { label: 'JSON API', percent: 20 },
    ],
  },
  {
    id: 'pos-system',
    icon: 'layout',
    name: 'POS System',
    description: 'Inspired from my part time job working as a waiter in a Chinese restaurant, this digitizes the entire restaurant menu which in turn created a more organized and efficient register system.',
    status: 'PRODUCTION',
    role: 'Solo',
    highlights: [
      'Digitized complete restaurant menu management',
      'Reduced order processing overhead significantly',
      'Streamlined front-to-back-of-house workflow',
    ],
    skills: [
      { label: 'Python', percent: 80 },
      { label: 'SQLite', percent: 20 },
    ],
  },
  {
    id: 'autonomous-racecar',
    icon: 'car',
    name: 'Autonomous Racecar',
    description: 'ROS engineered autonomous race car with advanced computer vision to maintain precise lane positioning.',
    status: 'ACTIVE',
    role: 'Solo',
    highlights: [
      'Real-time lane detection via computer vision pipeline',
      'ROS-based distributed control architecture',
      'Sub-decimeter positioning accuracy achieved',
    ],
    skills: [
      { label: 'Python', percent: 40 },
      { label: 'ROS', percent: 60 },
    ],
  },
  {
    id: 'starbattle',
    icon: 'gamepad-2',
    name: 'StarBattle (Video Game)',
    description: 'Starbattle based video game that handles concurrent user inputs with TypeScript server backend communication.',
    status: 'BETA',
    role: 'Solo',
    highlights: [
      'Concurrent multi-player input handling',
      'TypeScript-backed real-time server communication',
      'Custom game loop with physics interpolation',
    ],
    skills: [
      { label: 'TypeScript', percent: 100 },
    ],
  },
  {
    id: 'mario-kart',
    icon: 'joystick',
    name: 'Real Life Mario Kart',
    description: 'Mario Kart inspired RC car racer with real time communication to Python server and physics simulation using ESP32.',
    status: 'ACTIVE',
    role: 'Solo',
    highlights: [
      'ESP32-based real-time RC car control system',
      'Python server with physics simulation engine',
      'Low-latency wireless communication protocol',
    ],
    skills: [
      { label: 'Python', percent: 30 },
      { label: 'SQLite', percent: 20 },
      { label: 'C++', percent: 50 },
    ],
  },
  {
    id: 'weather-man',
    icon: 'cloud-lightning',
    name: 'Personal Weather Man',
    description: 'Created a personal "weather man" that scrapes data from weather API for accurate weather information by means of software (Python and C++) and hardware (ESP32, LCD, and breadboard).',
    status: 'ACTIVE',
    role: 'Solo',
    highlights: [
      'Real-time weather data via API scraping pipeline',
      'ESP32 + LCD hardware integration for display',
      'C++ embedded data processing and parsing',
    ],
    skills: [
      { label: 'Python', percent: 20 },
      { label: 'JSON API', percent: 10 },
      { label: 'C++', percent: 70 },
    ],
  },
  {
    id: 'ai-tutoring-system',
    icon: 'graduation-cap',
    name: 'AI-Driven Personalized Tutoring System',
    description: 'Designed and implemented an adaptive AI tutoring system for MIT coursework, featuring a real-time Skill Tree model and feedback-driven personalization framework. Published paper available on MIT DSpace.',
    status: 'PRODUCTION',
    role: 'Lead',
    highlights: [
      'Reduced office-hour queue load with adaptive AI tutoring',
      'Real-time Skill Tree model inferring student mastery from interaction patterns',
      'Feedback-driven personalization improving targeted instructional delivery',
      'Validated against baseline with measurable student outcome improvements',
    ],
    skills: [
      { label: 'Python', percent: 80 },
      { label: 'FastAPI', percent: 60 },
      { label: 'React', percent: 50 },
      { label: 'AI LLM', percent: 70 },
      { label: 'PostgreSQL', percent: 40 },
    ],
    url: 'https://dspace.mit.edu/entities/publication/09818b7e-7d3b-4a51-b5bf-79920f642ece',
  },
];

export const skills = {
  languages: [
    { name: 'Python', icon: 'python', percent: 0, level: 'expert', years: 5, projectRefs: ['metadata-analyzer', 'pos-system', 'autonomous-racecar', 'mario-kart', 'weather-man'] },
    { name: 'TypeScript', icon: 'typescript', percent: 0, level: 'proficient', years: 2, projectRefs: ['starbattle'] },
    { name: 'C++', icon: 'cplusplus', percent: 0, level: 'proficient', years: 3, projectRefs: ['mario-kart', 'weather-man'] },
    { name: 'SQL', icon: 'database', percent: 0, level: 'proficient', years: 3, projectRefs: ['metadata-analyzer', 'pos-system', 'mario-kart'] },
  ],
  tools: [
    { name: 'ROS', icon: 'robot', percent: 0, level: 'proficient', years: 2, projectRefs: ['autonomous-racecar'] },
    { name: 'Git', icon: 'git', percent: 0, level: 'expert', years: 5, projectRefs: [] },
    { name: 'Linux', icon: 'terminal', percent: 0, level: 'proficient', years: 4, projectRefs: [] },
    { name: 'Docker', icon: 'container', percent: 0, level: 'familiar', years: 1, projectRefs: [] },
  ],
  hardware: [
    { name: 'ESP32', icon: 'chip', percent: 0, level: 'proficient', years: 2, projectRefs: ['mario-kart', 'weather-man'] },
    { name: 'Embedded Systems', icon: 'cpu', percent: 0, level: 'proficient', years: 3, projectRefs: ['mario-kart', 'weather-man'] },
    { name: 'IoT', icon: 'wifi', percent: 0, level: 'familiar', years: 1, projectRefs: ['weather-man'] },
    { name: 'Computer Vision', icon: 'eye', percent: 0, level: 'familiar', years: 1, projectRefs: ['autonomous-racecar'] },
  ],
};

export const education: {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  url?: string;
}[] = [
  {
    degree: 'Master of Engineering (MEng)',
    school: 'Massachusetts Institute of Technology',
    period: 'Jun 2024 – May 2025',
    gpa: '5.0 / 5.0',
    url: 'https://dspace.mit.edu/entities/publication/09818b7e-7d3b-4a51-b5bf-79920f642ece',
  },
  {
    degree: 'Bachelor of Science in Engineering',
    school: 'Massachusetts Institute of Technology',
    period: 'Sep 2020 – May 2024',
    gpa: '4.7 / 5.0',
  },
];

export const experience: {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}[] = [
  {
    role: 'Software Engineer',
    company: 'Capital One',
    period: 'Aug 2025 – Present',
    description: [
      'Developed and maintained backend services that support third-party integrations for vendor payments.',
    ],
    skills: ['Go', 'TypeScript', 'Python', 'FastAPI', 'AI LLM', 'PostgreSQL'],
  },
  {
    role: 'AI Software Developer',
    company: 'MIT',
    period: 'Sep 2024 – Jun 2025',
    description: [
      'Designed and implemented a personalized AI tutoring system that adapts responses to individual students based on their interaction patterns, reducing office-hour queue load.',
      'Developed a dynamic Skill Tree model that updates in real time from student behavior, providing LLMs with structured context to infer student mastery and knowledge gaps.',
      'Engineered pipelines to analyze student-AI interactions and retrain the AI tutor, enabling more accurate and tailored explanations over time.',
      'Created a feedback-driven personalization framework that improved the tutor\'s ability to deliver targeted instructional content and support.',
      'Collaborated with instructors and researchers to validate system effectiveness against a baseline model, demonstrating measurable improvements in student learning outcomes.',
    ],
    skills: ['Python', 'Vite', 'React', 'FastAPI', 'AI LLM', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Capital One',
    period: 'Jun 2024 – Aug 2024',
    description: [
      'Developing an internal standalone messaging / logging application using React.js, TypeScript, and PostgreSQL.',
    ],
    skills: ['React', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    role: 'Software Developer',
    company: 'MIT',
    period: 'Jan 2024 – Jun 2024',
    description: [
      'Boosted data storage efficiency by 30% using SQL.',
      'Designed API architecture, streamlining feature implementation through a clear roadmap.',
      'Automated context retrieval for the model by implementing a RAG parser.',
    ],
    skills: ['SQL', 'Python', 'Java'],
  },
  {
    role: 'Software Engineer',
    company: 'Capital One',
    period: 'Jun 2023 – Aug 2023',
    description: [
      'Developed an API that dynamically generates custom files for the backend UI, resulting in a dynamic webpage.',
      'Implemented an additional layer of input validation during development, leading to enhanced security.',
      'Established foundational classes for backend, enabling faster code development and deployment by other teammates.',
    ],
    skills: ['Java', 'Springboot', 'Python'],
  },
];

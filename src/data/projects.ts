export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  skills: { label: string; percent: number }[];
  status: 'PRODUCTION' | 'ACTIVE' | 'BETA' | 'ARCHIVED';
  role: 'Solo' | 'Lead' | 'Team';
  highlights: string[];
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

export const experience: {
  role: string;
  company: string;
  period: string;
  description: string[];
}[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Your Company Name',
    period: 'Summer 2025',
    description: [
      'Led development of key feature impacting X users',
      'Improved system performance by Y% through optimization',
      'Collaborated cross-functionally with design and product teams',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'MIT Computer Science & AI Lab',
    period: 'Fall 2024 – Present',
    description: [
      'Conducted research in computer systems and performance analysis',
      'Developed research software for data collection and analysis',
      'Published findings at [Conference Name]',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'MIT Department of EECS',
    period: 'Spring 2024',
    description: [
      'TA for [Course Name], guiding 50+ students through coursework',
      'Held office hours and led recitation sections',
      'Developed course materials and grading rubrics',
    ],
  },
];

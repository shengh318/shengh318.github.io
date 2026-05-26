export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  skills: { label: string; percent: number }[];
}

export const projects: Project[] = [
  {
    id: 'metadata-analyzer',
    icon: 'database',
    name: 'Metadata Analyzer',
    description: 'Examining the origins of n-grams and investigating how and why these phrases have spread to news sources. Designed and created software to analyze 10TB of data.',
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
    skills: [
      { label: 'TypeScript', percent: 100 },
    ],
  },
  {
    id: 'mario-kart',
    icon: 'joystick',
    name: 'Real Life Mario Kart',
    description: 'Mario Kart inspired RC car racer with real time communication to Python server and physics simulation using ESP32.',
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
    skills: [
      { label: 'Python', percent: 20 },
      { label: 'JSON API', percent: 10 },
      { label: 'C++', percent: 70 },
    ],
  },
];

export const skills = {
  languages: [
    { name: 'Python', icon: 'python', percent: 0 },
    { name: 'TypeScript', icon: 'typescript', percent: 0 },
    { name: 'C++', icon: 'cplusplus', percent: 0 },
    { name: 'SQL', icon: 'database', percent: 0 },
  ],
  tools: [
    { name: 'ROS', icon: 'robot', percent: 0 },
    { name: 'Git', icon: 'git', percent: 0 },
    { name: 'Linux', icon: 'terminal', percent: 0 },
    { name: 'Docker', icon: 'container', percent: 0 },
  ],
  hardware: [
    { name: 'ESP32', icon: 'chip', percent: 0 },
    { name: 'Embedded Systems', icon: 'cpu', percent: 0 },
    { name: 'IoT', icon: 'wifi', percent: 0 },
    { name: 'Computer Vision', icon: 'eye', percent: 0 },
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

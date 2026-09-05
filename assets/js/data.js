/**
 * ============================================================
 * PORTFOLIO DATA — JAI VIKASH
 * ============================================================
 * Edit this file to update portfolio content.
 * All sections are driven from this single source of truth.
 * ============================================================
 */

// ─────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────
const PERSONAL = {
  name: 'Jai Vikash',
  fullName: 'Jai Vikash A R',
  title: 'Full-Stack Developer',
  email: 'jaivikash4691@gmail.com',
  github: 'https://github.com/jaivikash4691-collab',
  linkedin: 'https://www.linkedin.com/in/vikash0715/',
  resume: '#', // Replace with actual resume PDF path
  availability: 'Available for opportunities',
  tagline: 'Building scalable web applications, intelligent systems, and practical software solutions.',
  roles: [
    'Full-Stack Developer',
    'Software Engineer',
    'Backend Developer',
    'AI Enthusiast',
    'Problem Solver',
  ],
  about: `I'm a passionate full-stack developer who loves turning ideas into real, working software. 
  I enjoy building everything from interactive frontends to robust backends — with a strong focus on 
  clean code, thoughtful design, and solving problems that actually matter.`,
  philosophy: `I believe great software is built at the intersection of curiosity and discipline. 
  Every line of code I write is an opportunity to learn something new.`,
};

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
const STATS = [
  { value: 4,    label: 'Projects Built',      icon: '⚡' },
  { value: 10,   label: 'Technologies',         icon: '🔧' },
  { value: 3,    label: 'Technical Events',     icon: '🏆' },
  { value: 50,   label: 'LeetCode Problems',    icon: '🧠' },
];

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
const SKILLS = {
  Frontend: [
    {
      name: 'HTML5',
      icon: '🌐',
      level: 85,
      description: 'Semantic markup, accessibility, structured page architecture for modern web applications.',
    },
    {
      name: 'CSS3',
      icon: '🎨',
      level: 80,
      description: 'Flexbox, Grid, animations, responsive design and custom design systems using CSS variables.',
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      level: 80,
      description: 'ES6+, DOM manipulation, async/await, fetch API, modular architecture and event-driven programming.',
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      icon: '🟢',
      level: 70,
      description: 'Server-side JavaScript runtime for building scalable network applications and REST APIs.',
    },
    {
      name: 'Express.js',
      icon: '🚂',
      level: 70,
      description: 'Minimal and flexible Node.js web framework for building RESTful APIs and web servers.',
    },
  ],
  Database: [
    {
      name: 'SQL',
      icon: '🗄️',
      level: 65,
      description: 'Relational database design, queries, joins, and structured data management.',
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      level: 60,
      description: 'NoSQL document database for flexible, scalable data storage in modern applications.',
    },
  ],
  Programming: [
    {
      name: 'Java',
      icon: '☕',
      level: 75,
      description: 'Object-Oriented Programming, core Java concepts, data structures and algorithm implementation.',
    },
  ],
  Concepts: [
    {
      name: 'OOP',
      icon: '🧩',
      level: 80,
      description: 'Encapsulation, inheritance, polymorphism and abstraction — applied across Java and JavaScript.',
    },
    {
      name: 'DSA',
      icon: '🌳',
      level: 65,
      description: 'Arrays, linked lists, trees, graphs, sorting, searching, recursion and dynamic programming.',
    },
    {
      name: 'REST APIs',
      icon: '🔌',
      level: 72,
      description: 'Designing and consuming RESTful APIs, JSON data exchange and HTTP protocol fundamentals.',
    },
  ],
  Tools: [
    {
      name: 'Git & GitHub',
      icon: '🐙',
      level: 75,
      description: 'Version control, branching, pull requests and collaborative development workflows.',
    },
    {
      name: 'VS Code',
      icon: '💻',
      level: 90,
      description: 'Primary development environment with extensions for efficient coding workflow.',
    },
  ],
};

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'pulsefeed',
    name: 'PulseFeed',
    subtitle: 'Social Media Application',
    description: 'An interactive social media application that enables users to create profiles, share posts, follow others, and engage with a dynamic content feed.',
    problem: 'Building a full social media experience with real-time interactions, user authentication and a personalized content feed.',
    solution: 'Designed a complete social platform with user profiles, post creation, follow system and an interactive feed — all built with vanilla HTML/CSS/JS.',
    features: [
      'User profile creation and management',
      'Post creation, editing and deletion',
      'Follow/unfollow functionality',
      'Dynamic content feed',
      'Interactive UI with real-time updates',
      'Responsive mobile-first design',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['frontend', 'fullstack'],
    github: 'https://github.com/jaivikash4691-collab/Pulsefeed-A-social-Media-Application',
    demo: null,
    image: null,
    challenges: 'Managing complex state for user interactions and feed updates without a frontend framework.',
    learned: 'Deep dive into vanilla JS state management, DOM architecture and building scalable UI components from scratch.',
  },
  {
    id: 'ai-college-assistant',
    name: 'AI College Assistant',
    subtitle: 'Intelligent Campus Helper',
    description: 'An AI-powered college assistant that helps students with academic queries, campus information, and intelligent guidance — making college life easier.',
    problem: 'Students often struggle to find quick, accurate answers about college processes, schedules, and academic information.',
    solution: 'Built an AI-integrated assistant interface that provides instant, intelligent responses to student queries using a conversational UI.',
    features: [
      'Conversational AI interface',
      'Academic query resolution',
      'Campus information system',
      'Responsive chat-style UI',
      'Intelligent response generation',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'AI Integration'],
    category: ['frontend', 'ai'],
    github: 'https://github.com/jaivikash4691-collab/AI-Collage-Assistant',
    demo: null,
    image: null,
    challenges: 'Designing an intuitive conversational UI and integrating AI responses seamlessly into the user experience.',
    learned: 'AI integration patterns, conversational UI design, and building accessible chat interfaces.',
  },
  {
    id: 'code-pulse',
    name: 'Code Pulse',
    subtitle: 'GitHub Profile Analyzer',
    description: 'A GitHub profile analyzer that evaluates and rates your GitHub account quality — analyzing repositories, contributions, language usage and activity patterns.',
    problem: 'Developers often have no quick way to assess the quality and completeness of their GitHub profile from a recruiter\'s perspective.',
    solution: 'Built an analyzer that fetches GitHub API data and computes a quality score based on repos, contributions, README quality and activity.',
    features: [
      'GitHub API integration',
      'Profile quality scoring algorithm',
      'Repository analysis',
      'Language usage breakdown',
      'Contribution activity review',
      'Visual results dashboard',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API'],
    category: ['frontend', 'api'],
    github: 'https://github.com/jaivikash4691-collab/Code_Pulse',
    demo: null,
    image: null,
    challenges: 'Designing a meaningful, fair scoring algorithm that accurately reflects GitHub profile quality.',
    learned: 'GitHub REST API integration, data normalization, and building scoring systems with real external data.',
  },
  {
    id: 'portfolio',
    name: 'My Portfolio',
    subtitle: 'Personal Developer Portfolio',
    description: 'A personal developer portfolio with login/signup functionality — showcasing projects, skills and contact information.',
    problem: 'Creating a professional online presence that accurately represents skills and projects to potential employers.',
    solution: 'Built a full portfolio website with authentication features, project showcases and contact functionality.',
    features: [
      'User authentication (login/signup)',
      'Projects showcase',
      'Skills section',
      'Contact functionality',
      'Responsive design',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    category: ['frontend', 'fullstack'],
    github: 'https://github.com/jaivikash4691-collab/My-Portfolio',
    demo: null,
    image: null,
    challenges: 'Implementing authentication without a backend service in a static site context.',
    learned: 'Frontend authentication patterns, local storage management and building user-facing state systems.',
  },
];

// ─────────────────────────────────────────────
// TIMELINE / EXPERIENCE
// ─────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2022',
    title: 'Started B.Tech / Engineering',
    description: 'Began undergraduate engineering degree — started learning computer science fundamentals, programming basics and problem solving.',
    type: 'education',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Java & Core Programming',
    description: 'Deep-dived into Java programming, Object-Oriented Programming principles, and Data Structures & Algorithms.',
    type: 'learning',
    icon: '☕',
  },
  {
    year: '2023',
    title: 'Web Development Journey',
    description: 'Started building with HTML, CSS and JavaScript — creating interactive web applications and learning frontend development.',
    type: 'learning',
    icon: '🌐',
  },
  {
    year: '2024',
    title: 'Full-Stack Development',
    description: 'Expanded into Node.js, Express.js, SQL and MongoDB — building complete full-stack web applications end-to-end.',
    type: 'milestone',
    icon: '⚡',
  },
  {
    year: '2024',
    title: 'Coder ACT — Technical Event',
    description: 'Participated in Coder ACT inter-college technical event — competing in coding challenges and technical rounds.',
    type: 'event',
    icon: '🏆',
  },
  {
    year: '2024',
    title: 'Render Rush — Technical Event',
    description: 'Participated in Render Rush — an inter-college technical event focused on frontend development and UI challenges.',
    type: 'event',
    icon: '🚀',
  },
  {
    year: '2025',
    title: 'INT-CTF — Internal Hackathon',
    description: 'Participated in INT-CTF, an internal college hackathon — worked on real problem statements under time pressure.',
    type: 'hackathon',
    icon: '⚔️',
  },
  {
    year: '2025',
    title: 'LeetCode — Problem Solving',
    description: 'Actively solving DSA problems on LeetCode — 50+ problems solved covering arrays, strings, trees and dynamic programming.',
    type: 'milestone',
    icon: '🧠',
  },
  {
    year: '2025–Present',
    title: 'Building & Growing',
    description: 'Continuing to build real-world projects, contribute to GitHub, explore AI integration and prepare for industry opportunities.',
    type: 'current',
    icon: '✨',
  },
];

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    title: 'INT-CTF',
    subtitle: 'Internal Hackathon',
    description: 'Participated in INT-CTF, the internal college Capture-The-Flag style hackathon — tested problem solving and technical skills under pressure.',
    type: 'hackathon',
    icon: '⚔️',
    year: '2025',
  },
  {
    title: 'Coder ACT',
    subtitle: 'Inter-College Technical Event',
    description: 'Competed in Coder ACT — an inter-college technical event featuring coding challenges and algorithmic problem solving.',
    type: 'event',
    icon: '💻',
    year: '2024',
  },
  {
    title: 'Render Rush',
    subtitle: 'Inter-College Technical Event',
    description: 'Participated in Render Rush — an inter-college event focused on frontend development, UI/UX design and rapid prototyping.',
    type: 'event',
    icon: '🎨',
    year: '2024',
  },
  {
    title: '50+ LeetCode Problems',
    subtitle: 'Problem Solving',
    description: 'Solved 50+ problems on LeetCode covering arrays, strings, linked lists, trees, and dynamic programming.',
    type: 'milestone',
    icon: '🧠',
    year: '2025',
  },
];

// ─────────────────────────────────────────────
// DSA TOPICS
// ─────────────────────────────────────────────
const DSA_TOPICS = [
  { name: 'Arrays', icon: '▦', category: 'linear' },
  { name: 'Strings', icon: '🔤', category: 'linear' },
  { name: 'Linked Lists', icon: '🔗', category: 'linear' },
  { name: 'Stacks', icon: '📚', category: 'linear' },
  { name: 'Queues', icon: '↔️', category: 'linear' },
  { name: 'Trees', icon: '🌳', category: 'non-linear' },
  { name: 'BST', icon: '🔍', category: 'non-linear' },
  { name: 'AVL Trees', icon: '⚖️', category: 'non-linear' },
  { name: 'Graphs', icon: '🕸️', category: 'non-linear' },
  { name: 'Recursion', icon: '🔄', category: 'technique' },
  { name: 'Searching', icon: '🔎', category: 'technique' },
  { name: 'Sorting', icon: '📊', category: 'technique' },
  { name: 'Dynamic Programming', icon: '🧩', category: 'technique' },
  { name: 'OOP Concepts', icon: '🧬', category: 'concept' },
];

// ─────────────────────────────────────────────
// TERMINAL COMMANDS
// ─────────────────────────────────────────────
const TERMINAL_COMMANDS = {
  help: () => `
<span class="cmd-title">Available commands:</span>
  <span class="cmd-name">about</span>       — Learn about Jai Vikash
  <span class="cmd-name">skills</span>      — View technology stack
  <span class="cmd-name">projects</span>    — View all projects
  <span class="cmd-name">achievements</span>— View achievements & events
  <span class="cmd-name">contact</span>     — Get contact information
  <span class="cmd-name">github</span>      — Open GitHub profile
  <span class="cmd-name">leetcode</span>    — View LeetCode stats
  <span class="cmd-name">clear</span>       — Clear terminal
  <span class="cmd-name">whoami</span>      — Who is this developer?`,

  whoami: () => `<span class="cmd-output">Jai Vikash A R — Full-Stack Developer, Problem Solver, AI Enthusiast.
Building real software with curiosity and caffeine. ☕</span>`,

  about: () => `<span class="cmd-output">Name    : Jai Vikash A R
Role    : Full-Stack Developer
Stack   : JavaScript • Node.js • Express • SQL • MongoDB • Java
Focus   : Web Apps, APIs, DSA, AI Integration
Status  : <span class="cmd-green">● Available for opportunities</span></span>`,

  skills: () => `<span class="cmd-output">Frontend  : HTML5 • CSS3 • JavaScript (ES6+)
Backend   : Node.js • Express.js
Database  : SQL • MongoDB
Language  : Java
Concepts  : OOP • DSA • REST APIs
Tools     : Git • GitHub • VS Code</span>`,

  projects: () => `<span class="cmd-output">1. PulseFeed          — Social Media Application [HTML/CSS/JS]
2. AI College Assistant— AI-powered Campus Helper [CSS/JS/AI]
3. Code Pulse          — GitHub Profile Analyzer  [CSS/JS/API]
4. My Portfolio        — Personal Portfolio       [JS/HTML/CSS]

→ Type 'github' to view all projects on GitHub</span>`,

  achievements: () => `<span class="cmd-output">🏆 INT-CTF          — Internal Hackathon (2025)
💻 Coder ACT        — Inter-College Tech Event (2024)
🎨 Render Rush      — Inter-College Tech Event (2024)
🧠 LeetCode         — 50+ Problems Solved (2025)</span>`,

  contact: () => `<span class="cmd-output">Email    : jaivikash4691@gmail.com
GitHub   : github.com/jaivikash4691-collab
LinkedIn : linkedin.com/in/vikash0715</span>`,

  github: () => {
    window.open('https://github.com/jaivikash4691-collab', '_blank');
    return `<span class="cmd-output">Opening GitHub profile... 🚀</span>`;
  },

  leetcode: () => `<span class="cmd-output">Platform  : LeetCode
Solved    : 50+ Problems
Topics    : Arrays, Strings, Trees, DP, Recursion</span>`,

  clear: () => '__CLEAR__',

  'sudo hire-me': () => `<span class="cmd-secret">
⠀⠀⣀⣤⣴⣶⣾⡿⠿⣷⣶⣦⣤⣀⠀⠀
⠀⣰⣿⡿⠋⠁⠀⠀⠀⠀⠀⠉⠙⢿⣿⣰⠀
⢀⣿⡟⠀⠀⠀ HIRE ME ⠀⠀⠀⠀⠀⢻⣿⡀
⣾⣿⠁ You found a secret!⠈⣿⣷
⣿⣿ → jaivikash4691@gmail.com ⣿⣿
⣷⣿⡄⠀⠀ Let's build something! ⢠⣿⣷
⠘⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠃
⠀⠈⢿⣷⣄⠀⠀⠀⠀⠀⠀⣠⣾⡿⠁⠀
⠀⠀⠀⠉⠛⠿⣿⣿⣿⡿⠿⠛⠉⠀⠀⠀</span>`,
};

// Export for use in other modules
window.PORTFOLIO_DATA = {
  PERSONAL,
  STATS,
  SKILLS,
  PROJECTS,
  TIMELINE,
  ACHIEVEMENTS,
  DSA_TOPICS,
  TERMINAL_COMMANDS,
};

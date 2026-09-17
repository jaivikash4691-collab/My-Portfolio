/**
 * ============================================================
 * PORTFOLIO DATA — JAI VIKASH A R
 * ============================================================
 * Centralized data source for the portfolio.
 * Drives identity, skills, flagship & additional projects,
 * education, development journey, activities, and terminal.
 * ============================================================
 */

// ─────────────────────────────────────────────
// PERSONAL IDENTITY & POSITIONING
// ─────────────────────────────────────────────
const PERSONAL = {
  name: 'Jai Vikash A R',
  shortName: 'Jai Vikash',
  title: 'Full-Stack / MERN Developer',
  position: 'Computer Science Engineering Student & Full-Stack Developer',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'jaivikash4691@gmail.com',
  phone: '+91 9363221224',
  githubUsername: 'jaivikash4691-collab',
  github: 'https://github.com/jaivikash4691-collab',
  linkedin: 'https://www.linkedin.com/in/vikash0715/',
  resume: 'assets/resume/Jai_Vikash_Resume.pdf',
  availability: 'Available for Developer Roles & Internships',
  tagline: 'Building full-stack web applications with React, Node.js, Express.js and MongoDB, with a growing focus on Java, DSA, APIs and AI-powered applications.',
  roles: [
    'Full-Stack / MERN Developer',
    'Computer Science Engineering Student',
    'Software Developer',
    'Backend & REST API Builder',
    'Problem Solver (Java & DSA)',
  ],
  about: `I am a Computer Science Engineering student and Full-Stack Developer focused on building functional, responsive, and data-driven web applications. My primary stack is the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by core foundations in Java, Data Structures & Algorithms, REST API design, and AI integrations. I enjoy taking software ideas from architectural design to clean code and deployment.`,
  currentFocus: [
    { title: 'Full-Stack Applications', desc: 'Building complete client-server web apps with React and Node.js.', icon: '⚡' },
    { title: 'AI-Powered Products', desc: 'Integrating LLM APIs into user-centric workflows and tools.', icon: '🤖' },
    { title: 'Developer Tools', desc: 'Engineering productivity and project management utilities.', icon: '🛠️' },
    { title: 'Career & Talent Platforms', desc: 'Creating platforms with role-based access and explainable matching.', icon: '🎯' },
  ],
};

// ─────────────────────────────────────────────
// TECHNICAL SKILLS (Categorized, Zero Fake Percentages)
// ─────────────────────────────────────────────
const SKILLS = {
  Programming: [
    { name: 'Java', icon: '☕', description: 'Used for object-oriented programming, algorithmic thinking, and DSA practice.' },
    { name: 'JavaScript', icon: '⚡', description: 'Used for modern frontend interactivity (ES6+) and full-stack runtime logic.' },
    { name: 'SQL', icon: '🗄️', description: 'Used for relational schema design, table relationships, and structured queries.' },
    { name: 'HTML', icon: '🌐', description: 'Used for semantic document structure, accessibility, and modern web standards.' },
    { name: 'CSS', icon: '🎨', description: 'Used for responsive styling, custom design systems, Flexbox, and CSS Grid.' },
  ],
  Frontend: [
    { name: 'React.js', icon: '⚛️', description: 'Used to build responsive, component-based user interfaces and single-page applications.' },
    { name: 'HTML5', icon: '📄', description: 'Used for semantic markup, SEO readiness, and accessible layout structuring.' },
    { name: 'CSS3', icon: '🪄', description: 'Used for animations, CSS custom variables, theme tokens, and clean UI styling.' },
    { name: 'JavaScript', icon: '🟡', description: 'Used for DOM manipulation, asynchronous operations (async/await), and event handling.' },
    { name: 'Responsive Web Design', icon: '📱', description: 'Used to ensure fluid layouts across mobile, tablet, and widescreen viewports.' },
  ],
  Backend: [
    { name: 'Node.js', icon: '🟢', description: 'Used for backend runtime environments and building scalable server applications.' },
    { name: 'Express.js', icon: '🚂', description: 'Used for architecting RESTful APIs, routing, and custom middleware pipelines.' },
    { name: 'REST APIs', icon: '🔌', description: 'Used to design, structure, and consume scalable client-server HTTP interfaces.' },
    { name: 'JWT Authentication', icon: '🔒', description: 'Used for stateless, secure user authentication and token-based sessions.' },
    { name: 'Role-Based Access Control', icon: '🛡️', description: 'Used to enforce permission boundaries and multi-role user authorizations.' },
  ],
  Databases: [
    { name: 'MongoDB', icon: '🍃', description: 'Used for flexible document-based NoSQL application data persistence.' },
    { name: 'Mongoose', icon: '📦', description: 'Used for schema validation, data modeling, and query abstractions in Node.js.' },
    { name: 'SQL', icon: '📊', description: 'Used for structured queries, table constraints, and relational data management.' },
  ],
  Tools: [
    { name: 'Git', icon: '🔀', description: 'Used for source control, branch management, and collaborative development.' },
    { name: 'GitHub', icon: '🐙', description: 'Used for remote repository hosting, code reviews, and issue tracking.' },
    { name: 'VS Code', icon: '💻', description: 'Used as primary development environment with modern extensions and linters.' },
    { name: 'Postman', icon: '📮', description: 'Used for API endpoint testing, request debugging, and header inspection.' },
  ],
  'Computer Science': [
    { name: 'Object-Oriented Programming', icon: '🧩', description: 'Applied to structure maintainable code with encapsulation, inheritance, and polymorphism.' },
    { name: 'Data Structures & Algorithms', icon: '🌳', description: 'Studied and practiced for computational efficiency and problem-solving optimization.' },
    { name: 'Problem Solving', icon: '🧠', description: 'Applied to decompose complex system requirements into modular algorithms.' },
  ],
  'AI & APIs': [
    { name: 'AI API Integration', icon: '🤖', description: 'Used to incorporate AI models into web applications for conversational and analytical tools.' },
    { name: 'GitHub API Integration', icon: '🔗', description: 'Used to retrieve repository metadata, user activity, and commit metrics dynamically.' },
    { name: 'REST API Integration', icon: '🌐', description: 'Used to integrate third-party web services and external data providers.' },
  ],
  Additional: [
    { name: 'Figma', icon: '📐', description: 'Used for UI/UX wireframing, layout prototyping, and design exploration.' },
    { name: 'UI/UX Fundamentals', icon: '✨', description: 'Applied for visual hierarchy, consistent typography, spacing, and accessible contrast.' },
  ],
};

// ─────────────────────────────────────────────
// FEATURED & ADDITIONAL PROJECTS
// ─────────────────────────────────────────────
const PROJECTS = [
  // ── 1. PATHLY (FLAGSHIP — TOP PROMINENCE) ────────────────
  {
    id: 'pathly',
    name: 'Pathly',
    subtitle: 'Career, Skills & Job Development Platform',
    badge: 'Flagship Platform',
    isFlagship: true,
    isFeatured: true,
    description: 'A comprehensive MERN career development platform combining skill management, career planning, job discovery, recruitment workflows, resume building, interview preparation, and AI-assisted career tools.',
    problem: 'Students and early-career developers struggle to assess skill gaps, build ATS-friendly resumes, and discover relevant job openings, while recruiters lack structured insights into candidate readiness.',
    solution: 'Engineered an end-to-end career intelligence hub featuring dual student/recruiter workflows, explainable job matching, automated ATS resume generation, and AI-powered interview coaches.',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'GitHub API', 'AI API Integration'],
    category: ['fullstack', 'mern', 'ai'],
    github: 'https://github.com/jaivikash4691-collab/Pathly',
    demo: null,
    features: [
      'Student and recruiter dedicated workflows with specialized dashboards',
      'Interactive skill inventory with competency metrics and skill-gap analysis',
      'Career readiness scoring and tailored learning roadmap generation',
      'Portfolio project showcases and verified certification tracking',
      'Job discovery engine with explainable match scoring & application tracking',
      'Recruiter portal: job posting, candidate pipeline & interview scheduling',
      'ATS-friendly interactive resume builder with direct PDF export',
      'GitHub integration for repository analytics and profile validation',
      'AI career assistant: resume feedback, coding prep, and mock interview practice',
      'Real-time notifications, career analytics dashboard, and dark/light theme support',
    ],
    architecture: 'Built on a modular MERN architecture with JWT-based RBAC middleware, MongoDB Mongoose data models for student profiles, recruiter job listings, and application states, combined with AI API pipelines for resume evaluation and interview coaching.',
    technicalHighlights: [
      'Engineered explainable matching algorithm comparing applicant skill vectors to job requirements',
      'Integrated AI API endpoints for prompt-engineered career guidance and resume critique',
      'Implemented client-side PDF document compilation for ATS-compliant resumes',
      'Designed dual-role state management with protected route hierarchies in React',
    ],
    challenges: 'Designing a flexible data schema capable of supporting distinct student profiles, dynamic job postings, interview schedules, and streaming AI assistant interactions within a single cohesive platform.',
    learned: 'Architecting multi-role SaaS systems, crafting structured AI API prompts, handling document generation pipelines, and designing accessible full-stack interfaces.',
  },

  // ── 2. DEVTRACK (FLAGSHIP) ────────────────────────────────
  {
    id: 'devtrack',
    name: 'DevTrack',
    subtitle: 'Team & Project Management Platform',
    badge: 'Flagship Platform',
    isFlagship: true,
    isFeatured: true,
    description: 'A full-stack project and task management platform for organizing software development projects, milestones, task priorities, team activity feeds, and notifications.',
    problem: 'Developer teams often experience friction when tracking task dependencies, sprint milestones, and GitHub activities across disconnected tools.',
    solution: 'Built a centralized project tracking workspace with real-time updates, milestone health metrics, role-based task delegation, and GitHub repository integration.',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.IO', 'GitHub API'],
    category: ['fullstack', 'mern', 'tools'],
    github: 'https://github.com/jaivikash4691-collab/DevTrack',
    demo: null,
    features: [
      'Project workspaces with milestone planning and sprint tracking',
      'Task management with priority levels, assignees, and drag-and-drop status workflows',
      'Role-based team permissions and access-controlled project settings',
      'Real-time task updates and activity feeds powered by Socket.IO',
      'GitHub repository integration for commit linking and repo activity stats',
      'Project health metrics and visual progress percentage indicators',
      'In-app notification system for task assignments and deadline alerts',
      'Secure REST APIs with JWT authentication and MongoDB data modeling',
    ],
    architecture: 'React frontend communicating with an Express.js/Node.js REST API layer and MongoDB persistence, augmented with a Socket.IO WebSocket layer for instantaneous broadcast of task board modifications to connected team members.',
    technicalHighlights: [
      'Implemented real-time bi-directional task sync using Socket.IO rooms',
      'Integrated GitHub REST API to synchronize commit history with project milestones',
      'Designed robust role-based middleware for Project Managers, Leads, and Members',
      'Built automated project health calculators based on completed vs pending task weightings',
    ],
    challenges: 'Preventing race conditions and UI desynchronization when multiple team members update task statuses concurrently.',
    learned: 'Managing WebSocket room lifecycles alongside RESTful state, creating scalable MongoDB indexing strategies, and structuring maintainable team collaboration software.',
  },

  // ── 3. FIXNEAR (FLAGSHIP) ─────────────────────────────────
  {
    id: 'fixnear',
    name: 'FixNear',
    subtitle: 'Vehicle Service & Mechanic Finder Platform',
    badge: 'Flagship Platform',
    isFlagship: true,
    isFeatured: true,
    description: 'A full-stack platform that connects vehicle owners with nearby verified mechanics and service centers, enabling transparent service comparisons, quote requests, and live repair progress tracking.',
    problem: 'Vehicle owners face stress and lack of transparency when finding trustworthy mechanics during unexpected breakdowns, with no visibility into repair status and cost estimates.',
    solution: 'Developed a dual-sided platform allowing vehicle owners to discover local service providers via search/filtering, book repairs, upload diagnostic images, and follow live repair milestones.',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.IO', 'REST APIs'],
    category: ['fullstack', 'mern'],
    github: 'https://github.com/jaivikash4691-collab/FixNear',
    demo: null,
    features: [
      'Dedicated Customer and Mechanic portals with customized dashboards',
      'Mechanic discovery engine with location-based search, service filters, and pricing lists',
      'Vehicle management profile to maintain service histories and vehicle specs',
      'End-to-end repair request pipeline from initial booking to quote approval',
      'Live repair status tracker with milestone updates (Diagnosis, Parts, In-Progress, Ready)',
      'Mechanic profiles featuring services offered, pricing ranges, ratings, and customer reviews',
      'Image upload integration for damage diagnostics and repair completion proof',
      'Real-time status change alerts via Socket.IO and secure JWT authentication',
    ],
    architecture: 'MERN stack architecture with dual auth schemas for customers and workshop mechanics, geocoding-ready location queries, Mongoose subdocument schemas for vehicle logs, and event-driven status tracking.',
    technicalHighlights: [
      'Built multi-stage status state machine ensuring sequential repair lifecycle transitions',
      'Developed search and filtering algorithms matching vehicle make/model with specialized shops',
      'Implemented image storage and secure linking for repair work orders',
      'Designed real-time push alerts updating customers immediately upon status change',
    ],
    challenges: 'Designing clean bidirectional communication between vehicle owners and mechanics with different permissions, pricing models, and service states.',
    learned: 'Building transactional workflows for service marketplaces, implementing complex Mongoose aggregation pipelines, and designing mobile-responsive status tracking UIs.',
  },

  // ── ADDITIONAL PROJECTS (Secondary Showcase) ───────────────
  {
    id: 'code-pulse',
    name: 'Code Pulse',
    subtitle: 'GitHub Profile & Repository Analyzer',
    badge: 'Developer Tool',
    isFlagship: false,
    isFeatured: false,
    description: 'A developer evaluation tool that fetches and analyzes GitHub profile activity, repository health, commit frequencies, and language distributions using the GitHub REST API.',
    problem: 'Developers lack an objective view of how their GitHub portfolio looks from a technical recruiter or code evaluator perspective.',
    solution: 'Built an analyzer that queries GitHub public APIs and computes insightful scores for README completeness, repository activity, and language diversity.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API'],
    category: ['frontend', 'api', 'tools'],
    github: 'https://github.com/jaivikash4691-collab/Code_Pulse',
    demo: null,
    features: [
      'GitHub REST API integration for public profile retrieval',
      'Automated portfolio quality scoring algorithm',
      'Language breakdown and distribution charts',
      'Repository activity, star, and fork analysis',
      'Responsive visual dashboard for developer profiles',
    ],
    architecture: 'Client-side application consuming GitHub REST endpoints with asynchronous Fetch API, normalizing rate limits, and computing profile rating matrices.',
    technicalHighlights: [
      'Calculated multi-factor quality score based on commit activity, repo counts, and documentation',
      'Implemented rate-limit handling with graceful UI fallbacks',
    ],
    challenges: 'Handling unauthenticated GitHub API rate limits while aggregating multi-page repository statistics.',
    learned: 'Asynchronous JavaScript data handling, REST API pagination, and data normalization for analytics.',
  },
  {
    id: 'ai-college-assistant',
    name: 'AI College Assistant',
    subtitle: 'Intelligent Campus Guidance Assistant',
    badge: 'AI Application',
    isFlagship: false,
    isFeatured: false,
    description: 'An AI-powered conversational web assistant designed to help students quickly access campus information, academic guidelines, and administrative procedures.',
    problem: 'College students often struggle to locate specific academic regulations, exam schedules, and department contact info across scattered college portals.',
    solution: 'Created an intuitive chat interface backed by AI API integration to provide instant, contextual answers to common student inquiries.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'AI API Integration'],
    category: ['frontend', 'ai'],
    github: 'https://github.com/jaivikash4691-collab/AI-Collage-Assistant',
    demo: null,
    features: [
      'Conversational chat UI with streaming responses',
      'Pre-tuned prompts for academic queries and campus FAQs',
      'Clean mobile-first messaging interface',
      'Contextual conversation history tracking',
    ],
    architecture: 'Responsive frontend interface communicating with an AI endpoint configured with campus-specific system prompts.',
    technicalHighlights: [
      'Designed responsive chat bubbles with smooth auto-scrolling',
      'Structured prompt engineering for factual, student-focused responses',
    ],
    challenges: 'Ensuring responses remain focused on academic context without hallucinations.',
    learned: 'Conversational UI patterns, prompt tuning, and building lightweight web chat applications.',
  },
  {
    id: 'pulsefeed',
    name: 'PulseFeed',
    subtitle: 'Social Media Interaction Platform',
    badge: 'Web App',
    isFlagship: false,
    isFeatured: false,
    description: 'An interactive social feed web application featuring user profiles, post creation, dynamic interactions, and follow systems built with vanilla web technologies.',
    problem: 'Exploring the intricacies of building responsive feeds and client-side social state management from fundamental web primitives.',
    solution: 'Implemented a lightweight social interface with interactive post flows, user state simulations, and responsive feeds.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['frontend'],
    github: 'https://github.com/jaivikash4691-collab/Pulsefeed-A-social-Media-Application',
    demo: null,
    features: [
      'User profile views and interactive feed updates',
      'Post creation, like counter, and comment simulations',
      'Follow/unfollow dynamic state updates',
      'Responsive design across mobile and desktop',
    ],
    architecture: 'Vanilla JavaScript architecture utilizing modern DOM manipulation, LocalStorage persistence, and modular component functions.',
    technicalHighlights: [
      'Modular client-side state management without external libraries',
      'Optimistic UI updates for immediate user feedback',
    ],
    challenges: 'Managing multi-item feed interactions and state persistence using pure JavaScript.',
    learned: 'Deepened understanding of DOM lifecycle, event delegation, and vanilla JS application structuring.',
  },
];

// ─────────────────────────────────────────────
// EDUCATION (Verified & Factual)
// ─────────────────────────────────────────────
const EDUCATION = [
  {
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    period: '2025 – 2029',
    details: 'Focusing on core computer science foundations, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Computer Networks, and full-stack software development.',
    icon: '🎓',
    status: 'Current Undergrad',
  },
  {
    institution: 'Keartiman Matriculation Higher Secondary School',
    location: 'Kanuvai, Coimbatore',
    degree: 'Higher Secondary Education',
    period: '2024 – 2025',
    details: 'Completed higher secondary education with a rigorous foundation in Mathematics, Physics, and Computer Science.',
    icon: '🏫',
    status: 'Completed',
  },
];

// ─────────────────────────────────────────────
// DEVELOPMENT JOURNEY (Factual Milestones)
// ─────────────────────────────────────────────
const TIMELINE = [
  {
    year: 'Foundations',
    title: 'Computer Science Engineering & Programming',
    description: 'Began engineering studies in Computer Science at Sri Shakthi Institute of Engineering and Technology. Built strong foundations in algorithms, mathematical problem solving, and software design fundamentals.',
    type: 'education',
    icon: '🎓',
  },
  {
    year: 'Core Languages',
    title: 'Java & Object-Oriented Principles',
    description: 'Deepened mastery of Java programming, OOP paradigms (encapsulation, polymorphism, abstraction, inheritance), and data structures including arrays, linked lists, stacks, queues, and binary trees.',
    type: 'learning',
    icon: '☕',
  },
  {
    year: 'Web Architecture',
    title: 'Frontend & Web Development Foundations',
    description: 'Mastered modern web development fundamentals with semantic HTML5, CSS3, responsive layouts, and modern JavaScript (ES6+, asynchronous programming, DOM lifecycle).',
    type: 'learning',
    icon: '🌐',
  },
  {
    year: 'Full-Stack Expansion',
    title: 'MERN Stack & Backend Engineering',
    description: 'Expanded into Node.js, Express.js, MongoDB, Mongoose, and RESTful API engineering. Implemented JWT authentication, role-based access control, and database relationship modeling.',
    type: 'milestone',
    icon: '⚡',
  },
  {
    year: 'Flagship Systems',
    title: 'DevTrack & FixNear Platforms',
    description: 'Architected and built full-stack production-grade platforms: DevTrack (team task and milestone management with Socket.IO & GitHub integration) and FixNear (vehicle service discovery & repair tracking).',
    type: 'milestone',
    icon: '🛠️',
  },
  {
    year: 'Advanced Ecosystems',
    title: 'Pathly & AI Integrations (Current)',
    description: 'Engineered Pathly, a full-featured career & job development platform featuring explainable matching, AI resume tools, and recruiter workflows. Actively building software and preparing for developer internships.',
    type: 'current',
    icon: '🚀',
  },
];

// ─────────────────────────────────────────────
// VERIFIED ACTIVITIES & WORKSHOPS
// ─────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    title: 'Paper Presentation',
    subtitle: 'Technical Presentation',
    description: 'Authored and presented a technical paper exploring modern computing concepts and practical software development methodologies.',
    type: 'presentation',
    icon: '📄',
    year: 'Technical Event',
  },
  {
    title: 'Coding Competition',
    subtitle: 'Algorithmic Problem Solving',
    description: 'Participated in competitive programming challenges testing algorithmic optimization, data structures, and rapid problem decomposition.',
    type: 'competition',
    icon: '💻',
    year: 'Coding Event',
  },
  {
    title: 'Compiler Design Workshop',
    subtitle: 'Technical Workshop',
    description: 'Attended a comprehensive hands-on workshop covering lexical analysis, AST generation, parsing techniques, and compiler optimization principles.',
    type: 'workshop',
    icon: '⚙️',
    year: 'Workshop',
  },
  {
    title: 'Cloud Computing Workshop',
    subtitle: 'Technical Workshop',
    description: 'Participated in a practical technical workshop on cloud architectures, distributed backend hosting, and cloud deployment pipelines.',
    type: 'workshop',
    icon: '☁️',
    year: 'Workshop',
  },
  {
    title: 'INT-CTF Internal Hackathon',
    subtitle: 'College Technical CTF',
    description: 'Participated in the internal college Capture-The-Flag hackathon, solving security, web inspection, and logic puzzles under time constraints.',
    type: 'hackathon',
    icon: '⚔️',
    year: 'Hackathon',
  },
  {
    title: 'Coder ACT & Render Rush',
    subtitle: 'Inter-College Tech Events',
    description: 'Competed in Coder ACT and Render Rush inter-college technical events focused on rapid frontend implementation and problem solving.',
    type: 'event',
    icon: '🚀',
    year: 'Technical Event',
  },
];

// ─────────────────────────────────────────────
// DSA TOPICS STUDIED
// ─────────────────────────────────────────────
const DSA_TOPICS = [
  { name: 'Arrays & Vectors', icon: '▦', category: 'linear' },
  { name: 'Strings & Parsing', icon: '🔤', category: 'linear' },
  { name: 'Linked Lists', icon: '🔗', category: 'linear' },
  { name: 'Stacks & Queues', icon: '📚', category: 'linear' },
  { name: 'Binary Trees', icon: '🌳', category: 'non-linear' },
  { name: 'Binary Search Trees', icon: '🔍', category: 'non-linear' },
  { name: 'Recursion & Backtracking', icon: '🔄', category: 'technique' },
  { name: 'Searching & Sorting', icon: '📊', category: 'technique' },
  { name: 'Time & Space Complexity (Big-O)', icon: '⏱️', category: 'technique' },
  { name: 'Object-Oriented Design', icon: '🧬', category: 'concept' },
];

// ─────────────────────────────────────────────
// INTERACTIVE TERMINAL COMMANDS
// ─────────────────────────────────────────────
const TERMINAL_COMMANDS = {
  help: () => `
<span class="cmd-title">Available developer commands:</span>
  <span class="cmd-name">about</span>        — Summary of Jai Vikash & professional positioning
  <span class="cmd-name">skills</span>       — Full technical stack breakdown
  <span class="cmd-name">projects</span>     — Flagship and featured projects
  <span class="cmd-name">pathly</span>       — Details on Pathly (Career & AI platform)
  <span class="cmd-name">devtrack</span>     — Details on DevTrack (Team management platform)
  <span class="cmd-name">fixnear</span>      — Details on FixNear (Service finder platform)
  <span class="cmd-name">education</span>    — Degree & academic background
  <span class="cmd-name">journey</span>      — Engineering milestones
  <span class="cmd-name">contact</span>      — Email, phone, GitHub, LinkedIn
  <span class="cmd-name">github</span>       — Open official GitHub profile
  <span class="cmd-name">resume</span>       — Locate and view developer resume
  <span class="cmd-name">clear</span>        — Clear the terminal screen`,

  whoami: () => `<span class="cmd-output">Jai Vikash A R — Computer Science Engineering Student & Full-Stack / MERN Developer.
Location: Coimbatore, Tamil Nadu, India.
Focus   : MERN Stack, Java, DSA, REST APIs & AI-integrated web applications.</span>`,

  about: () => `<span class="cmd-output">Name       : Jai Vikash A R
Education  : B.E. Computer Science and Engineering (2025–2029)
Institution: Sri Shakthi Institute of Engineering and Technology, Coimbatore
Stack      : React.js · Node.js · Express.js · MongoDB · JavaScript · Java · SQL
Status     : <span class="cmd-green">● Open for Software & Full-Stack Internships</span></span>`,

  skills: () => `<span class="cmd-output"><strong>Frontend</strong>    : React.js, HTML5, CSS3, JavaScript, Responsive Web Design
<strong>Backend</strong>     : Node.js, Express.js, REST APIs, JWT Auth, Role-Based Access Control
<strong>Databases</strong>   : MongoDB, Mongoose, SQL
<strong>Languages</strong>   : Java, JavaScript, SQL, HTML, CSS
<strong>CS Concepts</strong> : Object-Oriented Programming, Data Structures & Algorithms, Problem Solving
<strong>Tools</strong>       : Git, GitHub, VS Code, Postman, Figma</span>`,

  projects: () => `<span class="cmd-output"><strong>Flagship Projects:</strong>
  1. <span class="cmd-name">Pathly</span>   — Career, Skills & Job Platform (React, Node, Express, MongoDB, AI API, GitHub API)
  2. <span class="cmd-name">DevTrack</span> — Team & Task Management Platform (React, Node, Express, MongoDB, Socket.IO, GitHub API)
  3. <span class="cmd-name">FixNear</span>  — Vehicle Service & Mechanic Finder (React, Node, Express, MongoDB, Socket.IO)

Type <strong>pathly</strong>, <strong>devtrack</strong>, or <strong>fixnear</strong> for in-depth specs.</span>`,

  pathly: () => `<span class="cmd-output"><strong>Pathly — Career, Skills & Job Development Platform</strong>
• Dual Student & Recruiter Workflows
• Skill-gap analytics & explainable job matching
• AI Career Assistant & automated ATS resume builder (PDF export)
• GitHub integration & interview scheduling
• Tech: React.js, Node.js, Express.js, MongoDB, Mongoose, JWT, AI API</span>`,

  devtrack: () => `<span class="cmd-output"><strong>DevTrack — Team & Project Management Platform</strong>
• Workspace milestone planning and task priority boards
• Real-time updates with Socket.IO & activity logging
• GitHub API synchronization for commit & repository tracking
• Role-based permission controls (PM, Lead, Member)
• Tech: React.js, Node.js, Express.js, MongoDB, Socket.IO, JWT</span>`,

  fixnear: () => `<span class="cmd-output"><strong>FixNear — Vehicle Service & Mechanic Finder</strong>
• Mechanic discovery with location search & service filter
• Customer quote requests & real-time repair progress tracking
• Diagnostic image uploads & verified mechanic profiles
• Tech: React.js, Node.js, Express.js, MongoDB, Socket.IO, JWT</span>`,

  education: () => `<span class="cmd-output"><strong>Degree:</strong> B.E. Computer Science and Engineering (2025–2029)
<strong>College:</strong> Sri Shakthi Institute of Engineering and Technology, Coimbatore
<strong>School :</strong> Keartiman Mat Hr Sec School, Kanuvai (Higher Secondary, 2024–2025)</span>`,

  journey: () => `<span class="cmd-output">Milestones:
1. CS Engineering & Core Fundamentals
2. Java & Object-Oriented Programming
3. Web Development Foundations (HTML/CSS/JS)
4. Full-Stack MERN Architecture (Node/Express/MongoDB)
5. Flagship Platforms: DevTrack & FixNear
6. AI-Integrated Ecosystems: Pathly</span>`,

  contact: () => `<span class="cmd-output">Email    : jaivikash4691@gmail.com
Phone    : +91 9363221224
Location : Coimbatore, Tamil Nadu, India
GitHub   : github.com/jaivikash4691-collab
LinkedIn : linkedin.com/in/vikash0715</span>`,

  github: () => {
    window.open('https://github.com/jaivikash4691-collab', '_blank');
    return `<span class="cmd-output">Navigating to https://github.com/jaivikash4691-collab... 🚀</span>`;
  },

  resume: () => `<span class="cmd-output">Developer resume configured at: <strong>assets/resume/Jai_Vikash_Resume.pdf</strong>
Use the 'Download Resume' button in the navigation or hero section to download.</span>`,

  clear: () => '__CLEAR__',

  'sudo hire-me': () => `<span class="cmd-secret">
┌──────────────────────────────────────────────────┐
│  JAI VIKASH A R — READY TO CONTRIBUTE & BUILD   │
│  Full-Stack / MERN Developer · Problem Solver    │
│  Contact: jaivikash4691@gmail.com                │
│  Phone  : +91 9363221224                         │
└──────────────────────────────────────────────────┘</span>`,
};

// Export to window for all modules
window.PORTFOLIO_DATA = {
  PERSONAL,
  SKILLS,
  PROJECTS,
  EDUCATION,
  TIMELINE,
  ACHIEVEMENTS,
  DSA_TOPICS,
  TERMINAL_COMMANDS,
};

// Real resume data for Chaitash Patel
export const personalInfo = {
  name: "Chaitash Patel",
  firstName: "Chaitash",
  lastName: "Patel",
  role: "Computer Engineer",
  tagline: "I design hardware–software solutions, ship polished mobile & web apps, and obsess over the details that make software feel effortless.",
  location: "Anand, Gujarat, India",
  email: "chaitash.work@gmail.com",
  phone: "+91 70692 91955",
  availability: "Open to internships & full-time roles",
  bio: "Accomplished Computer Engineer specializing in full-stack software development and digital design, with a proven track record in crafting intuitive web applications (React Router, SQL databases) and automation systems (servo motor controls via embedded C/Arduino scripting). Expert in server management (cPanel, SSH hosting) and scalable architectures that power seamless user experiences.",
  shortBio: "Computer Engineering student building full-stack web, mobile & AR experiences.",
  photoUrl: "https://drive.google.com/file/d/1jX8QFvhfvkOv2IjWegU6mQhEcsj3M_GV/view?usp=sharing",
  yearsExperience: 3,
  projectsCompleted: 8,
  hackathons: 6,
  languagesSpoken: 3,
  resumeUrl: "https://customer-assets.emergentagent.com/job_code-canvas-81/artifacts/3ilnn1az_Chaitash_Resume.pdf",
  socials: {
    github: "https://github.com/chaitashhp2514",
    linkedin: "https://linkedin.com/in/chaitash-patel-3717501a0",
    twitter: "https://twitter.com/chaitashpatel",
    email: "mailto:chaitash.work@gmail.com"
  }
};

export const aboutHighlights = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects Built", value: "8" },
  { label: "Hackathons", value: "6" },
  { label: "Languages Spoken", value: "3" }
];

export const skills = {
  languages: [
    { name: "C++", level: 92 },
    { name: "PHP", level: 90 },
    { name: "Python", level: 78 },
    { name: "Java", level: 78 },
    { name: "Dart", level: 82 },
    { name: "SQL", level: 85 }
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "Node.js / Express", level: 82 },
    { name: "Flutter", level: 86 },
    { name: "Firebase", level: 80 },
    { name: "Stripe API", level: 72 }
  ],
  tools: [
    { name: "MongoDB", level: 84 },
    { name: "MySQL", level: 88 },
    { name: "Android Development", level: 80 },
    { name: "Circuit Design", level: 78 },
    { name: "Algorithms & DSA", level: 85 },
    { name: "Git & GitHub", level: 84 }
  ]
};

export const projects = [
  {
    id: "p1",
    title: "Furniture AR — Android App",
    category: "Mobile · Augmented Reality",
    tagline: "Visualize furniture inside your room in real time.",
    description: "An AR Android application that lets users place and resize virtual furniture in their living space through the camera before buying. Boosts purchase confidence and reduces returns.",
    tech: ["Dart", "Flutter", "Node.js", "Java", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    id: "p2",
    title: "E-commerce Platform",
    category: "Full-Stack · Web",
    tagline: "A complete retail storefront with payments and order management.",
    description: "Designed and developed a fully functional e-commerce platform with product listings, shopping cart, secure Stripe-backed payments, and an admin-side order management dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    id: "p3",
    title: "School Management App",
    category: "Mobile · Internship Project",
    tagline: "All-in-one admin + communication app for schools.",
    description: "Built during my Android internship at Tech Elecon Pvt. Ltd. — streamlines administrative tasks, parent–teacher communication, and manages academic, financial, and operational activities.",
    tech: ["Flutter", "Dart", "Java", "Kotlin", "Firebase"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    id: "p4",
    title: "Circuit Design Playground",
    category: "Hardware · Academic",
    tagline: "Exploring digital logic with hands-on circuit design.",
    description: "A collection of academic circuit-design experiments covering combinational logic, sequential circuits, and microcontroller-based prototypes delivered for my Computer Engineering coursework.",
    tech: ["C++", "Verilog", "Arduino", "Circuit Design"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    links: { demo: "#", code: "#" },
    featured: false
  }
];

export const experiences = [
  {
    id: "e1",
    role: "Android Development Intern",
    company: "Tech Elecon Pvt. Ltd.",
    type: "Internship",
    period: "1 Month",
    location: "Gujarat, India",
    description: "Built a school-management Android application that streamlines administrative tasks, parent–teacher communication, and manages academic + financial activities. Shipped in close collaboration with the product team.",
    tags: ["Flutter", "Dart", "Java", "Kotlin", "Firebase"]
  },
  {
    id: "e2",
    role: "Freelance Developer",
    company: "Self-initiated projects",
    type: "Freelance",
    period: "2023 — Present",
    location: "Remote",
    description: "Designed and developed full-stack web and mobile apps for small businesses — including a Stripe-backed e-commerce platform and an AR-powered furniture visualizer.",
    tags: ["React", "Node.js", "Flutter", "MongoDB"]
  },
  {
    id: "e3",
    role: "Hackathon Participant",
    company: "Intercollegiate Hackathons",
    type: "Competition",
    period: "2022 — 2024",
    location: "Gujarat, India",
    description: "Regular hackathon participant, building rapid prototypes around real-world problem statements with cross-functional student teams.",
    tags: ["Problem Solving", "Teamwork", "Prototyping"]
  }
];

export const education = [
  {
    id: "ed1",
    degree: "Bachelor of Computer Engineering",
    school: "Madhuben & Bhanubhai Institute of Technology · CVM University",
    period: "2022 — 2025",
    grade: "GPA: 6.86 / 10",
    highlights: [
      "Core coursework: Algorithms, Operating Systems, DBMS, Circuit Design",
      "Active member of college tech & sports communities",
      "Multiple hackathon finalist appearances"
    ]
  },
  {
    id: "ed2",
    degree: "Diploma in Computer Engineering",
    school: "B & B Institute of Technology · Gujarat Technological University",
    period: "2019 — 2022",
    grade: "GPA: 9.19 / 10",
    highlights: [
      "Graduated with distinction",
      "Strong foundation in programming, databases & web development",
      "Led team projects in software and hardware labs"
    ]
  }
];

export const certifications = [
  { id: "c1", name: "Full-Stack Web Development", issuer: "Self-paced + Project-based", year: "2024" },
  { id: "c2", name: "Flutter & Dart — The Complete Guide", issuer: "Online Coursework", year: "2023" },
  { id: "c3", name: "Database Management & SQL", issuer: "University Coursework", year: "2023" },
  { id: "c4", name: "Data Structures & Algorithms in C++", issuer: "Self-paced", year: "2022" }
];

export const achievements = [
  {
    id: "a1",
    title: "University Basketball Championship",
    subtitle: "Recognized twice for excellence in sportsmanship and leadership",
    icon: "Trophy",
    year: "2022 — 2024"
  },
  {
    id: "a2",
    title: "Intercollegiate Hackathons",
    subtitle: "Participated in multiple hackathons, delivering innovative solutions under tight deadlines",
    icon: "Rocket",
    year: "2022 — 2024"
  },
  {
    id: "a3",
    title: "Diploma with Distinction",
    subtitle: "Graduated Diploma in Computers with 9.19 GPA — among the top performers",
    icon: "GraduationCap",
    year: "2022"
  },
  {
    id: "a4",
    title: "Multilingual Communicator",
    subtitle: "Fluent in English, Hindi, and Gujarati — comfortable collaborating with diverse teams",
    icon: "Languages",
    year: "—"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

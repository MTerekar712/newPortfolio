export const projectsData = [ 
  {
    id: "adaptive-noise-cancellation",
    title: "AI-Based Adaptive Noise Cancellation for Defence Communication",
    category: "AI & Signal Processing",
    tagline: "Adaptive filtering and noise suppression for high-noise communication channels.",
    description: "An engineering research & implementation project focused on improving speech intelligibility in mission-critical defence scenarios. Employs adaptive filtering and digital signal processing techniques to attenuate high-intensity background interference while preserving vital voice acoustic features.",
    highlights: [
      "Adaptive filtering algorithms (LMS / RLS principles) for acoustic noise suppression",
      "Digital signal processing pipeline tailored for vocal frequency isolation",
      "Speech signal preservation under dynamic ambient noise conditions",
      "Applied engineering research aligned with EXTC domain expertise"
    ],
    technologies: ["Python", "Digital Signal Processing", "Adaptive Filtering", "NumPy / SciPy", "Audio Processing"],
    githubUrl: "https://github.com/MTerekar712",
    liveUrl: null, // Engineering project / prototype
    status: "Research & Prototype",
    image: "/images/project-noise-cancelling.svg",
    accentColor: "#52B788"
  },
  {
    id: "developer-portfolio",
    title: "Personal Developer Portfolio",
    category: "Frontend & UI/UX",
    tagline: "Futuristic, high-performance portfolio featuring glassmorphism and interactive motion.",
    description: "A modern developer portfolio website designed from the ground up to showcase technical capabilities, problem-solving journey, and engineering projects. Built with modular React, custom CSS glassmorphism, responsive architecture, and GSAP micro-animations.",
    highlights: [
      "Custom dark navy design system with tailored palette (#001F3F, #0A9396, #52B788)",
      "Interactive background particle mesh with mouse parallax",
      "Zero-dependency custom CSS with complete responsive design (320px+)",
      "Integrated contact workflow with client-side validation and EmailJS support"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "GSAP", "Vite"],
    githubUrl: "https://github.com/MTerekar712",
    liveUrl: "https://portfolio-6wxx.vercel.app/",
    status: "Production Ready",
    image: "/images/project-portfolio.svg",
    accentColor: "#94D2BD"
  }
];

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Code2, 
  Terminal, 
  BookOpen, 
  Laptop, 
  Brain, 
  Download, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/personal';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import '../styles/about.css';

export default function About() {
  const verifiedMilestones = [
    {
      title: "B.E. in Electronics & Telecommunication Engineering (EXTC)",
      institution: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
      period: "Undergraduate Program (Expected 2026)",
      description: "Undergraduate degree focusing on telecommunication principles, digital signal processing, computing fundamentals, and engineering mathematics. Active coursework in microprocessors, signals & systems, and communication networks.",
      tag: "Academic Education"
    },
    {
      title: "Foundations in Programming & Data Structures (DSA)",
      institution: "Java & Problem Solving",
      period: "Core Technical Discipline",
      description: "Dedicated study of object-oriented programming with Java. Regular practice of core data structures (Arrays, Linked Lists, Trees, Graphs, Stacks/Queues) and foundational algorithms (Searching, Sorting, Dynamic Programming).",
      tag: "Problem Solving"
    },
    {
      title: "Web Engineering & Modern Frontend Development",
      institution: "HTML5, CSS3, JavaScript (ES6+), React.js",
      period: "Frontend Focus",
      description: "Hands-on implementation of responsive web applications, component-based architectures with React, state management, modern CSS layout paradigms, and integrating client-side interfaces with backend APIs.",
      tag: "Web Development"
    },
    {
      title: "Full-Stack Project: Digital Product Warranty Management",
      institution: "React, Node.js, Express, MongoDB",
      period: "Full-Stack Implementation",
      description: "Engineered a centralized system to track warranties, calculate expiration periods, store receipt documents, and send proactive notifications for electronics products.",
      tag: "Engineering Project"
    },
    {
      title: "Engineering Research: AI-Based Adaptive Noise Cancellation",
      institution: "Digital Signal Processing & Python",
      period: "Defence Comms Focus",
      description: "Applied research and software simulation using adaptive filtering techniques (LMS/RLS) to attenuate high-noise background interference in defence communication channels while retaining speech intelligibility.",
      tag: "Defence Comms & DSP"
    }
  ];

  const corePillars = [
    {
      icon: Code2,
      title: "Software Engineering",
      desc: "Committed to writing clean, maintainable, modular code adhering to best practices and component reusability."
    },
    {
      icon: Terminal,
      title: "DSA & Problem Solving",
      desc: "Strengthening computational thinking with data structures and algorithmic efficiency in Java."
    },
    {
      icon: Layers,
      title: "Modern Frontend UI",
      desc: "Crafting responsive, high-performance web applications with React, modern CSS, and fluid user interactions."
    },
    {
      icon: Brain,
      title: "Signal Processing & AI/ML",
      desc: "Exploring the intersection of EXTC domain knowledge, digital audio signal processing, and emerging AI tools."
    }
  ];

  return (
    <div className="about-page section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <BookOpen size={14} />
          <span>About Me</span>
        </div>
        <h1 className="section-title">Engineering Mindset. Passion for Code.</h1>
        <p className="section-subtitle">
          Learn about my academic background, technical focus, and continuous learning journey as a developer.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="about-hero-grid">
        {/* Left Sticky Card */}
        <div className="glass-card about-profile-card">
          <div className="about-card-avatar">
            <img
              src="/images/profile-avatar.svg"
              alt="Mayur Manohar Terekar"
              loading="lazy"
            />
          </div>

          <div className="about-card-header">
            <h2 className="about-card-name">{personalData.name}</h2>
            <span className="about-card-role">{personalData.role}</span>
          </div>

          <div className="about-details-list">
            <div className="about-detail-item">
              <GraduationCap size={18} className="about-detail-icon" />
              <span>B.E. in EXTC Engineering</span>
            </div>
            <div className="about-detail-item">
              <MapPin size={18} className="about-detail-icon" />
              <span>Navi Mumbai, Maharashtra, India</span>
            </div>
            <div className="about-detail-item">
              <Laptop size={18} className="about-detail-icon" />
              <span>Bharati Vidyapeeth College of Engg.</span>
            </div>
            <div className="about-detail-item">
              <Mail size={18} className="about-detail-icon" />
              <span>{personalData.links.email}</span>
            </div>
          </div>

          <Button
            href="/resume.pdf"
            download="Mayur_Terekar_Resume.pdf"
            variant="primary"
            icon={Download}
            style={{ width: '100%' }}
          >
            Download Resume (PDF)
          </Button>

          <SocialLinks showLabels={false} />
        </div>

        {/* Right Column: Bio & Core Pillars */}
        <div className="about-bio-container">
          <div className="about-bio-text">
            <p style={{ marginBottom: '1.25rem' }}>
              Hello! I'm <strong>Mayur Manohar Terekar</strong>, an Electronics and Telecommunication Engineering (EXTC) student at <strong>Bharati Vidyapeeth College of Engineering, Navi Mumbai</strong> with a strong passion for software development and frontend web technologies.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              My engineering background gives me a solid foundation in computational mathematics, logic, and systems thinking. I bridge this background with practical web engineering—transforming concepts into responsive, user-friendly digital solutions.
            </p>
            <p>
              I actively dedicate time to mastering <strong>Data Structures and Algorithms</strong> in Java, building full-stack applications with <strong>React.js, Node.js, and MongoDB</strong>, and exploring real-world signal and audio processing techniques.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="about-pillars-grid">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass-card about-pillar-card">
                  <div className="pillar-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Verified Education & Project Timeline */}
      <section className="timeline-section">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic &amp; Project Track</span>
          </div>
          <h2 className="section-title">Verified Journey &amp; Milestones</h2>
          <p className="section-subtitle">
            A chronological timeline of my academic background and core engineering projects.
          </p>
        </div>

        <div className="timeline-tree">
          {verifiedMilestones.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner" />
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-date">{item.period}</span>
                </div>

                <div className="timeline-subtitle">{item.institution}</div>
                <p className="timeline-desc">{item.description}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <span className="code-badge">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

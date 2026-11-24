import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Terminal, Code2, GraduationCap, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { personalData } from '../data/personal';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';
import SocialLinks from '../components/SocialLinks';
import '../styles/home.css';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.gsap-fade-in', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
      });

      gsap.from('.gsap-visual-reveal', {
        opacity: 0,
        scale: 0.92,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-page" ref={heroRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left Column: Introductions & CTAs */}
          <div className="hero-content">
            {/* Animated Label */}
            <div className="hero-badge gsap-fade-in">
              <span className="hero-badge-dot" />
              <span>SOFTWARE DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading gsap-fade-in">
              Hi, I'm <span className="hero-heading-name">Mayur Terekar</span>.
            </h1>

            {/* Supporting Headline */}
            <h2 className="hero-headline gsap-fade-in">
              Building Digital Experiences with Code.
            </h2>

            {/* Animated Rotating Role */}
            <div className="hero-role-wrapper gsap-fade-in">
              <span>I specialize as a</span>
              <AnimatedText phrases={personalData.titles} interval={2800} />
            </div>

            {/* Short Introduction */}
            <p className="hero-intro gsap-fade-in">
              Electronics &amp; Telecommunication Engineering student at <strong>Bharati Vidyapeeth College of Engineering, Navi Mumbai</strong>. I combine rigorous algorithmic problem-solving with modern web engineering to build clean, intuitive, and performant web applications.
            </p>

            {/* CTAs */}
            <div className="hero-ctas gsap-fade-in">
              <Button
                to="/project"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore My Work
              </Button>

              <Button
                href="/resume.pdf"
                download="Mayur_Terekar_Resume.pdf"
                variant="secondary"
                size="md"
                icon={Download}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="hero-socials gsap-fade-in">
              <span className="hero-socials-label">Connect with me</span>
              <SocialLinks iconSize={20} showLabels={false} />
            </div>
          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="hero-visual gsap-visual-reveal">
            <div className="hero-visual-card">
              {/* Floating Orbit Badges */}
              <div className="hero-floating-badge floating-top-right">
                <GraduationCap size={16} color="var(--color-green)" />
                <span>EXTC Engineering</span>
              </div>

              <div className="hero-floating-badge floating-bottom-left">
                <Code2 size={16} color="var(--color-mint)" />
                <span>React &amp; DSA</span>
              </div>

              {/* Profile Image Frame */}
              <div className="hero-img-container">
                <img
                  src="/images/profile-avatar.svg"
                  alt="Mayur Manohar Terekar"
                  className="hero-img"
                  loading="eager"
                />
              </div>

              {/* Card Meta */}
              <div className="hero-visual-info">
                <h3 className="hero-visual-name">{personalData.name}</h3>
                <span className="hero-visual-college">
                  {personalData.education.college}
                </span>

                <div className="hero-visual-badges">
                  <span className="code-badge">B.E. EXTC</span>
                  <span className="code-badge">Software Dev</span>
                  <span className="code-badge">Frontend</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link to="/about" className="hero-scroll-indicator" aria-label="Scroll to About Section">
          <div className="scroll-mouse-icon">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll Down</span>
        </Link>
      </section>

      {/* Quick Highlights Band */}
      <section className="section-container" style={{ paddingTop: '0' }}>
        <div className="hero-highlights-grid">
          {personalData.stats.map((stat, i) => (
            <div key={i} className="glass-card hero-stat-card">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Briefcase, Sparkles, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import '../styles/projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'AI & Signal Processing', value: 'AI & Signal Processing' },
    { label: 'Frontend & UI/UX', value: 'Frontend & UI/UX' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Briefcase size={14} />
          <span>Portfolio Showcase</span>
        </div>
        <h1 className="section-title">Featured Projects</h1>
        <p className="section-subtitle">
          Real-world applications and research projects demonstrating full-stack engineering, algorithmic logic, and modern interface design.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-nav">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            className={`projects-filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="glass-card modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div>
              <span className="code-badge" style={{ marginBottom: '0.75rem' }}>
                {selectedProject.category}
              </span>
              <h2 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '0.25rem' }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: 'var(--color-mint)', fontSize: '0.95rem' }}>
                {selectedProject.tagline}
              </p>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {selectedProject.description}
            </p>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                Engineering Highlights &amp; Scope:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Technology Stack:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="code-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem' }}>
              {selectedProject.liveUrl && (
                <Button
                  href={selectedProject.liveUrl}
                  variant="primary"
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Live Demo
                </Button>
              )}
              {selectedProject.githubUrl && (
                <Button
                  href={selectedProject.githubUrl}
                  variant="secondary"
                  icon={GithubIcon}
                  iconPosition="left"
                >
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

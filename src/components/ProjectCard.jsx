import React, { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function ProjectCard({ project, onOpenModal }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="glass-card glass-card-interactive project-card">
      {/* Visual Header / Image area */}
      <div className="project-image-wrapper">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-image-fallback">
            <Sparkles size={36} color="var(--color-teal)" />
            <span>{project.title}</span>
          </div>
        )}
        <div className="project-category-badge">{project.category}</div>
        <div className="project-status-badge">{project.status}</div>
      </div>

      {/* Body Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={14} className="highlight-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Tags */}
        <div className="project-tech-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="code-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Action Buttons */}
        <div className="project-actions">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
            >
              View Project
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              icon={Sparkles}
              onClick={() => onOpenModal && onOpenModal(project)}
            >
              Project Details
            </Button>
          )}

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              icon={GithubIcon}
              iconPosition="left"
            >
              GitHub Repo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

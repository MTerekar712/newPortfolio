import React, { useState } from 'react';
import { 
  Code, 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  Server, 
  Cpu, 
  Database, 
  Coffee, 
  Binary, 
  GitBranch, 
  Brain, 
  Laptop, 
  Network,
  Sparkles,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/skills';
import '../styles/skills.css';

const ICON_MAP = {
  Code2,
  Palette,
  FileCode,
  Atom,
  Server,
  Cpu,
  Database,
  Coffee,
  Binary,
  GitBranch,
  Brain,
  Laptop,
  Network
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { label: 'All Disciplines', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend & Server', value: 'backend' },
    { label: 'Databases', value: 'database' },
    { label: 'Programming & DSA', value: 'programming' },
    { label: 'Tools & Interests', value: 'tools' }
  ];

  const filteredCategories = activeFilter === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeFilter);

  // Status meter indicator widths based on status type (no arbitrary percentages)
  const getStatusWidth = (level) => {
    switch (level) {
      case 'Core Stack': return '95%';
      case 'Proficient': return '88%';
      case 'Core Language': return '90%';
      case 'Active Practice': return '85%';
      case 'Intermediate': return '75%';
      case 'Practicing': return '72%';
      case 'Learning & Exploration': return '60%';
      default: return '70%';
    }
  };

  return (
    <div className="skills-page section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Code size={14} />
          <span>Technical Repertoire</span>
        </div>
        <h1 className="section-title">Skills &amp; Technologies</h1>
        <p className="section-subtitle">
          Core technical foundations, frontend development expertise, and practical engineering tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-filter-nav">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`skills-filter-btn ${activeFilter === tab.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Categories & Skill Cards */}
      <div className="skills-categories-grid">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="skills-category-block">
            <div className="skills-cat-header">
              <h2 className="skills-cat-title">
                <span>//</span> {cat.category}
              </h2>
              <span className="skills-cat-desc">{cat.description}</span>
            </div>

            <div className="skills-card-grid">
              {cat.skills.map((skill) => {
                const IconComponent = ICON_MAP[skill.icon] || Code;
                return (
                  <div key={skill.name} className="glass-card glass-card-interactive skill-card">
                    <div className="skill-card-top">
                      <div className="skill-icon-wrapper">
                        <IconComponent size={24} />
                      </div>
                      <div className="skill-meta">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-tag">{skill.tag}</span>
                      </div>
                    </div>

                    <div className="skill-status-box">
                      <div className="skill-status-label">
                        <span className="skill-status-title">Status:</span>
                        <span className="skill-status-val">{skill.level}</span>
                      </div>
                      <div className="skill-pulse-bar" aria-label={`Status: ${skill.level}`}>
                        <div
                          className="skill-pulse-fill"
                          style={{ width: getStatusWidth(skill.level) }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

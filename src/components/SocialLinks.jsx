import React from 'react';
import { Mail, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalData } from '../data/personal';

export default function SocialLinks({ className = '', iconSize = 20, showLabels = false }) {
  const links = [
    {
      name: 'GitHub',
      url: personalData.links.github,
      icon: GithubIcon,
      color: 'var(--color-mint)',
    },
    {
      name: 'LinkedIn',
      url: personalData.links.linkedin,
      icon: LinkedinIcon,
      color: '#0A9396',
    },
    {
      name: 'Email',
      url: `mailto:${personalData.links.email}`,
      icon: Mail,
      color: 'var(--color-green)',
    },
    {
      name: 'LeetCode',
      url: personalData.links.leetcode,
      icon: LeetCodeIcon,
      color: 'var(--color-warm)',
    },
  ];

  return (
    <div className={`social-links-wrapper ${className}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.name === 'Email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="social-btn glass-card"
            title={link.name}
            aria-label={`${link.name} - Mayur Terekar`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: showLabels ? '0.5rem' : '0',
              padding: showLabels ? '0.6rem 1rem' : '0.65rem',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
              border: '1px solid var(--border-glass)',
            }}
          >
            <IconComponent size={iconSize} />
            {showLabels && <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{link.name}</span>}
          </a>
        );
      })}

      <style>{`
        .social-btn:hover {
          color: var(--color-mint) !important;
          border-color: rgba(148, 210, 189, 0.45) !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(10, 147, 150, 0.25);
          background: rgba(0, 53, 102, 0.6) !important;
        }
      `}</style>
    </div>
  );
}

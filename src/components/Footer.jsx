import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, ChevronRight } from 'lucide-react';
import { personalData } from '../data/personal';
import SocialLinks from './SocialLinks';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Technical Skills', path: '/skills' },
    { name: 'Projects Showcase', path: '/project' },
    { name: 'Contact & Hire', path: '/contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand info */}
          <div className="footer-brand">
            <h3 className="footer-brand-title">
              {personalData.name} <span>.</span>
            </h3>
            <p className="footer-brand-desc">
              {personalData.role} based in Navi Mumbai. Engineering student at Bharati Vidyapeeth College of Engineering, passionate about full-stack web engineering, data structures, and algorithmic solutions.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <SocialLinks iconSize={18} />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-nav-link">
                    <ChevronRight size={14} color="var(--color-green)" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snapshot */}
          <div className="footer-socials">
            <h4 className="footer-col-title">Connect</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Open for software developer internships and collaborative opportunities.
            </p>
            <a
              href={`mailto:${personalData.links.email}`}
              className="code-badge"
              style={{ width: 'fit-content', padding: '0.4rem 0.8rem', color: 'var(--color-mint)' }}
            >
              {personalData.links.email}
            </a>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
              📍 Bharati Vidyapeeth COE, Navi Mumbai
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} {personalData.name}. All rights reserved. Built with React &amp; CSS.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

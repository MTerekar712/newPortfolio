import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Mail, Download } from 'lucide-react';
import { personalData } from '../data/personal';
import Button from './Button';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Code },
    { name: 'Projects', path: '/project', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isProjectsActive = location.pathname === '/project' || location.pathname === '/projects';

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand / Logo */}
        <Link to="/" className="nav-brand" aria-label="Mayur Terekar Portfolio Home">
          <div className="nav-logo-icon">M</div>
          <span className="nav-brand-text">
            Mayur Terekar<span className="nav-brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.path === '/project'
                ? isProjectsActive
                : location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Actions (Resume & Mobile Toggle) */}
        <div className="nav-actions">
          <div className="nav-desktop-cta">
            <Button
              href="/resume.pdf"
              download="Mayur_Terekar_Resume.pdf"
              variant="secondary"
              size="sm"
              icon={Download}
            >
              Resume
            </Button>
          </div>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.path === '/project'
                ? isProjectsActive
                : location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mobile-nav-footer">
          <Button
            href="/resume.pdf"
            download="Mayur_Terekar_Resume.pdf"
            variant="primary"
            icon={Download}
            style={{ width: '100%' }}
          >
            Download Resume (PDF)
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            icon={Mail}
            style={{ width: '100%' }}
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
}

import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundMesh from './components/BackgroundMesh';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Button from './components/Button';
import './styles/global.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

// 404 Not Found Page Component
function NotFound() {
  return (
    <div className="section-container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-card" style={{ padding: '3rem 2rem', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <span className="code-badge" style={{ fontSize: '1rem', padding: '0.4rem 1rem' }}>404 ERROR</span>
        <h1 style={{ fontSize: '2rem', color: '#FFFFFF' }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          The requested page could not be located. You can navigate back to the home page or browse the project portfolio.
        </p>
        <Button to="/" variant="primary">
          Return to Home
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <BackgroundMesh />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      <main className="main-content" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

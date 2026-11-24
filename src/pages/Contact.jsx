import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personal';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'env-missing'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject line (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS environment variables are configured
    if (!serviceId || !templateId || !publicKey) {
      setStatus('env-missing');
      setStatusMessage(
        'EmailJS environment variables are not configured in this environment yet. You can use the button below to send your message directly via your email client, or configure VITE_EMAILJS_* keys in .env.'
      );
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalData.name
        },
        publicKey
      );

      setStatus('success');
      setStatusMessage('Thank you! Your message was sent successfully. I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0A9396', '#52B788', '#94D2BD', '#DAC09B']
        });
      } catch (e) {
        // Safe fallback
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setStatusMessage(
        'Unable to send message via the automated service. Please contact me directly using the email client link below.'
      );
    }
  };

  const mailtoUrl = `mailto:${personalData.links.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Collaboration Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Mayur,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="contact-page section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <MessageSquare size={14} />
          <span>Get In Touch</span>
        </div>
        <h1 className="section-title">Let's Connect &amp; Collaborate</h1>
        <p className="section-subtitle">
          Interested in discussing an internship, engineering project, or software development opportunity? Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct channels */}
        <div className="contact-info-panel">
          <div className="glass-card contact-card-box">
            <h2 className="contact-box-title">Contact Channels</h2>
            <p className="contact-box-desc">
              I am open to software development internship roles, technical collaborations, and frontend challenges.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Direct Email</span>
                  <a
                    href={`mailto:${personalData.links.email}`}
                    className="contact-channel-val"
                  >
                    {personalData.links.email}
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">LinkedIn</span>
                  <a
                    href={personalData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-val"
                  >
                    in/mayurterekar2306
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <GithubIcon size={20} />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">GitHub</span>
                  <a
                    href={personalData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-val"
                  >
                    github.com/MTerekar712
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-val">
                    Navi Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <span className="code-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                Quick Social Access
              </span>
              <SocialLinks showLabels={true} />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="glass-card contact-form-panel">
          <h2 className="contact-form-title">Send a Message</h2>

          {/* Feedback states */}
          {status === 'success' && (
            <div className="form-banner form-banner-success">
              <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
              <div>
                <strong>Sent!</strong> {statusMessage}
              </div>
            </div>
          )}

          {status === 'env-missing' && (
            <div className="form-banner form-banner-info">
              <AlertCircle size={20} style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Direct Email Prefilled</strong>
                <p style={{ marginBottom: '0.75rem' }}>{statusMessage}</p>
                <Button
                  href={mailtoUrl}
                  variant="primary"
                  size="sm"
                  icon={Mail}
                >
                  Open in Default Mail Client
                </Button>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="form-banner form-banner-error">
              <AlertCircle size={20} style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Submission Alert</strong>
                <p style={{ marginBottom: '0.75rem' }}>{statusMessage}</p>
                <Button
                  href={mailtoUrl}
                  variant="secondary"
                  size="sm"
                  icon={Mail}
                >
                  Send via Email Client
                </Button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span>Your Name *</span>
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`form-input ${errors.name ? 'error' : ''}`}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span>Your Email Address *</span>
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className={`form-input ${errors.email ? 'error' : ''}`}
                required
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <span>Subject *</span>
                {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Software Developer Opportunity"
                className={`form-input ${errors.subject ? 'error' : ''}`}
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <span>Your Message *</span>
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                required
              />
            </div>

            {/* Submit & Mailto alternative */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                icon={status === 'loading' ? Loader2 : Send}
                iconPosition="right"
              >
                {status === 'loading' ? 'Sending Message...' : 'Send Message'}
              </Button>

              <Button
                href={mailtoUrl}
                variant="secondary"
                icon={Mail}
              >
                Open in Email Client
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

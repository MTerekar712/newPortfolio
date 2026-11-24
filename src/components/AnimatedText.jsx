import React, { useState, useEffect } from 'react';

export default function AnimatedText({ phrases, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText.length + 1 === currentPhrase.length) {
          // Pause at end of phrase
          setTypingSpeed(interval);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, phrases, typingSpeed, interval]);

  return (
    <span className="animated-text-container" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span className="animated-text" style={{ 
        color: 'var(--color-mint)',
        fontWeight: '700',
        minHeight: '1.2em'
      }}>
        {displayText}
      </span>
      <span 
        className="cursor-blink" 
        style={{ 
          display: 'inline-block',
          width: '2.5px',
          height: '1.1em',
          backgroundColor: 'var(--color-green)',
          marginLeft: '4px',
          verticalAlign: 'middle',
          animation: 'blinkCursor 0.9s infinite'
        }}
        aria-hidden="true"
      />
      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

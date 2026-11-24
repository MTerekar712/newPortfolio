import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to = null,
  href = null,
  onClick,
  icon: Icon = null,
  iconPosition = 'left',
  download = false,
  className = '',
  target,
  rel,
  ...props
}) {
  const baseClasses = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        download={download}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  isDark?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  to,
  href,
  isDark = false,
  className = '',
  target,
  rel
}) => {
  const linkClass = isDark ? `dark-link ${className}`.trim() : `text-link ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={linkClass}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={linkClass} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        <span>{children}</span>
      </a>
    );
  }

  return <span className={linkClass}>{children}</span>;
};

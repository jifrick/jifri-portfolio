import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/navigation';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      <div className="mobile-menu-header">
        <Link to="/" className="logo" onClick={onClose}>
          JIFRI<span className="dot"></span>
        </Link>
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          CLOSE ✕
        </button>
      </div>

      <nav className="mobile-menu-nav">
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <div className="mobile-social-label">CONNECT</div>
          <div className="mobile-social-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

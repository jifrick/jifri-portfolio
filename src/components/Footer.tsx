import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/navigation';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" className="footer-brand">
              JIFRI<span className="dot"></span>
            </Link>
            <div className="footer-sub">Full-Stack Developer · Digital Product Builder</div>
          </div>

          <div className="footer-links">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="copyright">
          <span>© 2026 Jifri</span>
          <span>Built with intention.</span>
        </div>
      </div>
    </footer>
  );
};

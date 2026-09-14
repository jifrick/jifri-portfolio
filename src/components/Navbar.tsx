import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll';
import { NAV_ITEMS } from '../data/navigation';
import { MobileMenu } from './MobileMenu';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const isScrolled = useScroll(12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="logo" aria-label="Jifri Home">
            JIFRI<span className="dot"></span>
          </Link>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            MENU
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

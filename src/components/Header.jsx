import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHowItWorks = location.pathname === '/how-it-works';

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
          <img src="/oink_pig_logo_correct_pink.jpeg" alt="Oink logo" className="logo-img" />
          <span className="logo-text">Oink</span>
        </div>
        <nav className="nav-links">
          {!isHome && <Link to="/" className="nav-link">Home</Link>}
          {!isHowItWorks && <Link to="/how-it-works" className="nav-link">How It Works</Link>}
        </nav>
      </div>
    </header>
  );
}

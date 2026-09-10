import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { brand, navigation, headerCta } = SITE_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`} role="banner">
      <div className="header-inner">
        {/* Brand Identity */}
        <a href="#hero" className="brand-identity" onClick={closeMobileMenu} aria-label={`${brand.name} Home`}>
          <span className="brand-emblem" aria-hidden="true"></span>
          <span className="brand-title">{brand.name}</span>
          <span className="brand-tag">{brand.subtitle}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Header CTA */}
        <div className="header-actions desktop-nav">
          <a href={headerCta.href} className="header-contact-link">
            <span>{headerCta.label}</span>
            <span className="link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
        >
          <span className="hamburger-line line-1" aria-hidden="true"></span>
          <span className="hamburger-line line-2" aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Drawer / Overlay Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navigation.map((item) => (
                <li key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <a
              href={headerCta.href}
              className="btn-primary mobile-cta-btn"
              onClick={closeMobileMenu}
            >
              <span>{headerCta.label}</span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

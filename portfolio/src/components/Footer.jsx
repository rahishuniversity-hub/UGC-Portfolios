import React from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function Footer() {
  const { footer } = SITE_CONFIG;
  const { brandMark, brandSubtitle, links, copyright } = footer;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-identity">
            <span className="brand-emblem" aria-hidden="true"></span>
            <span className="brand-title">{brandMark}</span>
            <span className="brand-tag">{brandSubtitle}</span>
          </div>
          <p className="footer-tagline">AI-powered UGC ad creatives for D2C skincare brands.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-list">
            {links.map((link) => (
              <li key={link.label} className="footer-nav-item">
                <a href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-bottom">
          <p className="copyright-text">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

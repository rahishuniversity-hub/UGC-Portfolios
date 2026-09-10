import React from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function Hero() {
  const { hero } = SITE_CONFIG;
  const {
    smallLabel,
    headlineLine1,
    headlineLine2,
    subheadline,
    primaryButton,
    secondaryButton,
    creatorVisual,
    metaItems,
  } = hero;

  return (
    <section className="hero-section" id="hero" role="region" aria-label="Hero Introduction">
      <div className="hero-grid">
        {/* Left Column: Agency Headline & Actions */}
        <div className="hero-content">
          {/* Small Studio Label */}
          <div className="hero-label-badge anim-stagger-1">
            <span className="hero-label-dot" aria-hidden="true"></span>
            <span>{smallLabel}</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="hero-headline anim-stagger-2">
            <span className="headline-line-1">{headlineLine1}</span>
            <span className="headline-line-2">{headlineLine2}</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline anim-stagger-3">
            {subheadline}
          </p>

          {/* Call To Action Buttons */}
          <div className="hero-actions anim-stagger-4">
            <a
              href={primaryButton.href}
              className="btn-primary"
              id="btn-see-work"
              aria-label="See Our Work"
            >
              <span>{primaryButton.label}</span>
              <svg
                className="btn-arrow"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href={secondaryButton.href}
              className="btn-secondary"
              id="btn-start-project"
              aria-label="Start a Project"
            >
              <span>{secondaryButton.label}</span>
            </a>
          </div>

          {/* Subtle Agency Discipline / Scope Note */}
          <div className="hero-footer-meta anim-stagger-5">
            {metaItems.map((item, idx) => (
              <div key={idx} className="meta-item">
                <span className="meta-dot" aria-hidden="true"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skincare Creator Visual */}
        <div className="hero-visual-column anim-stagger-visual">
          <div className="creator-card-container">
            {/* Subtle Ambient Backing Glow */}
            <div className="creator-card-glow" aria-hidden="true"></div>

            {/* Creator Frame */}
            <div className="creator-card">
              <div className="creator-image-wrapper">
                {/* Subtle Minimal Micro-Indicators (Overlay Top) */}
                <div className="ugc-overlay-top">
                  <div className="rec-pill">
                    <span className="rec-dot" aria-hidden="true"></span>
                    <span>REC</span>
                  </div>
                  <div className="aspect-badge">
                    <span>9:16 UGC</span>
                  </div>
                </div>

                {/* Photorealistic Skincare Creator Image */}
                <img
                  src={creatorVisual.imageSrc}
                  alt={creatorVisual.alt}
                  className="creator-image"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Creator Audio / Variant Bar (Overlay Bottom) */}
                <div className="ugc-overlay-bottom">
                  <div className="creator-meta-tag">
                    <span className="creative-title">{creatorVisual.title}</span>
                    <span className="creative-format">{creatorVisual.formatTag}</span>
                  </div>

                  <div className="soundwave-track" aria-hidden="true">
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="track-label">Natural Audio • Native Hook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

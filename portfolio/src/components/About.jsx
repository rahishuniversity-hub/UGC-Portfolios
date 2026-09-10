import React from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function About() {
  const { about } = SITE_CONFIG;
  const {
    label,
    headlineLine1,
    headlineLine2,
    description1,
    description2,
    creatorVisual,
    principles,
  } = about;

  return (
    <section className="section-container" id="about" role="region" aria-label="About AURA">
      <div className="about-grid">
        {/* Left Column: Creator Visual / Aesthetic Presentation */}
        <div className="about-visual-column">
          <div className="about-card-wrapper">
            <div className="about-image-card">
              {creatorVisual?.imageSrc && (
                <div className="about-image-container">
                  <img
                    src={creatorVisual.imageSrc}
                    alt={creatorVisual.alt || "AURA UGC Creator"}
                    className="about-image"
                    loading="lazy"
                  />
                  <div className="about-image-caption">
                    <span className="caption-dot" aria-hidden="true"></span>
                    <span>{creatorVisual.caption || "Creator-Led Production"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Principles */}
        <div className="about-content-column">
          <div className="section-label-badge">
            <span className="section-label-dot" aria-hidden="true"></span>
            <span>{label}</span>
          </div>

          <h2 className="about-headline">
            <span className="headline-block">{headlineLine1}</span>
            <span className="headline-block sage-text">{headlineLine2}</span>
          </h2>

          <div className="about-body-text">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>

          {principles && principles.length > 0 && (
            <div className="about-principles-grid">
              {principles.map((item, idx) => (
                <div key={idx} className="principle-item">
                  <div className="principle-header">
                    <span className="principle-dot" aria-hidden="true"></span>
                    <h4 className="principle-title">{item.title}</h4>
                  </div>
                  <p className="principle-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

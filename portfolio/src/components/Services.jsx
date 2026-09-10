import React from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function Services() {
  const { services } = SITE_CONFIG;
  const { heading, subheadline, items } = services;

  return (
    <section className="section-container" id="services" role="region" aria-label="Services Offered">
      <div className="section-header">
        <div className="section-label-badge">
          <span className="section-label-dot" aria-hidden="true"></span>
          <span>CAPABILITIES</span>
        </div>
        <h2 className="section-title">{heading}</h2>
        <p className="section-subtitle">{subheadline}</p>
      </div>

      <div className="services-grid">
        {items.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-top">
              <span className="service-number">{service.number}</span>
              <div className="service-dot-indicator" aria-hidden="true"></div>
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            {service.features && service.features.length > 0 && (
              <ul className="service-features-list">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="service-feature-item">
                    <span className="feature-bullet" aria-hidden="true"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteContent';

export function Contact() {
  const { contact } = SITE_CONFIG;
  const {
    heading,
    headingLine2,
    subheadline,
    buttonLabel,
    email,
    projectTypes,
  } = contact;

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    projectType: projectTypes?.[0] || 'UGC Ad Creatives',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format mailto link if email exists
    const subject = encodeURIComponent(`Project Inquiry: ${formData.brand || formData.name || 'UGC Collaboration'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nBrand: ${formData.brand}\nEmail: ${formData.email}\nService: ${formData.projectType}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="section-container contact-section" id="contact" role="region" aria-label="Contact Studio">
      <div className="contact-card">
        <div className="contact-inner-glow" aria-hidden="true"></div>

        <div className="contact-header">
          <div className="section-label-badge">
            <span className="section-label-dot" aria-hidden="true"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact-headline">
            <span className="headline-block">{heading}</span>
            {headingLine2 && <span className="headline-block sage-text">{headingLine2}</span>}
          </h2>

          <p className="contact-subheadline">{subheadline}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                id="contact-name"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Sarah Lin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-brand" className="form-label">Brand / Product</label>
              <input
                id="contact-brand"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Botanica Skincare"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                id="contact-email"
                type="email"
                required
                className="form-input"
                placeholder="sarah@botanicaskincare.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-type" className="form-label">Creative Format</label>
              <select
                id="contact-type"
                className="form-select"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                {projectTypes?.map((type, idx) => (
                  <option key={idx} value={type} className="form-option">{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="contact-message" className="form-label">What are you launching?</label>
              <textarea
                id="contact-message"
                rows="4"
                className="form-textarea"
                placeholder="Tell us about your product, campaign goals, target audience, or timing..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary form-submit-btn" id="btn-submit-contact">
              <span>{buttonLabel}</span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </button>
            {submitted && (
              <p className="form-status-msg">Opening your email client...</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

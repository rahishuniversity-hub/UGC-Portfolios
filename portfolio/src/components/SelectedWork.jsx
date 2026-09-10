import React from 'react';
import { SITE_CONFIG } from '../config/siteContent';
import { VideoCard } from './VideoCard';

export function SelectedWork() {
  const { selectedWork } = SITE_CONFIG;
  const { heading, subheadline, items } = selectedWork;

  return (
    <section className="section-container" id="work" role="region" aria-label="Selected Work">
      <div className="section-header">
        <div className="section-label-badge">
          <span className="section-label-dot" aria-hidden="true"></span>
          <span>PORTFOLIO</span>
        </div>
        <h2 className="section-title">{heading}</h2>
        <p className="section-subtitle">{subheadline}</p>
      </div>

      <div className="portfolio-video-grid">
        {items.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

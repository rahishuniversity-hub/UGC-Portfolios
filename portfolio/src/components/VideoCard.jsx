import React, { useState, useRef } from 'react';

export function VideoCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const {
    brand,
    creativeType,
    hook,
    videoSrc,
    poster,
    duration,
    aspect = "9:16",
    result,
  } = item;

  const handleTogglePlay = () => {
    if (videoSrc && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      // Toggle interactive simulation state if no raw video file is attached yet
      setIsPlaying(prev => !prev);
    }
  };

  return (
    <div className={`video-portfolio-card ${isPlaying ? 'is-playing' : ''}`}>
      <div className="video-card-media-wrapper" onClick={handleTogglePlay} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleTogglePlay(); } }} aria-label={`${isPlaying ? 'Pause' : 'Play'} ${brand} creative preview`}>
        {/* Video or Poster Visual */}
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster || undefined}
            className="video-element"
            playsInline
            loop
            muted
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className="video-poster-placeholder">
            {poster ? (
              <img src={poster} alt={brand} className="video-poster-img" loading="lazy" />
            ) : (
              <div className="video-ambient-poster" aria-hidden="true">
                <div className="poster-glow-circle"></div>
                <div className="poster-format-watermark">{aspect}</div>
              </div>
            )}
          </div>
        )}

        {/* Top Badges: Creative Type & Optional Result */}
        <div className="video-card-top-bar">
          <span className="creative-type-badge">{creativeType}</span>
          {result && (
            <span className="result-badge">{result}</span>
          )}
        </div>

        {/* Center Play / Pause Action Button */}
        <div className="video-play-overlay">
          <button
            type="button"
            className="play-control-button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            tabIndex={-1}
          >
            {isPlaying ? (
              <svg className="play-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
            ) : (
              <svg className="play-icon play-triangle" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l11-6.86a1 1 0 0 0 0-1.68l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Metadata Overlay */}
        <div className="video-card-meta">
          <div className="meta-main">
            <h3 className="video-brand-title">{brand}</h3>
            {hook && <p className="video-hook-text">{hook}</p>}
          </div>

          <div className="meta-sub">
            <span className="aspect-pill">{aspect}</span>
            {duration && <span className="duration-pill">{duration}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

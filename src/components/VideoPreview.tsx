import React from 'react';
import './VideoPreview.css';

interface VideoPreviewProps {
  label: string;
  category?: string;
  videoSrc?: string;
  posterSrc?: string;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({
  label,
  category = 'JIFRIFLIX',
  videoSrc,
  posterSrc
}) => {
  return (
    <a
      href="https://www.instagram.com/jifriflix/"
      target="_blank"
      rel="noopener noreferrer"
      className="video-card reel-preview"
      aria-label={`View JIFRIFLIX Reel - ${label} on Instagram`}
    >
      {posterSrc || videoSrc ? (
        videoSrc ? (
          <video
            src={videoSrc}
            poster={posterSrc}
            playsInline
            muted
            loop
            className="video-element"
          />
        ) : (
          <img src={posterSrc} alt={label} className="video-element" />
        )
      ) : (
        <div className="video-placeholder">
          <div className="video-badge">{category}</div>
          <div className="video-play-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <div className="video-label">{label}</div>
        </div>
      )}
    </a>
  );
};

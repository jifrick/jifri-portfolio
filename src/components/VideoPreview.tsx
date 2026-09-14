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
    <div className="video-card">
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={posterSrc}
          controls
          className="video-element"
          aria-label={label}
        />
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
    </div>
  );
};

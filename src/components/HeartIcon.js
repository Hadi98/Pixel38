import React from 'react';

const HeartIcon = ({ isActive }) => {
  return (
    <div className="heart relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`heart-icon ${isActive ? 'fill-red' : ''}`}
        viewBox="0 0 51.997 51.997"
      >
        <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
    c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
    c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
    C52.216,18.553,51.97,16.611,51.911,16.242z"/>
      </svg>
      <div className="center animation-container absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <clipPath id="clip-path">
            <path className={`ring ${isActive ? 'scale-up' : ''}`} d="M 50 36 A 14 14 0 1 0 50 64 A 14 14 0 1 0 50 36 Z M 50 43 A 7 7 0 1 1 50 57 A 7 7 0 1 1 50 43 Z"/>
          </clipPath>
          <g className="lines" clip-path="url(#clip-path)">
            <line x1="50" y1="0" x2="50" y2="35"/>
            <line x1="93.301" y1="25" x2="62.99" y2="42.5"/>
            <line x1="93.301" y1="75" x2="62.99" y2="57.5"/>
            <line x1="50" y1="100" x2="50" y2="65"/>
            <line x1="6.699" y1="75" x2="37.01" y2="57.5"/>
            <line x1="6.699" y1="25" x2="37.01" y2="42.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default HeartIcon;

import React from 'react';

interface OxfordCrestLogoProps {
  className?: string;
}

export const OxfordCrestLogo: React.FC<OxfordCrestLogoProps> = ({
  className = "w-14 h-14 md:w-16 md:h-16"
}) => (
  <svg
    viewBox="0 0 256 256"
    className={`${className} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="The Oxford School Crest Logo"
  >
    {/* Outer Shield Boundary */}
    <path
      d="M128 20 C176 20 216 38 216 68 C216 156 172 216 128 240 C84 216 40 156 40 68 C40 38 80 20 128 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />
    {/* Inner Shield Fill */}
    <path
      d="M128 32 C168 32 202 46 202 72 C202 148 165 204 128 226 C91 204 54 148 54 72 C54 46 88 32 128 32 Z"
      fill="currentColor"
      fillOpacity="0.08"
    />
    {/* Academic Star of Excellence */}
    <path
      d="M128 50 L132.5 64 L147 64 L135 73 L139.5 87 L128 78 L116.5 87 L121 73 L109 64 L123.5 64 Z"
      fill="currentColor"
    />
    {/* Open Book */}
    <g transform="translate(0, 15)">
      {/* Left Page */}
      <path
        d="M123 118 C104 108 82 108 64 113 C61.8 113.6 60 115.5 60 118 L60 162 C60 165 63 167.5 66 166.8 C82 163 103 163.5 120 172.5 C121.8 173.5 123 172.2 123 170.2 Z"
        fill="currentColor"
      />
      {/* Right Page */}
      <path
        d="M133 118 C152 108 174 108 192 113 C194.2 113.6 196 115.5 196 118 L196 162 C196 165 193 167.5 190 166.8 C174 163 153 163.5 136 172.5 C134.2 173.5 133 172.2 133 170.2 Z"
        fill="currentColor"
      />
      {/* Center Spine */}
      <rect x="126" y="116" width="4" height="57" rx="2" fill="currentColor" />
    </g>
  </svg>
);

export default OxfordCrestLogo;

import React from 'react';

interface OxfordCrestLogoProps {
  className?: string;
}

export const OxfordCrestLogo: React.FC<OxfordCrestLogoProps> = ({
  className = "w-14 h-14 md:w-16 md:h-16"
}) => (
  <img
    src="/ox-logo.webp"
    alt="The Oxford School Crest Logo"
    className={`${className} object-contain`}
  />
);

export default OxfordCrestLogo;

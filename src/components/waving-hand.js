import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WavingHand = ({ className, onClick }) => {
  const [isWaving, setWave] = useState(true);
  return (
    <button
      className={`cursor-pointer ${className || ''} ${
        isWaving ? 'animate-wave' : ''
      }`}
      onAnimationEnd={() => setWave(false)}
      onClick={() => {
        setWave(true);
        onClick && onClick();
      }}
      style={{
        transformOrigin: '70% 70%',
      }}
    >
      <StaticImage
        src="../../images/emoji-waving-hand.png"
        alt="Waving hand emoji"
        width={80}
        style={{
          borderRadius: '30%',
        }}
      />
    </button>
  );
};

export default WavingHand;

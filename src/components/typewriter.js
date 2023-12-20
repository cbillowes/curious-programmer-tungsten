import React from 'react';
import TypewriterEffect from 'typewriter-effect';

const Typewriter = ({ phrases }) => {
  return (
    <TypewriterEffect
      options={{
        strings: phrases,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewriter;

import React from 'react';
import emoji from 'react-easy-emoji';

const Emoji = ({ label, className, children }) => {
  return (
    <span role="img" aria-label={label} className={className}>
      {emoji(children)}
    </span>
  );
};

export default Emoji;

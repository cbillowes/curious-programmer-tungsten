import React from 'react';

const phrases = [
  'Optimizing your experience',
  'Loading the good stuff',
  'Just a moment',
  'Unleashing magic',
  'Chasing dragons',
  'Conjuring unicorns',
  'Brewing a potion',
  'Summoning binary',
  'Casting spells',
  'Baking cookies',
  'Building a bridge',
  'Painting a masterpiece',
  'Crafting a masterpiece',
];

const Spinner = () => {
  return (
    <div className="loader-wrapper fixed top-0 bottom-0 left-0 right-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-700 via-pink-800 to-gray-900 z-[9999] text-white text-2xl tracking-tighter">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <img
          className="w-64 animate-bouncy mx-auto inline-block"
          src={require('@images/unicorn-laptop.webp').default}
        />
        <br />
        {phrases[Math.floor(Math.random() * phrases.length)]}
      </div>
    </div>
  );
};

export default Spinner;

import React from 'react';

const Backdrop = () => {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end blur opacity-60">
        <picture>
          <source
            srcSet={require('@images/backdrop_1.webp').default}
            type="image/webp"
          />
          <img
            src={require('@images/backdrop_1.png').default}
            alt="Gradient background"
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <source
            srcSet={require('@images/backdrop_2.webp').default}
            type="image/webp"
          />
          <img
            src={require('@images/backdrop_2.png').default}
            alt="Gradient background"
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
};

export default Backdrop;

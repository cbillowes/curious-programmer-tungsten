import React from 'react';

const Backdrop = () => {
  return (
    <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="w-[108rem] flex-none flex justify-end blur opacity-60">
        <picture>
          <source
            srcset={require('@images/backdrop_1.webp').default}
            type="image/webp"
          />
          <img
            src={require('@images/backdrop_1.png').default}
            alt=""
            class="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <source
            srcset={require('@images/backdrop_2.webp').default}
            type="image/webp"
          />
          <img
            src={require('@images/backdrop_2.png').default}
            alt=""
            class="w-[90rem] flex-none max-w-none hidden dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
};

export default Backdrop;

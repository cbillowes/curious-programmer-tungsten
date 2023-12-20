import React from 'react';
import classNames from 'classnames';
import Typewriter from '@components/typewriter';

const Kebab = ({ prefix, onClick, className, children, phrases, expanded }) => {
  return (
    <div
      className={classNames(
        'max-w-2xl justify-center mx-auto mt-2 flex flex-wrap relative w-full py-2 rounded-md shadow-md',
        expanded ? " bg-primary-600 text-white hover:bg-blue-600" : "dark:bg-gray-800 bg-gray-100 hover:bg-primary-600 hover:dark:bg-primary-600 hover:text-white",
        className,
      )}
      onClick={onClick}
    >
      {prefix}&nbsp;
      {phrases && phrases.length > 0 && <Typewriter phrases={phrases} />}
      {children}
    </div>
  );
};

export default Kebab;

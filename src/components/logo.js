import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ to, alt, logo, children }) => {
  return (
    <Link to={to} className="flex ml-2 md:mr-4">
      <span className="self-center text-lg sm:text-xl whitespace-nowrap dark:text-white font-light">
        {`{ `} curious <strong className="font-bold">programmer</strong> {` }`}
      </span>
    </Link>
  );
};

export default Logo;

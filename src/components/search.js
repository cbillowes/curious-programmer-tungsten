import React from 'react';
import classnames from 'classnames';
import { navigate } from 'gatsby';

const Icon = ({ className }) => {
  return (
    <svg
      className={classnames('text-gray-500 dark:text-gray-400', className)}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const Search = () => {
  return (
    <div
      role="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5"
      onClick={() => navigate('/search')}
    >
      <Icon className="block w-6 h-6" />
    </div>
  );
};

export default Search;

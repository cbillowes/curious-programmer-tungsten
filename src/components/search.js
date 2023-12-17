import React, { useRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import classnames from 'classnames';

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
  const [expand, toggleExpand] = useState(false);

  const inputRef = useRef(null);

  const ref = useClickAway((e) => {
    if (inputRef.current.value === '') {
      toggleExpand(false);
    }
  });

  return (
    <>
      {!expand && (
        <div
          role="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5"
          onClick={() => toggleExpand(true)}
        >
          <Icon className="block w-6 h-6" />
        </div>
      )}
      {expand && (
        <form ref={ref} action="#" method="GET" className="lg:pl-3.5">
          <label for="search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 lg:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon className="w-6 h-6" />
            </div>
            <input
              ref={inputRef}
              type="text"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-1.75 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default Search;

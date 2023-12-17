import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div
      role="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5"
      onClick={toggleTheme}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' && <FaSun />}
      {theme === 'light' && <FaMoon />}
    </div>
  );
};

export default ThemeSwitcher;

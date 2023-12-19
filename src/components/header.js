import React from 'react';
import Search from '@components/search';
import Logo from '@components/logo';
import ThemeSwitcher from '@components/theme-switcher';

const ToggleSidebar = ({ isOpen, toggle }) => {
  return (
    <button
      aria-expanded="true"
      aria-controls="sidebar"
      className="p-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={toggle}
    >
      {!isOpen && (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
      {isOpen && (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

const Header = ({
  logo = {},
  isSidebarOpen,
  theme,
  toggleSidebar,
  toggleTheme,
}) => {
  return (
    <nav className="fixed z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <ToggleSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
              <Logo to="/" logo={logo.image} alt={logo.alt} />
            </div>
            <div className="flex items-center">
              <Search />
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

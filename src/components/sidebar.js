import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaCode } from 'react-icons/fa';
import classNames from 'classnames';

const MenuItemLink = ({ active, to, icon, name }) => {
  return (
    <Link
      href={to}
      className={classNames(
        'text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 px-4 space-2 flex items-center py-2',
        active === to && 'bg-primary-600 text-primary-200',
      )}
    >
      {icon}
      <span className="ml-3" sidebar-toggle-item>
        {name}
      </span>
    </Link>
  );
};

const MenuItemDropdown = ({ icon, name, items, active, groupActive }) => {
  const [expand, setExpand] = useState(name === groupActive);
  const id = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
      <button
        type="button"
        class={classNames(
          'px-4 flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-gray-200',
          expand
            ? 'bg-gray-100 dark:bg-gray-700'
            : 'hover:bg-gray-100 dark:hover:bg-gray-700',
        )}
        aria-controls={id}
        data-collapse-toggle={id}
        onClick={() => setExpand(!expand)}
      >
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
        <svg
          class={classNames('w-6 h-6', expand ? 'transform rotate-180' : '')}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul
        id={id}
        class={classNames('py-2 space-y-2', expand ? 'block' : 'hidden')}
      >
        {items.map((item) => (
          <div className={classNames('px-4')}>
            <MenuItemLink active={active} {...item} />
          </div>
        ))}
      </ul>
    </>
  );
};

const Sidebar = ({ groupActive, active, isOpen, menuItems = [] }) => {
  return (
    isOpen && (
      <div
        className="h-screen w-72 pt-18 fixed top-0 left-0 bottom-0 z-20 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-24 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-screen">
          <div className="flex flex-col flex-1 pb-28 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem] scrollbar-thumb-slate-200 scrollbar-track-gray-400 dark:scrollbar-thumb-slate-900 dark:scrollbar-track-gray-800">
            <div className="flex-1 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="px-2 pb-2 space-y-2">
                {menuItems.map(({ items = [], ...rest }) => {
                  return (
                    <li>
                      {items.length === 0 && (
                        <MenuItemLink active={active} {...rest} />
                      )}
                      {items.length > 0 && (
                        <MenuItemDropdown
                          groupActive={groupActive}
                          active={active}
                          items={items}
                          {...rest}
                        />
                      )}
                    </li>
                  );
                })}
                <li className="absolute left-0 bottom-0 right-0 px-4 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <MenuItemLink
                    to="https://github.com/cbillowes/curious-programmer-tungsten"
                    name="Source Code"
                    icon={<FaCode />}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;

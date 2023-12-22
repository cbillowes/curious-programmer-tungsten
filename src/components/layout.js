import React, { useState } from 'react';
import { Flowbite } from 'flowbite-react';
import withTheme from '@hooks/theme';
import flowbiteTheme from '@components/flowbite-theme';
import Head from '@components/head';
import Header from '@components/header';
import Footer from '@components/footer';
import Sidebar from '@components/sidebar';
import classNames from 'classnames';

const Layout = ({ className, children, setTheme, theme, meta }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  console.log(
    '👋 Welcome! "Stay a while and listen." 💖 Want to get in touch? clarice@bouwer.dev',
  );

  return (
    <Flowbite theme={{ dark: theme === 'dark', theme: flowbiteTheme }}>
      <Head {...meta} />
      <Header
        isSidebarOpen={isSidebarOpen}
        theme={theme}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleTheme={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          window.localStorage.setItem('theme', newTheme);
        }}
      />
      <Sidebar
        active={meta.route}
        groupActive={meta.group}
        isOpen={isSidebarOpen}
        menuItems={[
          { to: '/', name: 'Home' },
          { to: '/about', name: 'About' },
          { to: '/resume', name: 'Resume' },
          {
            to: '/blog',
            name: 'Blog',
            items: new Array(new Date().getFullYear() + 1 - 2016)
              .fill(0)
              .map((_, i) => ({ to: `/blog/${2016 + i}`, name: 2016 + i }))
              .sort((a, b) => b.name - a.name),
          },
          { to: '/scribbles', name: 'Scribbles' },
          { to: '/courses', name: 'Courses' },
          { to: '/tags', name: 'Tags' },
          { to: 'https://cal.com/clarice-bouwer', name: 'Schedule a chat' },
          {
            name: 'Legalities',
            items: [
              { to: '/privacy', name: 'Privacy' },
              { to: '/community', name: 'Community guidelines' },
            ],
          },
        ]}
      />
      <div
        className={classNames(
          'pt-12 selection:bg-pink-600 selection:text-white bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
          className,
        )}
      >
        {children}
      </div>
      <Footer />
    </Flowbite>
  );
};

export default withTheme(Layout);

import React, { useState } from 'react';
import { Flowbite } from 'flowbite-react';
import withTheme from '@hooks/theme';
import flowbiteTheme from '@components/flowbite-theme';
import Header from '@components/header';
import Footer from '@components/footer';
import Sidebar from '@components/sidebar';
import classNames from 'classnames';

const Layout = ({ className, children, setTheme, theme, baseRoute, group }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  if (typeof window !== 'undefined') {
    console.log(
      '👋 Welcome! "Stay a while and listen." 💖 Want to get in touch? clarice@bouwer.dev',
    );
  }

  return (
    <Flowbite theme={{ dark: theme === 'dark', theme: flowbiteTheme }}>
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
        active={baseRoute}
        groupActive={group}
        isOpen={isSidebarOpen}
        menuItems={[
          { to: '/', name: 'Home' },
          { to: '/about', name: 'About' },
          { to: '/resume', name: 'Resume' },
          {
            to: '/blog',
            name: 'Blog',
            items: [
              { to: '/blog', name: 'All' },
              ...new Array(new Date().getFullYear() + 1 - 2016)
                .fill(0)
                .map((_, i) => ({ to: `/blog/${2016 + i}`, name: 2016 + i }))
                .sort((a, b) => b.name - a.name),
            ],
          },
          { to: '/scribbles', name: 'Scribbles' },
          { to: '/courses', name: 'Courses' },
          { to: '/tags', name: 'Tags' },
          { to: 'https://dly.to/LD032K64hKq', name: 'Daily.dev' },
          {
            name: 'Connect with me',
            items: [
              { to: 'https://www.linkedin.com/in/cbouwer/', name: 'LinkedIn' },
              { to: 'https://github.com/cbillowes', name: 'GitHub' },
              { to: 'https://dly.to/1L0EwBOqg4w', name: 'Daily.dev' },
              {
                to: 'https://mastodon.social/@curiousprogrammer',
                name: 'Mastodon',
              },
              {
                to: 'https://techhub.social/@curiousprogrammer',
                name: 'Techhub',
              },
              {
                to: 'https://bsky.app/profile/curiousprogrammer.bsky.social',
                name: 'Bluesky',
              },
            ],
          },
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
          'pt-12 selection:bg-pink-600 selection:text-primary-200 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
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

import React, { useState } from 'react';
import { Flowbite } from 'flowbite-react';
import withTheme from '@hooks/theme';
import flowbiteTheme from '@components/flowbite-theme';
import Header from '@components/header';
import Footer from '@components/footer';
import Sidebar from '@components/sidebar';

const FlowbiteWrapper = ({ children, setTheme, theme }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
        isOpen={isSidebarOpen}
        menuItems={[
          { to: '/blog', name: 'Blog' },
          { to: '/about', name: 'About' },
          { to: '/resume', name: 'Resume' },
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
      <div className="pt-16">{children}</div>
      <Footer />
    </Flowbite>
  );
};

export default withTheme(FlowbiteWrapper);

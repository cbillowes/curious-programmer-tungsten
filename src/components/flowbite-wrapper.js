import React from 'react';
import { Flowbite } from 'flowbite-react';
import withTheme from '@hooks/theme';
import flowbiteTheme from '@components/flowbite-theme';
import Header from '@components/header';

const FlowbiteWrapper = ({ children, setTheme, theme }) => {
  return (
    <Flowbite theme={{ dark: theme === 'dark', theme: flowbiteTheme }}>
      <Header
        theme={theme}
        toggleTheme={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          window.localStorage.setItem('theme', newTheme);
        }}
      />
      <div className="pt-16">{children}</div>
    </Flowbite>
  );
};

export default withTheme(FlowbiteWrapper);

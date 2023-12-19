import React, { useState } from 'react';

const getTheme = () => {
  if (typeof window !== 'undefined') {
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const theme = window.localStorage.getItem('theme');
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme ? theme : preference);
    return theme ? theme : preference;
  }
};

const withTheme = (WrappedComponent) => {
  const WithTheme = (props) => {
    const [theme, setTheme] = useState(getTheme());

    return <WrappedComponent {...props} theme={theme} setTheme={setTheme} />;
  };

  return WithTheme;
};

export default withTheme;

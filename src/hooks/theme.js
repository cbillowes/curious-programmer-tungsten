import React, { useState } from 'react';

const getTheme = () => {
  if (typeof window !== 'undefined') {
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const theme = window.localStorage.getItem('theme');
    return theme ? theme : preference;
  }
};

const withTheme = (WrappedComponent) => {
  const WithTheme = (props) => {
    const [theme, setTheme] = useState(getTheme());

    return (
      <div className={theme}>
        <WrappedComponent {...props} theme={theme} setTheme={setTheme} />
      </div>
    );
  };

  return WithTheme;
};

export default withTheme;

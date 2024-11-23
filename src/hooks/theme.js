import React, { useState, useEffect, useRef } from 'react';

const getTheme = () => {
  if (typeof window !== 'undefined') {
    const preference = 'dark';
    const theme = window.localStorage.getItem('theme');
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(theme ? theme : preference);
    return theme ? theme : preference;
  }
};

const withTheme = (WrappedComponent) => {
  const WithTheme = (props) => {
    const commentBox = useRef(null);
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
      if (props.showComments) {
        const elements = document.getElementsByClassName('utterances');
        if (elements.length > 0) {
          elements[0].remove();
        }
        let scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
        scriptEl.setAttribute('crossorigin', 'anonymous');
        scriptEl.setAttribute('async', true);
        scriptEl.setAttribute('repo', 'cbillowes/curious-programmer-tungsten');
        scriptEl.setAttribute('issue-term', 'title');
        if (theme === 'dark') {
          scriptEl.setAttribute('theme', `photon-dark`);
        } else {
          scriptEl.setAttribute('theme', `github-light`);
        }
        commentBox.current.appendChild(scriptEl);
      }
    }, [theme, props.showComments]);

    return (
      <WrappedComponent {...props} theme={theme} setTheme={setTheme}>
        {props.children}
        {props.showComments && (
          <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-2xl mx-auto" ref={commentBox} />
          </div>
        )}
      </WrappedComponent>
    );
  };

  return WithTheme;
};

export default withTheme;

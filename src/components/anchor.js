import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const trackClickEvent = (data) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', data);
  }
};

const getClassNames = (className, useMarkdownStyles, isBlock) => {
  const markdownClasses =
    'font-bold px-1 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-green-400 hover:to-blue-600 hover:from-pink-600';

  const display = isBlock ? 'block' : 'inline-block';

  return `w-auto ${className || ''} ${
    useMarkdownStyles ? markdownClasses : ''
  } ${display ? display : ''}`;
};

const Anchor = ({
  className,
  to,
  title,
  children,
  useMarkdownStyles,
  newTabIndicator,
  forceNewTab,
  isBlock = false,
}) => {
  const trackingData = { to, title };
  const classNames = getClassNames(className, useMarkdownStyles, isBlock);

  if (!to)
    return (
      <span className={classNames} title={title}>
        {children}
      </span>
    );

  if (to && to.startsWith('/') && !forceNewTab) {
    return (
      <Link
        className={classNames}
        to={to}
        title={title}
        onClick={() => trackClickEvent(trackingData)}
      >
        {children}
      </Link>
    );
  }

  return (
    <span>
      <OutboundLink
        className={classNames}
        href={to}
        title={title || children}
        rel="noreferrer noopener"
        target="_blank"
        onClick={() => trackClickEvent(trackingData)}
      >
        {children}

        {newTabIndicator && (
          <IoOpenOutline className="float-right text-md mx-1 mt-2 text-neutral" />
        )}
      </OutboundLink>
    </span>
  );
};

export default Anchor;

import React from 'react';
import { Helmet } from 'react-helmet';
import { getTitle } from '../../common/seo';

const Title = ({ siteTitle, pageTitle }) => {
  const title = getTitle(pageTitle, siteTitle);
  return (
    <Helmet>
      <title>{title}</title>

      <meta content={siteTitle} name="application-name" />
      <meta content={siteTitle} name="apple-mobile-web-app-title" />

      <meta content={siteTitle} property="og:site_name" />
      <meta content={title} property="og:title" />

      <meta content={title} name="twitter:title" />
      <meta content={title} name="twitter:text:title" />
    </Helmet>
  );
};

export default Title;

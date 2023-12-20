import React from 'react';
import { Helmet } from 'react-helmet';

const Description = ({ keywords, description, author }) => (
  <Helmet>
    <meta content={author} name="author" />
    <meta content={keywords} name="keywords" />
    <meta content={description} name="description" />
    <meta content={description} property="og:description" />
    <meta content={description} name="twitter:description" />
  </Helmet>
);

export default Description;

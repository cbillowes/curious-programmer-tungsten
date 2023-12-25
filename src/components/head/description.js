import React from 'react';

const Description = ({ keywords, description, author }) => (
  <>
    <meta content={author} name="author" />
    <meta content={author} name="publisher" />
    <meta content={keywords} name="keywords" />
    <meta content={description} name="description" />
    <meta content={description} property="og:description" />
    <meta content={description} name="twitter:description" />
  </>
);

export default Description;

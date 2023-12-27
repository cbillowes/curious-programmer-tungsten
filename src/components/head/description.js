import React from 'react';

const Description = ({ keywords, description, author }) => {
  const shortened =
    description.length > 160
      ? description?.substring(0, 157) + '...'
      : description;
  return (
    <>
      <meta content={author} name="author" />
      <meta content={author} name="publisher" />
      <meta content={keywords} name="keywords" />
      <meta content={shortened} name="description" />
      <meta content={shortened} property="og:description" />
      <meta content={shortened} name="twitter:description" />
    </>
  );
};

export default Description;

import React from 'react';
import { Helmet } from 'react-helmet';

const Font = () => (
  <Helmet>
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin={true}
    />
    <link
      href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Manrope:wght@300;600;700&family=Fira+Code:wght@300;700&family=Handlee&display=swap"
      rel="stylesheet"
      defer="defer"
      async="async"
    />
  </Helmet>
);

export default Font;

import React from 'react';
import { Helmet } from 'react-helmet';

const Schema = ({ type, url, name, description, author, image }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': type || 'WebSite',
        url,
        name,
        description,
        author: {
          '@type': 'Person',
          name: author.name,
          sameAs: author.url,
        },
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        thumbnailUrl: image,
        datePublished: new Date(),
      })}
    </script>
  </Helmet>
);

export default Schema;

import React from 'react';

const Schema = ({ type, url, name, description, author, image }) => (
  <>
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
  </>
);

export default Schema;

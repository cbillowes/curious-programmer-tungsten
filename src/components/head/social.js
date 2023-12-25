import React from 'react';

const getResource = (url, route) =>
  `${url}${route}`;

const isUrl = (imagePath) => {
  return imagePath && imagePath.startsWith('http');
};

const getImage = (imagePath, url) => {
  try {
    const image = require(`@images/social-media/${imagePath}`).default;
    return `${url}${image}`;
  } catch (e) {
    console.error('Could not find social media image', e);
  }
};

const Social = ({ path, pageType, imagePath, url, handle }) => {
  const canonical = getResource(url, path);
  let facebook = imagePath;
  let twitter = imagePath;
  let image = imagePath;

  if (!isUrl(imagePath)) {
    const img = imagePath || "unicorn-laptop.webp";
    image = getImage(img, url);
    facebook = getImage(`facebook/${img}`, url);
    twitter = getImage(`twitter/${img}`, url);
  }

  return (
    <>
      <link rel="canonical" href={canonical} />
      <meta name="image" content={image} />

      <meta property="og:type" content={pageType || 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={facebook} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={twitter} />
      <meta name="twitter:image:width" content="1500" />
      <meta name="twitter:image:height" content="500" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${handle}`} />
      <meta name="twitter:creator" content={`@${handle}`} />
    </>
  );
};

export default Social;

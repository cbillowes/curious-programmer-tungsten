import React from 'react';
import Title from '@components/head/title';
import Description from '@components/head/description';
import Icons from '@components/head/icons';
import Social from '@components/head/social';
import Schema from '@components/head/schema';
import Font from '@components/head/font';

const removeWhitespace = (text) => {
  return text
    ?.trim()
    ?.split(' ')
    ?.filter((word) => word)
    ?.join(' ');
};

const Head = ({
  author,
  brand,
  description,
  image,
  keywords,
  pageTitle,
  pageType,
  social,
  siteTitle,
  type,
  url,
  shareImage,
  crawl = true,
  location,
}) => (
  <>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="build" content={new Date()} />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="Content-Type" content="text/html; charset=UTF-8" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />

    <meta
      content="black-translucent"
      name="apple-mobile-web-app-status-bar-style"
    />

    {crawl && <meta name="robots" content="index" />}
    {!crawl && <meta name="robots" content="noindex" />}

    <Title pageTitle={pageTitle} siteTitle={siteTitle} />

    <Description
      keywords={keywords}
      author={author && author.name}
      description={removeWhitespace(description)}
    />

    <Font />

    <Icons themeColor={brand} />

    <Social
      url={url}
      handle={social?.twitter}
      imagePath={shareImage || image || social?.image}
      pageType={pageType}
      path={location.pathname}
    />

    <Schema
      type={type}
      url={url}
      name={pageTitle}
      description={removeWhitespace(description)}
      author={{
        name: author && author.name,
        url: author && author.url,
      }}
      image={image || social?.image}
    />
  </>
);

export default Head;

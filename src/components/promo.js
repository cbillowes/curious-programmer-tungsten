import React from 'react';
import { Link } from 'gatsby';
import Thumbnail from '@components/thumbnail';

const LatestArticles = ({ articles }) => {
  return articles?.map((article, index) => {
    const { node } = article;
    const { slug, number, hero } = node?.fields;
    const { title } = node?.frontmatter;
    return (
      <Link className="relative w-[200px]" to={slug} key={slug}>
        <Thumbnail
          number={number}
          to={slug}
          alt={title}
          {...hero}
          dropCredit
          dropBorder
          className="!h-32 filter grayscale hover:grayscale-0 opacity-90 hover:opacity-100 bg-scroll"
        />
      </Link>
    );
  });
};

const Promo = ({ articles }) => {
  return <LatestArticles articles={articles} />;
};

export default Promo;

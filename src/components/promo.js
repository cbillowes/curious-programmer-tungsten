import React, { useState } from 'react';
import { Link } from 'gatsby';
import Thumbnail from '@components/thumbnail';
import classNames from 'classnames';

const LatestArticles = ({ articles }) => {
  const [tooltip, setTooltip] = useState(null);

  return articles?.map((article, index) => {
    const { node } = article;
    const { slug, number, hero } = node?.fields;
    const { title } = node?.frontmatter;
    return (
      <Link
        className="w-2/12 relative"
        to={slug}
        onMouseEnter={() => setTooltip(number)}
        onMouseLeave={() => setTooltip(null)}
        key={slug}
      >
        <Thumbnail
          number={number}
          to={slug}
          alt={title}
          {...hero}
          className={classNames(
            'h-40 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100',
          )}
        />
        {tooltip === number && (
          <div
            role="tooltip"
            class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-pink-400 dark:bg-pink-900 border border-pink-600 dark:border-pink-800 rounded-sm shadow-sm"
          >
            #{number} - {title}
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        )}
      </Link>
    );
  });
};

const Promo = ({ articles }) => {
  return (
    <>
      <div className="font-bold bg-pink-600 [writing-mode:vertical-lr] flex justify-center items-center text-white">
        Latest
      </div>
      <LatestArticles articles={articles} />
    </>
  );
};

export default Promo;

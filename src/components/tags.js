import React from 'react';
import { TagCloud } from 'react-tagcloud';
import Anchor from '@components/anchor';
import _ from 'lodash';

export const Tag = ({ tag, prefix, className, redirect }) => {
  if (!tag) return <span></span>;
  if (!redirect)
    return (
      <span className={className}>
        {prefix}
        {tag}
      </span>
    );
  return (
    <Anchor
      to={`/tag/${_.kebabCase(tag)}`}
      title={tag.toLowerCase()}
      className={className}
    >
      {prefix}
      {tag}
    </Anchor>
  );
};

const Tags = ({ tags, isButton, redirect, additionalClasses }) => {
  if (tags && tags.length === 0) return <span></span>;

  const className = isButton
    ? `py-1 px-4 rounded mx-1 mt-4 inline-block hover:text-white hover:bg-pink-700 ${additionalClasses}`
    : `ml-2 text-black dark:text-white leading-loose hover:text-pink-600 hover:dark:text-pink-400 ${additionalClasses} ${
        redirect && 'cursor-pointer'
      }`;

  const prefix = isButton ? '' : '#';

  return (
    tags &&
    tags.map((tag, index) => {
      return (
        <Tag
          key={index}
          tag={tag}
          className={className}
          prefix={prefix}
          redirect={redirect}
        />
      );
    })
  );
};

export default Tags;

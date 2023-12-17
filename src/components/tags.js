import React from 'react';
import Anchor from './Anchor';
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
    ? `bg-color-1 text-color-1-script py-1 px-4 rounded mx-1 mt-4 inline-block hover:bg-color-1-alternative ${additionalClasses}`
    : `ml-2 text-neutral leading-loose hover:text-color-3 ${additionalClasses} ${
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

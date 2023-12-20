import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { navigate } from 'gatsby';
import _ from 'lodash';

const Tags = ({ tags }) => {
  if (tags && tags.length === 0) return <span></span>;
  return (
    <TagCloud
      minSize={14}
      maxSize={64}
      tags={tags}
      className="flex flex-wrap items-center justify-center gap-4 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r dark:to-blue-600 dark:from-green-400 to-blue-600 from-pink-600"
      disableRandomColor={true}
      onClick={(tag) => navigate(`/tags/${_.kebabCase(tag.value)}`)}
    />
  );
};

export default Tags;

import React, { useState } from 'react';
import Kebab from '@components/kebab';
import Anchor from '@components/anchor';
import Previews from '@components/articles';

const Articles = ({ edges }) => {
  const [visible, toggleVisibility] = useState(false);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        Featured articles
      </Kebab>
      <div className={`mx-auto max-w-screen-xl text-center ${visible ? 'block' : 'hidden'}`}>
        <Previews edges={edges} />
        <Anchor
          to="/blog"
          title="All articles"
          className="rounded py-1 px-3 transform shadow-md bg-primary-600 text-primary-200 hover:bg-blue-600 hover:text-blue-200"
        >
          Discover more
        </Anchor>
      </div>
    </>
  );
};

export default Articles;

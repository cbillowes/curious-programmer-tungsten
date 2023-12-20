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
      <div className={`mx-auto text-center ${visible ? 'block' : 'hidden'}`}>
        <Previews edges={edges} />
        <Anchor
          to="/blog"
          title="All articles"
          className="bg-color-1-alternative text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1"
        >
          Discover more
        </Anchor>
      </div>
    </>
  );
};

export default Articles;

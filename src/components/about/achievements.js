import React, { useState } from 'react';
import Kebab from '@components/kebab';
import { Cards } from '@components/card';
import { achievements } from '@common/achievements';

const Achievements = () => {
  const [visible, toggleVisibility] = useState(false);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        This is what I’ve done so far
      </Kebab>
      <div className={visible ? 'block max-w-screen-xl mx-auto' : 'hidden'}>
        <Cards data={achievements} />
      </div>
    </>
  );
};

export default Achievements;

import React from 'react';
import { Link } from 'gatsby';
import { RiArticleLine } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { TbScribble } from 'react-icons/tb';

const Icon = ({ icon, ...rest }) => {
  switch (icon) {
    case 'article':
      return <RiArticleLine {...rest} />;
    case 'course':
      return <MdOutlineSchool {...rest} />;
    case 'scribbles':
      return <TbScribble {...rest} />;
    default:
      return <></>;
  }
};

const toProperCase = (value) => {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Type = ({ type, to, number }) => {
  const title = toProperCase(type);
  return (
    <div className="uppercase text-center opacity-40 my-3">
      <Link to={to}>
        <Icon
          icon={type}
          className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
          alt={title}
          title={title}
        />
        {type}
      </Link>
      {number && <>&nbsp;&middot; #{number}</>}
    </div>
  );
};

export default Type;

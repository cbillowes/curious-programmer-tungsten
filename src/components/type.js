import React from 'react';
import { Link } from 'gatsby';
import { RiArticleLine } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { TbScribble } from 'react-icons/tb';
import classNames from 'classnames';

const Icon = ({ icon, ...rest }) => {
  switch (icon) {
    case 'article':
      return <RiArticleLine {...rest} />;
    case 'course':
      return <MdOutlineSchool {...rest} />;
    case 'scribble':
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

const Type = ({ type, to, number, inline }) => {
  const title = toProperCase(type);
  return (
    <div
      className={classNames(
        'opacity-70',
        inline ? 'text-left capitalize' : 'text-center my-3 uppercase',
      )}
    >
      <Link to={to}>
        <Icon
          icon={type}
          className={classNames(
            'inline-block mr-2 text-4xl rounded',
            inline ? 'text-sm' : 'p-2',
          )}
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

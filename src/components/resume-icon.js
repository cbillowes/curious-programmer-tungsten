import React from 'react';
import PropTypes from 'prop-types';
import {
  FaCode,
  FaGraduationCap,
  FaMicrophone,
  FaPaperclip,
  FaRegComment,
} from 'react-icons/fa';

const ResumeIcon = ({ category, className = '' }) => {
  return (
    <>
      {category === 'Education' && (
        <FaGraduationCap className={className} title={category} />
      )}
      {category === 'Career' && (
        <FaCode className={className} title={category} />
      )}
      {category === 'Podcast' && (
        <FaMicrophone className={className} title={category} />
      )}
      {category === 'Publication' && (
        <FaPaperclip className={className} title={category} />
      )}
      {category === 'Testimonial' && (
        <FaRegComment className={className} title={category} />
      )}
    </>
  );
};

export default ResumeIcon;

ResumeIcon.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
};

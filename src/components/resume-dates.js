import React from 'react';
import PropTypes from 'prop-types';

const timeSince = (duration) => {
  let result = '';

  const yearInMillis = 60 * 60 * 24 * 365 * 1000;
  const years = Math.floor(duration / yearInMillis);
  if (years > 0) {
    result += `${years} year${years > 1 ? 's' : ''}`;
    duration -= years * yearInMillis;
  }

  const monthInMillis = 60 * 60 * 24 * 30 * 1000;
  const months = Math.floor(duration / monthInMillis);
  if (months > 0) {
    result += `${result ? ' & ' : ''}${months} month${months > 1 ? 's' : ''}`;
    duration -= months * monthInMillis;
  }

  return result;
};

const getTimestamp = (date) => {
  return new Date(date).getTime();
};

// show date in format
const format = (date) => {
  if (!date) return 'present';
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

const ResumeDates = ({ className, start, end }) => {
  const startTimestamp = getTimestamp(start);
  const endTimestamp = getTimestamp(end) || getTimestamp(new Date());
  return (
    <span className={className}>
      {format(start)} to {format(end)} &middot;
      {timeSince(endTimestamp - startTimestamp)}
    </span>
  );
};

export default ResumeDates;

ResumeDates.propTypes = {
  className: PropTypes.string,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
};

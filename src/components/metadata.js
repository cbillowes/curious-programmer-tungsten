import React from 'react';
import { toMauritiusLocaleDateString } from '@common/date';

const Metadata = ({
  timeToRead,
  date,
  modified,
  abstract,
  page,
  totalPages,
}) => {
  return (
    <div className="text-gray-400 dark:text-gray-600">
      <div>
        {date && <span>{toMauritiusLocaleDateString(date)}</span>} &middot;{' '}
        {timeToRead && <span>Estimated {timeToRead} minute read</span>}
      </div>
      {modified && (
        <div>Modified on {toMauritiusLocaleDateString(modified)}</div>
      )}
    </div>
  );
};

export default Metadata;

import React from 'react';
import { toMauritiusLocaleDateString } from '@common/date';

const Divider = ({ props, index }) => {
  return index + 1 <= props.length &&
    props.slice(index + 1).filter((p) => p).length > 0 ? (
    <>&nbsp;&middot;&nbsp;</>
  ) : (
    <></>
  );
};

const Metadata = ({
  timeToRead,
  date,
  created,
  modified,
  abstract,
  page,
  totalPages,
}) => {
  // data to decide where to put the mid-dot dividers
  const props = [timeToRead, date, page, created, modified];
  return (
    <div className="text-gray-500 dark:text-gray-400">
      <div className=" opacity-70">
        {date && (
          <>
            {toMauritiusLocaleDateString(date)}
            <Divider props={props} index={0} />
          </>
        )}
        {timeToRead && (
          <>
            Estimated {timeToRead} minute read
            <Divider props={props} index={1} />
          </>
        )}
        {page && totalPages && (
          <>
            Page {parseInt(page, 10)} out of {totalPages}
            <Divider props={props} index={2} />
          </>
        )}
      </div>
      {abstract && <p className="mt-2 max-w-3xl mx-auto">{abstract}</p>}
    </div>
  );
};

export default Metadata;

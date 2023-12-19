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
    <div className="text-neutral leading-loose text-xl font-light">
      <div className=" opacity-50">
        {timeToRead && (
          <>
            Estimated {timeToRead} minute read
            <Divider props={props} index={0} />
          </>
        )}
        {date && (
          <>
            {toMauritiusLocaleDateString(date)}
            <Divider props={props} index={1} />
          </>
        )}
        {page && totalPages && (
          <>
            Page {parseInt(page, 10)} out of {totalPages}
            <Divider props={props} index={2} />
          </>
        )}
        {created && (
          <>
            Created on {toMauritiusLocaleDateString(created)}
            <Divider props={props} index={3} />
          </>
        )}
        {modified && (
          <>
            Last modified on {toMauritiusLocaleDateString(modified)}
            <Divider props={props} index={4} />
          </>
        )}
      </div>
      {abstract && <p className="mt-2 max-w-3xl mx-auto">{abstract}</p>}
    </div>
  );
};

export default Metadata;

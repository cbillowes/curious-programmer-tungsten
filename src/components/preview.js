import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Anchor from '@components/anchor';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Tags from '@components/tags';
import { TbBook, TbSchool, TbScribble } from 'react-icons/tb';

const Ribbon = ({ children }) => {
  if (!children) return <></>;
  return (
    <div className="ribbon absolute right-0 z-40">
      <div className="backdrop absolute overflow-hidden inline-block">
        <div className="bg-pink-600 w-52 h-10 absolute top-10 -right-12 overflow-hidden transform rotate-45 py-1 text-center font-bold">
          <div className="border-dashed border-b border-l border-r border-t border-pink-200 mb-1 pb-1 text-pink-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Preview = ({
  index,
  number,
  slug,
  title,
  date,
  timeToRead,
  excerpt,
  tags,
  hero,
  type,
}) => {
  const isEven = index % 2 === 0;
  return (
    <section
      key={index}
      className={classNames(
        'relative mx-auto max-w-full md:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse',
        isEven ? 'xl:flex-row-reverse' : 'xl:flex-row',
      )}
    >
      <div
        className={classNames(
          `dark:border-gray-600 border-gray-300 border-none xl:border-dashed xl:w-1/2 xl:mx-8`,
          isEven
            ? 'xl:text-left xl:border-l xl:pl-8'
            : 'xl:text-right xl:border-r xl:pr-8',
        )}
      >
        <div
          className={classNames(
            `uppercase mb-6 text-center mt-5 xl:mt-0 flex flex-col`,
            isEven
              ? 'xl:text-left xl:items-start'
              : 'xl:text-right xl:items-end',
          )}
        >
          <span
            className={classNames(
              'flex items-center justify-center w-12 h-12 rounded-full text-4xl -start-3 ring-8 mb-4 text-white',
              type === 'scribbles' && 'bg-blue-500 ring-blue-300',
              type === 'article' && 'bg-pink-600 ring-pink-300',
              type === 'course' && 'bg-violet-500 ring-violet-300',
            )}
          >
            {type === 'scribbles' && (
              <Link to="/scribbles">
                <TbScribble />
              </Link>
            )}
            {type === 'article' && (
              <Link to="/blog">
                <TbBook />
              </Link>
            )}
            {type === 'course' && (
              <Link to="/courses">
                <TbSchool />
              </Link>
            )}
          </span>
          {type}
        </div>
        <h2
          className={classNames(
            'text-xl mt-8 xl:mt-0 md:text-4xl leading-loose font-semibold tracking-tight',
            'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ',
            type === 'scribbles' && 'hover:to-green-600 hover:from-blue-600',
            type === 'article' && 'hover:to-blue-600 hover:from-pink-600',
            type === 'course' && 'hover:to-red-600 hover:from-violet-600',
          )}
        >
          <Anchor to={slug} title={title}>
            {title}
          </Anchor>
        </h2>
        <div className="leading-loose mb-4">
          <Metadata data={date} timeToRead={timeToRead} />
          <p
            className={`mt-2 text-xl font-light ${
              isEven ? 'xl:text-left' : 'xl:text-right'
            }`}
          >
            {excerpt}
          </p>
        </div>
        <div
          className={`flex items-center flex-wrap ${
            isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
          }`}
        >
          <Anchor
            className={classNames(
              'bg-pink-600 text-white rounded py-1 px-3 transform shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300',
              isEven ? 'xl:mr-2' : 'xl:ml-4',
            )}
            to={slug}
            title={slug}
          >
            Read more
          </Anchor>
          <Tags tags={tags} redirect={true} />
        </div>
      </div>
      <div
        className={classNames(
          'xl:w-1/2 relative',
          isEven ? 'xl:text-right' : 'xl:text-left',
        )}
      >
        <Ribbon>#{number}</Ribbon>
        <Thumbnail
          number={number}
          to={slug}
          alt={title}
          {...hero}
          className={classNames(isEven ? 'xl:justify-end' : 'xl:justify-start')}
        />
      </div>
    </section>
  );
};

export default Preview;

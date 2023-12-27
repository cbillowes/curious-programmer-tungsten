import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Anchor from '@components/anchor';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Tags from '@components/tags';
import Ribbon from '@components/ribbon';
import { TbBook, TbSchool, TbScribble } from 'react-icons/tb';
import { StaticImage } from 'gatsby-plugin-image';

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
            `uppercase mb-6 text-center mt-5 xl:mt-0 flex flex-col items-center`,
            isEven
              ? 'xl:text-left xl:items-start'
              : 'xl:text-right xl:items-end',
          )}
        >
          <span
            className={classNames(
              'flex items-center justify-center w-12 h-12 rounded-full text-4xl -start-3 ring-8 mb-4 text-white',
              type === 'scribble' && 'bg-blue-500 ring-blue-300',
              type === 'article' && 'bg-pink-600 ring-pink-300',
              type === 'course' && 'bg-violet-500 ring-violet-300',
            )}
          >
            {type === 'scribble' && (
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
            'text-2xl mt-8 xl:mt-0 md:text-4xl font-semibold tracking-tighter',
            'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ',
            type === 'scribble' && 'hover:to-green-600 hover:from-blue-600',
            type === 'article' && 'hover:to-blue-600 hover:from-pink-600',
            type === 'course' && 'hover:to-red-600 hover:from-violet-600',
          )}
        >
          <Anchor to={slug} title={title}>
            {title}
          </Anchor>
        </h2>
        <div className="leading-loose mb-4">
          <div
            className={classNames(
              'flex items-center mb-3 space-x-2',
              isEven ? 'xl:justify-start' : 'xl:flex-row-reverse',
            )}
          >
            <StaticImage
              className={classNames(
                'w-8 h-8 rounded-full',
                isEven ? 'xl:mr-2' : 'xl:ml-4',
              )}
              src="../images/avatar.png"
              alt="Clarice Bouwer"
            />
            <div className="font-medium dark:text-white">
              <div>Clarice Bouwer</div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                <Metadata date={date} timeToRead={timeToRead} type={type} />
              </div>
            </div>
          </div>
          <p
            className={classNames(
              'mt-2 text-xl font-light',
              isEven ? 'xl:text-left' : 'xl:text-right',
            )}
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

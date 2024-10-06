import React from 'react';
import DownloadLogo from '@images/svgs/download.svg';
import UnsplashLogo from '@images/svgs/unsplash.svg';
import Anchor from '@components/anchor';
import classNames from 'classnames';

const getCreditTitle = (source, attribute) => {
  if (!source && !attribute) return '';

  if (source && source.toLowerCase() === 'unsplash') {
    return `Download free do whatever you want high-resolution photos from ${attribute}`;
  }

  if (!attribute) {
    return `Image from ${source}`;
  }

  if (source) {
    return `Image by ${attribute} @ ${source}`;
  }

  return `Image by ${attribute}`;
};

const Credit = ({ source, link, text }) => {
  if (!source) return <span></span>;
  return (
    <Anchor
      to={link}
      title={getCreditTitle(source, text)}
      className="bg-black text-gray-300 py-1 px-2 pl-6 rounded absolute bottom-2 left-2 text-sm"
    >
      <img
        alt={source}
        className="filter invert w-3 absolute left-2 top-2"
        src={source === 'unsplash' ? UnsplashLogo : DownloadLogo}
      />
      {source}
    </Anchor>
  );
};

const ExternalThumbnail = ({ to, alt, src, className, isHero }) => {
  return (
    <Anchor to={to} title={alt} className={classNames('flex', className)}>
      <img
        alt={alt}
        src={src}
        width={1200}
        className={classNames(
          'relative object-cover w-full shadow-lg border border-gray-400 dark:border-gray-600',
          isHero ? 'h-[450px] xl:h-[750px]' : 'w-96',
          isHero ? '' : 'dark:border-gray-800',
        )}
      />
    </Anchor>
  );
};

const Thumbnail = ({
  alt = '',
  isHero = false,
  image,
  credit,
  source,
  link,
  component,
  className,
  dropCredit,
}) => {
  if (component === 'url')
    return (
      <ExternalThumbnail
        to={link}
        alt={alt}
        src={image}
        title={alt}
        className={className}
        isHero={isHero}
      />
    );

  try {
    const src = require(`@images/covers/${image}`).default;
    return (
      <span
        className={classNames(
          'relative bg-no-repeat bg-center w-full block bg-cover bg-fixed',
          isHero ? 'h-[450px] xl:h-[750px]' : 'h-[350px]',
          isHero ? '' : 'border dark:border-gray-800',
          className,
        )}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {!dropCredit && (
          <Credit
            componentName={component}
            source={source}
            link={link}
            text={credit}
          />
        )}
      </span>
    );
  } catch (e) {
    return <></>;
  }
};

export default Thumbnail;

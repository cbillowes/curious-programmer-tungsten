import React from 'react';
import { Link } from 'gatsby';
import iconLight from '@images/icon-light.webp';
import iconDark from '@images/icon-dark.webp';

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 border-t-8 border-pink-600">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src={iconLight}
            alt="Curious Programmer"
            className="dark:hidden block h-11"
          />
          <img
            src={iconDark}
            alt="Curious Programmer"
            className="dark:block hidden h-11"
          />
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Curious Programmer
          <br /> A curious place for a curious mind. Made with ❤️ with Gatsby.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="https://curiousprogrammer.dev/privacy" className="mr-4 hover:underline md:mr-6 ">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="https://curiousprogrammer.dev/community" className="mr-4 hover:underline md:mr-6">
              Community guidelines
            </a>
          </li>
          <li>
            <a href="https://github.com/cbillowes/curious-programmer-tungsten" className="mr-4 hover:underline md:mr-6 ">
              Source code
            </a>
          </li>
          <li>
            <a href="https://react-icons.github.io/react-icons/" className="mr-4 hover:underline md:mr-6">
              React icons
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2016-{new Date().getFullYear()}{' '}
          <a href="#" className="hover:underline">
            Curious Programmer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

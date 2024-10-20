import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'classnames';

const Footer = () => {
  const [unsubscribe, showUnsubscribe] = useState(false);
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <div className="block dark:hidden">
              <StaticImage
                src="../images/icon-light.webp"
                alt="Curious Programmer"
                className="h-11 w-11"
              />
            </div>
            <div className="hidden dark:block">
              <StaticImage
                src="../images/icon-dark.webp"
                alt="Curious Programmer"
                className="h-11 w-11"
              />
            </div>
          </Link>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Curious Programmer
            <br /> A curious place for a curious mind. Made with ❤️ with Gatsby.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a
                href="https://curiousprogrammer.dev/privacy"
                className="mr-4 hover:underline md:mr-6 "
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="https://curiousprogrammer.dev/community"
                className="mr-4 hover:underline md:mr-6"
              >
                Community guidelines
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cbillowes/curious-programmer-tungsten"
                className="mr-4 hover:underline md:mr-6 "
              >
                Source code
              </a>
            </li>
            <li>
              <a
                href="https://react-icons.github.io/react-icons/"
                className="mr-4 hover:underline md:mr-6"
              >
                React icons
              </a>
            </li>
            <li>
              <button onClick={() => showUnsubscribe(!unsubscribe)}>
                Unsubscribe
              </button>
              {unsubscribe && (
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-[9999]">
                  <div
                    id="unsubscribe"
                    tabindex="-1"
                    className={clsx(
                      'absolute z-50 justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2',
                    )}
                  >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => showUnsubscribe(false)}
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                        <div className="pt-10 px-4">
                          <form
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            netlify
                            method="POST"
                            name="unsubscribe"
                            className="mx-auto max-w-screen-sm"
                          >
                            <input
                              type="hidden"
                              name="form-name"
                              value="unsubscribe"
                            />
                            <h3 className="mb-5 text-gray-500 dark:text-gray-400">
                              There&apos;s no hard feelings. Are you sure you
                              want to unsubscribe from all the things, though?
                            </h3>
                            <div className="grid grid-2 items-center mb-3">
                              <div className="relative mr-3 w-full">
                                <label
                                  for="email"
                                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Email address
                                </label>
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                  </svg>
                                </div>
                                <input
                                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Enter your email address"
                                  type="email"
                                  name="email"
                                  id="email"
                                  required
                                />
                              </div>
                              <textarea
                                id="message"
                                rows="4"
                                class="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Care to share why you're leaving?"
                              ></textarea>
                              <div className="p-4 md:p-5 text-center">
                                <button
                                  type="submit"
                                  className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                >
                                  Yes, I'm sure
                                </button>
                                <button
                                  onClick={() => showUnsubscribe(false)}
                                  type="button"
                                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                  No, cancel
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2016-{new Date().getFullYear()}{' '}
            <a href="/" className="hover:underline">
              Curious Programmer
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

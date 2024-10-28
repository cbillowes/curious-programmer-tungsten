import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'classnames';
import { unsubscribe } from '@services/unsubscribe';

const Footer = () => {
  const [modal, showModal] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { success, message: responseMessage } = await unsubscribe({
        email,
        message,
      });
      if (success) {
        setSuccess(responseMessage);
      } else {
        setError(responseMessage);
      }
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setError('Oops! Something went wrong. Please try again, later.');
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setMessage('');
        setSuccess('');
        setError('');
      }, 10000);
    }
  };

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
              <button onClick={() => showModal(!modal)}>Unsubscribe</button>
              {modal && (
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
                          onClick={() => showModal(false)}
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
                        <div className="pt-10 pb-5 px-4">
                          <form
                            method="POST"
                            name="unsubscribe"
                            className="mx-auto max-w-screen-sm"
                          >
                            <h2 className="mb-2 font-bold text-lg">
                              Unsubscribe 💔
                            </h2>
                            <h3 className="mb-5 text-gray-500 dark:text-gray-400">
                              There&apos;s no hard feelings though, but are you
                              sure you want to unsubscribe from all the things?
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
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                  type="email"
                                  name="email"
                                  id="email"
                                  required
                                />
                              </div>
                              <textarea
                                id="message"
                                rows="4"
                                className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Care to share why you're leaving? That way we can make improvements."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                              ></textarea>
                              <div className="p-4 md:p-5 text-center">
                                <button
                                  type="submit"
                                  className={clsx(
                                    'inline-flex items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg focus:ring-4',
                                    'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
                                    submitted &&
                                      success &&
                                      'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
                                    submitting
                                      ? 'bg-primary-400 dark:bg-primary-500 hover:bg-primary-400 hover:dark:bg-primary-500 cursor-not-allowed'
                                      : 'cursor-pointer',
                                  )}
                                  name="submit"
                                  id="submit"
                                  onClick={handleSubmit}
                                  disabled={submitting}
                                >
                                  {submitting && (
                                    <svg
                                      aria-hidden="true"
                                      role="status"
                                      className="inline w-3 h-3 me-3 text-white animate-spin"
                                      viewBox="0 0 100 101"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                      />
                                      <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  )}
                                  {submitted && success
                                    ? 'Unsubscribed'
                                    : "Yes, I'm sure"}
                                </button>
                                <button
                                  onClick={() => showModal(false)}
                                  type="button"
                                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                  {submitted ? 'Close' : 'No, cancel'}
                                </button>
                              </div>
                            </div>
                          </form>
                          {error && (
                            <p className="text-pink-400 my-4 text-center">
                              <button
                                onClick={() => setError(null)}
                                className="bg-pink-100 text-pink-800 text-xs px-1.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 font-bold"
                              >
                                &times;
                              </button>{' '}
                              {error}
                            </p>
                          )}
                          {success && (
                            <p className="text-green-400 my-4 text-center">
                              <button
                                onClick={() => setSuccess(null)}
                                className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 font-bold"
                              >
                                &times;
                              </button>{' '}
                              {success}
                            </p>
                          )}
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

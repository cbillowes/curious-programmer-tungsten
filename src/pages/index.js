import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'classnames';
import Seo from '@components/head';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Ribbon from '@components/ribbon';
import Promo from '@components/promo';
import { subscribe } from '@services/newsletter';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { success, message } = await subscribe(email);
      if (success) {
        setSuccess(message);
      } else {
        setError(message);
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
        setSuccess('');
        setError('');
      }, 10000);
    }
  };

  return (
    <form method="POST" name="newsletter" className="mx-auto max-w-screen-sm">
      <div className="flex items-center mb-3">
        <div className="relative mr-3 w-full">
          <label
            for="email"
            className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <button
            type="submit"
            className={clsx(
              'inline-flex items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg cursor-pointer focus:ring-4',
              submitted
                ? 'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                : 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
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
                className="inline w-4 h-4 me-3 text-white animate-spin"
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
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
      {error && (
        <p className="text-pink-600 my-4 text-left">
          <button onClick={() => setError(null)}>&times;</button> {error}
        </p>
      )}
      {success && (
        <p className="text-green-500 my-4 text-left">
          <button onClick={() => setSuccess(null)}>&times;</button> {success}
        </p>
      )}
      <div className="text-sm font-medium text-left text-gray-500 dark:text-gray-300">
        By signing up you acknowledge the{' '}
        <a
          className="text-primary-600 hover:underline dark:text-primary-500"
          href="/privacy"
        >
          Privacy Policy
        </a>
        .
      </div>
    </form>
  );
};

const IndexPage = ({ data }) => {
  const { featuredArticles, latestArticles } = data;
  const edges = featuredArticles.edges;
  const groupedBy = 3;
  const groupedEdges = [];
  for (let i = 0; i < edges.length; i += groupedBy) {
    groupedEdges.push(edges.slice(i, i + groupedBy));
  }
  return (
    <Layout group="/" route="/">
      <div className="flex">
        <div className="font-bold bg-pink-600 flex justify-center items-center text-white self-stretch [writing-mode:vertical-lr]">
          <Link to="/blog">Articles</Link>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none relative">
            <Promo articles={latestArticles.edges} />
          </div>
        </div>
      </div>
      <section className="bg-gray-50 dark:bg-gray-900 py-5">
        <Backdrop />
        <div className="px-4 sm:px-32 grid max-w-screen-xl xl:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="lg:hidden">
              <StaticImage
                src="../images/unicorn-laptop.webp"
                className="w-32 h-32 object-cover"
                alt="Unicorn using a laptop"
              />
            </div>
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tighter leading-none md:text-5xl xl:text-6xl dark:text-white">
              Curiosity is the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-green-400">
                secret sauce
              </span>{' '}
              for Software Engineers
              <StaticImage
                src="../images/rocket.png"
                alt="Rocket emoji"
                className="inline-block w-16 h-16 ml-4"
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              Passionate developers, fueled by an insatiable thirst for
              knowledge, boldly tinker with new tech, unraveling mysteries of
              code and algorithms.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              It's not just about zeros and ones; it's a journey of perpetual
              excitement, where curiosity isn't just a trait, but the heartbeat
              of innovation. So, join the geek squad and let curiosity be your
              compass in the ever-expanding universe of software magic!
            </p>
            <div className="mb-8">
              <StaticImage
                src="../images/unicorn.png"
                alt="Unicorn emoji"
                className="inline-block w-16 h-16 ml-4"
              />
              <StaticImage
                src="../images/mac.png"
                alt="Woman technologist emoji"
                className="inline-block w-16 h-16 ml-4"
              />
            </div>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              About me
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              My blog
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <StaticImage
              src="../images/unicorn-laptop.webp"
              className="w-96 h-96 object-cover"
              alt="Unicorn using a laptop"
            />
          </div>
        </div>
      </section>
      <hr className="border-gray-300 dark:border-gray-800" />
      <section id="subscribe" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Subscribe to my newsletter
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Get notified monthly about any new articles, tutorials, and
              courses. I promise to keep the emails short and sweet, and never
              spam you.
            </p>
            <Newsletter />
          </div>
        </div>
      </section>
      <hr className="border-indigo-900" />
      <section className="bg-gradient-to-tl to-indigo-950 from-pink-600 py-16">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 text-center">
          <StaticImage
            src="../images/avatar.png"
            alt="Clarice Bouwer"
            className="w-64 h-64 object-cover rounded-full"
          />
          <h2 className="mt-8 mb-4 lg:mb-8 text-3xl font-extrabold tracking-tighter leading-tight text-center text-white md:text-4xl">
            My name is Clarice Bouwer
          </h2>
          <p className="max-w-2xl mx-auto mb-8 lg:mb-16 text-center font-light md:text-lg lg:text-xl text-gray-50">
            Software Engineering Team Lead at Cloudsure Limited in Mauritius
            (born in South Africa). Obsessively passionate about
            Clojure(Script), Gatsby, and Git, I navigate the realms of financial
            services and code innovation.
          </p>
          <div className="grid grid-cols-4 gap-8 text-5xl text-gray-500 sm:gap-12 lg:grid-cols-8 dark:text-gray-400">
            <a
              href="https://github.com/cbillowes"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <FaGithub className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/cbouwer/"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://stackoverflow.com/users/849986/clarice-bouwer"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <FaStackOverflow className="text-white" />
            </a>
            <a
              href="https://www.buymeacoffee.com/cbillowes"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <StaticImage
                src="../images/coffee.svg"
                alt="Buy me a coffee"
                className="h-11 w-11"
              />
            </a>
            <a
              href="https://www.cloudsure.mu"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <StaticImage
                src="../images/cloudsure.webp"
                alt="Cloudsure"
                className="h-11 w-11"
              />
            </a>
            <a
              href="https://clojure.org/"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <StaticImage
                src="../images/clojure.webp"
                alt="Clojure"
                className="h-11 w-11"
              />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Mauritius"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <StaticImage
                src="../images/mauritius.webp"
                alt="Mauritius"
                className="h-11 w-11"
              />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/South_Africa"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <StaticImage
                src="../images/south-africa.webp"
                alt="South Africa"
                className="h-11 w-11"
              />
            </a>
          </div>
        </div>
      </section>
      <hr className="dark:border-pink-900 border-pink-400" />
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mt-8 mb-4 lg:mb-8 text-3xl font-extrabold tracking-tighter leading-tight text-gray-900 dark:text-white md:text-4xl">
              I share what I learn
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              I'm on a perpetual learning journey, and I love sharing the gems I
              uncover along the way. Knowledge is power, but sharing it? That's
              the real magic! ✨
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 bg-primary-100 rounded dark:bg-primary-900 lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Soft Skills
              </h3>
              <ul className="my-6 lg:mb-0 space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/mindset">Mindset</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/relationships">Relationships</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/communication">Communication</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/productivity">Productivity</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/personal-brand">Personal brand</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 bg-purple-100 rounded dark:bg-purple-900 lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Software Engineering
              </h3>
              <ul className="my-6 lg:mb-0 space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/java-script">JavaScript</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/clojure">Clojure</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/clojure-script">ClojureScript</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/react">React</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 bg-teal-100 rounded dark:bg-teal-900 lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-teal-600 dark:text-teal-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Engineering Toolkit
              </h3>
              <ul className="my-6 lg:mb-0 space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/visual-studio-code">Visual Studio Code</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/mac-os">MacOS</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/dev-tools">DevTools</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/storybook">Storybook</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/git">Git</Link>
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="dark:border-pink-900 border-pink-400" />
      <aside
        aria-label="Related articles"
        className="py-8 bg-white dark:bg-gray-900 lg:py-16 antialiased"
      >
        <div className="px-4 mx-auto w-full max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Featured articles
          </h2>
          <div>
            <div className="relative">
              {groupedEdges.map((group, index) => (
                <div
                  key={index}
                  className="bg-white duration-700 ease-in-out dark:bg-gray-900 mb-4"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.map(({ node }) => (
                      <article
                        key={node.fields.slug}
                        className="relative p-4 mx-auto w-full bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800"
                      >
                        <Ribbon>#{node.fields.number}</Ribbon>
                        <Link to={node.fields.slug}>
                          <Thumbnail {...node.fields.hero} />
                        </Link>
                        <div className="flex items-center mb-3 space-x-2">
                          <StaticImage
                            className="w-8 h-8 rounded-full"
                            src="../images/avatar.png"
                            alt="Clarice Bouwer"
                          />
                          <div className="font-medium dark:text-white">
                            <div>Clarice Bouwer</div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                              <Metadata
                                date={node.fields.date}
                                timeToRead={node.timeToRead}
                                type={node.fields.type}
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="mb-2 text-xl font-bold tracking-tighter text-gray-900 lg:text-2xl dark:text-white">
                          <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                          </Link>
                        </h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                          {node.excerpt}
                        </p>
                        <Link
                          to={node.fields.slug}
                          className="inline-flex items-center font-medium
                          text-primary-600 hover:text-blue-800
                          dark:text-primary-500 hover:dark:text-blue-600 hover:no-underline"
                        >
                          {' '}
                          Read more{' '}
                          <svg
                            className="mt-px ml-1 w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    latestArticles: allMarkdownRemark(
      limit: 25
      sort: { fields: { date: DESC } }
      filter: { fields: { type: { in: ["article", "scribble"] } } }
    ) {
      edges {
        node {
          fields {
            slug
            number
            hero {
              component
              image
              credit
              source
              link
            }
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    featuredArticles: allMarkdownRemark(
      limit: 9
      sort: { fields: { date: DESC } }
      filter: {
        fields: { type: { in: ["article", "scribble"] } }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM YYYY")
            number
            type
            hero {
              component
              image
              credit
              source
              link
            }
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          url
          twitter
        }
        brand
        description
        keywords
        lang
        title
        siteUrl
      }
    }
  }
`;

export default IndexPage;

export const Head = ({ location, params, data }) => {
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle="A programmer's quest for knowledge"
      siteTitle={siteMetadata.title}
      shareImage="unicorn-laptop.webp"
      location={location}
      params={params}
    />
  );
};

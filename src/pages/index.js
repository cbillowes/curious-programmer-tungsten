import React from 'react';
import unicornLaptop from '@images/unicorn-laptop-xmas.webp';
import profile from '@images/clarice.webp';
import cloudsure from '@images/cloudsure.webp';
import clojure from '@images/clojure.webp';
import mauritius from '@images/mauritius.webp';
import southafrica from '@images/south-africa.webp';
import coffee from '@images/coffee.svg';
import Layout from '@components/layout';
import { Link } from 'gatsby';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const IndexPage = () => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900 py-32">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Curiosity is the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-green-400">
                secret sauce
              </span>{' '}
              for Software Engineers 🚀
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
              compass in the ever-expanding universe of software magic! 🌐 🦄 💻
            </p>
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
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
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
            <img
              src={unicornLaptop}
              className="rw-96 h-96 object-cover"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <hr className="border-pink-900" />
      <section class="bg-gradient-to-tl to-pink-950 from-pink-600 py-16">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <img
            src={profile}
            alt="Clarice Bouwer"
            className="bg-white w-64 h-64 mx-auto shadow-lg object-cover rounded-full p-2"
          />
          <h2 class="mt-8 mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
            My name is Clarice Bouwer
          </h2>
          <p className="max-w-2xl mx-auto mb-4 lg:mb-16 text-center font-light md:text-lg lg:text-xl text-gray-50">
            I am a Software Engineering Team Lead in the Financial Sector, and
            Director at Cloudsure Limited based in Mauritius.
          </p>
          <div class="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-8 dark:text-gray-400">
            <a
              href="https://github.com/cbillowes"
              class="flex justify-center items-center text-5xl hover:-mt-4"
            >
              <FaGithub className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/cbouwer/"
              class="flex justify-center items-center text-5xl hover:-mt-4"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://stackoverflow.com/users/849986/clarice-bouwer"
              class="flex justify-center items-center text-5xl hover:-mt-4"
            >
              <FaStackOverflow className="text-white" />
            </a>
            <a
              href="https://www.buymeacoffee.com/cbillowes"
              class="flex justify-center items-center text-5xl hover:-mt-4"
            >
              <img src={coffee} alt="Buy me a coffee" className="h-11" />
            </a>
            <a
              href="https://www.cloudsure.mu"
              class="flex justify-center items-center hover:-mt-4"
            >
              <img src={cloudsure} alt="Cloudsure" className="h-11" />
            </a>
            <a
              href="https://clojure.org/"
              class="flex justify-center items-center hover:-mt-4"
            >
              <img src={clojure} alt="Clojure" className="h-11" />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Mauritius"
              class="flex justify-center items-center hover:-mt-4"
            >
              <img src={mauritius} alt="Mauritius" className="h-11" />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/South_Africa"
              class="flex justify-center items-center hover:-mt-4"
            >
              <img src={southafrica} alt="South Africa" className="h-11" />
            </a>
          </div>
        </div>
      </section>
      <hr className="dark:border-pink-900 border-pink-400" />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mt-8 mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
              I share what I learn
            </h2>
            <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              I'm on a perpetual learning journey, and I love sharing the gems I
              uncover along the way. Knowledge is power, but sharing it? That's
              the real magic! ✨
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 bg-primary-100 rounded dark:bg-primary-900 lg:h-16 lg:w-16">
                <svg
                  class="w-5 h-5 text-primary-600 dark:text-primary-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Soft Skills
              </h3>
              <ul role="list" class="my-6 lg:mb-0 space-y-4">
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags/mindset">Mindset</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags/relationships">Relationships</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags/communication">Communication</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags/productivity">Productivity</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags/personal-brand">Personal brand</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 bg-purple-100 rounded dark:bg-purple-900 lg:h-16 lg:w-16">
                <svg
                  class="w-5 h-5 text-purple-600 dark:text-purple-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Software Engineering
              </h3>
              <ul role="list" class="my-6 lg:mb-0 space-y-4">
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/java-script">JavaScript</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/clojure">Clojure</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/clojure-script">ClojureScript</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/react">React</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 bg-teal-100 rounded dark:bg-teal-900 lg:h-16 lg:w-16">
                <svg
                  class="w-5 h-5 text-teal-600 dark:text-teal-300 lg:w-8 lg:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white text-gray-900">
                Engineering Toolkit
              </h3>
              <ul role="list" class="my-6 lg:mb-0 space-y-4">
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/visual-studio-code">Visual Studio Code</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/mac-os">MacOS</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/dev-tools">DevTools</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/storybook">Storybook</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tag/git">Git</Link>
                  </span>
                </li>
                <li class="flex space-x-2.5">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400">
                    <Link to="/tags">...and more</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

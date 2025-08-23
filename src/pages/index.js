import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '@components/head';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Ribbon from '@components/ribbon';
import Promo from '@components/promo';

const IndexPage = ({ data }) => {
  const { featuredArticles, latestArticles } = data;
  const edges = featuredArticles.edges;

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
              for my
              <br />
              adventure
              <StaticImage
                src="../images/rocket.png"
                alt="Rocket emoji"
                className="inline-block w-16 h-16 ml-4"
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              I'm a passionate developer, fueled by an insatiable thirst for
              knowledge, boldly tinkering with new tech, diving in to best
              practices, and unraveling mysteries of code and algorithms.
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
          <p className="max-w-4xl mx-auto mb-4 text-center font-light md:text-lg lg:text-xl text-gray-50">
            Software Engineering Team Lead & Director at Cloudsure Limited in
            Mauritius (born in South Africa), absolutely loving the art of
            sharing knowledge dishing out byte-sized chunks of wisdom to the
            development community and essays where my mind tends to wander.
          </p>
          <p className="max-w-4xl mx-auto mb-8 lg:mb-16 text-center font-light md:text-lg lg:text-xl text-gray-50">
            With a passion for Clojure(Script), Git, GCP, TypeScript, Next.js,
            Gatsby, DevTools, and more, I navigate the tech landscape like a pro
            in the making. But it’s not all solo scripting—I thrive on working
            with people and leading by example, making collaboration as
            thrilling as successful debugging. Always eager to explore and
            enlighten, I try to embody the spirit of a true tech enthusiast!
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
              href="https://dly.to/1L0EwBOqg4w"
              className="flex justify-center items-center hover:scale-125 transition-all duration-300"
            >
              <svg
                viewBox="0 0 32 18"
                xmlns="http://www.w3.org/2000/svg"
                className="h-logo"
              >
                <g className="fill-white" fill-rule="nonzero">
                  <path
                    d="M26.633 8.69l-3.424-3.431 1.711-3.43 5.563 5.575c.709.71.709 1.861 0 2.572l-6.847 6.86c-.709.711-1.858.711-2.567 0a1.821 1.821 0 010-2.571l5.564-5.575z"
                    fill-opacity="0.64"
                  ></path>
                  <path d="M21.07.536a1.813 1.813 0 012.568 0l1.283 1.286L9.945 16.83c-.709.71-1.858.71-2.567 0l-1.284-1.287L21.071.536zm-6.418 4.717l-2.567 2.572-3.424-3.43-4.28 4.288 3.424 3.43-1.71 3.43L.531 9.97a1.821 1.821 0 010-2.572L7.378.537A1.813 1.813 0 019.945.535l4.707 4.717z"></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 72 18"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-logo"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M2.636 5.892v5.827h3.201l.678 1.943H2.636A1.94 1.94 0 01.7 11.719V5.892A1.94 1.94 0 012.636 3.95h3.201v1.942h.678V2.007a.97.97 0 01.97-.971h.969v11.655a.97.97 0 01-.97.97h-.969V5.893H2.636zm9.692 7.77a1.94 1.94 0 01-1.936-1.943V9.777a1.94 1.94 0 011.936-1.942h3.201v1.942h.678V5.892h-5.33v-.971a.97.97 0 01.967-.971h4.363c1.071 0 1.939.87 1.939 1.942v6.799a.97.97 0 01-.97.97h-.969V9.778h-3.879v1.942h3.201l.678 1.943h-3.879zm7.756 0V4.92a.97.97 0 01.968-.971h.968v8.74a.97.97 0 01-.968.972h-.968zM22.02 2.014c0 .27-.093.499-.278.685a.927.927 0 01-.683.28c-.27 0-.5-.094-.69-.28a.923.923 0 01-.285-.685c0-.28.095-.513.285-.699.19-.186.42-.279.69-.279.27 0 .497.093.683.28a.95.95 0 01.278.698zm1.941 11.648V2.007a.97.97 0 01.968-.971h.968v11.655a.97.97 0 01-.968.97h-.968zm6.532.004l-2.613-8.22a.976.976 0 01.65-1.212l.92-.284 2.132 6.98 1.92-6.293a.96.96 0 011.201-.645l.888.284L32.3 15.201c-.248.816-1 1.374-1.85 1.374h-1.601a.97.97 0 01-.968-.97v-.972h1.609c.533 0 1.002-.432 1.004-.967z"
                    className="fill-white"
                  ></path>
                  <path
                    d="M38.75 13.788v-1.372h-1.408v1.372h1.407zm4.21.09c.683 0 1.261-.17 1.735-.513.473-.342.804-.8.992-1.372v1.795h1.165V4.297h-1.165v4.245a2.674 2.674 0 00-.992-1.372c-.474-.342-1.052-.513-1.734-.513-.623 0-1.178.145-1.664.436-.487.29-.869.71-1.146 1.257-.277.547-.416 1.189-.416 1.924 0 .735.139 1.374.416 1.917.277.543.66.96 1.146 1.251.486.29 1.04.436 1.664.436zm.333-1.026c-.716 0-1.29-.229-1.721-.686-.431-.458-.647-1.088-.647-1.892 0-.804.216-1.434.647-1.892.43-.457 1.005-.686 1.721-.686.461 0 .873.105 1.235.314.363.21.647.511.852.904.204.394.307.847.307 1.36 0 .513-.103.964-.307 1.353a2.23 2.23 0 01-.852.904c-.362.214-.774.321-1.235.321zm8.525 1.026c.589 0 1.118-.107 1.587-.32.47-.214.851-.514 1.146-.898a2.96 2.96 0 00.57-1.309h-1.242a1.777 1.777 0 01-.698 1.148c-.38.287-.851.43-1.414.43-.623 0-1.15-.201-1.581-.603-.431-.402-.66-1.005-.685-1.808h5.62c.033-.18.05-.394.05-.642a3.29 3.29 0 00-.403-1.616 3 3 0 00-1.165-1.167c-.507-.29-1.103-.436-1.785-.436-.674 0-1.272.145-1.792.436-.52.29-.928.71-1.222 1.257-.295.547-.442 1.189-.442 1.924 0 .735.147 1.374.442 1.917.294.543.701.96 1.222 1.251.52.29 1.118.436 1.792.436zm2.176-3.925H49.5c.034-.77.269-1.353.704-1.75.435-.398.973-.597 1.613-.597.4 0 .772.086 1.113.257.342.17.61.431.807.782.196.35.281.787.256 1.308zm6.105 3.835l2.752-7.041h-1.254l-2.176 5.797-2.202-5.797h-1.254l2.752 7.041h1.382z"
                    fill-opacity="0.64"
                    className="fill-white"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
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
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:gap-12 md:space-y-0">
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
            <div>
              <StaticImage
                src="../images/dailydev.webp"
                alt="Register for daily.dev"
                className="h-[270px] w-[205px] bg-white rounded-lg dark:bg-gray-800 border-8 border-white"
              />
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
              <div className="bg-white duration-700 ease-in-out dark:bg-gray-900 mb-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {edges.map(({ node }) => (
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

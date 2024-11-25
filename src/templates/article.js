import React from 'react';
import { graphql } from 'gatsby';
import Seo from '@components/head';
import Layout from '@components/layout';
import Thumbnail from '@components/thumbnail';
import Tags from '@components/tags';
import Metadata from '@components/metadata';
import Type from '@components/type';
import Backdrop from '@components/backdrop';
import Subscribe from '@components/subscribe';
import { getKeywords } from '@common/seo';
import { StaticImage } from 'gatsby-plugin-image';
import {
  FaFacebook,
  FaHackerNewsSquare,
  FaLinkedin,
  FaMastodon,
  FaRedditSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { FaBluesky, FaSquareThreads, FaTelegram } from 'react-icons/fa6';

export const query = graphql`
  query ArticleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
      excerpt
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY")
        type
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
        cover
        title
        tags
        date
        abstract
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

const ArticleTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { timeToRead, html, fields, frontmatter } = markdownRemark;
  const encodedUrl = encodeURIComponent(
    `${data.site.siteMetadata.siteUrl}${fields.slug}`,
  );
  const encodedTitle = encodeURIComponent(frontmatter.title);

  return (
    <Layout
      showComments
      baseRoute={`/blog/${frontmatter.date.split('-')[0]}`}
      group="Blog"
    >
      <div>
        <Thumbnail {...fields.hero} isHero />
        <div className="relative">
          <Backdrop />
          <div className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-2 lg:mb-4 not-format">
                  <Type type={fields.type} to="/blog" number={fields.number} />
                  <h1 className="text-5xl font-extrabold tracking-tighter lg:mb-6 lg:text-7xl text-center dark:text-white mx-auto max-w-5xl">
                    {frontmatter.title}
                  </h1>
                  <div className="text-center">
                    <Tags
                      tags={frontmatter.tags}
                      redirect={true}
                      isButton={true}
                    />
                  </div>
                  <address className="flex items-center mt-8 mb-6 not-italic max-w-2xl mx-auto">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <StaticImage
                        className="mr-4 w-16 h-16 rounded-full"
                        src="../images/avatar.png"
                        alt="Clarice Bouwer"
                      />
                      <div>
                        <a
                          href="/about"
                          rel="author"
                          className="text-xl font-bold text-gray-900 dark:text-white"
                        >
                          Clarice Bouwer
                        </a>
                        <p className="font-medium tracking-tight text-base text-gray-500 dark:text-gray-400">
                          Software Engineering Team Lead and Director of
                          Cloudsure
                        </p>
                        <div>
                          <Metadata
                            timeToRead={timeToRead}
                            date={fields.date}
                            type={fields.type}
                          />
                        </div>
                      </div>
                    </div>
                  </address>
                </header>
                <section
                  id="article"
                  className="max-w-3xl mx-auto"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </article>
            </div>
            <section className="mt-8 p-8">
              <h2 className="mb-8 mx-2 text-center">Share this article on…</h2>
              <ul className="flex gap-8 justify-center items-center flex-wrap w-full">
                <li>
                  <a
                    href={`https://tootpick.org/#text=${encodedTitle}%20-%20${encodedUrl}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-full border-2 border-transparent hover:border-white"
                  >
                    <FaMastodon className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#1877F2] hover:dark:text-[#1877F2]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-full border-2 border-transparent hover:border-white"
                  >
                    <FaFacebook className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#1877F2] hover:dark:text-[#1877F2]" />
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-md border-2 border-transparent"
                  >
                    <FaLinkedin className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#0077B5] hover:dark:text-[#0077B5]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://bsky.app/intent/compose?text=${encodedTitle}%20-%20${encodedUrl}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block border-2 border-transparent"
                  >
                    <FaBluesky className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#0085ff] hover:dark:text-[#0085ff]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.threads.net/intent/post?url=${encodedUrl}&amp;text=${encodedTitle}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-md border-2 border-transparent"
                  >
                    <FaSquareThreads className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#000000] hover:dark:text-[#000000]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.reddit.com/submit?url=${encodedUrl}&amp;title=${encodedTitle}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-md border-2 border-transparent"
                  >
                    <FaRedditSquare className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#FF4500] hover:dark:text-[#FF4500]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://news.ycombinator.com/submitlink?u=${encodedUrl}&amp;t=${encodedTitle}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-md border-2 border-transparent"
                  >
                    <FaHackerNewsSquare className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#fd6600] hover:dark:text-[#fd6600]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send/?text=${encodedUrl}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-md border-2 border-transparent"
                  >
                    <FaWhatsappSquare className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#075E54] hover:dark:text-[#075E54]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://telegram.me/share/url?url=${encodedUrl}&amp;text=${encodedTitle}`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="block hover:bg-white rounded-full border-2 border-transparent hover:border-white"
                  >
                    <FaTelegram className="text-4xl text-gray-700 dark:text-gray-200 hover:text-[#24A1DE] hover:dark:text-[#24A1DE]" />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <section id="subscribe" className="bg-gray-100 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-3xl sm:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Subscribe to my newsletter
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Get notified monthly about any new articles, tutorials, and
              courses. I promise to keep the emails short and sweet, and never
              spam you.
            </p>
            <Subscribe referrer={frontmatter.title} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleTemplate;

export const Head = ({ location, params, data }) => {
  const { site, markdownRemark } = data;
  const { siteMetadata } = site;
  const { excerpt, html, fields, frontmatter } = markdownRemark;
  const { title, abstract } = frontmatter;
  const keywords = getKeywords(html);

  return (
    <Seo
      {...siteMetadata}
      pageTitle={title}
      siteTitle={siteMetadata.title}
      description={abstract || excerpt || siteMetadata.description}
      keywords={frontmatter.keywords || keywords}
      shareImage={fields.hero.image}
      pageType="article"
      location={location}
      params={params}
    />
  );
};

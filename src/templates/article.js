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
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <section id="subscribe" className="bg-gray-100 dark:bg-gray-800">
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

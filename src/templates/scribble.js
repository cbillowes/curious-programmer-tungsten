import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '@components/head';
import Layout from '@components/layout';
import Tags from '@components/tags';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Type from '@components/type';
import Backdrop from '@components/backdrop';
import { getKeywords } from '@common/seo';

export const query = graphql`
  query ScribblesTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY")
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
        devTo
        cover
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

const ScribblesTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { html, timeToRead, fields, frontmatter } = markdownRemark;

  return (
    <Layout showComments baseRoute="/scribbles">
      <div>
        <Thumbnail {...fields.hero} isHero />
        <div className="relative">
          <Backdrop />
          <div className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-2 lg:mb-4 not-format">
                  <Type type={fields.type} to="/blog" number={fields.number} />
                  <h1 className="text-5xl font-extrabold tracking-tighter lg:mb-6 lg:text-6xl text-center dark:text-white mx-auto max-w-5xl">
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
                  className="max-w-2xl mx-auto"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScribblesTemplate;

export const Head = ({ location, params, data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, frontmatter } = markdownRemark;
  const { title, description } = site.siteMetadata;
  const { cover } = frontmatter;
  const keywords = getKeywords(excerpt);
  return (
    <Seo
      {...site.siteMetadata}
      pageTitle={frontmatter.title}
      siteTitle={title}
      description={excerpt || description}
      keywords={keywords}
      pageType="article"
      shareImage={cover}
      location={location}
      params={params}
    />
  );
};

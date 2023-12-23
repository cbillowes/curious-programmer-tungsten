import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { MdOutlineSchool } from 'react-icons/md';
import { getKeywords } from '@common/seo';
import Layout from '@components/layout';
// import CommentSystem from '@components/CommentSystem';
import Anchor from '@components/anchor';
import Metadata from '@components/metadata';
import Thumbnail from '@components/thumbnail';
import Backdrop from '@components/backdrop';
import Tags from '@components/tags';

// gatsby-remark-embed-gist
import '../styles/gist/common.scss';
import '../styles/gist/dark.scss';
import '../styles/gist/light.scss';

// gatsby-remark-interactive-gifs
import '../styles/interactive-gifs.scss';

// gatsby-remark-prismjs
import '../styles/prismjs/dark.scss';
import '../styles/prismjs/light.scss';
import classNames from 'classnames';

export const query = graphql`
  query ChaptersTemplateQuery($parent: String!, $slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY")
        type
      }
      frontmatter {
        title
        abstract
        cover
        parent
        date
        modified
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { parent: { eq: $parent } } }
      sort: { fileAbsolutePath: ASC }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            abstract
          }
          fields {
            slug
          }
        }
      }
    }
    courses: markdownRemark(fields: { slug: { eq: $parent } }) {
      fields {
        hero {
          component
          image
          credit
          source
          link
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
        url
      }
    }
  }
`;

const Navigation = ({ previous, next, toggleToc }) => {
  return (
    <div className="uppercase text-center my-3 opacity-40 flex justify-between items-center">
      <Anchor to={previous} className={`w-40 ${previous ?? 'invisible'}`}>
        &larr; Previous
      </Anchor>
      <div>
        <Anchor to="/courses" className="hidden md:inline" title="Courses">
          <MdOutlineSchool
            className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
            alt="Courses"
          />
          Courses /{' '}
        </Anchor>{' '}
        <button className="cursor-pointer uppercase" onClick={toggleToc}>
          Table of Contents
        </button>
      </div>
      <Anchor to={next} className={`w-40 ${next ?? 'invisible'}`}>
        Next &rarr;
      </Anchor>
    </div>
  );
};

const ChaptersTemplate = ({ data, pageContext }) => {
  const { markdownRemark, allMarkdownRemark, site } = data;
  const { page, total, next, previous, courseTitle } = pageContext;
  const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
  const { title, description } = site.siteMetadata;
  const {
    title: chapterTitle,
    date,
    modified,
    parent,
    abstract,
    cover,
  } = frontmatter;
  const keywords = getKeywords(excerpt);
  const [showToc, toggleToc] = useState(false);

  return (
    <div className="min-h-screen">
      <Layout
        showComments
        className={showToc ? 'blur' : ''}
        meta={{
          ...data.site.siteMetadata,
          pageTitle: `${chapterTitle} - ${courseTitle}`,
          siteTitle: title,
          description: excerpt || description,
          keywords,
          pageType: 'article',
          cover,
          route: '/courses',
        }}
      >
        <Thumbnail {...data.courses.fields.hero} />
        <div className="relative">
          <Backdrop />
          <div className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-2 lg:mb-4 not-format">
                  <Navigation
                    previous={previous}
                    next={next}
                    toggleToc={() => toggleToc(!showToc)}
                  />
                  <h1 className="text-5xl font-extrabold tracking-tight lg:mb-6 lg:text-6xl text-center mx-auto max-w-5xl">
                    {frontmatter.title}
                  </h1>
                  <div className="text-center">
                    {page && total && (
                      <div>
                        Page {parseInt(page, 10)} out of {total}
                      </div>
                    )}
                    {abstract && (
                      <p className="mt-2 max-w-3xl mx-auto">{abstract}</p>
                    )}
                  </div>
                  <div className="text-center">
                    <Tags
                      tags={frontmatter.tags}
                      redirect={true}
                      isButton={true}
                    />
                  </div>
                  <address className="flex items-center mt-8 mb-6 not-italic max-w-2xl mx-auto">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-4 w-16 h-16 rounded-full"
                        src={require('@images/avatar.png').default}
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
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          Software Engineering Team Lead and Director of
                          Cloudsure
                        </p>
                        <div>
                          <Metadata
                            timeToRead={timeToRead}
                            date={date}
                            modified={modified}
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
                <Navigation
                  previous={previous}
                  next={next}
                  toggleToc={() => toggleToc(!showToc)}
                />
              </article>
            </div>
          </div>
        </div>
      </Layout>
      <div
        className={classNames(
          `bg-black opacity-90 fixed top-0 left-0 right-0 bottom-0 z-50 text-white font-extralight text-2xl`,
          showToc ? `block` : `hidden`,
        )}
      >
        Hello
        <div className="bg-black fixed top-1/2 left-1/2 -translate-y-1/2 max-w-2xl -translate-x-1/2 p-8 rounded-lg shadow-lg bg-gradient-to-b from-color-3 to-color-2 z-50 w-2/3">
          <button
            className="absolute top-4 right-8 text-3xl opacity-60"
            onClick={() => toggleToc(false)}
          >
            &times;
          </button>
          <h2 className="toc text-3xl font-extrabold">
            <Anchor to="/courses" className="hidden md:inline" title="Courses">
              <MdOutlineSchool
                className="inline-block mr-2 text-4xl rounded"
                alt="Courses"
              />
              Courses /{' '}
            </Anchor>{' '}
            Table of Contents
          </h2>
          {allMarkdownRemark.edges.map(({ node }) => {
            const { title } = node.frontmatter;
            const { slug } = node.fields;
            const paths = slug.split(`/`);
            const page = paths[paths.length - 2];
            const isOnPage = fields.slug === slug;
            return (
              <div className="mt-2">
                <Anchor to={slug} title={title}>
                  <span
                    className={`hover:underline ${
                      isOnPage ? 'font-bold text-primary-600' : ''
                    }`}
                  >
                    {isOnPage && <>&#x25BA;</>} {page} - {title}
                  </span>
                </Anchor>
              </div>
            );
          })}
          <br />
          <div className="opacity-80">
            <Anchor
              to={parent}
              className="hover:underline"
              title="Back to the course"
            >
              &larr; Back to the course
            </Anchor>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaptersTemplate;

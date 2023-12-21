import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { MdOutlineSchool } from 'react-icons/md';
import { getKeywords } from '@common/seo';
import Layout from '@components/layout';
// import CommentSystem from '@components/CommentSystem';
import Anchor from '@components/anchor';
import Metadata from '@components/metadata';
import Type from '@components/type';
import Thumbnail from '@components/thumbnail';

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
      sort: { order: ASC, fields: fileAbsolutePath }
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
  const { title, description, url } = site.siteMetadata;
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
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: `${chapterTitle} - ${courseTitle}`,
        siteTitle: title,
        description: excerpt || description,
        keywords,
        pageType: 'article',
        route: fields.slug,
        cover,
      }}
    >
      <div id="article" className="pt-14 px-8 pb-24 max-w-screen-lg mx-auto">
        <Navigation
          previous={previous}
          next={next}
          toggleToc={() => toggleToc(!showToc)}
        />
        <div
          className={`bg-black opacity-[95%] fixed top-0 left-0 right-0 bottom-0 z-40 ${
            showToc ? 'block' : 'hidden'
          }`}
        >
          <div className="bg-color-1 text-color-1-script fixed top-1/2 left-1/2 -translate-y-1/2 max-w-2xl -translate-x-1/2 p-8 rounded-lg shadow-lg bg-gradient-to-b from-color-3 to-color-2 z-50 w-2/3">
            <button
              className="absolute top-4 right-8 text-3xl opacity-60"
              onClick={() => toggleToc(false)}
            >
              &times;
            </button>
            <h2 className="toc">
              <Anchor
                to="/courses"
                className="hidden md:inline"
                title="Courses"
              >
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
                        isOnPage ? 'font-bold' : ''
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
        <Thumbnail {...data.courses.fields.hero} />
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {chapterTitle}
        </h1>
        <Type type="course" to="/courses" />
        <Metadata
          timeToRead={timeToRead}
          created={date}
          modified={modified}
          abstract={abstract}
          page={page}
          totalPages={total}
        />
        <hr />
        <div
          className="content max-w-3xl mx-auto mt-8"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Navigation
          previous={previous}
          next={next}
          toggleToc={() => toggleToc(!showToc)}
        />
        {/* <CommentSystem
          url={`${url}${fields.slug}`}
          identifier={fields.slug}
          title={chapterTitle}
        /> */}
      </div>
    </Layout>
  );
};

export default ChaptersTemplate;

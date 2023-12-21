import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Preview from '@components/preview';

const BlogPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Blog',
        siteTitle: title,
        route: '/blog',
      }}
    >
      <section className="py-8 lg:py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Blog
        </h1>
        <div className="mx-auto max-w-screen-xl">
          {edges.map((edge, index) => {
            const { node } = edge;
            const { frontmatter, fields, excerpt, timeToRead } = node;
            const { title, tags } = frontmatter;
            const { slug, number, hero, date, type } = fields;
            return (
              <Preview
                key={number}
                index={index}
                number={number}
                slug={slug}
                title={title}
                date={date}
                timeToRead={timeToRead}
                excerpt={excerpt}
                tags={tags}
                hero={hero}
                type={type}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      sort: { fields: { number: DESC } }
      filter: { fields: { type: { eq: "article" } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
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
        url
      }
    }
  }
`;

export default BlogPage;

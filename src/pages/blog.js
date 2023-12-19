import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Preview from '@components/preview';

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const edges = allMarkdownRemark.edges;
  return (
    <Layout>
      <section className="py-8 lg:py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative border-gray-200 dark:border-gray-700 mx-auto max-w-screen-xl dark:text-gray-100 text-gray-900">
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
  }
`;

export default BlogPage;

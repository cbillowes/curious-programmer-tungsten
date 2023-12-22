import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Preview from '@components/preview';

const TagTemplate = ({ data, pageContext }) => {
  const { allMarkdownRemark, site } = data;
  const { tag } = pageContext;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;
  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: `More about ${tag}`,
        siteTitle: title,
        description: `A collection of articles, tutorials, and other things related to ${tag}.`,
        route: '/tags',
      }}
    >
      <section className="py-8 lg:py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative border-gray-200 dark:border-gray-700 mx-auto max-w-screen-xl dark:text-gray-100 text-gray-900">
          <h1 className="text-center text-5xl font-bold mb-0 mt-5 tracking-tight">
            All things related to <span className="text-pink-600">{tag}</span>
          </h1>
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
  query TagTemplateQuery($tag: String!) {
    allMarkdownRemark(
      filter: {
        fields: { slug: { nin: "/blog/example/" } }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { order: DESC, fields: fields___date }
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

export default TagTemplate;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Articles from '@components/articles';

const numberTheEdges = (edges) => {
  return edges.map((edge, i) => {
    return Object.assign(edge.node, {
      node: {
        ...edge.node,
        fields: {
          ...edge.node.fields,
          number: edges.length - (i + 1),
        },
      },
    });
  });
};

const ScribblesPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = numberTheEdges(allMarkdownRemark.edges);
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Scribbles',
        siteTitle: title,
      }}
    >
      <section className="py-8 md:py-16 px-4">
        <Backdrop />
        <div className="mx-auto pb-5">
          <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Scribbles
          </h1>
          <Articles edges={edges} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ScribblesPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___date }
      filter: { fields: { type: { eq: "scribbles" } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM yyyy")
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
        url
      }
    }
  }
`;

export default ScribblesPage;

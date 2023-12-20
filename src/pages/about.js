import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Intro from '@components/about/intro';
import Brands from '@components/about/brands';
import Achievements from '@components/about/achievements';
import Attributes from '@components/about/attributes';
import Articles from '@components/about/articles';
import References from '@components/about/references';
import Backdrop from '@components/backdrop';

const AboutPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const { title } = site.siteMetadata;
  const edges = allMarkdownRemark.edges;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'My name is Clarice Bouwer',
        siteTitle: title,
        route: '/about',
      }}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
        <Backdrop />
        <Intro />
        <Brands />
        <Achievements />
        <Attributes />
        <References />
        <Articles edges={edges} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: fields___number }
      filter: {
        fields: { type: { in: ["article", "scribbles"] } }
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
        url
      }
    }
  }
`;

export default AboutPage;

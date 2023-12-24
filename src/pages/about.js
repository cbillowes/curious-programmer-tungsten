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
        description:
          'Obsessively passionate about Clojure(Script), Gatsby, and Git, I navigate the realms of financial services and code innovation.',
        siteTitle: title,
        route: '/about',
        path: '/about',
      }}
    >
      <section className="py-16 px-4">
        <Backdrop />
        <Intro />
        <Brands />
        <Achievements />
        <Attributes />
        <References />
        <Articles edges={edges} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: { number: DESC } }
      filter: {
        fields: { type: { in: ["article", "scribble"] } }
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

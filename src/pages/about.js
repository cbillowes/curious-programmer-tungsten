import React from 'react';
import { graphql } from 'gatsby';
import Seo from '@components/head';
import Layout from '@components/layout';
import Intro from '@components/about/intro';
import Brands from '@components/about/brands';
import Achievements from '@components/about/achievements';
import Attributes from '@components/about/attributes';
import Articles from '@components/about/articles';
import References from '@components/about/references';
import Backdrop from '@components/backdrop';

const AboutPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const edges = allMarkdownRemark.edges;

  return (
    <Layout baseRoute="/about">
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
      sort: { fields: { date: DESC } }
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
        siteUrl
      }
    }
  }
`;

export default AboutPage;

export const Head = ({ location, params, data }) => {
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle="My name is Clarice Bouwer"
      siteTitle={siteMetadata.title}
      description="Obsessively passionate about Clojure(Script), Gatsby, and Git, I navigate the realms of financial services and code innovation."
      shareImage="clarice-bouwer.webp"
      location={location}
      params={params}
    />
  );
};

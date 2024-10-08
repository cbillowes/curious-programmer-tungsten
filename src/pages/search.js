import React from 'react';
import { graphql } from 'gatsby';

const SearchPage = ({ data: { pages, images } }) => {
  const imgs = images.edges.map(({ node }) => node.fixed);
  const json = JSON.stringify(
    pages.edges.map(({ node }) => {
      const { cover, share } = node.frontmatter;
      const domain = 'https://curiousprogrammer.dev';
      const img = imgs.find((i) =>
        [cover, share].includes(i.originalName),
      )?.src;
      const imgSrc = `${domain}${img}`;
      const imgDefault = `${domain}${
        imgs.find((i) => i.originalName === 'unicorn-laptop.webp').src
      }`;
      // Pick either the static image of the cover in GraphQL or use the absolute image which is typically an external URL
      const imageUrl = img ? imgSrc : node.frontmatter.cover || imgDefault;
      return {
        ...node,
        imageUrl,
      };
    }),
    null,
    2,
  );

  return <pre>{json}</pre>;
};

export const query = graphql`
  {
    pages: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            cover
            share
          }
          fields {
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
    images: allImageSharp {
      edges {
        node {
          fixed {
            originalName
            src
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

export default SearchPage;

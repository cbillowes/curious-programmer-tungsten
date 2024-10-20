const escapeStringRegexp = require('escape-string-regexp');
const pagePath = `blogs`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          tags
          cover
          share
          abstract
        }
        fields {
          slug
          type
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
}`;

function pageToAlgoliaRecord({ id, frontmatter, fields, ...rest }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

function pagesForAlgolia({ pages, images }) {
  const imgs = images.edges.map(({ node }) => node.fixed);
  return pages.edges.map(({ node }) => {
    const { cover, share } = node.frontmatter;
    const domain = 'https://curiousprogrammer.dev';
    const img = imgs.find((i) => [cover, share].includes(i.originalName))?.src;
    const imgSrc = `${domain}${img}`;
    const imgDefault = `${domain}${
      imgs.find((i) => i.originalName === 'unicorn-laptop.webp').src
    }`;
    // Pick either the static image of the cover in GraphQL or use the absolute image which is typically an external URL
    const imageUrl = img ? imgSrc : node.frontmatter.cover || imgDefault;
    return pageToAlgoliaRecord({
      ...node,
      imageUrl,
    });
  });
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => pagesForAlgolia(data),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;

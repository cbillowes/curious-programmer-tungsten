import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Tags from '@components/tags';

const getTags = (edges) => {
  const tags = [];
  if (edges && edges.length > 0) {
    edges.forEach(({ node }) => {
      tags.push(...(node?.frontmatter?.tags || []));
    });
  }
  return tags.reduce((acc, curr) => {
    const existingTag = acc.find((tag) => tag.value === curr);
    if (existingTag) {
      existingTag.count += 1;
    } else {
      acc.push({ value: curr, count: 1 });
    }
    return acc;
  }, []);
};

const TagsPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;
  const tags = getTags(edges);

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        description:
          'Choose from one of more tags used to categorize and help discover articles more.',
        keywords: 'technical, gatsby, git, blog, software development',
        pageTitle: 'Tags used throughout the blog',
        siteTitle: title,
        route: '/tags',
      }}
    >
      <div className="bg-gray-100 dark:bg-gray-900">
        <Backdrop />
        <div className="py-24">
          <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            All the things
          </h1>
          <div className="max-w-screen-md mx-auto p-4">
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___number }
      filter: { fields: { type: { in: ["article", "scribbles"] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
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

export default TagsPage;

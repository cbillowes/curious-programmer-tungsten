import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { graphql, navigate } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import _ from 'lodash';

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
        keywords: tags
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)
          .map((tag) => tag.value.toLowerCase())
          .join(', '),
        pageTitle: 'Tags for all the things',
        siteTitle: title,
        route: '/tags',
      }}
    >
      <div className="py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          All the things
        </h1>
        <div className="max-w-screen-md mx-auto p-4">
          <TagCloud
            minSize={14}
            maxSize={64}
            tags={tags}
            className="font-bold flex flex-wrap items-center justify-center gap-4 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r dark:to-blue-600 dark:from-green-400 to-blue-600 from-pink-600"
            disableRandomColor={true}
            onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      sort: { fields: { number: DESC } }
      filter: { fields: { type: { in: ["article", "scribble", "course"] } } }
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

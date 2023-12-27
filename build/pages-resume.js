const path = require('path');
const template = `./src/templates/resume.js`;
const createPages = true;

const resumeQuery = async (graphql) => {
  return await graphql(`
    query ResumeBuildQuery {
      allMarkdownRemark(
        sort: { frontmatter: { slug: ASC } }
        filter: { fields: { type: { eq: "resume" } } }
      ) {
        edges {
          node {
            html
            excerpt
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create resume`);
    return;
  }
  const { createPage } = actions;
  await resumeQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create resume: ${result.errors}`);
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;

      createPage({
        path: `/resume/${slug}`,
        component: path.resolve(template),
        context: {
          slug,
        },
      });

      reporter.success(`create resume: ${slug}`);
    });
  });
};

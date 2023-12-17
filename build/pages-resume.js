const path = require('path');
const template = `./src/templates/resume.js`;
const createPages = true;

const resumeQuery = async (graphql) => {
  return await graphql(`
    query ResumeBuildQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___slug }
        filter: { fields: { type: { eq: "resume" } } }
      ) {
        edges {
          node {
            html
            excerpt
            frontmatter {
              slug
              resume {
                company
                name
              }
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
    reporter.success(`------------- Create all things resume [${edges.length}]:`);
    edges.forEach(({ node }) => {
      const { slug, resume } = node.frontmatter;

      createPage({
        path: `/resume/${slug}`,
        component: path.resolve(template),
        context: {
          slug,
        },
      });

      reporter.success(`create resume:{ ${resume.company || resume.name}: ${slug} }`);
    });
  });
};

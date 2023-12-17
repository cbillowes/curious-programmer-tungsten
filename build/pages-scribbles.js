const path = require('path');
const template = `./src/templates/scribbles.js`;
const createPages = true;

const scribblesQuery = async (graphql) => {
  return await graphql(`
    query ScribblesBuildQuery {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "scribbles" } } }
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
          }
        }
      }
    }
  `);
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create scribbles`);
    return;
  }
  const { createPage } = actions;
  await scribblesQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create scribbles: ${result.errors}`);
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    reporter.success(`------------- Create all things scribbles [${edges.length}]:`);
    edges.forEach(({ node }) => {
      const { slug, date } = node.fields;

      createPage({
        path: slug,
        component: path.resolve(template),
        context: {
          slug,
        },
      });

      reporter.success(`create scribbles: { ${slug}: ${date} }`);
    });
  });
};

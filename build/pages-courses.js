const path = require('path');
const template = `./src/templates/course.js`;
const createPages = true;

const coursesQuery = async (graphql) => {
  return await graphql(`
    query CoursesBuildQuery {
      allMarkdownRemark(filter: { fields: { type: { eq: "course" } } }) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              date
            }
            fields {
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
    reporter.warn(`off: create courses`);
    return;
  }
  const { createPage } = actions;

  await coursesQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create courses: ${result.errors}`);
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    reporter.success(
      `------------- Create all things courses [${edges.length}]:`,
    );

    edges.forEach(async ({ node }) => {
      const { slug } = node.fields;
      createPage({
        path: slug,
        component: path.resolve(template),
        context: {
          slug,
        },
      });

      reporter.success(`create course: { ${slug} }`);
    });
  });
};

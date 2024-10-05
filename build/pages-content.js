const path = require('path');
const createPages = true;

const contentQuery = async (graphql) => {
  return await graphql(`
    query ContentBuildQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { fields: { type: { in: ["article", "scribble", "course"] } } }
      ) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
              date
              type
            }
            frontmatter {
              title
              tags
              date
              description
            }
          }
        }
      }
    }
  `);
};

const getPreviousNode = (edges, index) => {
  const i = index === 0 ? edges.length - 1 : index - 1;
  return edges[i].node;
};

const getNextNode = (edges, index) => {
  const i = index === edges.length - 1 ? 0 : index + 1;
  return edges[i].node;
};

const getPiece = (edges, index) => {
  const { fields, fileAbsolutePath } = edges[index].node;
  return {
    number: index + 1,
    slug: fields.slug,
    date: fields.date,
    fileAbsolutePath,
    previous: getPreviousNode(edges, index),
    next: getNextNode(edges, index),
    type: fields.type, //TODO: is this correct?
  };
};

const getTemplate = (type) => {
  return `./src/templates/${type}.js`;
};

const createThePage = (createPage, edges, index, reporter) => {
  const { slug, date, previous, next, type } = getPiece(edges, index);
  const number = index + 1;

  createPage({
    path: slug,
    component: path.resolve(getTemplate(type)),
    context: {
      slug,
      date,
      number,
      previous,
      next,
    },
  });
  reporter.success(`create ${type}: [${number}] ${slug}`);
};

const createContentPages = (createPage, result, reporter) => {
  const edges = result.data.allMarkdownRemark.edges;
  edges.forEach((_, index) => {
    createThePage(createPage, edges, index, reporter);
  });
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create content`);
    return;
  }
  const { createPage } = actions;
  await contentQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create content: ${result.errors}`);
      return;
    }
    createContentPages(createPage, result, reporter);
  });
};

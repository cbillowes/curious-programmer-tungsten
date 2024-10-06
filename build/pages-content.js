const path = require('path');
const createPages = true;

const contentQuery = async (graphql) => {
  return await graphql(`
    query ContentBuildQuery {
      articles: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { fields: { type: { in: ["article"] } } }
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
              abstract
            }
          }
        }
      }
      scribbles: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { fields: { type: { in: ["scribble"] } } }
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
              abstract
            }
          }
        }
      }
      courses: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { fields: { type: { in: ["course"] } } }
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
              abstract
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
  const { articles, scribbles, courses } = result. data;

  articles.edges.forEach((_, index) => {
    createThePage(createPage, articles.edges, index, reporter);
  });
  reporter.success(`created ${articles.edges.length} articles`);

  scribbles.edges.forEach((_, index) => {
    createThePage(createPage, scribbles.edges, index, reporter);
  });
  reporter.success(`created ${scribbles.edges.length} scribbles`);

  courses.edges.forEach((_, index) => {
    createThePage(createPage, courses.edges, index, reporter);
  });
  reporter.success(`created ${courses.edges.length} courses`);
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

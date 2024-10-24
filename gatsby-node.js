const path = require('path');
const nodes = require('./build/nodes');
const thumbnails = require('./build/thumbnails');
const tags = require('./build/pages-tags');
const blog = require('./build/pages-blog');
const resume = require('./build/pages-resume');
const chapters = require('./build/pages-chapters');
const content = require('./build/pages-content');
const landingPages = require('./build/pages-landing-pages');

// The order of which nodes are processed is not guaranteed.
// To add numbers to each post, nodes need to be captured
// and processed sequentially by date
const markdownNodes = [];

/**
 * GATSBY API.
 * Events firing in the lifecycle
 * https://www.gatsbyjs.org/docs/actions/
 */

// This is the part where numbers and any other graphql fields can be added.
// https://www.gatsbyjs.org/docs/node-apis/#setFieldsOnGraphQLNodeType
exports.setFieldsOnGraphQLNodeType = ({ type, actions, reporter }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === 'MarkdownRemark') {
    nodes.applyNumbers(markdownNodes, createNodeField, reporter);
  }
};

// Generates a bunch of images and creates nodes for markdown files.
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions;
  nodes.createFields(node, createNodeField, reporter);
  thumbnails.createFields(node, createNodeField, reporter);
  if (node.internal.type === `MarkdownRemark`) {
    markdownNodes.push(node);
  }
};

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  await blog.create(actions, graphql, reporter);
  await tags.create(actions, graphql, reporter);
  await resume.create(actions, graphql, reporter);
  await chapters.create(actions, graphql, reporter);
  await content.create(actions, graphql, reporter);
  await landingPages.create(actions, graphql, reporter);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
      },
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@common': path.resolve(__dirname, 'src/common'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};

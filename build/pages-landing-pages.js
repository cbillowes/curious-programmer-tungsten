const path = require('path');
const createPages = true;

const createLandingPage = (createPage, reporter) => {
  const slug = "/";
  const landingPage = './src/pages/index.js';
  createPage({
    path: slug,
    component: path.resolve(landingPage),
    context: {
      slug,
    },
  });
  reporter.success(`create article: ${slug}`);
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create articles`);
    return;
  }
  const { createPage } = actions;
  createLandingPage(createPage, reporter);
};

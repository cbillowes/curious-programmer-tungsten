const path = require('path');
const template = `./src/templates/blog.js`;
const createPages = true;

const createThePage = (createPage, edges, year, reporter) => {
  createPage({
    path: `/blog/${year}`,
    component: path.resolve(template),
    context: {
      year,
    },
  });
  reporter.success(`create blog: ${year}`);
};

const createBlogPages = (createPage, result, reporter) => {
  const years = new Array(new Date().getFullYear() - 2016).fill(0);
  years.forEach((year) => {
    createThePage(createPage, edges, year, reporter);
  });
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create blog pages`);
    return;
  }
  const { createPage } = actions;
  await blogQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create blog pages: ${result.errors}`);
      return;
    }

    reporter.success('------------- Create all things blog pages:');
    createBlogPages(createPage, result, reporter);
  });
};

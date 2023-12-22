const path = require('path');
const template = `./src/templates/blog.js`;
const createPages = true;
const startAtYear = 2016;

const createThePage = (createPage, year, reporter) => {
  createPage({
    path: `/blog/${year}`,
    component: path.resolve(template),
    context: {
      year,
      startDate: `${year}-01-01`,
      endDate: `${year + 1}-01-01`,
    },
  });
  reporter.success(`create blog: ${year}`);
};

const createBlogPages = (createPage, reporter) => {
  const years = new Array(new Date().getFullYear() + 1 - startAtYear)
    .fill(0)
    .map((_, i) => startAtYear + i);
  years.forEach((year) => {
    createThePage(createPage, year, reporter);
  });
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create blog pages`);
    return;
  }

  const { createPage } = actions;
  reporter.success('------------- Create all things blog pages:');
  createBlogPages(createPage, reporter);
};

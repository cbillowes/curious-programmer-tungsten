const page = `../src/pages/index.js`;
const slug = `/`;
const create = true;

module.exports.create = (actions, reporter) => {
  if (!create) {
    reporter.warn(`off: create index page`);
    return;
  }
  const { createPage } = actions;
  createPage({
    path: slug,
    component: require.resolve(page),
    context: {
      slug,
    },
  });
  reporter.verbose(`create page: ${slug}`);
};

const { toTimestamp, getSlug } = require('./helpers');

exports.isArticle = (node) => {
  return node.fileAbsolutePath.indexOf('/articles/') > -1;
};

exports.isResume = (node) => {
  return node.fileAbsolutePath.indexOf('/resume/') > -1;
};

exports.isScribble = (node) => {
  return node.fileAbsolutePath.indexOf('/scribbles/') > -1;
};

exports.isCourse = (node) => {
  return (
    node.fileAbsolutePath.indexOf('/courses/') > -1 && node.frontmatter.index
  );
};

exports.isChapter = (node) => {
  return (
    node.fileAbsolutePath.indexOf('/courses/') > -1 && !node.frontmatter.index
  );
};

exports.markdownType = (node) => {
  if (this.isArticle(node)) return 'article';
  if (this.isResume(node)) return 'resume';
  if (this.isScribble(node)) return 'scribble';
  if (this.isCourse(node)) return 'course';
  if (this.isChapter(node)) return 'chapter';
  return '';
};

const canApplyNumbers = (node) => {
  return this.isArticle(node) || this.isScribble(node) || this.isCourse(node);
};

exports.applyNumbers = (nodes, createNodeField, reporter) => {
  const selectedOrderedNodes = nodes
    .filter((node) => canApplyNumbers(node))
    .sort((a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date));

  selectedOrderedNodes.forEach((node, index) => {
    const number = index + 1;

    createNodeField({
      node,
      name: `number`,
      value: number,
    });

    reporter.success(
      `node [${number}]: ${node.fields.slug}`,
    );
  });
};

const getDate = (date, path) => {
  try {
    return new Date(date || path.split('/').pop().substring(0, 10));
  } catch (e) {
    console.error(e);
  }
};

exports.createFields = (node, createNodeField, reporter) => {
  if (node.internal.type === `MarkdownRemark`) {
    const type = this.markdownType(node);
    const slug = getSlug(node.frontmatter, node.fileAbsolutePath, type);
    const date = getDate(node.frontmatter.date, node.fileAbsolutePath);

    if (canApplyNumbers(node)) {
      createNodeField({
        node,
        name: `number`,
        value: 0,
      });
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `date`,
      value: date,
    });

    createNodeField({
      node,
      name: 'type',
      value: type,
    });

    reporter.success(`node [${type}]: ${slug}`);
  }
};

const path = require('path');
const template = `./src/templates/chapters.js`;
const createPages = true;

const chaptersQuery = async (graphql) => {
  return await graphql(`
    query ChaptersBuildQuery {
      chapters: allMarkdownRemark(
        filter: { fields: { type: { eq: "chapter" } } }
        sort: { fields: { slug: ASC } }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              date
              parent
            }
            fields {
              slug
            }
          }
        }
      }
      courses: allMarkdownRemark(
        filter: { fields: { type: { eq: "course" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
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

const getChapters = (chapters, slug) => {
  return chapters.filter((chapter) => {
    return chapter.node.frontmatter.parent === slug;
  });
};

const createChapters = (createPage, course, chapters, totalPages, reporter) => {
  chapters.forEach(async ({ node }, index) => {
    const page = index < 10 ? `0${index + 1}` : (index + 1).toString();
    const { slug } = node.fields;
    const { parent } = node.frontmatter;
    const { title: courseTitle } = course.node.frontmatter;

    createPage({
      path: slug,
      component: path.resolve(template),
      context: {
        parent,
        courseTitle,
        slug,
        page,
        total: totalPages,
        next:
          index + 1 < totalPages ? chapters[index + 1].node.fields.slug : null,
        previous: index - 1 >= 0 ? chapters[index - 1].node.fields.slug : null,
      },
    });

    reporter.success(`create chapter [${page}/${totalPages}]: ${slug}`);
  });
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create course chapters`);
    return;
  }
  const { createPage } = actions;

  await chaptersQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create course chapters: ${result.errors}`);
      return;
    }

    const courses = result.data.courses.edges;

    courses.forEach(async (course) => {
      const chapters = getChapters(
        result.data.chapters.edges,
        course.node.fields.slug,
      );
      const totalPages = chapters.length;
      createChapters(createPage, course, chapters, totalPages, reporter);
    });
  });
};

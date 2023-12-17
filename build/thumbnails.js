const { toHeroImageComponent } = require('./helpers');

const thumbnails = [
  {
    cover: `default-01.jpg`,
    creditSource: `unsplash`,
    credit: `Arget`,
    creditLink: `https://unsplash.com/@arget`,
  },
  {
    cover: `default-02.jpg`,
    creditSource: `unsplash`,
    credit: `Kevin Ku`,
    creditLink: `https://unsplash.com/@ikukevk`,
  },
  {
    cover: `default-03.jpg`,
    creditSource: `unsplash`,
    credit: `Ilya Pavlov`,
    creditLink: `https://unsplash.com/@ilyapavlov`,
  },
  {
    cover: `default-04.jpg`,
    creditSource: `unsplash`,
    credit: `Vishnu R Nair`,
    creditLink: `https://unsplash.com/@vishnurnair`,
  },
  {
    cover: `default-05.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske`,
  },
  {
    cover: `default-06.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske`,
  },
  {
    cover: `default-07.jpg`,
    creditSource: `unsplash`,
    credit: `Dlanor S`,
    creditLink: `https://unsplash.com/@dlanor_s`,
  },
  {
    cover: `default-08.jpg`,
    creditSource: `unsplash`,
    credit: `Chris Ried`,
    creditLink: `https://unsplash.com/@cdr6934`,
  },
  {
    cover: `default-09.jpg`,
    creditSource: `unsplash`,
    credit: `Sai Kiran Anagani`,
    creditLink: `https://unsplash.com/@_imkiran`,
  },
  {
    cover: `default-10.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiskes`,
  },
];

const getRandomThumbnail = () => {
  const index = parseInt(Math.random() * thumbnails.length);
  return thumbnails[index];
};

exports.createFields = (node, createNodeField, reporter) => {
  if (node.internal.type === 'MarkdownRemark') {
    const random = getRandomThumbnail();
    const thumbnail = node.frontmatter;
    const { cover, creditSource, credit, creditLink } = thumbnail.cover
      ? thumbnail
      : random;

    createNodeField({
      node,
      name: `hero`,
      value: {
        component: '',
        image: cover,
        source: creditSource,
        link: creditLink,
        credit: credit,
        component: toHeroImageComponent(cover),
      },
    });
  }
};

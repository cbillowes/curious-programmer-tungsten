// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import { Layout } from '../components/Layout';
// import Thumbnail from '../components/Thumbnail';
// import Tags from '../components/Tags';
// import '../styles/article.scss';
// // gatsby-remark-embed-gist
// import '../styles/gist/common.scss';
// import '../styles/gist/dark.scss';
// import '../styles/gist/light.scss';
// // gatsby-remark-interactive-gifs
// import '../styles/interactive-gifs.scss';
// // gatsby-remark-prismjs
// import '../styles/prismjs/dark.scss';
// import '../styles/prismjs/light.scss';
// import CommentSystem from '../components/CommentSystem';
// import { getKeywords } from '../common/seo';
// import Metadata from '../components/Metadata';
// import Type from '../components/Type';

// export const query = graphql`
//   query ArticleTemplateQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       timeToRead
//       html
//       excerpt
//       fields {
//         slug
//         date(formatString: "dddd, DD MMMM YYYY")
//         type
//         number
//         hero {
//           component
//           image
//           credit
//           source
//           link
//         }
//       }
//       frontmatter {
//         cover
//         title
//         tags
//       }
//     }
//     site {
//       siteMetadata {
//         author {
//           name
//           url
//           twitter
//         }
//         brand
//         description
//         keywords
//         lang
//         title
//         url
//       }
//     }
//   }
// `;

// const ArticleTemplate = ({ data }) => {
//   const { markdownRemark, site } = data;
//   const { excerpt, timeToRead, html, fields, frontmatter } = markdownRemark;
//   const { title, description, url } = site.siteMetadata;
//   const keywords = getKeywords(html);

//   return (
//     <Layout
//       meta={{
//         ...data.site.siteMetadata,
//         keywords: frontmatter.keywords || keywords,
//         pageTitle: frontmatter.title,
//         siteTitle: title,
//         description: excerpt || description,
//         image: fields.hero.image,
//         pageType: 'article',
//         route: fields.slug,
//         cover: frontmatter.cover,
//       }}
//     >
//       <div id="article" className="pt-14 px-4 pb-24">
//         <div className="w-6/12 md:w-6/12 xl:w-4/12 mx-auto">
//           <Thumbnail {...fields.hero} />
//         </div>
//         <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
//           {frontmatter.title}
//         </h1>
//         <Type type={fields.type} to="/blog" number={fields.number} />
//         <Metadata timeToRead={timeToRead} date={fields.date} />
//         <div className="text-center">
//           <Tags tags={frontmatter.tags} redirect={true} isButton={true} />
//         </div>
//         <div
//           className="content max-w-3xl mx-auto mt-8"
//           // eslint-disable-next-line react/no-danger
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//         <CommentSystem
//           url={`${url}${fields.slug}`}
//           identifier={fields.slug}
//           title={title}
//         />
//       </div>
//     </Layout>
//   );
// };

// ArticleTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default ArticleTemplate;

import React from 'react';

const ArticleTemplate = ({ children }) => {
  return children;
};

export default ArticleTemplate;

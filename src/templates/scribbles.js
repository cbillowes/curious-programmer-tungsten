// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import { Layout } from '../components/Layout';
// import Tags from '../components/Tags';
// import { getKeywords } from '../common/seo';
// import CommentSystem from '../components/CommentSystem';
// import Thumbnail from '../components/Thumbnail';
// import Metadata from '../components/Metadata';
// import { FaDev } from 'react-icons/fa';
// import Anchor from '../components/Anchor';
// import Type from '../components/Type';

// export const query = graphql`
//   query ScribblesTemplateQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       timeToRead
//       fields {
//         slug
//         date(formatString: "dddd, DD MMMM YYYY")
//         type
//         hero {
//           component
//           image
//           credit
//           source
//           link
//         }
//       }
//       frontmatter {
//         title
//         tags
//         devTo
//         cover
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

// const ScribblesTemplate = ({ data }) => {
//   const { markdownRemark, site } = data;
//   const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
//   const { title, description, url } = site.siteMetadata;
//   const { title: scribbleTitle, tags, cover } = frontmatter;
//   const keywords = getKeywords(excerpt);

//   return (
//     <Layout
//       meta={{
//         ...data.site.siteMetadata,
//         pageTitle: scribbleTitle,
//         siteTitle: title,
//         description: excerpt || description,
//         keywords,
//         pageType: 'article',
//         route: fields.slug,
//         cover,
//       }}
//     >
//       <div id="article" className="pt-14 px-4 pb-24">
//         <div className="w-6/12 md:w-6/12 xl:w-4/12 mx-auto">
//           <Thumbnail {...fields.hero} />
//         </div>
//         <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
//           {scribbleTitle}
//         </h1>
//         <div className="uppercase text-center my-3 opacity-50">
//           <Type type="scribbles" to="/scribbles" />
//           {frontmatter.devTo && (
//             <>
//               <span className="opacity-25 inline-block mx-2">/</span>
//               <Anchor to={frontmatter.devTo} forceNewTab={true}>
//                 <FaDev
//                   className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
//                   alt="dev.to"
//                 />
//                 dev.to
//               </Anchor>
//             </>
//           )}
//         </div>
//         <Metadata date={fields.date} timeToRead={timeToRead} />
//         <div className="text-center">
//           <Tags tags={tags} redirect={true} isButton={true} />
//         </div>
//         <div
//           className="content max-w-3xl mx-auto mt-8"
//           // eslint-disable-next-line react/no-danger
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//         <CommentSystem
//           url={`${url}${fields.slug}`}
//           identifier={fields.slug}
//           title={scribbleTitle}
//         />
//       </div>
//     </Layout>
//   );
// };

// ScribblesTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default ScribblesTemplate;


import React from 'react';

const ScribblesTemplate = ({ children }) => {
  return children;
};

export default ScribblesTemplate;
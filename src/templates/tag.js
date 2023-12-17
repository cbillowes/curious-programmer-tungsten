// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import { Layout } from '../components/Layout';
// import List from '../components/Articles/List';

// const Articles = ({ edges }) => {
//   return <List edges={edges} />;
// };

// const TagTemplate = ({ pageContext, data }) => {
//   const { allMarkdownRemark, site } = data;
//   const edges = allMarkdownRemark.edges;
//   const { title } = site.siteMetadata;
//   const { tag, slug } = pageContext;

//   return (
//     <Layout
//       meta={{
//         ...site.siteMetadata,
//         pageTitle: `Tag: ${tag}`,
//         siteTitle: title,
//         route: slug,
//       }}
//     >
//       <div className="bg-default text-default-script">
//         <div className="mx-auto pb-5 pt-10">
//           <h1 className="text-center text-5xl font-bold mb-0 mt-5">
//             All things <span className="text-color-1">{tag}</span>
//           </h1>
//           <Articles edges={edges} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// TagTemplate.propTypes = {
//   pageContext: PropTypes.object.isRequired,
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array.isRequired,
//     }).isRequired,

//     site: PropTypes.shape({
//       siteMetadata: PropTypes.object.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// Articles.propTypes = {
//   edges: PropTypes.array.isRequired,
// };

// export const query = graphql`
//   query TagTemplateQuery($tag: String!) {
//     allMarkdownRemark(
//       filter: {
//         fields: { slug: { nin: "/blog/example/" } }
//         frontmatter: { tags: { in: [$tag] } }
//       }
//       sort: { order: DESC, fields: fields___date }
//     ) {
//       edges {
//         node {
//           timeToRead
//           excerpt(truncate: true, pruneLength: 250, format: PLAIN)
//           fields {
//             slug
//             date(formatString: "dddd, DD MMMM YYYY")
//             type
//             number
//             hero {
//               component
//               image
//               credit
//               source
//               link
//             }
//           }
//           frontmatter {
//             title
//             tags
//           }
//         }
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

// export default TagTemplate;


import React from 'react';

const TagTemplate = ({ children }) => {
  return children;
};

export default TagTemplate;
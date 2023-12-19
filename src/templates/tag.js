import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Preview from '@components/preview';

const TagTemplate = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data;
  const { tag } = pageContext;
  const edges = allMarkdownRemark.edges;
  return (
    <Layout>
      <section className="py-8 lg:py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative border-gray-200 dark:border-gray-700 mx-auto max-w-screen-xl dark:text-gray-100 text-gray-900">
          <h1 className="text-center text-5xl font-bold mb-0 mt-5 tracking-tight">
            All things related to <span className="text-pink-600">{tag}</span>
          </h1>
          {edges.map((edge, index) => {
            const { node } = edge;
            const { frontmatter, fields, excerpt, timeToRead } = node;
            const { title, tags } = frontmatter;
            const { slug, number, hero, date, type } = fields;
            return (
              <Preview
                key={number}
                index={index}
                number={number}
                slug={slug}
                title={title}
                date={date}
                timeToRead={timeToRead}
                excerpt={excerpt}
                tags={tags}
                hero={hero}
                type={type}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query TagTemplateQuery($tag: String!) {
    allMarkdownRemark(
      filter: {
        fields: { slug: { nin: "/blog/example/" } }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM YYYY")
            type
            number
            hero {
              component
              image
              credit
              source
              link
            }
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;

export default TagTemplate;

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

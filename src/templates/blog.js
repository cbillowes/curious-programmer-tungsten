import React from 'react';
import { graphql } from 'gatsby';
import Seo from '@components/head';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Preview from '@components/preview';

export const query = graphql`
  query BlogTemplateQuery($startDate: Date!, $endDate: Date!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { date: { gte: $startDate, lte: $endDate } }
        fields: { type: { in: ["article", "scribble", "course"] } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          html
          excerpt
          timeToRead
          html
          excerpt
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
            cover
            title
            tags
            date(formatString: "dddd, DD MMMM YYYY")
          }
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          url
          twitter
        }
        brand
        description
        keywords
        lang
        title
        siteUrl
      }
    }
  }
`;

const BlogTemplate = ({ data, pageContext }) => {
  const { year } = pageContext;
  const { allMarkdownRemark } = data;
  const edges = allMarkdownRemark.edges;

  return (
    <Layout baseRoute="/blog" group="Blog">
      <section className="py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tighter leading-none md:text-5xl xl:text-6xl">
          Blog<br/>{`< ${year} />`}
        </h1>
        <div className="mx-auto max-w-screen-xl">
          {edges.length === 0 && (
            <div className="text-center">
              Nothing to see here. It looks like I did very little this year.
            </div>
          )}
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
                date={date || frontmatter.date}
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

export default BlogTemplate;

export const Head = ({ location, params, data, pageContext }) => {
  const { year } = pageContext;
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle={`Blog: Unlock insights from ${year}`}
      siteTitle={siteMetadata.title}
      description="Browse diverse blog listings—your gateway to a rich tapestry of insights, expertise, and inspiration, neatly organized for seamless exploration."
      shareImage="unicorn-bubble-tea.webp"
      location={location}
      params={params}
    />
  );
};

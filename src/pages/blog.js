import React from 'react';
import { graphql } from 'gatsby';
import Seo from '@components/head';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Anchor from '@components/anchor';
import Metadata from '@components/metadata';
import Type from '@components/type';
import Tags from '@components/tags';

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const edges = allMarkdownRemark.edges;

  return (
    <Layout baseRoute="/blog" group="Blog">
      <section className="py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Blog
        </h1>
        <div className="mx-auto max-w-screen-xl px-4">
          {edges.map((edge, index) => {
            const { node } = edge;
            const { frontmatter, fields, timeToRead } = node;
            const { title, tags } = frontmatter;
            const { slug, number, date, type } = fields;
            return (
              <div className="mb-8">
                {number}.{' '}
                <Anchor to={slug} className="hover:text-primary-600">
                  {title}
                </Anchor>
                <br />
                <Type type={type} inline />
                <Metadata date={date} timeToRead={timeToRead} type={type} />
                <div className="opacity-50">
                  <Tags tags={tags} redirect />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      sort: { fields: { number: DESC } }
      filter: { fields: { type: { in: ["article", "scribble", "course"] } } }
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

export default BlogPage;

export const Head = ({ location, params, data }) => {
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle="Blog: Unlock insights and stories"
      siteTitle={siteMetadata.title}
      description="Browse diverse blog listings—your gateway to a rich tapestry of insights, expertise, and inspiration, neatly organized for seamless exploration."
      shareImage="unicorn-bubble-tea.webp"
      location={location}
      params={params}
    />
  );
};

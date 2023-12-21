import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Tags from '@components/tags';
import Anchor from '@components/anchor';
import Thumbnail from '@components/thumbnail';
import Ribbon from '@components/ribbon';
import Metadata from '@components/metadata';

const Courses = ({ edges }) => {
  return edges.map(({ node }, index) => {
    const { title, date, abstract, tags } = node.frontmatter;
    const { slug, hero } = node.fields;
    const isEven = index % 2 === 0;

    return (
      <section
        key={index}
        className={`relative mx-auto max-w-[1600px] lg:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
          isEven ? 'xl:flex-row-reverse' : 'xl:flex-row'
        }`}
      >
        <div
          className={`border-color-3 border-none xl:border-dashed xl:w-1/4 xl:mx-8 ${
            isEven
              ? 'xl:text-left xl:border-l xl:pl-8'
              : 'xl:text-right xl:border-r xl:pr-8'
          }`}
        >
          <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1 font-alt-sans">
            <Anchor to={slug} title={title}>
              {title}
            </Anchor>
          </h2>
          <div className="leading-loose mb-4">
            <Metadata created={date} />
            <p
              className={`mt-2 text-left ${
                isEven ? 'xl:text-left' : 'xl:text-right'
              }`}
            >
              {abstract}
            </p>
          </div>
          <div
            className={`flex items-center flex-wrap ${
              isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
            }`}
          >
            <Anchor
              className={`bg-color-1 text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1-alternative ${
                isEven ? 'xl:mr-2' : 'xl:ml-4'
              }`}
              to={slug}
              title={slug}
            >
              Read more
            </Anchor>
            <Tags tags={tags} redirect={true} />
          </div>
        </div>
        <div className="xl:w-1/4 relative">
          <Ribbon>#{edges.length - index}</Ribbon>
          <Thumbnail
            number={edges.length - index}
            to={slug}
            alt={title}
            {...hero}
          />
        </div>
      </section>
    );
  });
};

const CoursesPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Courses',
        siteTitle: title,
      }}
    >
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5">
          <h1 className="text-center text-5xl font-bold mb-0 mt-12">Courses</h1>
          <Courses edges={edges} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CoursesPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___date }
      filter: { fields: { type: { eq: "course" } } }
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
            abstract
            date
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
        url
      }
    }
  }
`;

export default CoursesPage;

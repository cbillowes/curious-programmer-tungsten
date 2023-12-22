import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
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
      <aside
        key={index}
        className={classNames(
          'relative mx-auto max-w-full md:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse',
          isEven ? 'xl:flex-row-reverse' : 'xl:flex-row',
        )}
      >
        <div
          className={classNames(
            `dark:border-gray-600 border-gray-300 border-none xl:border-dashed xl:w-1/2 xl:mx-8`,
            isEven
              ? 'xl:text-left xl:border-l xl:pl-8'
              : 'xl:text-right xl:border-r xl:pr-8',
          )}
        >
          <h2
            className={classNames(
              'text-2xl mt-8 xl:mt-0 md:text-4xl font-semibold tracking-tight',
              'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ',
              'hover:to-red-600 hover:from-violet-600',
            )}
          >
            <Anchor to={slug} title={title}>
              {title}
            </Anchor>
          </h2>
          <div className="leading-loose mb-4">
            <Metadata date={date} />
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
              className={classNames(
                'bg-pink-600 text-white rounded py-1 px-3 transform shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300',
                isEven ? 'xl:mr-2' : 'xl:ml-4',
              )}
              to={slug}
              title={slug}
            >
              Read more
            </Anchor>
            <Tags tags={tags} redirect={true} />
          </div>
        </div>
        <div
          className={classNames(
            'xl:w-1/2 relative',
            isEven ? 'xl:text-right' : 'xl:text-left',
          )}
        >
          <Ribbon>#{edges.length - index}</Ribbon>
          <Thumbnail
            number={edges.length - index}
            to={slug}
            alt={title}
            {...hero}
            className={classNames(
              isEven ? 'xl:justify-end' : 'xl:justify-start',
            )}
          />
        </div>
      </aside>
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
        pageTitle: 'Crash Courses',
        siteTitle: title,
        route: '/courses',
      }}
    >
      <div className="py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Crash Courses
        </h1>
        <section>
          <div className="mx-auto max-w-screen-xl">
            <Courses edges={edges} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CoursesPageQuery {
    allMarkdownRemark(
      sort: { fields: { date: DESC } }
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

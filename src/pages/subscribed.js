import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Thumbnail from '@components/thumbnail';
import Metadata from '@components/metadata';
import Ribbon from '@components/ribbon';
import { StaticImage } from 'gatsby-plugin-image';
import ConfettiExplosion from 'react-confetti-explosion';

const SubscribedPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const edges = allMarkdownRemark.edges;
  return (
    <Layout baseRoute="/search">
      <section className="py-16 px-4">
        <Backdrop />
        <ConfettiExplosion />
        <div className="max-w-screen-md mx-auto py-16 px-4">
          <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tighter leading-none md:text-5xl xl:text-6xl">
            You are subscribed!
          </h1>
          <p className="mx-auto max-w-sm text-center">
            Woo-hoo! 🎉 Thank you for confirming your subscription to Curious
            Programmer. I’m so excited to have you in the loop!
          </p>
        </div>
      </section>
      <aside
        aria-label="Related articles"
        className="py-8 bg-white dark:bg-gray-700 antialiased border-t border-gray-200 dark:border-gray-800"
      >
        <div className="px-4 mx-auto w-full max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tighter">
            Start browsing:
          </h2>
          <div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-stretch gap-4">
              {edges.map(({ node }, index) => (
                <div
                  key={index}
                  className="bg-white duration-700 ease-in-out dark:bg-gray-700 mb-4"
                >
                  <article className="relative p-4 mx-auto w-full bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800">
                    <Ribbon>#{node.fields.number}</Ribbon>
                    <Link to={node.fields.slug}>
                      <Thumbnail {...node.fields.hero} />
                    </Link>
                    <div className="flex items-center mb-3 space-x-2">
                      <StaticImage
                        className="w-8 h-8 rounded-full"
                        src="../images/avatar.png"
                        alt="Clarice Bouwer"
                      />
                      <div className="font-medium dark:text-white">
                        <div>Clarice Bouwer</div>
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          <Metadata
                            date={node.fields.date}
                            timeToRead={node.timeToRead}
                            type={node.fields.type}
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tighter text-gray-900 lg:text-2xl dark:text-white">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">
                      {node.excerpt}
                    </p>
                    <Link
                      to={node.fields.slug}
                      className="inline-flex items-center font-medium
                          text-primary-600 hover:text-blue-800
                          dark:text-primary-500 hover:dark:text-blue-600 hover:no-underline"
                    >
                      {' '}
                      Read more{' '}
                      <svg
                        className="mt-px ml-1 w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query SubscribedPageQuery {
    allMarkdownRemark(
      limit: 9
      sort: { fields: { date: DESC } }
      filter: {
        fields: { type: { in: ["article", "scribble"] } }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM YYYY")
            number
            type
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

export default SubscribedPage;

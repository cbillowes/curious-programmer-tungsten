import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
} from 'react-instantsearch';
import Seo from '@components/head';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Type from '@components/type';

const indexName = 'Pages';

const searchClient = algoliasearch(
  'BZUA1BPF3Z',
  '2f284732657f5e6ca5dfe7ebccec97e0',
);

const Hit = ({ hit }) => (
  <div className="my-8 rounded-lg shadow-lg flex items-center bg-gray-50 dark:bg-slate-800 hover:scale-110">
    <img
      src={hit.imageUrl}
      className="h-24 cursor-pointer"
      onClick={() => navigate(hit.slug)}
    />
    <div className="ml-4">
      <h2
        className="text-lg font-semibold cursor-pointer"
        onClick={() => navigate(hit.slug)}
      >
        <Type type={hit.type} inline /> {hit.title}
      </h2>
      <p>
        {hit?.tags?.map((tag) => (
          <Link
            to={`/tag/${tag.toLowerCase().replace(' ', '-')}`}
            className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
          >
            {tag}
          </Link>
        ))}
      </p>
    </div>
  </div>
);

const Search = () => {
  return (
    <div className="container mx-auto py-10">
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox translations={{ placeholder: 'Search for content...' }} />

        <div className="flex flex-row gap-8 mt-8">
          <div className="hidden lg:block w-1/5">
            <h3 className="font-semibold mb-4">Tags</h3>
            <RefinementList
              attribute="tags"
              classNames={{
                selectedItem: 'font-semibold text-pink-400',
                label: 'text-sm text-gray-500 dark:text-gray-400',
                item: 'my-2',
                checkbox:
                  'mr-2 "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
                count:
                  'bg-gray-100 text-gray-800 text-xs font-medium m-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300',
              }}
            />
            <br />
            <h3 className="font-semibold mb-4">Categories</h3>
            <RefinementList
              attribute="type"
              classNames={{
                selectedItem: 'font-semibold text-pink-400',
                label: 'text-sm text-gray-500 dark:text-gray-400',
                item: 'my-2',
                checkbox:
                  'mr-2 "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
                count:
                  'bg-gray-100 text-gray-800 text-xs font-medium m-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300',
              }}
            />
          </div>

          <div className="w-full lg:w-4/5">
            <Hits hitComponent={Hit} />
            <Pagination
              classNames={{
                root: 'mt-8',
                list: 'flex gap-8',
                item: 'text-lg text-gray-800 dark:text-gray-200',
                selectedItem:
                  'bg-pink-100 text-pink-800 font-bold -mt-1 px-2.5 py-0.5 rounded dark:bg-pink-700 dark:text-pink-400 border border-pink-400',
              }}
            />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

const SearchPage = () => {
  return (
    <Layout baseRoute="/search">
      <section className="py-16 px-4">
        <Backdrop />
        <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tighter leading-none md:text-5xl xl:text-6xl">
          Search
        </h1>
        <Search />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query SearchPageQuery {
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

export default SearchPage;

export const Head = ({ location, params, data }) => {
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle="Search"
      siteTitle={siteMetadata.title}
      description="Search for content on my site."
      shareImage="unicorn-laptop.webp"
      location={location}
      params={params}
    />
  );
};

import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Thumbnail from '@components/thumbnail';
import Tags from '@components/tags';
import Metadata from '@components/metadata';
import Type from '@components/type';
import Backdrop from '@components/backdrop';
import { getKeywords } from '@common/seo';

// // gatsby-remark-embed-gist
// import '../styles/gist/common.scss';
// import '../styles/gist/dark.scss';
// import '../styles/gist/light.scss';
// // gatsby-remark-interactive-gifs
// import '../styles/interactive-gifs.scss';
// // gatsby-remark-prismjs
// import '../styles/prismjs/dark.scss';
// import '../styles/prismjs/light.scss';

export const query = graphql`
  query ArticleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

const ArticleTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, timeToRead, html, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const keywords = getKeywords(html);
  const commentBox = React.useRef(null);

  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'cbillowes/curious-programmer-tungsten');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    commentBox.current.appendChild(scriptEl);
  }, []);

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        keywords: frontmatter.keywords || keywords,
        pageTitle: frontmatter.title,
        siteTitle: title,
        description: excerpt || description,
        image: fields.hero.image,
        pageType: 'article',
        route: fields.slug,
        cover: frontmatter.cover,
      }}
    >
      <div className="dark:bg-gray-900 bg-white text-gray-900 dark:text-gray-200">
        <Thumbnail {...fields.hero} isHero />
        <div className="relative">
          <Backdrop />
          <div className="text-center">
            <h1 class="pt-8 mb-4 text-5xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-center dark:text-white max-w-6xl mx-auto">
              {frontmatter.title}
            </h1>
            <Type type={fields.type} to="/blog" number={fields.number} />
            <Metadata timeToRead={timeToRead} date={fields.date} />
            <Tags tags={frontmatter.tags} redirect={true} isButton={true} />
          </div>
          <div
            className="content max-w-3xl mx-auto mt-8"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div ref={commentBox}></div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleTemplate;

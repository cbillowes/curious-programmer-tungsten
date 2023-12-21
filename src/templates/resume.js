import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Backdrop from '@components/backdrop';
import Tags from '@components/tags';
// import CommentSystem from '@components/CommentSystem';
import Anchor from '@components/anchor';
import ResumeDates from '@components/resume-dates';
import ResumeIcon from '@components/resume-icon';
import { getKeywords } from '@common/seo';

// gatsby-remark-embed-gist
import '../styles/gist/common.scss';
import '../styles/gist/dark.scss';
import '../styles/gist/light.scss';
// gatsby-remark-interactive-gifs
import '../styles/interactive-gifs.scss';
// gatsby-remark-prismjs
import '../styles/prismjs/dark.scss';
import '../styles/prismjs/light.scss';

export const query = graphql`
  query ResumeTemplateQuery($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fields: { type: { eq: "resume" } }
    ) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        resume {
          logo
          jobTitle
          company
          type
          website
          location
          tech
          start
          end
          category
          name
          description
          summary
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

const ResumeTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, html, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const {
    category,
    logo,
    company,
    jobTitle,
    location,
    type,
    start,
    end,
    tech,
    website,
    name,
    summary,
  } = frontmatter.resume;
  const keywords = getKeywords(excerpt);

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: company
          ? `${jobTitle} @ ${company}, ${location}`
          : `${name} | ${frontmatter.resume.description}`,
        siteTitle: title,
        description: excerpt || description,
        keywords,
        pageType: 'article',
        route: fields.slug,
      }}
    >
      <Backdrop />
      <div id="article" className="pt-14 px-4 pb-24 max-w-3xl mx-auto text-gray-900 dark:text-gray-200">
        <div className="uppercase text-center my-3 opacity-40 flex justify-between items-center">
          <Anchor to="/resume">&larr; Back</Anchor>
        </div>
        {logo && (
          <img
            src={require(`../images/logos/${logo}`).default}
            alt={company}
            className={`logo mx-auto ${
              category === 'Testimonial' ? 'rounded-full' : ''
            } `}
          />
        )}
        {company && (
          <>
            <h1 className="text-center font-bold max-w-screen-xl mx-auto">
              {jobTitle}
            </h1>
            <h2 className="text-center font-bold max-w-screen-xl mx-auto">
              {company}
              <ResumeIcon
                className="inline text-3xl ml-3"
                category={category}
              />
            </h2>
            <div className="text-center text-neutral">
              <Anchor to={website}>
                {' '}
                {website && website.replace('https://', '')}
              </Anchor>{' '}
              &middot; {location} &middot; {type}
              &middot; <ResumeDates start={start} end={end} />
            </div>
          </>
        )}
        {name && (
          <>
            <h1 className="text-center font-bold max-w-screen-xl mx-auto">
              {name}
            </h1>
            <p className="text-center font-bold max-w-screen-xl mx-auto">
              {frontmatter.resume.description}
              <ResumeIcon
                className="inline text-3xl ml-3"
                category={category}
              />
            </p>
          </>
        )}
        <div className="text-center">
          <Tags tags={tech} isButton={true} redirect={false} />
        </div>
        <div className="text-center"></div>
        <div
          className="content max-w-3xl mx-auto mt-8 leading-loose"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html || summary }}
        />
        {/* <CommentSystem
          url={`${url}${fields.slug}`}
          identifier={fields.slug}
          title={title}
        /> */}
      </div>
    </Layout>
  );
};

export default ResumeTemplate;

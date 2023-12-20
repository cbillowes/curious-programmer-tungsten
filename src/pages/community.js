import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Anchor from '@components/anchor';
import '../styles/privacy.scss';

const CommunityPage = ({ data }) => {
  const { site } = data;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'How to interact with the website and others',
        siteTitle: title,
        description:
          'Essentially, words can hurt. Be nice but clear! Find out more about how to interact in our community guidelines.',
        route: '/community',
      }}
    >
      <div className="guidelines max-w-screen-md mx-auto p-4">
        <h1>Community Guidelines</h1>
        <p>Essentially, words can hurt. Be nice but clear!</p>

        <h2>Things to know</h2>
        <ul>
          <li>
            Our comments run on the third-party Disqus platform. You can read
            its privacy policy, recently updated to reflect strict new privacy
            laws in Europe that will ultimately be applied for all users within
            and without Europe,{' '}
            <Anchor
              to="https://help.disqus.com/terms-and-policies/disqus-privacy-policy"
              useMarkdownStyles={true}
              newTabIndicator={true}
            >
              here
            </Anchor>
            .
          </li>
          <li>
            You can register a Disqus profile either directly with Disqus, or
            with your Facebook, Twitter or Google accounts. Disqus does not
            require you use your real name.
          </li>
          <li>
            Your thoughts are important to me. I read,{' '}
            <strong>moderated</strong> and publish all comments that are not
            filtered out as spam.
          </li>
        </ul>

        <h2>Tone and Attitude</h2>
        <ul>
          <li>Be inviting, passionate and share your thoughts.</li>
          <li>Please do not personally attack or use hurtful words.</li>
          <li>
            Do not criticize a brand, company or product, and attacking people
            on the basis of their race, religion, sex, gender, sexual
            orientation, disability or age.
          </li>
          <li>No racism, sexism, homophobia or other forms of hate-speech!</li>
        </ul>

        <h2>Clarity and Intent</h2>
        <ul>
          <li>Be clear and intentional to avoid ambiguity in your messages.</li>
          <li>
            Do not &ldquo;shout&rdquo;, be sarcastic, condescending or mean.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CommunityPageQuery {
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

export default CommunityPage;

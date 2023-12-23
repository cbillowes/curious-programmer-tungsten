import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Anchor from '@components/anchor';
import Backdrop from '@components/backdrop';
import '../styles/privacy.scss';

const Privacy = ({ data }) => {
  const { site } = data;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Your privacy is important',
        siteTitle: title,
        description: `Ensuring the privacy of our visitors is among our top priorities. This Privacy Policy outlines the types of information collected and recorded by Curious Programmer, as well as how we utilize that information.`,
        keywords:
          'privacy, privacy policy, data protection, cookies, data collection',
        route: '/privacy',
        path: '/privacy',
        group: 'Legalities',
      }}
    >
      <div className="guidelines">
        <Backdrop />
        <div className="max-w-screen-md mx-auto py-16 px-4">
          <h1 className="mx-auto text-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Privacy policy for Curious Programmer
          </h1>
          <p>
            At Curious Programmer, accessible from
            <strong>https://curiousprogrammer.dev</strong>, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Curious Programmer and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us on
            clarice@bouwer.dev.
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Curious Programmer. This policy
            is not applicable to any information collected offline or via
            channels other than this website. Our Privacy Policy was created
            with the help of the{' '}
            <a href="https://www.termsfeed.com/privacy-policy-generator/">
              TermsFeed Privacy Policy Generator
            </a>
            .
          </p>

          <h2>Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h2>Information we collect</h2>

          <p>We do not collect any personal information from you.</p>
          <p>
            If you contact us directly, we may receive information you provide
            about you such as your name, email address, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide.
          </p>

          <h2>How we use your information</h2>

          <p>
            We use the information we collect in various ways, including to:
          </p>

          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new features, and functionality</li>
            <li>Read, moderate and reply to your comments</li>
          </ul>

          <h2>Commenting</h2>

          <p>
            When you provide a comment on the Website, your comment will be
            entered through a commenting platform provided by Disqus, Inc.
            (“Disqus”), a third party commenting platform. You will need to
            register through Disqus to comment on an article through the Website
            and all comments and other content entered onto the Website are
            subject to these Terms of Use as well as the Disqus terms of use and
            privacy policy. You should familiarize yourself with the Disqus
            <Anchor
              to="https://help.disqus.com/customer/portal/articles/466260-terms-of-service"
              useMarkdownStyles={true}
              newTabIndicator={true}
            >
              Terms of Use
            </Anchor>
            and the
            <Anchor
              to="https://help.disqus.com/customer/portal/articles/466259-privacy-policy"
              useMarkdownStyles={true}
              newTabIndicator={true}
            >
              Privacy Policy
            </Anchor>
            .
          </p>

          <h2>Log Files</h2>

          <p>
            Curious Programmer follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services&apos; analytics.
            The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date
            and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information.
          </p>

          <h2>Cookies and Web Beacons</h2>

          <p>
            Like any other website, Curious Programmer uses &apos;cookies&apos;.
            These cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.
          </p>

          <p>
            For more general information on cookies, please read{' '}
            <a href="https://www.generateprivacypolicy.com/#cookies">
              &ldquo;Cookies&rdquo; article from the Privacy Policy Generator
            </a>
            .
          </p>

          <h2>Advertising Partners Privacy Policies</h2>

          <p>There are no adverts. Yay!</p>

          <h2>Third Party Privacy Policies</h2>

          <p>
            Curious Programmer&apos;s Privacy Policy does not apply to other
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party services for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{' '}
          </p>

          <ul>
            <li>
              <Anchor
                newTabIndicator={true}
                to="https://support.google.com/youtube/answer/171780"
                useMarkdownStyles={true}
              >
                Embedded YouTube Videos
              </Anchor>
            </li>
            <li>
              <Anchor
                newTabIndicator={true}
                to="https://www.netlify.com/privacy/"
                useMarkdownStyles={true}
              >
                Netlify
              </Anchor>
            </li>
            <li>
              <Anchor
                newTabIndicator={true}
                to="https://support.google.com/analytics/answer/4597324"
                useMarkdownStyles={true}
              >
                Google Analytics
              </Anchor>
            </li>
            <li>
              <Anchor
                newTabIndicator={true}
                to="https://www.algolia.com/policies/privacy/"
                useMarkdownStyles={true}
              >
                Algolia
              </Anchor>
            </li>
            <li>
              <Anchor
                newTabIndicator={true}
                to="https://help.disqus.com/en/collections/191787-terms-and-policies"
                useMarkdownStyles={true}
              >
                Disqus
              </Anchor>
            </li>
          </ul>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites.
          </p>
          <p>
            With most services, you can turn off tracking through their privacy
            policies.
          </p>
          <p>
            It&apos;s okay that you use an AdBlocker to restrict analytics from
            from being downloaded. If you do so, please drop me a line on
            clarice@bouwer.dev to tell me what you think about the content of
            the website so that I can produce better work and get an idea of how
            many people are accessing the site.
          </p>

          <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer&apos;s personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer&apos;s personal data,
            not sell the consumer&apos;s personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <p>We do none of the above so we&apos;ve got you covered.</p>

          <h2>GDPR Data Protection Rights</h2>

          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access – You have the right to request copies of your
            personal data.
          </p>
          <p>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <p>Again, none of this data is captured so you&apos;re all good.</p>

          <h2>Children&apos;s Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Curious Programmer does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>

          <p>
            There may be swearing but we keep it to a minimum as we try remain
            as professional as possible. Parental guidance is still advised.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PrivacyPageQuery {
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

export default Privacy;

// https://www.privacypolicygenerator.info/live.php?token=DYjC9Jd5Vui3RvjXJHZ9c9LNbpUAv0m5

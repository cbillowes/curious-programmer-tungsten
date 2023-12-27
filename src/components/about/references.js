import React, { useState } from 'react';
import Kebab from '@components/kebab';
import Anchor from '@components/anchor';
import Emoji from '@components/emoji';
import { RiArticleLine } from 'react-icons/ri';

const Reference = ({ icon, title, children, referenceLink, referenceText }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-600 text-primary-300 lg:h-12 lg:w-12 dark:bg-primary-900 dark:text-primary-300 text-2xl">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <div className="text-gray-500 dark:text-gray-400">{children}</div>
      <p>
        <Anchor to={referenceLink} useMarkdownStyles={true}>
          {referenceText}
        </Anchor>
      </p>
    </div>
  );
};

const References = () => {
  const [visible, toggleVisibility] = useState(false);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        References
      </Kebab>
      <div className={`mx-auto max-w-2xl ${visible ? 'block' : 'hidden'}`}>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tighter font-extrabold text-gray-900 dark:text-white">
                References
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                I am proud to have been quoted as a reference in some places.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-1 md:gap-12 md:space-y-0">
              <Reference
                title="Articles to help you advance as a web designer"
                icon={<RiArticleLine />}
                referenceLink="https://designsrate.com/articles-to-help-you-advance-as-a-web-designer/"
                referenceText="See the list of articles"
              >
                <p className="mb-2">
                  An article posted by Carolyn W. Harvey on March 10, 2023 on
                  Designs Rate.
                </p>
                <p>
                  My A List Apart article is listed Number 2 in their list. "You
                  have plunged headlong into your career, and suddenly you are
                  not even sure where you are going. In an industry with so many
                  options and choices, it is possible that you will take a wrong
                  direction at one time or another. In this A List Apart
                  article, Clarice Bouwer gives tips on how to turn a mistake
                  into an opportunity and get your career back on track."
                </p>
              </Reference>
              <Reference
                title="Self-sufficient commits"
                icon={<RiArticleLine />}
                referenceLink="https://shivering-isles.com/2020/06/self-sufficient-commits"
                referenceText="Read article"
              >
                <p className="mb-2">
                  An article posted on June 7, 2020 on Sheogrorath's Blog.
                </p>
                <p>
                  Articles "Why I create atomic commits" and "How to craft your
                  changes into small atomic commits using Git" cited.
                </p>
              </Reference>
              <Reference
                title="Finding Opportunities in the Mistakes We Make"
                icon={<RiArticleLine />}
                referenceLink="https://www.getabstract.com/en/summary/finding-opportunities-in-the-mistakes-we-make/27996"
                referenceText="Reference"
              >
                <p>
                  The article I wrote for A List Apart was converted to a
                  summary by getAbstract. It has an editorial rating of 8{' '}
                  <Emoji className="inline-block mx-2">⭐️</Emoji> stars and is
                  listed as innovative with applicable qualities.
                </p>
              </Reference>
              <Reference
                title="How Should Designers Learn To Code? Git, HTML/CSS, Engineering Principles (Part 2)"
                icon={<RiArticleLine />}
                referenceLink="https://www.smashingmagazine.com/2020/03/designers-code-git-hmtl-css-engineering-principles/"
                referenceText="Full article"
              >
                <p className="mb-2">
                  An article posted by Paul Hanaoka on March 25, 2020 on
                  Smashing Magazine.
                </p>
                <p>
                  Tip: The best recommendation I’ve ever seen for commit
                  messages is from Chris Breams’s “How To Write A Git Commit
                  Message”. A properly formed Git commit subject line should
                  always be able to complete the following sentence: “If
                  applied, this commit will [your subject line here].” For more
                  info on commits, check “Why I Create Atomic Commits In Git” by
                  Clarice Bouwer.
                </p>
              </Reference>
              <Reference
                title="Atomic Commits"
                icon={<RiArticleLine />}
                referenceLink="https://mattshelley.dev/atomic-commits/"
                referenceText="Full article"
              >
                <p className="mb-2">
                  An article posted on August 29, 2020 on Matt Shelley's blog.
                </p>
                <p className="mb-2">
                  Matt referenced my{' '}
                  <Anchor to="https://dev.to/cbillowes/why-i-create-atomic-commits-in-git-kfi">
                    dev.to
                  </Anchor>{' '}
                  article in the written article about atomic commits. The
                  conclusion is that we make small changes with helpful
                  messages, so we build confidence in our work and our
                  understanding of it. Atomic commits encourage us to write
                  high-quality software.
                </p>
              </Reference>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default References;

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Anchor from '@components/anchor';
import Ribbon from '@components/ribbon';

const lewagon2023 = {
  type: 'course',
  link: '/blog/le-wagon-demo-day-the-smart-compliance-project/',
  button: 'Read about it',
  title: (
    <Anchor to="/blog/le-wagon-demo-day-the-smart-compliance-project/" title="">
      Completed the Data Science boot camp at Le Wagon Mauritius
    </Anchor>
  ),
  blurb: (
    <div>
      An immersive learning experience with practical skills in facial
      detection, verification, and OCR. It was a bouncy journey through the
      intricacies of project development and collaboration.
    </div>
  ),
  image: (
    <StaticImage
      src="../images/covers/lewagon-demo-day.webp"
      alt="Le Wagon Demo Day"
    />
  ),
  caption: (
    <p>
      Moments after conquering the stage (I was merely pressing the next button
      on the slides), Amit turning our ideas and project into an applause.
    </p>
  ),
  ribbon: <Ribbon>2023</Ribbon>,
};

const offerZenChromeDevTools2018 = {
  type: 'article',
  link: 'https://www.offerzen.com/blog/debugging-with-chrome-devtools-quick-front-end-fixes',
  buttonText: 'Put on your reading glasses',
  title: (
    <Anchor
      to="https://www.offerzen.com/blog/debugging-with-chrome-devtools-quick-front-end-fixes"
      title="OfferZen: Debugging with Chrome DevTools"
    >
      OfferZen: Debugging with Chrome DevTools
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        Written in 2018 on the{' '}
        <Anchor
          to="https://offerzen.com"
          title="OfferZen"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          OfferZen blog
        </Anchor>
        , I shared what I learned about the Chrome DevTools which could help fix
        and enhance front-end bugs during web development.
      </p>
    </div>
  ),
  image: (
    <StaticImage
      src="../images/about/chrome-dev-tools.jpg"
      alt="A feature in the Chrome DevTools"
    />
  ),
  caption: (
    <p>
      A thumbnail from my article published on OfferZen: A feature in the Chrome
      DevTools
    </p>
  ),
  ribbon: <Ribbon>2018</Ribbon>,
};

const girlCodeImpostorSyndrome2017 = {
  type: 'podcast',
  title: <>GirlCode: Imposter Syndrome</>,
  blurb: (
    <div>
      <p>
        <Anchor
          to="https://twitter.com/VivaRepublic"
          title="Viva Republic"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          Viva Republic
        </Anchor>{' '}
        and I got together with the{' '}
        <Anchor
          to="https://girlcode.co.za/"
          title="GirlCode"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          GirlCode
        </Anchor>
        team to talk about our experiences of Imposter Syndrome. Although the
        podcast was never released, we sure had a{' '}
        <Anchor
          to="https://twitter.com/VivaRepublic/status/870937603662598145/photo/1"
          title="Twitter moment"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          lot of fun
        </Anchor>{' '}
        making it.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage src="../images/about/girlcode.jpg" alt="Girl Code Podcast" />
    </div>
  ),
  caption: <p>Being interviewed on the GirlCode podcast</p>,
  ribbon: <Ribbon>2017</Ribbon>,
};

const zaChatImpostor2017 = {
  type: 'podcast',
  link: 'https://zadevchat.io/67/',
  buttonText: 'Grab your headphones',
  title: (
    <Anchor
      to="https://zadevchat.io/67/"
      title="67 - The Imposter Within with Clarice Bouwer"
    >
      Episode 67 - The Imposter Within with Clarice Bouwer
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        Produced in 2017, I was interviewed by Chantal and Kenneth on the{' '}
        <Anchor to="https://zadevchat.io/" title="ZADevChat">
          ZADevChat
        </Anchor>{' '}
        podcast. We discussed imposter syndrome, what it is and how to overcome
        it. <br />
        Learn about this and other issues around the often overlooked topics of
        mental well-being.
        <br />
        Inspired by Scott Hanselman’s “I’m a phony. Are you?” post, I wrote up
        my own experiences with feeling like an imposter.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage src="../images/about/zadevchat.png" alt="ZADevChat logo" />
    </div>
  ),
  caption: <p>Aired on Episode 67 of the ZADevChat Podcast</p>,
  ribbon: <Ribbon>2017</Ribbon>,
};

const developerOnFire2017 = {
  type: 'podcast',
  link: 'https://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind',
  buttonText: 'Have a listen',
  title: (
    <Anchor
      to="https://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind"
      title="Developer on Fire: Leaving Comfort Behind"
    >
      Developer on Fire: Leaving Comfort Behind
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        Produced in 2017 on the{' '}
        <Anchor
          to="https://developeronfire.com"
          title="Developer on Fire logo"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          Developer on Fire
        </Anchor>
        podcast, I discussed collaboration, empathy, fear, and being an impostor
        with Dave Rael.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage
        src="../images/about/developer-on-fire.jpg"
        alt="Developer On Fire logo"
      />
    </div>
  ),
  caption: <p>Aired on Episode 67 of the ZADevChat Podcast</p>,
  ribbon: <Ribbon>2017</Ribbon>,
};

const rubyFuza2017 = {
  type: 'talk',
  link: 'https://www.youtube.com/watch?v=fkgAc0DY4s8',
  buttonText: 'Grab some popcorn',
  title: (
    <Anchor
      to="https://www.youtube.com/watch?v=fkgAc0DY4s8"
      title="Rubyfuza: The Imposter Within"
    >
      Rubyfuza: The Imposter Within
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        I spoke at Rubyfuza 2017 in Cape Town, South Africa about how Imposter
        Syndrome impacts my day-to-day decisions and confidence, affects growth
        by limiting opportunities and makes me feel unworthy. I wanted to share
        my experience & perspective of feeling like a fraud with other software
        professionals.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage
        src="../images/about/rubyfuza.jpg"
        alt="A presentation slide of my talk at Rubyfuza"
      />
    </div>
  ),
  caption: <p>A presentation slide of my talk at Rubyfuza</p>,
  ribbon: <Ribbon>2017</Ribbon>,
};

const curiousprogrammerImpostor2016 = {
  type: 'article',
  link: '/blog/the-imposter-within',
  buttonText: 'Grab some coffee',
  title: (
    <Anchor to="/blog/the-imposter-within" title="The Imposter Within">
      The Imposter Within
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        Written in 2016 on my blog{' '}
        <Anchor to="/" title="My blog">
          curious programmer
        </Anchor>
        , I explore different factors of self-doubt, uncertainty, comparison to
        others, and more, that contribute to a toxic feeling of being an
        imposter: feeling like a fraud. This can affect personal growth and
        productivity in the workplace.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage
        src="../images/about/pensive-woman-with-rain.jpg"
        alt="Pensive woman looking out a window at the rain"
      />
    </div>
  ),
  caption: <p>Pensive woman looking out a window at the rain</p>,
  ribbon: <Ribbon>2016</Ribbon>,
};

const aListApartOpportunities2016 = {
  type: 'article',
  link: 'https://alistapart.com/article/finding-opportunities-in-the-mistakes-we-make/',
  buttonText: 'Put on your reading glasses',
  title: (
    <Anchor
      to="https://alistapart.com/article/finding-opportunities-in-the-mistakes-we-make/"
      title="Finding Opportunities in the Mistakes We Make"
    >
      Finding Opportunities in the Mistakes We Make
    </Anchor>
  ),
  blurb: (
    <div>
      <p>
        In 2016 I was published on the{' '}
        <Anchor
          to="https://alistapart.com/"
          title="A List Apart"
          useMarkdownStyles={true}
          newTabIndicator={true}
        >
          A List Apart
        </Anchor>{' '}
        website where I share my career experience six years in and discuss the
        changes I would have made to improve my experience as a software
        developer.
      </p>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage
        src="../images/about/a-list-apart.png"
        alt="A sketched open book with a page that is torn at the bottom, a pen with running ink on the table and a steaming mug of a warm beverage"
      />
    </div>
  ),
  caption: <p>A hero image from a featured article</p>,
  ribbon: <Ribbon>2016</Ribbon>,
};

const microsoftProjects2007 = {
  type: 'project',
  title: (
    <>
      Lead software developer on online web registration projects for multiple
      Microsoft Events
    </>
  ),
  blurb: (
    <div>
      <ul>
        <li>Microsoft Tech-Ed Africa (2007 - 2012)</li>
        <li>Microsoft Partner Summit (2007 - 2012)</li>
        <li>Microsoft ICT Best Practices</li>
        <li>Microsoft TechDays</li>
        <li>Microsoft DevDays</li>
        <li>Microsoft Bootcamps</li>
      </ul>
    </div>
  ),
  image: (
    <div className="bg-default">
      <StaticImage
        src="../images/about/teched.jpg"
        alt="A Tech-Ed Africa 2009 logo"
      />
    </div>
  ),
  caption: <p>A Tech-Ed Africa 2009 logo</p>,
  ribbon: <Ribbon>2007 - 2012</Ribbon>,
};

export const achievements = [
  lewagon2023,
  offerZenChromeDevTools2018,
  girlCodeImpostorSyndrome2017,
  zaChatImpostor2017,
  developerOnFire2017,
  rubyFuza2017,
  curiousprogrammerImpostor2016,
  aListApartOpportunities2016,
  microsoftProjects2007,
];

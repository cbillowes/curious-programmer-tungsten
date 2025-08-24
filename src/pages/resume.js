import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '@components/head';
import Layout from '@components/layout';
import Anchor from '@components/anchor';
import ResumeDates from '@components/resume-dates';
import ResumeIcon from '@components/resume-icon';
import Backdrop from '@components/backdrop';
import {
  FaLinux,
  FaApple,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPrint,
  FaSpider,
  FaWindows,
  FaCheckCircle,
} from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import { GiDramaMasks } from 'react-icons/gi';
import '@styles/print.scss';
import classNames from 'classnames';

const getLogo = (logo) => {
  try {
    return require(`@images/logos/${logo}`).default;
  } catch (e) {
    return '';
  }
};

const Timeline = ({
  allMarkdownRemark,
  color,
  showEducation,
  showCareer,
  showTestimonials,
  showPodcasts,
  showPublications,
}) => {
  return allMarkdownRemark.edges.map(({ node }, index) => {
    const { excerpt, frontmatter } = node;
    const { slug, resume } = frontmatter;
    const {
      name,
      description,
      category,
      logo,
      company,
      jobTitle,
      type,
      arrangement,
      location,
      start,
      end,
      tech,
      summary,
      os,
    } = resume;
    if (
      `${showEducation ? 'Education' : ''}|
       ${showCareer ? 'Career' : ''}|
       ${showPodcasts ? 'Podcast' : ''}|
       ${showPublications ? 'Publication' : ''}|
       ${showTestimonials ? 'Testimonial' : ''}`.indexOf(category) === -1
    )
      return <></>;

    return (
      <section
        key={index}
        className="relative mx-auto max-w-[1600px] lg:w-6/12 xl:w-screen md:mt-3 md:mb-3 p-5 flex justify-center flex-col-reverse xl:flex-row print:px-0 print:py-2"
      >
        <div
          className={classNames(
            `absolute text-2xl top-1/2 transform -translate-y-1/2 rounded-full p-2 ${color[category].button} hidden xl:block`,
          )}
        >
          <ResumeIcon category={category} />
        </div>
        <div className="border-color-3 border-none xl:border-dashed xl:w-1/2 xl:mx-8 xl:text-right xl:border-r xl:pr-8">
          {company && (
            <h2 className="text-xl mt-2 xl:mt-0 md:text-2xl leading-loose font-semibold font-alt-sans print:mt-0 print:text-sm">
              <ResumeIcon
                category={category}
                className={`text-4xl rounded-full p-2 mr-1 ${color[category].button} inline xl:hidden`}
              />
              <Anchor
                to={`/resume/${slug}`}
                title={`${jobTitle} at ${company}`}
                className="font-bold"
              >
                <span className={color[category].heading}>{jobTitle}</span> at{' '}
                <span>{company}</span>
              </Anchor>
            </h2>
          )}
          {name && (
            <>
              <h2
                className={`text-xl mt-2 xl:mt-0 md:text-2xl leading-loose font-semibold font-alt-sans print:mt-0 print:text-sm ${color[category].heading}`}
              >
                <ResumeIcon
                  category={category}
                  className={`text-4xl rounded-full p-2 mr-1 ${color[category].button} inline xl:hidden`}
                />
                <Anchor to={`/resume/${slug}`} title={name}>
                  {name}
                </Anchor>
              </h2>
              <h3 className="font-black font-alt-sans">{jobTitle}</h3>
            </>
          )}
          <div className="leading-loose mb-4 print:text-sm print:mb-0">
            <div className="flex flex-col space-x-2 space-y-0 justify-end">
              {(category === 'Career' || category === 'Education') && (
                <>
                  <ResumeDates start={start} end={end} className="flex gap-2 justify-end opacity-80" />
                  <div className="opacity-80">
                    {location} &middot; {type} &middot; {arrangement} &middot;
                    <span className="pl-1 text-neutral">
                      {os === 'windows' && <FaWindows className="inline" />}
                      {os === 'macOS' && <FaApple className="inline" />}
                      {os === 'linux' && <FaLinux className="inline" />}
                    </span>
                  </div>
                </>
              )}
            </div>
            {category === 'Testimonial' && (
              <>
                <h4 className="font-bold">{description}</h4>
              </>
            )}
            <div className="hidden print:block text-xs text-gray-600">
              {tech &&
                tech.map((t, i) => (
                  <>
                    <span className="text-neutral">{t}</span>
                    {i < tech.length - 1 && <> &middot; </>}
                  </>
                ))}
            </div>
            <p className="mt-2 xl:text-right print:text-sm print:text-left">
              {summary || excerpt}
            </p>
          </div>
          <div className="flex items-center flex-wrap xl:flex-row-reverse print:hidden">
            <Anchor
              className="bg-primary-600 text-primary-200 rounded py-1 px-3 transform shadow-md hover:bg-blue-600 hover:text-blue-200 xl:mr-2"
              to={`/resume/${slug}`}
              title={company}
              forceNewTab={false}
            >
              Read more
            </Anchor>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-1/2 relative items-center justify-center xl:justify-start xl:text-right print:hidden">
          <div className="text-center">
            <div className="w-20 xl:w-48 pr-3 pt-3">
              {logo && (
                <img
                  src={getLogo(logo)}
                  alt={company || name}
                  className={`mx-auto bg-white rounded-lg px-6 py-4 ${category === 'Testimonial' ? 'rounded-full' : ''
                    }`}
                />
              )}
            </div>
            <div className="w-full xl:w-48 pr-3 pt-3 text-center print:hidden">
              {tech &&
                tech.map((t, i) => (
                  <>
                    <span className="text-neutral">{t}</span>
                    {i < tech.length - 1 && <> &middot; </>}
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  });
};

const Meta = () => {
  const dimensions = 300;
  return (
    <div className="text-center mb-6 print:text-left pt-4 lg:pt-16 px-4">
      <p className="text-right hidden print:block print:text-sm">2022-06-04</p>
      <div className="w-44 mx-auto print:w-20 print:float-right">
        <StaticImage
          src="../images/avatar.png"
          alt="A photo of Clarice Bouwer holding her head in a pose"
          width={dimensions}
          height={dimensions}
          className="rounded-full shadow-md print:border-0"
        />
      </div>
      <div className="hidden print:block print:text-2xl font-semibold">
        Resume
      </div>
      <h1 className="mx-auto text-center mb-4 text-4xl font-extrabold tracking-tighter leading-none md:text-5xl xl:text-6xl print:text-sm">
        Clarice Bouwer
      </h1>
      <h2 className="text-xl mt-2 md:text-xl leading-loose font-alt-sans font-bold print:mt-0 print:text-sm">
        Software Engineer Team Lead at Cloudsure Limited
      </h2>
      <p className="px-6 mt-2 leading-loose print:text-sm print:mt-0">
        <Anchor to="mailto:clarice@bouwer.dev" title="Email address">
          <FaEnvelope className="inline" /> clarice@bouwer.dev
        </Anchor>
        <span className="px-3"></span>
        <Anchor
          to="https://curiousprogrammer.dev"
          title="Curious Programmer website"
        >
          <FaSpider className="inline" /> curiousprogrammer.dev
        </Anchor>
        <span className="px-3"></span>
        <Anchor to="https://github.com/cbillowes" title="GitHub profile">
          <FaGithub className="inline" /> github.com/cbillowes
        </Anchor>
        <span className="px-3"></span>
        <Anchor
          to="https://www.linkedin.com/in/cbouwer/"
          title="LinkedIn profile"
        >
          <FaLinkedin className="inline" /> linkedin.com/in/cbouwer
        </Anchor>
        <br />
        Moka, Mauritius &middot; Hybrid
      </p>
    </div>
  );
};

const Pillar = ({ icon, title, items, className }) => {
  return (
    <div>
      <div
        class={classNames(
          'flex justify-center items-center mb-4 w-10 h-10 text-3xl rounded lg:h-16 lg:w-16',
          className,
        )}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white text-gray-900">
        {title}
      </h3>
      <ul className="my-6 lg:mb-0 space-y-4">
        {items?.map((item) => (
          <li className="flex space-x-2.5">
            <svg
              class={classNames('flex-shrink-0 w-5 h-5', className)}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="leading-relaxed text-gray-500 dark:text-gray-400">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CoverLetter = () => {
  return (
    <div className="text-left max-w-6xl mx-auto mb-4 leading-relaxed print:text-left print:text-md">
      <p className="max-w-4xl text-center mx-auto mb-3 text-xl leading-relaxed">
        A seasoned polyglot full-stack software engineer specializing in web development with {new Date().getFullYear() - 2005}{" "}
        years of experience delivering digital solutions across industries such as media, event registration, cloud, virtualization, and InsureTech.
      </p>
      <p className="max-w-4xl text-center mx-auto mb-16 text-lg leading-loose">
        Currently co-leads a remote team of 15 at Cloudsure Limited and Simply Financial Services, building a next-generation
        digital life insurance platform on a Clojure-based Polylith architecture spanning more than 15 repositories.
        Proven track record highlights innovation, systems thinking, and empathetic leadership in guiding high-performing teams.
        Dedicated to writing elegant code, fostering strong development practices, and creating exceptional user experiences.
      </p>
      <div className="mb-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-12 md:space-y-0 text-md">
        <Pillar
          title="Experience"
          icon={<SiLevelsdotfyi />}
          className="text-pink-600 ring-pink-400 ring-2 rounded-full"
          items={[
            `${new Date().getFullYear() - 2005
            } years of professional experience`,
            `Diverse skill set and industry exposure in web development`,
            `UX & DevX centric approach to building products`,
            `Team collaboration and leadership`,
            `Strong communication, problem-solving and analytical skills`,
          ]}
        />
        <Pillar
          title="Attributes"
          icon={<FaCheckCircle />}
          className="text-green-600 ring-green-400 ring-2 rounded-full"
          items={[
            `Curious, adaptable, and quick learner`,
            `Creative problem solver with a growth mindset`,
            `Committed to continuous learning and improvement`,
            `People-first culture and team player`,
            `Empathetic leader and mentor`,
            `Accountable and takes ownership`,
          ]}
        />
        <Pillar
          title="Values"
          icon={<GiDramaMasks />}
          className="text-blue-600 ring-blue-400 ring-2 rounded-full"
          items={[
            `Deliver high-value solutions while reducing waste`,
            `Full ownership of work, accountability and exceed expectations`,
            `Open, honest, and respectful communication`,
            `Lead by listening, fostering collaboration and inspiring innovation`,
            `Reduce costs and build user-centric products and features`
          ]}
        />
      </div>
    </div>
  );
};

const Button = ({
  color = 'bg-neutral',
  onClick,
  className = '',
  children,
}) => {
  return (
    <button
      className={`${color} py-1 px-4 m-1 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ResumePage = ({ data }) => {
  const scroll = typeof window !== 'undefined' && window.history.state?.scroll;
  if (scroll) {
    setTimeout(() => {
      const element = document.getElementById('resume');
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 100);
  }

  const { allMarkdownRemark } = data;
  const [education, setEducation] = useState(false);
  const [career, setCareer] = useState(true);
  const [testimonials, setTestimonials] = useState(false);
  const [podcasts, setPodcasts] = useState(false);
  const [publications, setPublications] = useState(false);

  const color = {
    Education: {
      button: 'bg-pink-500 text-white',
      heading: 'text-pink-500',
    },
    Career: {
      button: 'bg-orange-500 text-white',
      heading: 'text-orange-500',
    },
    Testimonial: {
      button: 'bg-green-500 text-white',
      heading: 'text-green-500',
    },
    Podcast: {
      button: 'bg-blue-500 text-white',
      heading: 'text-blue-500',
    },
    Publication: {
      button: 'bg-yellow-500 text-white',
      heading: 'text-yellow-500',
    },
  };

  const toggle = (onToggle, value) => {
    if (education && career && testimonials && podcasts && publications) {
      setEducation(false);
      setCareer(false);
      setTestimonials(false);
      setPodcasts(false);
      setPublications(false);
      onToggle(true);
    } else {
      onToggle && onToggle(value);
    }
  };

  return (
    <Layout baseRoute="/resume">
      <div className="py-16 px-4">
        <Backdrop />
        <Meta />
        <CoverLetter />
        <div
          id="resume"
          className="pt-16 text-center max-w-4xl mx-auto m-4 leading-loose print:hidden"
        >
          <Button
            color={career ? color['Career'].button : ''}
            onClick={() => toggle(setCareer, !career)}
          >
            Career
          </Button>
          <Button
            color={education ? color['Education'].button : ''}
            onClick={() => toggle(setEducation, !education)}
          >
            Qualifications
          </Button>
          <Button
            color={testimonials ? color['Testimonial'].button : ''}
            onClick={() => toggle(setTestimonials, !testimonials)}
          >
            Testimonials
          </Button>
          <Button
            color={podcasts ? color['Podcast'].button : ''}
            onClick={() => toggle(setPodcasts, !podcasts)}
          >
            Podcasts
          </Button>
          <Button
            color={publications ? color['Publication'].button : ''}
            onClick={() => toggle(setPublications, !publications)}
          >
            Publications
          </Button>
          <Button color="bg-black text-white" onClick={() => window.print()}>
            <FaPrint className="inline" />
          </Button>
        </div>
        <Timeline
          allMarkdownRemark={allMarkdownRemark}
          color={color}
          showEducation={education}
          showCareer={career}
          showTestimonials={testimonials}
          showPodcasts={podcasts}
          showPublications={publications}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ResumePageQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "resume" } } }
      sort: { frontmatter: { resume: { start: DESC } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 1000, format: PLAIN)
          frontmatter {
            slug
            title
            tags
            resume {
              category
              company
              start
              end
              jobTitle
              location
              logo
              tech
              type
              arrangement
              website
              summary
              name
              description
              os
            }
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
        siteUrl
      }
    }
  }
`;

export default ResumePage;

export const Head = ({ location, params, data }) => {
  const { siteMetadata } = data.site;
  return (
    <Seo
      {...siteMetadata}
      pageTitle="My career in Software Engineering"
      siteTitle={siteMetadata.title}
      description="I craft cutting-edge web products, continuously learn & deliver impactful results."
      shareImage="unicorn-thinking.webp"
      location={location}
      params={params}
    />
  );
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteMetadata = {
  title: 'Curious Programmer',
  description:
    'Explore a spectrum of skills at Curious Programmer—soft to technical. Articles, courses, and notes for continuous learning in software engineering.',
  keywords: 'blog, software development, software, programming',
  // This duplicated gem is used for gatsby-plugin-advanced-sitemap
  // and gatsby-plugin-robots-txt
  // https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/?=sitemap
  // https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=Robots.txt
  siteUrl: process.env.GATSBY_DOMAIN || 'https://curiousprogrammer.dev',
  lang: 'en-US',
  brand: '#f0ff7b',
  author: {
    name: 'Clarice Bouwer',
    twitter: 'cbillowes',
    url: 'https://clarice.bouwer.dev',
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/**/404', '/**/404.html'],
        query: `
            {
              allSitePage {
                nodes {
                  path
                }
              }
            }
          `,
        resolveSiteUrl: () => siteMetadata.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: '.',
        background_color: '#171E29',
        theme_color: '#bf125d',
        display: 'standalone',
        icon: 'src/images/icon-light.webp',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `./articles`,
      },
      __key: 'articles',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `./resume`,
      },
      __key: 'resume',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scribbles`,
        path: `./scribbles`,
      },
      __key: 'scribbles',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `courses`,
        path: `./courses`,
      },
      __key: 'courses',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `./resources/source`,
      },
      __key: 'resources',
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `curious-programmer`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      // This script will not load in develop mode
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-475QC81Y7F'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          // will not be loaded at all for visitors that have “Do Not Track” enabled
          respectDNT: process.env.HONOR_DNT || true,
        },
      },
    },
    {
      // https://www.gatsbyjs.com/docs/adding-search-with-algolia/
      // Responsible for the indexing
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        skipIndexing: process.env.ALGOLIA_DISABLED === 'true',
        continueOnFailure: true,
        enablePartialUpdates: true,
        queries: require('./build/search'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `gatsby-remark-autolink-header`,
            },
          },
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images/interactive-gifs`,
              dest: `${__dirname}/public/gifs`,
              play: `${__dirname}/src/images/play.png`,
              placeholder: `${__dirname}/src/images/placeholder.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/gifs`,
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: `cbillowes`,
              gistDefaultCssInclude: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 840,
              showCaptions: true,
              markdownCaptions: true,
              backgroundColor: 'none',
              quality: 80,
              withAvif: true,
              loading: "eager",
              decoding: "async",
              tracedSVG: {
                color: siteMetadata.brand,
              },
            },
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              // src/components/Theme/common/breakpoints.js: readingPane
              // Module cannot be required because it is not a CommonJS module :(
              width: 840,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: `gatsby-remark-code-title`,
            },
          },
          /* Emoji Catalog: https://projects.iamcal.com/emoji-data/table.htm */
          `gatsby-remark-emoji`,
          /*
            Should be last?
            Wraps iframes or objects (e.g. embedded YouTube videos) within
            markdown files in a responsive elastic container with a fixed
            aspect ratio. This ensures that the iframe or object will scale
            proportionally and to the full width of its container.
          */
          `gatsby-remark-responsive-iframe`,
          // https://thundermiracle.com/blog/en/2022-03-13-gatsby-add-copy-button-to-code-block/
          `gatsby-remark-prismjs-copy-button`,
          {
            // keep this as the last item in the plugins array.
            // code blocks are parsed and styled which will break
            // code protocols like gatsby-remark-embed-gist.
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: `±`,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

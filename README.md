<p align="center">
  <a href="https://curiousprogrammer.dev">
    <img alt="Curious Programmer" src="./src/images/logo.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  Curious Programmer | Tungsten
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/84ff184c-60d8-4df7-85d0-d18874cf7a6f/deploy-status)](https://app.netlify.com/sites/gallant-cray-096f77/deploys)

## 🕵️ Environment variables

Add the following (with their respective values) to your `.env` file in the root of the codebase.
You could also duplicate `.env.example`.

```text
# https://www.algolia.com/
ALGOLIA_ADMIN_KEY=
ALGOLIA_API_KEY=
ALGOLIA_BASE_URL=
ALGOLIA_DISABLED=false
GATSBY_ALGOLIA_APP_ID=
GATSBY_ALGOLIA_SEARCH_KEY=
```

## 🚀 Run the website

```bash
npm install
```

```bash
npm run build:images
```

```bash
npm run develop
```

If you have issues with the image processor, try

```bash
npm run clean && GATSBY_CPU_COUNT=8 npm run build
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

```bash
❯ tree -L 1
.
├── LICENSE
├── README.md
├── articles <------------ blog post md files
├── build <--------------- generate fields and pages
├── courses <------------- course material md files
├── node_modules <-------- npm dependencies (requires npm install)
├── public <-------------- auto-generated output dir
├── resources <----------- non-deployable assets
├── resume <-------------- resume related md files
├── scribbles <----------- micro blog post md files
├── src <----------------- the meat of of the website
├── .editorconfig
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-site.js
├── netlify.toml <-------- required by https://www.netlify.com/
├── package-lock.json
├── package.json
├── postcss.config.js <---- required by tailwind
└── tailwind.config.js <--- tailwind config
```

### gatsby-browser.js

This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

### gatsby-config.js

This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

### gatsby-node.js

This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

## Images

Add a source image to `resources/source` and run `npm run build:images` to build all the things!

## 🎓 Learning Gatsby

Looking for more guidance about Gatsby? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

Push to main and Netlify will build and deploy automatically.

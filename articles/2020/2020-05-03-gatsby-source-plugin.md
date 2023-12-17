---
featured: true
title: How I got started with my first Gatsby source & remark plugin
date: 2020-05-03 03:00:00 +0400
cover: gatsby.png
credit: gatsbyjs
creditLink: https://www.gatsbyjs.org/
creditSource: gatsbyjs.org
tags:
  - Technical
  - Gatsby
---

I created my first npm package - EVER! :tada: It's a Gatsby [source][1] and [transformer remark][2] plugin
called [gatsby-remark-interactive-gifs][3].
What that means is that it both extends the Gatsby GraphQL schema with what I call interactive gif data
and it translates the Markdown, which I have in the form of a `gif` protocol, into HTML. That means that
this

```markdown
`gif:nyancat.gif:caption=Nyanyanyanyanyanyanya`
```

becomes :point_down:
`gif:nyancat.gif:caption=Nyanyanyanyanyanyanya`

> If you like the idea of this plugin then please give it a [star][4] :star: on GitHub. Fork it to get an idea of how I
> developed the plugin. Try it out by installing it now :smile:
> `npm i -S gatsby-remark-interactive-gifs`

## Get started

> If you are unfamiliar with Gatsby, [Gatsby][5] is a blazing fast :rocket: modern site generator for React.
> To dive right in, check out the Gatsby [quick start][6] guide.

1. Create a Gatsby project (or use your existing one). Use the default or go fancy with a Gatsby starter for a fresh copy.
   I used [gatsby-started-default][9] for my blog.

```bash
gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
```

2. Create a `plugins` directory in the root of your project with a directory of the plugin you want to create.
   eg. `plugins/gatsby-remark-interactive-gifs`
   _There is a specific [naming convention][7] for plugins that you should take note of._

3. Initialize the directory with git before getting started: `git init`

4. Each plugin needs to have a `package.json` file so [initialize][8] your plugin with `npm init`.
   Add the `--yes` / `-y` flag if you wish to skip the questionnaire.
   Be sure to configure your package.json file with the relevant details if you intend on publishing to npm.
   Include relevant [keywords][12] so that your plugin is automatically detected by Gatsby's indexing.

5. Install the packages you need for your plugin using npm or yarn and configure them accordingly.
   [Commit your lock file][11]!

6. Find a place to put your tests. I put mine in a `specs` directory in the root of the plugin.

7. Create a `src` directory in the root of your project where you will place all the files you want to create for your plugin.
   Read through the plugin [documentation][10] to get an idea of what you can create. Also, there are some
   [files][13] that Gatsby looks for in a plugin.

8. Configure your plugin in your `gatsby-config.json` file in the root of your project.

9. Write the code you want to put in your plugin. You are now able to test it locally.

## Publish your package

1. You can create a release script that will bump the version, update the CHANGELOG.md and tag that commit
   for your release. I use [standard-version][14] to automate that process.

2. To publish your plugin, login to npm through the CLI and then publish it. Be sure to bump your version on each release.

```bash
npm run release #if you have the relevant release script
git push -u origin --tags
npm publish
```

3. Your plugin may not be available right away. Gatsby uses [Algolia][15] to index plugins and Gatsby rebuilds their website
   periodically to include plugins.

[1]: https://www.gatsbyjs.com/docs/creating-a-source-plugin/
[2]: https://www.gatsbyjs.org/tutorial/remark-plugin-tutorial/
[3]: https://gifs.curiousprogrammer.dev
[4]: https://github.com/cbillowes/gatsby-remark-interactive-gifs
[5]: https://www.gatsbyjs.org/docs/
[6]: https://www.gatsbyjs.org/docs/quick-start/
[7]: https://www.gatsbyjs.org/docs/naming-a-plugin
[8]: https://docs.npmjs.com/creating-a-package-json-file
[9]: https://github.com/gatsbyjs/gatsby-starter-default
[10]: https://www.gatsbyjs.org/docs/what-is-a-plugin/
[11]: https://stackoverflow.com/questions/44552348/should-i-commit-yarn-lock-and-package-lock-json-files
[12]: https://www.gatsbyjs.org/contributing/submit-to-plugin-library/
[13]: https://www.gatsbyjs.org/docs/files-gatsby-looks-for-in-a-plugin/
[14]: https://github.com/conventional-changelog/standard-version
[15]: https://www.algolia.com/

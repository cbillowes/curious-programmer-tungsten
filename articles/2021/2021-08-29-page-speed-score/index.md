---
title: What I did to build a high performing and SEO happy Gatsby blog
date: 2021-08-29 13:30:00 +0400
cover: pagespeed-score.png
tags:
  - Technical
  - Gatsby
  - Performance
  - Security
  - Analytics
---

As much as I want an attractive blog, I prefer a blog that is more discoverable and
outperforms others. That makes the eye-candy totally worth it and I feel
great knowing that I do the best I possibly can to make -
what I hope to be - a great experience for you. Your [feedback](mailto:clarice@bouwer.dev)
is whole-heartily welcome!

But wait up. What do I actually mean by highly discoverable and outperforming website? :thinking:
Is it just a bunch of green metric scores? Yes.
I honestly don't know enough so I rely on metrics, tools, the web
and my tiny bit of experience to guide me.

The results and optimization journey are a double-edged sword for me.
On one side, the more important one, is the need for me to maximize your usability
and experience without compromising on important things like
data costs and page load speed. The site must be
discoverable by search engines and can be shared nicely on different social platforms.
On the other side, the more greedy one, is a playground for me to learn
and explore different approaches and techniques that I can take to make an interesting and
well performing website that belongs to me.

> This curiosity brings about knew skills in my professional capacity.

In this article, I will share how I built my blog using
Gatsby, Netlify, Algolia, Lighthouse, many metrics sites, and such and share what my
thought patterns and process is.

## Performance first

I put performance first and I am very pedantic about it.
Fortunate for me, this naturally ropes in **simplicity** in my design.
Every feature is meticulously thought through by reasoning about it with some questions:

- What is the purpose of the feature?
- How should the feature be visualized?
- Where will the components be rendered?
- How can I render it in such a way that it enhances the user experience?

Once implemented - usually in a batch of features - I will analyze the website to ensure
there is little to no degradation. Where necessary, back to the drawing board I go.

Every one of my features has 5 simple goals:

- **Be data efficient** by using as little data over the wire as possible to ensure data costs
  are kept as low as possible.
- **Be snappy** with the response time when rendering pages and components from the server to the client.
- Stay **simple** and **minimalist** in the design to avoid cognitive overload for readers.
- Uphold a **user-friendly experience** and journey by creating meticulously placed components.
- **Developer friendly** to make it easier for me, as the developer, to come back to the
  code and know what I am doing.
- **Responsive** to ensure that the website is adequately accessible via different screen sizes
  and devices. Google Page Speed will give you mobile and desktop scores.

## Integration

### Gatsby

> [Gatsby](https://www.gatsbyjs.com/) provides development teams an open source frontend
> framework for creating dynamic, optimized websites and a cloud platform for delivering
> them on a blazing fast edge network.

I've used Gatsby for a few years and it has become my goto due to its simplicity, official
& community plugins, ridiculously cool features, out of the box performance and wide support.
It is a pleasure to work with, treats me well as a developer, gives me great results and is therefore
ideal for my blog.

One particular feature, **GraphQL**, gives me the ability to interact with
my data in interesting and convenient ways.

A little side step here, in 2020,
I created [gatsby-remark-interactive-gifs](https://gifs.curiousprogrammer.dev/) [
[source code](https://github.com/cbillowes/gatsby-remark-interactive-gifs)]
[[article](/blog/how-i-got-started-with-my-first-gatsby-source-remark-plugin/)].
Once markdown files are generated, gifs are turned into interactive components.
The gif does not load on page load rather you can click on a play button when you get to the gif.
The gif will then load and you can stop it at any time. I am really proud of my creation :star:

`gif:nyancat.gif:caption=Nyanyanyanyanyanyanya`

With that said, you can imagine the incredible number of [plugins](https://www.gatsbyjs.com/plugins) available
that allow you to do just about anything. The plugins below helped a lot with my SEO.

- [gatsby-plugin-advanced-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/)
  generates a single or multiple sitemaps with full XSL templates to make them
  neatly organized and human & machine readable, as well linking image resources
  to encourage media indexing.

- [gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)
  easily adds Google Global Site Tag to your site.

- [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
  creates the web app manifest (part of the PWA specification) which
  allows users to add your site to their home screen on most mobile browsers.
  The manifest provides configuration and icons to the phone.

- [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/)
  create robots.txt for your site.

### Netlify

> [Netlify](https://www.netlify.com/) ships web apps faster
> using an intuitive Git-based workflow and powerful serverless platform to
> build, deploy, and collaborate.

They make it super easy for developers to host websites in a way that is
simple, scalable and secure.

I have also been using Netlify for a few years. It's simple: I write my code, push to GitHub,
Netlify hooks in and triggers a build automatically then deploys upon success.
I get notified if the build breaks with a full log. Netlify even has a
[CLI](https://docs.netlify.com/cli/get-started/) tool that lets you configure
continuous deployment straight from the terminal.

### Algolia

> [Algolia](https://www.algolia.com/) enables developers to build next
> generation apps with APIs that deliver relevant content in milliseconds.

I have noticed websites using Algolia for search, became curious and decided to give it a try.
They do not disappoint! I successfully index my blog and get near to instant results with search.

### Tailwind CSS

> [Tailwind CSS](https://tailwindcss.com/) lets you rapidly build modern websites without
> ever leaving your HTML. It is a utility-first CSS framework that can be composed to
> build any design, directly in your markup.

I just wanted to see what all the hype was about. I gave it a try and got sucked right in.
I can create a slick user interface with writing little to no CSS at all.
The little bit of SASS I have left on my site is to style my articles which are
generated from markdown.

## Testing

There is a big difference between running a Gatsby website in development & production mode.

Development mode is optimized for rapid feedback and extra debugging information which means that
files don't appear the same as they do in production (minified and bundled).
It ships with features like live reloading and Gatsby's data explorer.

Production mode minifies and optimizes the site by packaging up config, data, and code, and creating all the
static HTML that eventually gets [rehydrated](https://www.gatsbyjs.com/docs/glossary#hydration)
into a React application.

Libraries like Tailwind get their CSS
[purged](https://tailwindcss.com/docs/optimizing-for-production), which means that the build
removes unused CSS for maximum performance, while other files get compressed, minified and bundled
during a production build.

This means that the output between development and production modes are vastly different and that
what works in development mode does not mean it will work in production mode. That is why you need to:

- Test your features using the production build as regularly as you can.
- Find local tools to run your website against numerous tests.
  I use Lighthouse which is installed in the Chrome DevTools.
- Run your tests with an optimized production build.
- Run your tests in incognito mode.
- Run your tests without any browser extension interference.

If you can't find a local testing tool suite then deploy your website somewhere (Netlify, Heroku) and get it tested online
using the Metrics tools below.

## Metrics

Use tools to test and analyze your website. You can get reports that offer scores,
essentials, diagnostics, opportunities and audits.

- [WebPageTest](https://webpagetest.org/) -
  reports security insights for a website security check, along with other
  speed tests and performance metrics.
- [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/) -
  analyzes the content of a web page, then generates suggestions to make that page faster.
- [GTmetrix](https://gtmetrix.com/) -
  see how your site performs, reveal why it's slow and discover optimization opportunities.
- [Online Broken Link Checker](https://www.brokenlinkcheck.com/) -
  scans webpages for dead hyperlinks.
- [Neil Patel](https://neilpatel.com/) -
  Ubersuggest crawls your website and offers SEO reports.
- [SEO Site Checkup](https://seositecheckup.com/) -
  instantly analyze your SEO issues.
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) -
  check to see how Twitter cards will generate.
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) -
  check to see how Facebook posts will generate.

## Resources

- Improving Site Performance at [Gatsby](https://www.gatsbyjs.com/docs/how-to/performance/improving-site-performance/)
- Make the Web Faster - Analyze and optimize your website with PageSpeed tools - at [Developers Google](https://developers.google.com/speed/)
- Top Ten Website Performance Metrics at [Pantheon](https://pantheon.io/blog/top-website-performance-metrics)
- Website security score explained at [snyk](https://snyk.io/blog/website-security-score-explained/)
- Using Lighthouse to improve page load performance at [Google Web](https://developers.google.com/web/updates/2018/05/lighthouse)

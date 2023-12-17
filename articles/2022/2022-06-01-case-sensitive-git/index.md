---
title: Make sure Git knows about case-sensitive changes to your file names
date: 2022-06-01 00:00 +0400
cover: git.png
credit: Vasil Enchev
creditLink: https://dribbble.com/shots/4037272-Git-monster-illustration/attachments/925202
tags:
  - Technical
  - React
  - JavaScript
  - Git
---

> It's only peculiar if you don't understand it and for a while, I didn't understand it.
> It builds locally but then can't resolve component on Netlify.

It started with me migrating my [blog][blog] from [Gatsby][gatsby] 3 to 4.
I had neglected my blog for months so my experience with the tools and frameworks were rusty and out of date.
Eventually I got the following error on Netlify. The build worked :100: locally.

```
failed Building production JavaScript and CSS bundles - 39.656s
error Generating JavaScript bundles failed
Can't resolve '../components/Layout' in '/opt/build/repo/src/pages'
If you're trying to use a package make sure that '../components/Layout' is installed. If you're trying to use a local file make sure that the path is correct.
```

What's different?

Eventually it dawned on me and things became clearer. Much less peculiar.

The filesystem differs!

I must've renamed the component on the filesystem and forgot to do so on Git.
When Netlify pulls the repository from GitHub, the poor component has a different name.
You'll need to move the file in Git in order to fix this.

```bash
git mv src/components/layout.js src/components/Layout.js
```

[blog]: https://github.com/cbillowes/curious-programmer-titanium
[gatsby]: https://www.gatsbyjs.com/gatsby-4/

---
title: How to debug a specific Gatsby package on build
devTo: https://dev.to/cbillowes/how-to-debug-a-specific-gatsby-package-on-build-3bid
cover: gatsby.png
credit: gatsbyjs
creditLink: https://www.gatsbyjs.org/
tags:
  - Technical
  - Tip
  - Terminal
  - Gatsby
---

I got an error and needed to get verbose logs for a particular package during a Gatsby build.

I came across this issue on GitHub with reference to a [DEBUG env var](https://github.com/gatsbyjs/gatsby/issues/34051#issuecomment-1077425897) that can be set to get better logs.

```
DEBUG=gatsby:gatsby-plugin-sharp npm run build
```

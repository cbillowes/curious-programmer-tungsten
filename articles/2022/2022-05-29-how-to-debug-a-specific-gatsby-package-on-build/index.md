---
title: How to debug a specific Gatsby package on build
date: 2022-05-29 19:35 +0400
cover: gatsby.png
tags:
  - Technical
  - Gatsby
  - dev.to
---

> Originally posted on [dev.to][dev.to]

I got an error and needed to get verbose logs for a particular package during a Gatsby build.

I came across this issue on GitHub with reference to a [DEBUG env var][github] that can be set to get better logs.

```bash
DEBUG=gatsby:gatsby-plugin-sharp npm run build
```

[dev.to]: https://dev.to/cbillowes/how-to-debug-a-specific-gatsby-package-on-build-3bid
[github]: https://github.com/gatsbyjs/gatsby/issues/34051#issuecomment-1077425897

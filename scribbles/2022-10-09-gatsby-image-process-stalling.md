---
title: Hack to fix Gatsby image process from stalling
cover: gatsby.png
credit: gatsbyjs
creditLink: https://www.gatsbyjs.org/
tags:
  - Technical
  - Hack
  - Terminal
  - Gatsby
---

Build stuck at running jobs (image transformation)

```bash
npm run clean && GATSBY_CPU_COUNT=8 npm run develop
```

- [GitHub #34051](https://github.com/gatsbyjs/gatsby/issues/34051)

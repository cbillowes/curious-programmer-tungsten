---
title: Why you will see the error 'Loading chunk \d+ failed'
devTo: https://dev.to/cbillowes/why-you-will-see-the-error-loading-chunk-d-failed-1ne4
date: 2022-09-06
cover: webpack.png
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/File:Webpack.svg
tags:
  - Technical
  - Node
  - JavaScript
  - Webpack
---

I know of the following reasons why chunks cannot be downloaded:

## Network errors

Inspect the network in the browser dev tools to find out more information about the errors.

## Resources not found

They don't exist in the correct directory (output > publicPath).
Try access the resource/asset via its URL in the browser to see if it exists.

## Package corruption

Something is wonky with the node_modules. In my case, I manipulated my modules locally
to avoid having to push to npm on each change. This caused corruption which resulted
in chunks that did exist in the output path were deemed not found.
To rectify this, delete the modules and re-install.

```bash
rm -rf node_modules
npm install # or `npm i` for short
```

## Duplicate styled-components

https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page


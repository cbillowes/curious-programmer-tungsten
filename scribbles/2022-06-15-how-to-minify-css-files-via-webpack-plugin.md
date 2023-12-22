---
title: How to minify CSS files via CopyWebpackPlugin for Webpack5
devTo: https://dev.to/cbillowes/how-to-minify-css-files-via-copywebpackplugin-for-webpack5-4fc0
date: 2022-06-15
cover: webpack.png
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/File:Webpack.svg
tags:
  - Technical
  - npm
  - Node
  - Webpack
  - JavaScript
---

## Goal

Emit minified vendor-based CSS files on build.

## Dependencies

```json:title=package.json
"copy-webpack-plugin": "11.0.0",
"cssnano": "5.1.11",
"webpack": "5.70.0",
"webpack-cli": "4.9.2"
```

## Elaborate

I have a few unminified vendor CSS files that I simply want to minify and copy to an output directory. These files were not being transformed by terser probably due to the chain of command (steps in which the build is processed).

All CSS files matching this regex `/src/vendors/**/*.css` are **transform**ed using `postcss` and `cssnano` in conjunction with the `CopyWebpackPlugin`.

## Code

```js:title=webpage.config.js
...
plugins: [
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/vendors/**/*.css',
        to: './css/[name].[contenthash].min[ext]',
        transform: (content, path) => {
          return postcss([cssnano])
            .process(content, {
              from: path,
            })
            .then((result) => {
              return result.css;
            });
        },
      },
    ],
  }),
],
...
```

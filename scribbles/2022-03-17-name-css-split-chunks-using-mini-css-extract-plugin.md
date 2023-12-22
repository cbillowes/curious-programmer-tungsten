---
title: Name CSS Split Chunks using MiniCssExtractPlugin
devTo: https://dev.to/cbillowes/code-snippet-name-css-split-chunks-using-minicssextractplugin-fg2/
date: 2022-03-17
cover: webpack.png
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/File:Webpack.svg
tags:
  - Technical
  - Tip
  - JavaScript
  - Webpack
---

> React: 17.0.2
> Webpack: 5.67.0
> Webpack CLI: 4.9.1
> mini-css-extract-plugin 2.5.3

## Snippet

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  ...
  output: {
    optimization: {
      ...
      minimizer: [
        new MiniCssExtractPlugin({
          chunkFilename: (pathData) => {
            return `${pathData.chunk.id}.[contenthash].css`;
          },
        }),
      ],
    },
  },
  ...
};
```

## Objective

Bust the cache for CSS files that are emitted on build using Webpack 5 with [Split Chunks](https://webpack.js.org/plugins/split-chunks-plugin/).

## Set up

1. `import` one or more CSS files inside a React component.
1. A single CSS file for that chunk is emitted on build.
1. This file will be requested when the component is imported downstream.
1. When it is requested over HTTP the file is most likely cached and will need to be busted upon new releases.

## Solution

Configure MiniCssExtractPlugin, using the snippet above, by assigning a naming function to the chunkFilename attribute on the webpack config file.

The `[contenthash]` placeholder produces the md4-hash of the output file content (e.g. [contenthash].js -> 4ea6ff1de66c537eb9b2.js). [See more](https://webpack.js.org/concepts/under-the-hood/#output).

---
title: How to reference a local Webpack npm package
date: 2022-01-14
cover: npm.png
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/Npm_(software)#/media/File:Npm-logo.svg
devTo: https://dev.to/cbillowes/how-to-reference-a-local-webpack-npm-package-20g4
tags:
  - Technical
  - Tip
  - Webpack
  - JavaScript
  - npm
---

With the help of this question and answer from [Stack Overflow](https://stackoverflow.com/questions/15806241/how-to-specify-local-modules-as-npm-package-dependencies):

Install the local npm package using the file path. Check node_modules to see the installed package.

```bash
npm install --save ../
```

(or `--save-dev` depending on the requirements) && (in this example the package exists in the parent directory)

Note that you only specify the path to the package. No filename should be referenced.

The package will be referenced with the local file package. Note the file: protocol.

```bash
{
  "name": "venom",
  "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "hulk": "file:../"
  }
}
```

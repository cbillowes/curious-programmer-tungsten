---
title: How to sort your package.json dependencies
devTo: https://dev.to/cbillowes/how-to-sort-your-packagejson-dependencies-1gi1
date: 2022-04-18
cover: npm.png
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/Npm_(software)#/media/File:Npm-logo.svg
tags:
  - Technical
  - Tip
  - npm
  - JavaScript
---

```bash
npm r -S example; npm r -D example
```

is short hand for `npm remove --save anything` and `npm remove --save-dev whatever`.

"example" is just the name of a package. You can use it verbatim because it will most likely not be in your package.json. Your packages are sorted by running npm remove even if the package "example" doesn't exist.

---

Thanks to this [question](https://stackoverflow.com/questions/34438465/is-there-a-way-to-alphabetize-package-json-without-installing-a-package) on Stack Overflow.


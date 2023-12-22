---
title: How to show filenames in code snippets in Gatsby in Markdown
cover: gatsby.png
credit: gatsbyjs
date: 2022-10-09
creditLink: https://www.gatsbyjs.org/
tags:
  - Technical
  - Tip
  - JavaScript
  - Gatsby
---

With the [gatsby-remark-code-titles](https://www.gatsbyjs.com/plugins/gatsby-remark-code-titles/) plugin.

```bash
npm install gatsby-remark-code-titles --save-dev
```

```javascript:title=gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-code-titles',
          options: {
            className: 'your-custom-class-name',
          },
        }, // IMPORTANT: this must be ahead of other plugins that use code blocks
      ],
    },
  },
];
```

Custom title gets injected and then needs to be styled. Example from docs:

```css
.gatsby-remark-code-title {
  margin-bottom: -0.6rem;
  padding: 0.5em 1em;
  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
    'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
    monospace;

  background-color: black;
  color: white;
  z-index: 0;

  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
}
```

## Usage

```markdown
```js:title=example-file.js
alert('how cool is this!');
```.
```

> This plugin will parse the Markdown AST, pluck the title, and then “clean” the code snippet language for further processing.
> In other words, the plugin will create the following structure, injecting a custom div with the title:

```markdown
<div class="gatsby-code-title">example-file.js</div>
```js
alert('how cool is this');
```.
```

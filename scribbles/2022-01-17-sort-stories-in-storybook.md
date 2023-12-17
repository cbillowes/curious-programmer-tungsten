---
title: How to sort stories alphabetically in Storybook (6.2)
devTo: https://dev.to/cbillowes/how-to-sort-stories-alphabetically-in-storybook-62-3e61
cover: storybook.png
creditSource: storybook.js.org
creditLink: https://storybook.js.org/
tags:
  - Technical
  - Tip
  - Storybook
  - JavaScript
---

```javascript:title=.storybook/preview.js
export const parameters = {
  options: {
    storySort: (a, b) => {
      const aId = a[1].kind;
      const bId = b[1].kind;
      return aId === bId
        ? 0
        : aId.localeCompare(bId, undefined, { numeric: true });
    }
  },
};
```

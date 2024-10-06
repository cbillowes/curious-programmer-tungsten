---
title: Use React hooks inside an MDX story in Storybook
date: 2022-01-13
cover: storybook.png
creditSource: storybook.js.org
creditLink: https://storybook.js.org/
devTo: https://dev.to/cbillowes/use-react-hooks-inside-an-mdx-story-in-storybook-33pl
tags:
  - Technical
  - Tip
  - Storybook
  - React
  - JavaScript
---

```javascript
<Story name="With hooks">
  {() => {
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} time(s)
      </button>
    );
  }}
</Story>
```

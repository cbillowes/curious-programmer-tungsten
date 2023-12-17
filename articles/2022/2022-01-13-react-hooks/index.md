---
title: Use React hooks inside an MDX story in Storybook
date: 2022-01-13 00:00 +0400
cover: storybook.png
creditSource: storybook.js.org
creditLink: https://storybook.js.org/
tags:
  - Technical
  - Storybook
  - React
  - JavaScript
  - dev.to
---

> Originally posted on [dev.to][dev.to]

A [story][story] captures the rendered state of a UI component.
Developers write multiple stories per component that describe all the “interesting” states a component can support.

[MDX][mdx] is a standard file format that combines Markdown with JSX.
It means you can use Markdown’s terse syntax (such as # heading) for your documentation, write stories that compile to our component story format, and freely embed JSX component blocks at any point in the file. All at once.

A React [Hook][hook] lets you use state and other React features without writing a class.

Tie the three together:

```jsx
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

[dev.to]: https://dev.to/cbillowes/use-react-hooks-inside-an-mdx-story-in-storybook-33pl
[story]: https://storybook.js.org/docs/react/get-started/whats-a-story
[mdx]: https://storybook.js.org/docs/react/writing-docs/mdx#gatsby-focus-wrapper
[hook]: https://reactjs.org/docs/hooks-overview.html

---
title: Prettify your web application with Tailwind CSS
parent: /courses/full-stack
date: 2022-11-04
modified: 2022-11-14
abstract:
  Tailwind CSS is an open source CSS framework.
  The main feature of this library is that, unlike other CSS frameworks like Bootstrap,
  it does not provide a series of predefined classes for elements such as buttons or tables.
  In this chapter, you will install, configure and use it in your components.
---

## Objectives

1. Install and configure Tailwind CSS.
1. Prettify your components.

## Get started

In this video, you will set up the Tailwind CLI and
create a landing page from start to finish,
going over many of the common utility classes and then deploying
it to InMotion Hosting using Git.

`youtube:https://www.youtube.com/embed/dFgzHOX84xQ`

In this video you will learn the basics of Tailwind CSS by building a
Discord-inspired navbar from scratch.
Learn how to leverage utility classes to build responsive animated UI elements faster.

`youtube:https://www.youtube.com/embed/pfaSUYaSgRo`

## Install

Follow this [guide][guide] for more information.

```bash:title=>./web
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

> Restart the server because you installed new dependencies.

```bash:title=>./web
touch postcss.config.js
```

```js:title=./web/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

```js:title=./web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```bash:title=>./web
touch ./src/styles.css
```

```css:title=./web/src/styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx:title=./web/src/index.js
import '../styles.css';
```

## Prettify components

Layout can have a dark background color, light text color and the minimum height of the background will be the vertical height (`vh`) of the screen.
The parent div to `Outlet` has a max width, has `auto` horizontal margins and padding to give it some breathing room.

```jsx:title=./web/src/components/Layout.js
const Layout = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto p-5">
        <Outlet />
      </div>
    </div>
  );
};
```

The navigation is given a dark blue background with light blue text and some padding.
The first child follows the same principle as the parent `Outlet` div above but it is also a flex box and is told to space with justify between.
That means that the Home menu item will be on the left and the Register and Login buttons on the right.
The `ul`s are both flex and have spacing applied to it.

```jsx:title=./web/src/components/Navigation.js
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-blue-300 py-2 px-5">
      <div className="max-w-3xl flex justify-between mx-auto">
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
```

Each company review will have a bottom margin for spacing, the heading will be large text with bottom margin and the ⭐ has left margin.

```jsx:title=./web/src/pages/Home.js
return (
  <div key={slug} className="mb-10">
    <h1 className="text-2xl mb-1">
      <Link to={`/review/${slug}`}>{title}</Link>
      {rating && <span className="ml-2">⭐ {rating}</span>}
    </h1>
    <p>{abstract}</p>
  </div>
);
```

The heading on the Review page is larger than the text and has a bottom border.
The rating has a left margin and the abstract a bottom margin.

```jsx:title=./web/src/pages/Review.js
return (
  <div>
    <h1 className="text-2xl mb-1">
      {title}
      {rating && <span className="ml-2">⭐ {rating}</span>}
    </h1>
    <div className="mb-5">{abstract}</div>
    <Rating
      title="Your rating"
      max={5}
      value={rating}
      onRated={async (rating) => {
        const result = await axios.put(
          `http://localhost:3001/api/review/${slug}/rate/${rating}`,
        );
        setReview(result.data);
      }}
    />
    <Comment
      commentOn={title}
      onSave={async (data) => {
        const result = await axios.post(
          `http://localhost:3001/api/review/${slug}/comment`,
          data,
        );
        setReview(result.data);
      }}
    />
    <Comments data={comments} />
  </div>
);
```

Now the you have a small idea about how Tailwind CSS works, you can refer to the docs for classes that you don't understand.
Below is the Controls component.

```jsx:title=./web/src/components/Controls.js
const Form = ({ title, children }) => {
  return (
    <fieldset className="border border-slate-700 text-slate-400 flex flex-col items-center py-4 px-5 mb-4">
      <legend className="px-1 uppercase text-sm">{title}</legend>
      {children}
    </fieldset>
  );
};

const Label = ({ label, children, isRequired }) => {
  return (
    <label className="w-full text-sm cursor-pointer">
      {label}
      {isRequired ? (
        <span className="bg-pink-800 text-white text-xs py-1 px-2 rounded-md float-right">
          Required
        </span>
      ) : (
        <></>
      )}
      {children}
    </label>
  );
};

const TextBox = forwardRef(
  ({ label, isRequired, type, placeholder, ...rest }, ref) => {
    return (
      <Label label={label} isRequired={isRequired}>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md py-2 px-2 mb-2 mt-2"
          required={isRequired}
          {...rest}
        />
      </Label>
    );
  },
);

const TextArea = forwardRef(
  ({ label, isRequired, placeholder, rows, ...rest }, ref) => {
    console.log(ref);
    return (
      <Label label={label} isRequired={isRequired}>
        <textarea
          ref={ref}
          placeholder={placeholder}
          className="w-full rounded-md py-2 px-2 mb-2 mt-2"
          rows={rows}
          required={isRequired}
          {...rest}
        ></textarea>
      </Label>
    );
  },
);

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-green-600 hover:bg-yellow-500 hover:text-black text-white py-1 px-4 rounded-md w-32"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

The Rating component:

```jsx:title=./web/src/components/Rating.js
import { useRef, useState } from 'react';
import { Form } from './Controls';

const LeftStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const leftStar = useRef();
  return (
    <path
      ref={leftStar}
      className={`cursor-pointer ${
        isHover
          ? 'fill-green-500'
          : isActive
          ? 'fill-yellow-500'
          : 'fill-slate-500'
      }`}
      d="M256.024,391.104L97.4,512l60.592-195.608L0,196.032h195.264L256.024,0"
      onClick={() => onRated(value)}
      onMouseEnter={() => onHover(value)}
    />
  );
};

const RightStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const rightStar = useRef();
  return (
    <path
      ref={rightStar}
      className={`cursor-pointer ${
        isHover
          ? 'fill-green-600'
          : isActive
          ? 'fill-yellow-600'
          : 'fill-slate-600'
      }`}
      d="M414.616,512L256.024,391.104L97.4,512l60.592-195.608L0,196.032h195.264L256.024,0l60.736,196.032 H512l-157.968,120.36L414.616,512z"
      onClick={() => onRated(value)}
      onMouseEnter={() => onHover(value)}
    />
  );
};

const Stars = ({ size, value, stars, onRated }) => {
  const [hoverValue, onHover] = useState(0);
  const [hovering, toggleHovering] = useState(false);

  return (
    <div className="flex gap-2 my-2.5">
      {stars.map((rating) => {
        return (
          <div className="inline-block" key={rating}>
            <svg
              height={size}
              width={size}
              viewBox="0 0 512 512"
              onMouseEnter={() => toggleHovering(true)}
              onMouseLeave={() => toggleHovering(false)}
            >
              <g>
                <RightStar
                  value={rating}
                  selected={value}
                  isActive={value >= rating}
                  isHover={hovering && hoverValue >= rating}
                  onHover={onHover}
                  onRated={onRated}
                />
                <LeftStar
                  value={rating - 0.5}
                  selected={value}
                  isActive={value >= rating - 0.5}
                  isHover={hovering && hoverValue >= rating - 0.5}
                  onHover={onHover}
                  onRated={onRated}
                />
              </g>
            </svg>
          </div>
        );
      })}
    </div>
  );
};

const Rating = ({ title, value, max, onRated }) => {
  const [rating, setRating] = useState(value || 0);
  const stars = Array.from(Array(max).keys()).map((i) => i + 1);

  const handleRated = (value) => {
    setRating(value);
    onRated && onRated(value);
  };

  const handleReset = () => {
    setRating(0);
    onRated && onRated(0);
  };

  return (
    <Form
      title={
        <span>
          {title}: <strong className="text-yellow-500">{rating} ⭐</strong>
        </span>
      }
    >
      <Stars size="42" value={rating} stars={stars} onRated={handleRated} />
      <button
        onClick={handleReset}
        className="text-xs uppercase text-slate-500 hover:text-red-500"
      >
        reset my rating
      </button>
    </Form>
  );
};

export default Rating;
```

![Rating component](./assets/rating.png 'Screenshot of the component')

Lastly, the comments listing component can be spruced up a little.

```jsx:title=./web/src/components/Comments.js
return (
  <Form title={format(timestamp)} key={i}>
    <blockquote className="w-full">
      <div className="leading-loose">{comment}</div>
      <cite>— {name}</cite>
    </blockquote>
  </Form>
);
```

## Next steps

You are going to remove hardcoded variables by adding environment variables.

## References

- [Tailwind Crash Course | Project From Scratch][tailwindcss-vid] - Traversy Media on YouTube
- [Prettify with Tailwind CSS][guide] - Curious Programmer

[guide]: https://curiousprogrammer.dev/courses/jamstack/08/prettify-with-tailwind-css
[tailwindcss-vid]: https://www.youtube.com/watch?v=dFgzHOX84xQ

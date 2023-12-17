---
title: Connect the frontend to the backend
parent: /courses/full-stack
date: 2022-11-03
modified: 2022-11-14
abstract:
  In this chapter, you will learn to whitelist your frontend domain to combat CORS when
  communicating between the frontend and backend server API.
  You will also interact with the API by updating some of your frontend components.
---

## Objectives

1. Whitelist your frontend domain (which includes the port because it's not `80`)
   http://localhost:3000 in your ExpressJS server.
1. Replace the in-memory database with actual database functionality.
1. Update pages and components to interact with the API and render the results on screen.

## Cross Origin Resource Sharing (CORS)

The backend and frontend are running on different ports -
3001 and 3000 respectively. A Cross Origin Resource Sharing [CORS][cors]
network error will occur on requests made to the API from the frontend
because of this. In order to access the resource, you need to either be on the same domain (and port)
or be whitelisted so that the server can accept your request.

`youtube:https://www.youtube.com/embed/4KHiSt0oLJ0`

Install the [cors][cors-npm] npm package in the server directory
so that you can enable CORS on the ExpressJS server.

```bash:title=>./server
npm install cors
```

```js:title=./server/src/server.js
import express from 'express';
import cors from 'cors';
import { withCollection } from './db.js';

const app = express();
// The endpoint will be configurable later.
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

// ...
```

## Interact with the API

Remove your in-memory database.

```bash:title=>./
rm -rf web/src/data/reviews.json
```

Install [axios][axios-npm] npm package.

```bash:title=./
npm install axios
```

In this video you will learn how to make HTTP requests with GET, POST, PUT and DELETE.

`youtube:https://www.youtube.com/embed/661GhwA3nYI`

You are going to render each review on the Home Page by iterating through the reviews array
returned from the get request made by `axios` in the `fetch` function in the `useEffect`.

If there are no reviews, text is rendered to say that there is nothing.

```jsx:title=./web/src/pages/Home.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      // This hardcoded value will be configured later on.
      const response = await axios.get(`http://localhost:3001/api/reviews`);
      setReviews(response.data);
    };
    fetch();
  }, []);

  if (reviews && reviews.length === 0) {
    return <div>No results</div>;
  }

  return reviews.map(({ slug, title, abstract, rating }) => {
    return (
      <div key={slug}>
        <h1>
          <Link to={`/review/${slug}`}>{title}</Link>
          {rating && <span>⭐ {rating}</span>}
        </h1>
        <p>{abstract}</p>
      </div>
    );
  });
};

export default HomePage;
```

Create the following components to be rendered on your Review page.

```bash:title=>./web/src/components
touch Controls.js Rating.js Comments.js Comment.js
```

Import the `forwardRef` function from React.
Use this technique for automatically passing a ref through a component to one of its children.
See more information [here][forward-refs].

```jsx:title=./web/src/components/Controls.js
import { forwardRef } from 'react';
```

Create the following named reusable control components.

```jsx:title=./web/src/components/Controls.js
const Form = ({ title, children }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

const Label = ({ label, children, isRequired }) => {
  return (
    <label>
      {label}
      {isRequired ? (
        <span>
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Form, Label, TextBox, TextArea, Button };
```

Create the component that will handle the rating stars.

```jsx:title=./web/src/components/Rating.js
import { useRef, useState } from 'react';
import { Form } from './Controls';

const getFillClassName = (isHover, isActive) => {
  if (isHover) {
    return `hover`;
  }
  if (isActive) {
    return `active`;
  }
  return `empty`;
};

const LeftStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const leftStar = useRef();
  const fillClassName = getFillClassName(isHover, isActive);
  return (
    <path
      ref={leftStar}
      className={fillClassName}
      d="M256.024,391.104L97.4,512l60.592-195.608L0,196.032h195.264L256.024,0"
      onClick={() => onRated(value)}
      onMouseEnter={() => onHover(value)}
    />
  );
};

const RightStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const rightStar = useRef();
  const fillClassName = getFillClassName(isHover, isActive);
  return (
    <path
      ref={rightStar}
      className={fillClassName}
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
    <div>
      {stars.map((rating) => {
        return (
          <div key={rating}>
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
          {title}: <strong>{rating} ⭐</strong>
        </span>
      }
    >
      <Stars size="42" value={rating} stars={stars} onRated={handleRated} />
      <button
        onClick={handleReset}
      >
        reset my rating
      </button>
    </Form>
  );
};

export default Rating;
```

Create the component that will handle commenting on reviews.
Use `useRef` to create a reference of the element so that you can interact with it programmatically.

```jsx:title=./web/src/components/Comment.js
import { useRef } from 'react';
import { Button, Form, TextArea, TextBox } from './Controls';

const Comment = ({ commentOn, onSave }) => {
  const name = useRef();
  const email = useRef();
  const comment = useRef();

  const handleSave = () => {
    onSave &&
      onSave({
        name: name.current.value,
        email: email.current.value,
        comment: comment.current.value,
      });
  };

  return (
    <Form title={<span> What did you think? 💭</span>}>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextBox
          ref={email}
          label="Your email address"
          type="email"
          placeholder="For feedback only"
        />
        <TextBox
          ref={name}
          label="Your name"
          isRequired
          type="text"
          placeholder="Appears on your comment"
        />
        <TextArea
          ref={comment}
          label="Your comment"
          isRequired
          rows="10"
          placeholder={`Publicly share what you think about ${
            commentOn || 'this topic'
          }`}
        />
        <Button onClick={handleSave}>Save</Button>
      </form>
    </Form>
  );
};

export default Comment;
```

Create the listing for comments.

```jsx:title=./web/src/components/Comments.js
import { Form } from "./Controls";

const format = (timestamp) => {
  const dtFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
    timeZone: 'UTC'
  });

  return dtFormat.format(new Date(timestamp));
}

const Comments = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>There are no comments yet</div>;
  }

  return data
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ name, comment, timestamp }, i) => {
      return (
        <Form title={format(timestamp)} key={i}>
          <blockquote>
            <div>{comment}</div>
            <cite>— {name}</cite>
          </blockquote>
        </Form>
      );
    });
};

export default Comments;
```

Lastly, the Review page

```jsx:title=./web/src/pages/Review.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import axios to make the web requests.
import axios from 'axios';
import NotFoundPage from './NotFound';
import Comment from '../components/Comment';
import Comments from '../components/Comments';
import Rating from '../components/Rating';

const ReviewPage = () => {
  const { slug } = useParams();
  // You need to set the review in state once it is loaded from the API.
  const [review, setReview] = useState();

  // useEffect cannot be async so create an async
  // function within it to load the data.
  useEffect(() => {
    // Fetch the data from the API using axios.
    // This endpoint will later be configurable.
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/reviews/${slug}`,
      );
      setReview(response.data);
    };
    fetch();
    // This code will execute and rerender the component
    // every time slug's value will change.
  }, [slug]);

  if (review) {
    const { title, abstract, rating, comments } = review;
    return (
      <div>
        <h1>
          {title}
          {rating && <span>⭐ {rating}</span>}
        </h1>
        <div>{abstract}</div>
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
  }

  return <NotFoundPage />;
};

export default ReviewPage;
```

## Next steps

The web app is kind of bland so you will be adding some styling
via Tailwind CSS.

## References

- [cors][cors] - npm package
- [axios][axios-npm] - npm package
- [CORS in 100 seconds][cors-vid] - Fireship on YouTube
- [How to use CORS in Node.js with Express][cors] - section.io
- [Forwarding Refs in React][forward-refs] - Official documentation

[cors]: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
[cors-vid]: https://www.youtube.com/watch?v=4KHiSt0oLJ0
[cors-npm]: https://www.npmjs.com/package/cors
[axios-npm]: https://www.npmjs.com/package/axios
[forward-refs]: https://reactjs.org/docs/forwarding-refs.html

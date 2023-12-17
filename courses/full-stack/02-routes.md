---
title: Route to different pages in the application
parent: /courses/full-stack
date: 2022-11-02
modified: 2022-11-13
abstract:
  In this chapter, you will use the react-router-dom to manage your routes
  and navigate to different pages using a navigation bar component.
---

## Objectives

1. Add routes to each page in order to navigate to them.
1. Create a navigation bar to render links for pages.

## Dependency

You need to install an npm package called [react-router-dom][react-router-dom]
that will manage your routes in React for you.

```bash:title=bash
npm install react-router-dom
```

React Router is seemingly the most popular way to add page routing in React Apps.
The video below offers:

- A crash course for beginners.
- Learning how to use React Router v6.

`youtube:https://www.youtube.com/embed/59IXY5IDrBA`

## Create routes

You'll import a few things from `react-router-dom`.
Checkout the [docs][react-router-dom] to find out more about each one.
You'll also be importing all the pages you need routes for.
Your routing will be hooked up in `index.js`.

Each path is a route and it will render an element to render
corresponding to a page when matched on.
The path `/*` matches on any path and will render the `NotFoundPage`
if that match does not match on any of the other
Route paths specified.

`:slug` is a param in the URL segment that allows for variable content
that we can access programmatically.

```jsx:title=./src/index.js
// ... other imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ReviewPage from './pages/Review';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/review/:slug" element={<ReviewPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading....</div>}
      />
    </Layout>
  </React.StrictMode>,
);

// ... other code
```

You no longer need the `App` files so you can safely remove them.

```bash:title=bash
rm src/App.*
```

## Navigation

You will want to navigate to the different pages that you have created.
In order to do so, create a navigation component with links to the different pages in it
using the `react-router-dom` package.

```bash:title=bash
touch src/components/Navigation.js
```

```jsx:title=./src/components/Navigation.js
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

The Navigation component uses the routes so it needs [context][so-usehref] to the `RouterProvider`.
Change the Layout component to make render `Outlet` instead of the former `children` prop.

Use [Outlet][outlet] to render the `element` component associated with the path specified in `index.js`.

```jsx:title=./src/Layout.js
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
```

The Navigation component relies on the RouterProvider in order
to render correctly. Right now it's outside the provider.

Let's wrap the page inside the Layout component within the provider.
Update the route element to render the Layout component and
remove the Layout wrapper on RouterProvider.

```jsx:title=./src/App.js
// ....

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="review/:slug" element={<ReviewPage />} />
    </Route>,
  ),
);

// ....

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading....</div>} />
  </React.StrictMode>,
);

// ...
```

## URL params

Create a fake in-memory data file for the interim.
This data will be displayed in our app for the interim.

```bash:title=bash
mkdir src/data && touch src/data/reviews.json
```

Populate the file with random data.

```json:title=./src/data/reviews.json
[
  {
    "slug": "1",
    "title": "Joe's Snack Shop",
    "abstract": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "rating": 3.5
  },
  {
    "slug": "2",
    "title": "Gerry's TV",
    "abstract": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "rating": 4.5
  },
  {
    "slug": "3",
    "title": "Pieter's Flower Shack",
    "abstract": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "rating": 4.5
  }
]
```

Display the data in the Reviews page based on the URL.
Render the Not Found page when there is no match on the data.

```jsx:title=./src/pages/Review.js
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFound';
import data from '../data/reviews.json';

const ReviewPage = () => {
  const { slug } = useParams();
  const reviews = data.filter((i) => i.slug === slug);
  if (reviews.length > 0) {
    const review = reviews[0];
    return (
      <div>
        Review page <pre>{JSON.stringify(review, null, 2)}</pre>
      </div>
    );
  }

  return <NotFoundPage />;
};

export default ReviewPage;
```

## Listing

Show all reviews on the home page and link through to the correct review page.

```jsx:title=./src/pages/Home.js
import { Link } from 'react-router-dom';
import data from '../data/reviews.json';

const HomePage = () => {
  return data.map(({ slug, title, description, rating }) => {
    return (
      <div key={slug}>
        <h2>
          <Link to={`/review/${slug}`}>{title}</Link> / {rating} ✨
        </h2>
        <p>{description}</p>
      </div>
    );
  });
};

export default HomePage;
```

## Next steps

You will create a backend API that will contain logic to authenticate, rate and comment
on things.

## References

- [react-router-dom][react-router-dom] - Official documentation
- [React Router 6 - Tutorial for Beginners][react-router-vid] - freeCodeCamp.org on YouTube
- [&lt;Outlet /&gt; component][outlet] - Official documentation

[react-router-dom]: https://reactrouter.com/en/main
[react-router-vid]: https://www.youtube.com/watch?v=59IXY5IDrBA
[so-usehref]: https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor
[outlet]: https://reactrouter.com/en/main/components/outlet

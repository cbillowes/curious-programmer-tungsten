---
title: Create a new React web application
parent: /courses/full-stack
date: 2022-11-02
modified: 2022-11-14
abstract:
  React is currently claimed to be the most popular JavaScript library out there.
  In this chapter, you will learn more about getting started with React,
  create your React application and the basic pages and components required for this course.
---

## Objectives

1. Learn some React.
1. Create your React application.
1. Create the basic pages and components required for this course.

## Get started

React is currently claimed to be the most popular JavaScript library out there.
Here's a video that will teach you more about it.
What you’ll learn in the video below:

- How to use React
- Why you would want to use React
- How to start building React apps

`youtube:https://www.youtube.com/embed/DEdO37kkodo`

## Create your application

You can either use CRA or create the application from the [ground up][sans-cra].

> According to Facebook, CRA was not created for production but rather created for
> beginners so that developers didn't have to learn React and Webpack at the same time.
> CRA lacks flexibility as it is hard to configure, customize and strip out unnecessary dependencies.

I've called the application is **stargazers** but you can call it anything you want.
The madness behind the name is that there will be stars on the website for rating a
company review.

```bash:title=bash
npx create-react-app stargazers
cd stargazers
```

### Git repository

Don't forget to init your Git repository so that you can push to your favorite hosted Git service like
GitHub, GitLab or BitBucket. Keep on committing during the course.

```bash:title=bash
git init
git add .
git commit -m "Initial commit"
```

> ### Verify
>
> You should see a slow spinning React logo when the page loads on http://localhost:3000 when you start the app.
>
> ```bash:title=bash
> npm start
> ```

## Skeleton

Create your directory structure so that you have pages and components to work on.

```bash:title=bash
mkdir src/pages && touch src/pages/Home.js src/pages/Register.js src/pages/Login.js src/pages/Review.js src/pages/NotFound.js
mkdir src/components && touch src/components/Layout.js
```

More pages and components to come later on.

### Layout

Edit your `Layout` component with some skeleton markup.

```jsx:title=./src/components/Layout.js
const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
```

## Pages

Edit your page components to look like the page below but update the component name and children inside the Layout component to
reflect the name of the page you are editing. Example `HomePage` and `Home page` become `LoginPage` and `Login page` respectively.

```jsx:title=./src/components/Home.js
const HomePage = () => {
  return <div>Home page</div>;
};

export default HomePage;
```

## App

Edit the component that mounts into your application.
Import the `Layout` component and use it with some dummy text for the time being.

```jsx:title=./src/App.js
import Layout from './components/Layout';

function App() {
  return <Layout>Something great is about to happen!</Layout>;
}

export default App;
```

## Next steps

Now that you have the basic components and pages, you can routes to each
page with a navigation component for users to click on.

## References

- [How to create a React app without using create-react-app][sans-cra] - Dev.to
- [Getting Started with React][react-vid] - DigitalOcean on YouTube

[sans-cra]: https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl
[react-vid]: https://www.youtube.com/watch?v=DEdO37kkodo

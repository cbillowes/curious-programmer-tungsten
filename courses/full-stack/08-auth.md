---
title: Firebase authentication
parent: /courses/full-stack
date: 2022-11-04
modified: 2022-11-14
abstract:
  In this chapter, you will create an email/password authentication mechanism that integrates with
  Firebase auth so that you don't have to build an authentication solution from the ground up.
---

## Objectives

1. Learn more about Firebase Authentication.
1. Understand how to navigate parts of Firestore in order to configure the authentication for your app.
1. Register and log users into your app.
1. Customize the navigation bar menu items based on the authentication status of the user.
1. Hide certain functionality based on the authentication status of the user.

## Get started

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated
identity providers like Google, Facebook and Twitter, and more.

What's the difference between authorization and authentication?
How can you protect your backend system and your users' data?
What's a trusted environment, and why is it safe to access your app's
data directly from the client? Join the Firebase team to learn all of this and more in
Better Safe than Sorry, our new show about writing safe and secure apps
using Firebase and Firebase Authentication.

`youtube:https://www.youtube.com/embed/vBUk293QSKY`

In this episode of Firebase Fundamentals, Firebase Developer Advocate
Peter Friese will show you how to get up and running quickly with Firebase Authentication
in your web application.

`youtube:https://www.youtube.com/embed/rbuSx1yEgV8`

## New Firebase project

Login with your Google Account on [Firebase][firebase].

- Click on "Add project"
- Project name: Stargazers
- Turn off Google Analytics for now
- Click on Continue once the project is ready
- Click on the Authentication card
- Click on the "Get started" button
- Click on Email/Password authentication
- Enable basic Email/Password and click on the "Save" button
- Navigate to "Users" tab to create a test user
- Click on the "Add user" button and create a login (example below)
  - `a@b.com`
  - `Apple123!`

### Setup Firebase Authentication

1. Click on "Project Overview".
1. Click on the web icon above "Add an app to get started" on the hero image.
1. App nickname: Stargazers Web App and do not check the hosting checkbox.
1. Click "Register app".
1. Install `firebase` to your web app.
1. Initialize Firebase and begin using the SDKs.

```bash:title=>./web
npm install firebase
```

```bash:title=>./web
touch src/firebase.js
```

```js:title=>./web/src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "...",
authDomain: "...",
projectId: "...",
storageBucket: "...",
messagingSenderId: "...",
appId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

```bash:title=>./web
mkdir src/hooks; touch src/hooks/useUser.js
```

```js:title=./web/src/hooks/useUser.js
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading };
};

export default useUser;
```

## Pages

### Control for the future

You are going to be introduced to the `Alert` component which was not yet created.
Create the following:

```jsx:title=./web/src/components/Controls.js
// ...

const Alert = ({ children, onClose }) => {
  return (
    <div className="bg-pink-700 text-pink-300 mt-6 py-2 px-5 rounded-md text-sm relative">
      {children}
      <button
        className="absolute top-1 right-2"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};
export { Form, Label, TextBox, TextArea, Button, Alert};
```

### Login page

Create a page with an email and password field to log a user in using the
`signInWithEmailAndPassword` Firebase function.

The peeking feature will show and hide the password by changing its type on interaction.

```jsx:title=./web/src/pages/Login.js
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, Form, TextBox } from '../components/Controls';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [peeking, togglePeeking] = useState(false);

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        getAuth(),
        email.current.value,
        password.current.value,
      );
      navigate('/profile');
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <Form title="Login to Stargazers">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextBox
          ref={email}
          label="Email address"
          isRequired
          type="text"
          placeholder="Your registered email address"
        />
        <TextBox
          ref={password}
          type={peeking ? 'text' : 'password'}
          label={
            <span>
              Password{' '}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  togglePeeking(!peeking);
                }}
              >
                <span className="text-xl">{peeking ? '🫣' : '👀'}</span>
              </button>
            </span>
          }
          isRequired
        />
        <hr className="border-0 mt-4" />
        <div className="flex items-center gap-4">
          <Button onClick={login}>Login</Button>
          <Link to="/register" className="hover:text-green-500">Need an account? Register.</Link>
        </div>
        {errorMessage && (
          <Alert onClose={() => setErrorMessage('')}>{errorMessage}</Alert>
        )}
      </form>
    </Form>
  );
};

export default LoginPage;
```

### Register page

Create a page with an email and password field to register a new user account using the `createUserWithEmailAndPassword` Firebase function. The peeking feature also applies here.

```jsx:title=./web/src/pages/Register.js
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, Form, TextBox } from '../components/Controls';

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [peeking, togglePeeking] = useState(false);

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleSave = async () => {
    try {
      await createUserWithEmailAndPassword(
        getAuth(),
        email.current.value,
        password.current.value,
      );
      navigate('/reviews');
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <Form title="Register for Stargazers">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextBox
          ref={email}
          label="Email address"
          isRequired
          type="text"
          placeholder="Your registered email address"
        />
        <TextBox
          ref={password}
          type={peeking ? 'text' : 'password'}
          label={
            <span>
              Password{' '}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  togglePeeking(!peeking);
                }}
              >
                <span className="text-xl">{peeking ? '🫣' : '👀'}</span>
              </button>
            </span>
          }
          isRequired
        />
        <hr className="border-0 mt-4" />
        <div className="flex items-center gap-4">
          <Button onClick={handleSave}>Register</Button>
          <Link to="/login" className="hover:text-green-500">
            Already registered? Login.
          </Link>
        </div>
        {errorMessage && (
          <Alert onClose={() => setErrorMessage('')}>{errorMessage}</Alert>
        )}
      </form>
    </Form>
  );
};

export default RegisterPage;
```

## Restrict access to authenticated users

Only allow authenticated users to give ratings and comment on reviews.

```jsx:title=./web/src/pages/Review.js
import useUser from '../hooks/useUser';

const ReviewPage = () => {
  const { user } = useUser();

  return (
    <div>
     {/* ... */}
     {!user && (
        <Link
          to="/login"
          className="bg-slate-500 py-1 px-2 mb-4 inline-block rounded-md hover:bg-green-500 hover:text-green-800"
        >
          Log in to give your feedback
        </Link>
      )}
      {user && (
        <>
          <Rating
            title="Your rating"
            max={5}
            value={rating}
            onRated={async (rating) => {
              const result = await axios.put(
                `${API_ENDPOINT}/api/review/${slug}/rate/${rating}`,
              );
              setReview(result.data);
            }}
          />
          <Comment
            commentOn={title}
            onSave={async (data) => {
              const result = await axios.post(
                `${API_ENDPOINT}/api/review/${slug}/comment`,
                data,
              );
              setReview(result.data);
            }}
          />
        </>
      )}
      {/* ... */}
    </div>
  )
};

export default ReviewPage;
```

## User-based navigation bar

Show the register and login buttons when there is no user that is logged in.
Show the user email address and logout button when the user is authenticated.

```jsx:title=./web/src/components/Navigation.js
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Navigation = () => {
  const { user } = useUser();

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
            {!user && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/profile">{user.email}</Link>
                </li>
                <li>
                  <button onClick={async () => await user.logout()}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
```

## Connect the backend

- Click on the Project Settings gear icon
- Click on the Project Settings menu item
- Click on the Service accounts tab
- Select Node.js Admin SDK configuration snippet to later copy the snippet for your code
- Click on the Generate a private key button
- Generate key will download the key to your hard drive
- Move the key to the root of your backend server
  `mv /path/to/downloads/key.json /path/to/project/backend/credentials.json`
- **Ignore the `credentials.json` file from Git**

```bash:title=./.gitignore
credentials.json
```

Install the [firebase-admin][firebase-admin-npm] npm package to enable access to
Firebase services from privileged environments (such as servers or cloud).

```bash:title=./server
npm install firebase-admin
```

```bash:title=./server
touch ./src/firebase.js
```

```js:title=./server/src/firebase.js
import fs from 'fs';
import admin from 'firebase-admin';

const credentials = JSON.parse(
  fs.readFileSync(`${process.cwd()}/credentials.json`),
);

const firebaseAdmin = () => {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
  return admin;
};

export { firebaseAdmin };
```

```js:title=./server/src/server.js
// ...
import { firebaseAdmin } from './firebase.js';
// ...
firebaseAdmin();
// ...
```

### Restricting access to endpoints

Add the following middleware to your server. It will pull the `authToken` from the
headers, verify it via Firebase and assign the user to the user on the Request.

```js:title=./server/src/server.js
app.use(async (req, res, next) => {
  const { authtoken } = req.headers;
  if (authtoken) {
    try {
      req.user = await firebaseAdmin.auth().verifyIdToken(authtoken);
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
      return;
    }
  }
  next();
});
```

```js:title=./server/src/server.js
app.put('/api/review/:slug/rate/:rating', async (req, res) => {
  const { slug, rating } = req.params;
  const { uid } = req.user || {};
  try {
    await rateReview(slug, uid, rating);
  } catch (e) {
    res.status(403).json({
      error: e.message,
    });
    return;
  }
  const review = await getReviewBySlug(slug);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({
      query: req.params,
      error: `Review could not be rated because it cannot be found in the database.`,
    });
  }
});
```

```js:title=./server/src/reviews.js
const getRatingsWithThisUserRating = (ratings, userId, total) => {
  const filtered = ratings?.filter((r) => r.userId !== userId) || [];
  return [...filtered, { userId, total }];
};

const rateReview = (slug, userId, rating) => {
  if (!userId) {
    throw new Error('UNAUTHORIZED');
  }
  return withCollection(collectionName, async (collection) => {
    const total = parseFloat(rating, 0);
    const review = await getReviewBySlug(slug);
    const ratings = getRatingsWithThisUserRating(
      review?.ratings,
      userId,
      total,
    );
    const average = calculateAverage(ratings);
    return await collection.updateOne(
      {
        slug,
      },
      {
        $set: {
          rating: average,
          ratings: ratings,
          totalRatings: ratings.filter((r) => r.total > 0).length,
        },
      },
    );
  });
};
```

Just before you send the review back to the client, delete the `ratings`
key so that it does not get passed through.

```js:title=./server/src/server.js
delete review.ratings;
res.json(review);
```

## Change frontend web app

Install [firebase][firebase-npm] npm package. Firebase provides the tools and
infrastructure you need to develop, grow, and earn money from your app.
This package supports web (browser), mobile-web, and server (Node.js) clients.

### Install the SDK

```bash:title=>./web
npm install --save firebase
```

### Use Firebase in your app

```js:title=./web/src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // ...
};

const firebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
}

export {
  firebaseApp
}
```

Import and initialize `firebaseApp` in your `index.js` file.

```js:title=./web/src/index.js
import { firebaseApp } from './firebase';
firebaseApp();
```

## useUser hook

```js:title=./web/src/hooks/useUser.js
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading };
};

export default useUser;
```

## Navigation

```js:title=./web/src/hooks/useUser.js
import { Link, redirect } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../hooks/useUser';

const Navigation = () => {
  const { user } = useUser();

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
            {!user && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/profile">{user.email}</Link>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      await signOut(getAuth());
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
```

## Comments component

```jsx:title=./web/src/components/Comment.js
import { useRef } from 'react';
import { Button, Form, TextArea } from './Controls';

const Comment = ({ user, commentOn, onSave }) => {
  const comment = useRef();

  if (!user) return <></>;

  const handleSave = () => {
    onSave &&
      onSave({
        name: user.email,
        comment: comment.current.value,
      });
  };

  return (
    <Form title={<span> What did you think? 💭</span>}>
      <form onSubmit={(e) => e.preventDefault()}>
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

## Review page

```jsx:title=./web/src/pages/Review.js
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../constants';
import useUser from '../hooks/useUser';
import axios from 'axios';
import NotFoundPage from './NotFound';
import Comment from '../components/Comment';
import Comments from '../components/Comments';
import Rating from '../components/Rating';

const ReviewPage = () => {
  const { slug } = useParams();
  const [review, setReview] = useState();
  const { user } = useUser();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API_ENDPOINT}/api/reviews/${slug}`);
      setReview(response.data);
    };
    fetch();
  }, [slug]);

  if (review) {
    const { title, abstract, rating, totalRatings, comments } = review;
    return (
      <div>
        <h1 className="text-2xl mb-1">
          {title}
          {rating > 0 && <span className="ml-2">⭐ {rating}</span>}
        </h1>
        {totalRatings > 0 && (
          <div className="text-xs">
            {totalRatings === 1 ? 'There has been 1 rating' : `${totalRatings} ratings`} so far.
          </div>
        )}
        <div className="mt-4 mb-5">{abstract}</div>
        {!user && (
          <Link
            to="/login"
            className="bg-slate-500 py-1 px-2 mb-4 inline-block rounded-md hover:bg-green-500 hover:text-green-800"
          >
            Log in to give your feedback
          </Link>
        )}
        {user && (
          <>
            <Rating
              title="Your rating"
              max={5}
              value={rating}
              onRated={async (rating) => {
                const token = user && (await user.getIdToken());
                const result = await axios.put(
                  `${API_ENDPOINT}/api/review/${slug}/rate/${rating}`,
                  {},
                  {
                    headers: { authtoken: token },
                  },
                );
                setReview(result.data);
              }}
            />
            <Comment
              user={user}
              commentOn={title}
              onSave={async (data) => {
                const token = user && (await user.getIdToken());
                const result = await axios.post(
                  `${API_ENDPOINT}/api/review/${slug}/comment`,
                  data,
                  { headers: { authtoken: token } },
                );
                setReview(result.data);
              }}
            />
          </>
        )}
        <Comments data={comments} />
      </div>
    );
  }

  return <NotFoundPage />;
};

export default ReviewPage;
```

## Next steps

You are going to deploy your application to AppEngine on Google Cloud Platform.

## References

- [Google Firebase Console][firebase] - Official website
- [firebase-admin][firebase-admin-npm] - npm package
- [firebase][firebase-npm] - npm package
- [What is Firebase Authentication?][auth-vid-what] - Firebase on YouTube
- [Getting started with Firebase Authentication on the web][auth-vid-get-started] - Firebase on YouTube

[firebase]: https://console.firebase.google.com
[firebase-admin-npm]: https://www.npmjs.com/package/firebase-admin
[firebase-npm]: https://www.npmjs.com/package/firebase
[auth-vid-what]: https://www.youtube.com/watch?v=vBUk293QSKY
[auth-vid-get-started]: https://www.youtube.com/watch?v=rbuSx1yEgV8

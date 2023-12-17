---
title: Configure environment variables for your application
parent: /courses/full-stack
date: 2022-11-04
modified: 2022-11-14
abstract: All hardcoded references must be eradicated.
  In this chapter, you are going to remove all them
  from your web client and server API by introducing environment variables.
---

## Objectives

1. Create development and production environment variable files for your web client and your server.
1. Configure the variables you want to abstract so that they are no longer hardcoded.
1. Use the variables instead of the hardcoded values in your code.

## Create custom environments

### Keep it private

You are going to create a bunch of custom environment files that need
to be kept away from prying eyes so you must exclude it from Git.

Update your `.gitignore` file to tell Git to ignore the following:

```text:title=.gitignore
# environment variables
# https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env.development
.env.production
```

You won't be using all the files in this course but you do
have the option to. Also, if you did use CRA to create your
app then most of these files should already be listed.

> [Learn more][cra-env] about what other env files can be used when adding
> custom environment variables.

### Create React App

Create your development and production variable files and a constants file to interface
between the variables and your applications.

```bash:title=>./web
touch .env.development .env.production src/constants.js
```

You will provide a key (capitalized) and value representation
of your variables. In your React app, the key will be prefixed with `REACT_APP_`.

```text:title=./web/.env.development
REACT_APP_API_ENDPOINT="http://localhost:3001"
```

Later on your website is going to be baked into the server
so the domain name will be the same, no more CORS problems and then
the endpoint will no longer need to be specified.

```text:title=./web/.env.production
REACT_APP_API_ENDPOINT=""
```

You can access your variables via `process.env.VARIABLE` where
`VARIABLE` is the name of the variable.

The constants file will allow your app to interface with the variables
without having to litter your app with `process.env` in multiple
different places.

```js:title=./web/src/constants.js
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export { API_ENDPOINT };
```

Now you can update all hardcoded references to use the constant from the
environment variable that we just created.

```js:title=./web/src/pages/Home.js
import { API_ENDPOINT } from '../constants';

const HomePage = () => {
// ...
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API_ENDPOINT}/api/reviews`);
      setReviews(response.data);
    };
    fetch();
  }, []);
// ...
};
```

```js:title=./web/src/pages/Review.js
import { API_ENDPOINT } from '../constants';

const ReviewPage = () => {
  // ...
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API_ENDPOINT}/api/reviews/${slug}`);
      setReview(response.data);
    };
    fetch();
  }, [slug]);

  if (review) {
    return (
      <div>
        <Rating
          onRated={async (rating) => {
            const result = await axios.put(
              `${API_ENDPOINT}/api/review/${slug}/rate/${rating}`,
            );
          }}
        />
        <Comment
          onSave={async (data) => {
            const result = await axios.post(
              `${API_ENDPOINT}/api/review/${slug}/comment`,
              data,
            );
          }}
        />
      </div>
    );
  }
};
```

### ExpressJS server

Same as a above, create your development and production variable files
and a constants file to interface between the variables and your applications.

```bash:title=>./server
touch .env.development .env.production src/constants.js
```

Configure the key/value pairs for your development and production environment.
Since you have ignored these files, it may be a good idea to put a copy of the
configs as a code blocks in the README.md file of your project.

```text:title=./server/.env.development
ENV="development"
MONGODB_MASKED_URL="mongodb://127.0.0.1:27017"
MONGODB_NAME="stargazers-db"
CORS_ORIGINS="http://localhost:3000"
PORT="3001"
```

Wait a minute, username and password are new and that is because the `MASKED_URL` relies
on having the `<username>` and `<password>` text replaced by the actual username and password
created in MongoDB. As it's not used in the `.env.development` file, it was stripped out
but it's harmless keeping it there with empty values.

```text:title=./server/.env.production
ENV="production"
MONGODB_USERNAME=""
MONGODB_PASSWORD=""
MONGODB_MASKED_URL="mongodb+srv://<username>:<password>@subdomain.mongodb.net/?retryWrites=true&w=majority"
MONGODB_NAME="stargazers-db"
CORS_ORIGINS=""
```

| Key                | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| ENV                | "development" or "production" environment that we are building the server for  |
| MONGODB_USERNAME   | The username used to connect to the MongoDB instance                           |
| MONGODB_PASSWORD   | The password used to connect to the MongoDB instance                           |
| MONGODB_MASKED_URL | The URL to connect to the MongoDB instance WITHOUT the username and password\* |
| MONGODB_NAME       | The name of the MongoDB database                                               |
| CORS_ORIGINS       | The name of the origin that needs to e whitelisted for CORS                    |

\* Example of the masked URL: `mongodb+srv://<username>:<password>@subdomain.mongodb.net/?retryWrites=true&w=majority`

#### Programmatically access variables

Install the [dotenv][dotenv] npm package in the server.

```bash:title=>./server
npm install dotenv --save
```

```js:title=./web/src/constants.js
import dotenv from 'dotenv';

const env = process.env.ENV;
console.log(`Starting up in ${env} mode.`);

dotenv.config({
  path: `.env.${env}`,
});

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_MASKED_URL = process.env.MONGODB_MASKED_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;

const PORT = process.env.PORT || '3001';
const CORS_ORIGINS = process.env.CORS_ORIGINS || 'http://localhost:3000';

export {
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_MASKED_URL,
  MONGODB_NAME,
  PORT,
  CORS_ORIGINS,
};
```

Make use of the newly created variables.

```js:title=./server/src/server.js
import { PORT, CORS_ORIGINS } from './constants.js';

const app = express();
app.use(
  cors({
    origin: CORS_ORIGINS,
  }),
);

// ...

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
  await openMongoDbConnection();
});
```

```js:title=./server/src/db.js
import { MongoClient } from 'mongodb';
import {
  MONGODB_NAME,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_MASKED_URL,
} from './constants.js';

const maskedUrl = MONGODB_MASKED_URL;
const url = maskedUrl
  .replace('<username>', MONGODB_USERNAME)
  .replace('<password>', MONGODB_PASSWORD);
const dbName = MONGODB_NAME;
const client = new MongoClient(url);

const closeConnection = () => {
  client.close();
  console.info(`Successfully closed MongoDB instance to ${maskedUrl}`);
};

const openConnection = async () => {
  await client.connect();
  console.info(`Successfully connected to MongoDB instance at ${maskedUrl}`);
};

const withCollection = async (name, executeQuery) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection(name);
    return await executeQuery(collection);
  } catch (e) {
    closeConnection();
    throw e;
  }
};

export { openConnection, closeConnection, withCollection };
```

## Next steps

Add Firebase authentication for users to register and login.

## References

- [dotenv][dotenv] - npm
- [Adding custom environment variables in CRA][cra-env] - Official documentation

[dotenv]: https://www.npmjs.com/package/dotenv
[cra-env]: https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used

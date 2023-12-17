---
title: Create the backend with ExpressJS
parent: /courses/full-stack
date: 2022-11-03
modified: 2022-11-13
abstract:
  ExpressJS claims to be a fast, un-opinionated, minimalist web framework for Node.js.
  In this chapter, you will create a backend server with a dummy API that your frontend will connect to,
  create a test endpoint where your client says ping and the server says pong
  and then you will create an endpoint to rate reviews albeit it be in-memory for now.
---

## Objectives

1. Learn some ExpressJS.
1. Create a backend server with a dummy API that your frontend will connect to.
1. Communicate between the server and client with a ping pong endpoint.
1. Create an API endpoint to rate reviews in-memory.
1. Test the endpoint using a tool like Postman.

## Get Started

### Node.js

Node.js is an open-source and cross platform runtime environment for executing JavaScript code.

`youtube:https://www.youtube.com/embed/TlB_eWDSMt4`

### ExpressJS

ExpressJS claims to be a fast, un-opinionated, minimalist web framework for Node.js.
ExpressJS is also the most popular Node.js web server framework and is the basis of thousands of sites.
What you’ll learn in the video below:

- Basic routing
- Sending data
- Rendering HTML and static files
- Routers and advanced routing
- Middleware
- Parsing form/JSON data and query params

`youtube:https://www.youtube.com/embed/SccSCuHhOw0`

## Restructure

Adding a server requires the addition of a new `npm` project with its own `package.json` file.
To avoid the complexities of setting up a [monorepo][monorepo], you are
going to [move][mv-cmd] the web application into a directory of its own.

```bash:title=>./
mkdir -p web; mv * $_
```

Update `.gitignore` to exclude `node_modules/` (note the forward-slash is at the end).
This directory will now be excluded from anywhere within your project instead of just the root directory.

## Create the ExpressJS server

Create a `server` directory in the root of the project and initialize it as an npm project.
Install the [express][express-npm] npm package and then create the `server.js` entry point file.

```bash:title=>./
mkdir server
cd server
npm init -y
npm install express
mkdir src; touch src/server.js
```

### Enable modern JS

Configure your server to use modern JavaScript (such as `import` statements) by editing
the `package.json` and specifying `type` as `module`.

```json:title=./server/package.json
{
  "type": "module",
}
```

### Run the server

Add the following script to your `package.json` file under scripts.

```json:title=./server/package.json
{
  "start": "node src/server.js"
}
```

And run the server using

```bash:title=>./server
npm start
```

### :tennis: Ping pong

Create a new Express server listening on port `3001`.
In this basic endpoint example, `/ping` should respond with `"pong!"`.
In other words, open your browser and navigate to http://localhost:3001/ping
to see the text `pong!` on the screen.

```js:title=./server/src/server.js
import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.listen('3001', () => {
  console.log("Listening on http://localhost:3001")
})
```

### Automatic updating

Let's update the server to use [nodemon][nodemon] so that we can avoid manually
restarting the server when changes are made.

```bash:title=>./server
npm install nodemon --save-dev
```

```json:title=./server/package.json
{
  "start": "nodemon src/server.js"
}
```

## Develop the API

Create a temporary in-memory ratings array with 3 objects in it.
The endpoint to hit will be `http://localhost:3001/api/review/:id/rate/:rating`
where `id` and `rating` are variables that will correlate to attributes in the objects
within the array.

```js:title=./server/src/server.js
import express from 'express';

// This in-memory structure be replaced by real database later on.
const inMemRatings = [
  { id: 1, rating: 0 },
  { id: 2, rating: 0 },
  { id: 3, rating: 0 },
];

const app = express();

// A built-in middleware function that parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// A PUT verb on the following endpoint to update the rating and respond to the client accordingly.
app.put('/api/review/:id/rate/:rating', (req, res) => {
  const { id, rating } = req.params;
  const item = inMemRatings.find((r) => r.id === parseInt(id, 10));
  if (item) {
    item.rating += parseFloat(rating);
    res.send(item);
  } else {
    res.send('Not Found');
  }
});
```

Test the request in an API tester like Postman and remember to set the method to `PUT`.

```bash:title=>./
curl --location --request PUT 'http://localhost:3001/api/review/1/rate/1'
```

## Next steps

Time to get serious and implement a real database.
I've chosen to explore MongoDB for this course but you could essentially
connect to any database you would like to.

## References

- [Express.js][express.js] - Official documentation
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour][node.js-vid] - Programming with Mosh on YouTube
- [Learn Express JS In 35 Minutes][expressjs-vid] - Web Dev Simplified on YouTune
- [express][express-npm] - npm
- [nodemon][nodemon] - npm

[express.js]: https://expressjs.com/
[mv-cmd]: https://stackoverflow.com/questions/547719/is-there-a-way-to-make-mv-create-the-directory-to-be-moved-to-if-it-doesnt-exis
[node.js-vid]: https://www.youtube.com/watch?v=TlB_eWDSMt4
[expressjs-vid]: https://youtu.be/SccSCuHhOw0
[monorepo]: https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj
[express-npm]: https://www.npmjs.com/package/express
[nodemon]: https://www.npmjs.com/package/nodemon

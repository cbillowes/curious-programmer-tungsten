---
title: Get data from the collection
parent: /courses/jamstack
date: 2022-10-23
abstract:
  Connect to your Astra DB via the API that
  will call your Netlify serverless functions. You will get
  data from your Astra DB collection and display it on the UI.
---

## Handler

You need to create a `GET` handler that will get all data from the collection and handle certain error cases. his verb is encapsulated in the `find`
function of the `getCollection` function.

```js:title=./netlify/functions/getTodos.js
const { getCollection } = require('./astraClient');

exports.handler = async (event, context) => {
  try {
    const todos = await getCollection();
    try {
      const res = await todos.find({});
      return {
        statusCode: 200,
        body: JSON.stringify(Object.values(res.data)),
      };
    } catch (e) {
      const code = e.toString().indexOf("Request failed with status code 404") > -1
        ? 404
        : 400;
      return {
        statusCode: code,
        body: JSON.stringify(e.message),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
```

## API

The API exposes endpoints that will fetch from `./netlify/functions/<endpoint>`.
The endpoints are handlers in the `./netlify/functions` directory in the root of the app.
This location is to be configured in `netlify.toml`.

To understand this new-age magic, you will need to understand Netlify [functions][netlify-functions].
These bad boys deploy server-side code that will work as an API endpoint without the need
for running your own server or VM or pod. It runs on Netlify automatically
in response to events and can process jobs in the background.

```js:title=./src/api.js
const throwError = (response, message) => {
  throw new Error({
    status: response.status,
    message,
    response,
  });
};

const respond = (response) => {
  if (response.status >= 500) {
    throwError(response, 'Internal Server Error');
  }
  if (response.status === 404) {
    throwError(response, 'Not Found');
  }
  if (response.status >= 400) {
    throwError(response, 'Bad Request');
  }
  return response.json();
};

const getTodos = async () => {
  const response = await fetch(`/.netlify/functions/getTodos`);
  return await respond(response);
};

const api = {
  getTodos,
};

export default api;
```

## List tasks in the User Interface

```jsx:title=./src/App.js
import React, { useEffect, useState } from 'react';
import api from './api';

const App = () => {
  // Optimization strategy:
  // Store todos in an array on the state. Once interacted on, change the state
  // instead of getting all todos from the DB each time.
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load all todos in a useEffect so that there isn't
    // a stack overflow with infinite rerenders.
    // https://www.robinwieruch.de/react-hooks-fetch-data/
    const loadTodos = async () => {
      const data = await api.getTodos()
      setTodos(data);
    };
    loadTodos();
  }, []);

  return (
    <>
      {todos && todos.length === 0 && <div>There is nothing to do.</div>}
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => {
          return <div key={todo.id}>{todo.id} | {todo.text}</div>;
        })}
    </>
  );
};

export default App;
```

> ## :raised_hand: Important to note
>
> At this point the collection does not exist so you should get a `404` response
> from the API in your network tab. Let's go add some stuff.

[netlify-functions]: https://www.netlify.com/products/functions/

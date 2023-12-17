---
title: Create data in the collection
parent: /courses/jamstack
date: 2022-10-23
modified: 2022-11-01
abstract: Create the feature that will create the todo tasks in the collection.
---

## Handler

You need to create a `POST` handler that will create data in the collection and handle certain error cases. his verb is encapsulated in the `create`
function of the `getCollection` function.

```js:title=./netlify/functions/createTodo.js
const { getCollection } = require('./astraClient');

exports.handler = async (event, context) => {
  try {
    const todos = await getCollection();
    const body = JSON.parse(event.body);

    try {
      const res = await todos.create(body.id, body);
      return {
        statusCode: 200,
        body: JSON.stringify(res),
      };
    } catch (e) {
      return {
        statusCode: 400,
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

You need to allocate unique identifiers for each new task so you can
import the `uuid` npm package you installed earlier.

```js:title=./src/api.js
import { v4 as uuid } from 'uuid';
```

```js:title=./src/api.js
const createTodo = async (text) => {
  const todo = {
    id: uuid(),
    text,
    created: new Date().getTime(),
  };
  const response = await fetch('/.netlify/functions/createTodo', {
    body: JSON.stringify(todo),
    method: 'POST',
  });
  const createdTodo = await respond(response);
  return {
    ...createdTodo,
    ...todo,
  };
};
```

Don't forget to export the functions.

```js:title=./src/api.js
const api = {
  getTodos,
  createTodo,
};

export default api;
```

## Create tasks in the User Interface

You can just replace the existing file using the code below.

```jsx:title=./src/App.js
import React, { useEffect, useRef, useState } from 'react';
import api from './api';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Create a ref to the input textbox to get the current value of it
  // to be used when creating the todo task.
  const textbox = useRef();

  useEffect(() => {
    const loadTodos = async () => {
      const data = await api.getTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  // The first interaction function.
  // It will create the todo task
  // via the API and update the todos vector in the state by
  // spreading the initial todos and including the result
  // object from the API.
  const add = async () => {
    const task = textbox.current.value;
    if (task) {
      const result = await api.createTodo(task);
      if (result) {
        setTodos([...todos, result]);
      }
    }
  };

  return (
    <>
      {/*
        Use a form so that users can press `Enter` to submit it.
        Prevent default behaviour so that there is no redirect to self.
      */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={textbox} type="text" />
        <button onClick={add}>Add</button>
      </form>
      {todos && todos.length === 0 && <div>There is nothing to do.</div>}
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.created} | {todo.id} | {todo.text}
            </div>
          );
        })}
    </>
  );
};

export default App;
```

## Sort data

Here we sort the data and clear the textbox value after something has been added.

```jsx:title=./src/App.js
import React, { useEffect, useRef, useState } from 'react';
import api from './api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const textbox = useRef();

  const setAndSortTodos = (items) => {
    // Sort items by date created in descending order.
    setTodos(items.sort((x, y) => y.created - x.created));
  }

  useEffect(() => {
    const loadTodos = async () => {
      const data = await api.getTodos();
      setAndSortTodos(data);
    };
    loadTodos();
  }, []);

  const add = async () => {
    const task = textbox.current.value;
    if (task) {
      const result = await api.createTodo(task);
      if (result) {
        setAndSortTodos([...todos, result]);
        // Clear the textbox value after something has been added.
        textbox.current.value = '';
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={textbox} type="text" />
        <button onClick={add}>Add</button>
      </form>
      {todos && todos.length === 0 && <div>There is nothing to do.</div>}
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.created} | {todo.id} | {todo.text}
            </div>
          );
        })}
    </>
  );
};

export default App;
```

## Quick test

You can quickly verify if your code works by creating a test JavaScript
file, import the handler and pass in the appropriate values to it.

```javascript:title=./netlify/functions/test.js
const { handler: create } = require('./createTodo');

// The body requires a stringified version of the JSON you want to pass to it.
create({
  body: JSON.stringify({"id": 1,
                        "text": "Implement this functionality in the React App.",
                        "completed": false}),
})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
```

> ### Note
>
> I am running the below code using the Node command with `-r` to require `dotenv/config` without
> having to install the actual `dotenv` dependency. I specify the path I want to execute and what [env var][node-env]
> file I want to use relative to the directory I am executing the command from (in this case the root directory).

```bash:title=bash
node -r dotenv/config netlify/functions/test.js dotenv_config_path=.env
```

You should see something like this:

```js:title=output
{ statusCode: 200, body: '{"documentId":"1"}' }
```

Once you have created the entry, you can read all entries. Alter your test file to look like this:

```javascript:title=./netlify/functions/test.js
const { handler: get } = require('./getTodos');

get()
  .then((res) => console.log(res.body))
  .catch((res) => console.log(res.body));
```

Run the Node command again to see the something as follows:

```json:title=output
[{"completed":false,"id":1,"text":"Implement this functionality in the React App."}]
```

You can safely remove the test file now.

```bash:title=bash
rm netlify/functions/test.js
```

[node-env]: /scribbles/how-to-read-node-js-environment-variables/

---
title: Delete data from collection
parent: /courses/jamstack
date: 2022-10-23
abstract:
  Create the feature that will delete a todo task from the collection.
---

## Handler

This `DELETE` handler will delete an existing entry from your collection and
handle certain error cases. his verb is encapsulated in the `delete`
function of the `getCollection` function.

```js:title=./netlify/functions/deleteTodo.js
const { getCollection } = require('./astraClient');

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const todos = await getCollection();
    try {
      const res = await todos.delete(body.id);
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

```js:title=./src/api.js
const deleteTodo = async (id) => {
  const response = await fetch('/.netlify/functions/deleteTodo', {
    body: JSON.stringify({ id }),
    method: 'POST',
  });
  const deletedTodo = await respond(response);
  if (deletedTodo.deleted) {
    return id;
  }
  throw new Error(`Task ${id} was not deleted.`);
};
```

Don't forget to export the function.

```js:title=./src/api.js
const api = {
  getTodos,
  createTodo,
  deleteTodo,
};

export default api;
```

## Delete tasks in the User Interface

You can just replace the existing file using the code below.

```jsx:title=./src/App.js
import React, { useEffect, useRef, useState } from 'react';
import api from './api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const textbox = useRef();

  const setAndSortTodos = (items) => {
    setTodos(items.sort((x, y) => y.created - x.created));
  };

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
        textbox.current.value = '';
      }
    }
  };

  // The second interaction function.
  // It will delete the todo task via the API
  // and update the todos array in the state
  // by setting and sorting a filtered copy
  // of the existing array.
  const remove = async (id) => {
    const result = await api.deleteTodo(id);
    if (result) {
      setAndSortTodos(todos.filter((t) => t.id !== id));
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
              {/* Add a button to remove the todo task. */}
              <button onClick={() => remove(todo.id)}>&times;</button>
              {todo.created} | {todo.id} | {todo.text}
            </div>
          );
        })}
    </>
  );
};

export default App;
```

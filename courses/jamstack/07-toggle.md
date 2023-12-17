---
title: Toggle the completion status of the task
parent: /courses/jamstack
date: 2022-10-23
modified: 2022-11-01
abstract:
  Create the feature that will update a todo task in the collection.
---

## Handler

You will need to create a `PUT` handler that will update the data in the
collection and handle certain error cases. This verb is encapsulated in the `update`
function of the `getCollection` function.

```js:title=./netlify/functions/updateTodo.js
const { getCollection } = require('./astraClient');

exports.handler = async (event, context) => {
  try {
    const todos = await getCollection();
    const body = JSON.parse(event.body);

    try {
      const res = await todos.update(body.id, body);
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
const updateTodo = async (task) => {
  const todo = {
    ...task,
    modified: new Date().getTime(),
  };
  const response = await fetch('/.netlify/functions/updateTodo', {
    body: JSON.stringify(todo),
    method: 'POST',
  });
  const updatedTodo = await respond(response);
  return {
    ...updatedTodo,
    ...todo,
  };
};
```

Don't forget to export the function.

```js:title=./src/api.js
const api = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};

export default api;
```

## Toggle tasks in the User Interface

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

  const remove = async (id) => {
    const result = await api.deleteTodo(id);
    if (result) {
      setAndSortTodos(todos.filter((t) => t.id !== id));
    }
  };

  // The third interaction function.
  // It will update the todo task via the API
  // and update the todos array by setting and sorting
  // a mapped copy of the array where the updated todo
  // is swapped out for the object with the new changes.
  const toggle = async (todo) => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    const result = await api.updateTodo(updatedTodo);
    if (result) {
      setAndSortTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
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
            <div
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : '',
              }}
            >
              <button onClick={() => remove(todo.id)}>&times;</button>
              {/* Create a checkbox to toggle the completion of the todo task. */}
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={() => toggle(todo)}
              />
              {todo.created} | {todo.id} | {todo.text}
            </div>
          );
        })}
    </>
  );
};

export default App;
```

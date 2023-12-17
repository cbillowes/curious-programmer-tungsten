---
title: Error handling
parent: /courses/jamstack
date: 2022-10-23
modified: 2022-11-01
abstract: Display errors to your users on the User Interface.
---

Put a string copy of the `error` on the state.
You can set the error when interacting with the API
so that you can display it later on.

```jsx:title=./src/App.js
const [error, setError] = useState();
```

Create a function that will try to interact with the API.
The `interaction` is a higher order function that will be executed
in a `try...catch` block. In the event of an error, the `errorMessage` that
is passed in will make its way to the User Interface and a copy of the
actual error is printed to the console.

```jsx:title=./src/App.js
const tryInteractWithApi = (interaction, errorMessage) => {
  try {
    return interaction();
  } catch (e) {
    setError(errorMessage);
    console.error(errorMessage, e);
  }
};
```

Update your interaction functions to look as follows:

```jsx:title=./src/App.js
useEffect(() => {
  const loadTodos = async () => {
    const result = await tryInteractWithApi(
      api.getTodos,
      'We could not get your tasks at this time.',
    );
    setAndSortTodos(result);
  };
  loadTodos();
}, []);
```

```jsx:title=./src/App.js
const add = async () => {
  const task = textbox.current.value;
  if (task) {
    const result = await tryInteractWithApi(
      () => api.createTodo(task),
      `We could not add your task: ${task}.`,
    );
    if (result) {
      setAndSortTodos([...todos, result]);
      textbox.current.value = '';
    }
  }
};
```

```jsx:title=./src/App.js
const remove = async (id) => {
  const result = await tryInteractWithApi(
    () => api.deleteTodo(id),
    `We could not delete your task ${id}.`,
  );
  if (result) {
    setAndSortTodos(todos.filter((t) => t.id !== id));
  }
};
```

```jsx:title=./src/App.js
const toggle = async (todo) => {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed,
  };
  const result = await tryInteractWithApi(
    () => api.updateTodo(updatedTodo),
    `We could not toggle your task ${todo.id}`,
  );
  if (result) {
    setAndSortTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
  }
};
```

Finally, you can display the error on the User Interface.

```jsx:title=./src/App.js
{/* form */}
{error && (
  <div>
    <strong>Something went wrong!</strong> {error}
  </div>
)}
{/* todos */}
```

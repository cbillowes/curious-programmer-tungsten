---
title: Netlify's serverless functions
parent: /courses/jamstack
date: 2022-10-23
modified: 2022-10-31
abstract:
  Get a basic introduction to Netlify's serverless functions and
  prepare your repository for the upcoming code.
---

## Objectives

1. Get a basic introduction to Netlify's serverless functions.
1. Create your directory and file structure for upcoming code.

## Introduction

`youtube:https://www.youtube.com/embed/n_KASTN0gUE`

## Prepare repository

Let's start by creating the Astra DB client and CRUD handler files
that we will add code to later on.

```bash:title=bash
mkdir -p ./netlify/functions
cd ./netlify/functions
touch astraClient.js createTodo.js deleteTodo.js getTodos.js updateTodo.js
```

Your `netlify` directory structure should look like this.

```bash:title=bash
❯ tree netlify -L 2 -la
netlify
└── functions
    ├── astraClient.js
    ├── createTodo.js
    ├── deleteTodo.js
    ├── getTodos.js
    └── updateTodo.js

1 directory, 5 files
```

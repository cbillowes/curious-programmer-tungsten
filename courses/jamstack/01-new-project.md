---
title: Get started
parent: /courses/jamstack
date: 2022-10-20
modified: 2022-10-31
abstract:
  You will be exposed to various terminology, get started with the setup of services required for this course and
  create your own web application from scratch using React.
---

## Objectives

1. Cover what GitHub, Jamstack, Astra DB and Netlify are.
1. Create a web application from scratch using React.
1. Initialize Git so that you can push to a remote repository so that Netlify can auto deploy.
1. Configure secret environment variables so that you can connect to your Astra DB database.
1. Install a bunch of important dependencies required by your app.
1. Install and configure the Netlify CLI.

> :bulb: I use the `bash±tree` command to show files and directories inside a particular directory. Find out more [here][tree].

## GitHub

According to [GitHub][github], GitHub is a place to share code with friends, co-workers, classmates, and complete strangers.
Millions of people use GitHub to build things together.

`youtube:https://www.youtube.com/embed/w3jLJU7DT5E`

## Jamstack

[Jamstack][jamstack] is a web experience architecture where the experience layer and data/business logic layers are decoupled.
The idea is to improve flexibility, scalability, performance, and maintainability.

`youtube:https://www.youtube.com/embed/Y8PXMbr0Kqo`

## Astra DB

[Astra DB][datastax-astra] is a serverless, multi-cloud native Database as a Service provided by DataStax.
It is built on Apache Cassandra and is meant to simplify application development
and remove the need to self-host and manage a Cassandra database.

`youtube:https://www.youtube.com/embed/s73qwGaKyv0`

### Setup your Astra DB

1. Sign up or login to your [DataStax Astra][datastax-account] account.
1. [Create an Astra DB Database][datastax-db] or use an existing one.
1. [Create an Astra DB Keyspace][datastax-keyspace] called `sag_todos` in your database.
   You can call your namespace anything really, just update references later on in the tutorial.
1. [Generate an Application Token][datastax-app-token] with the role of `API Admin User`
   for the Organization that your Astra DB is in. Download this file or store the details for later use
   as you will not be able to access it again.

## Create a new project

### Create an web app

You're going in quick and dirty using [Create React App][cra] (CRA).
Don't feel limited to using React. You could use any framework here. I chose this
route because it was the fastest for me at the time.

> #### Note about CRA :thinking:
>
> You're using CRA only because it is quick and simple to get up and running.
> According to Facebook, CRA was not created for production but rather created for
> beginners so that developers didn't have to learn React and Webpack at the same time.
> CRA lacks flexibility as it is hard to configure, customize and strip out unnecessary dependencies.
> To create a prod-ready version of your app with React then try [this][prod-cra] tutorial.

```bash:title=bash
npx create-react-app my-primitive-todo-app
cd my-primitive-todo-app
```

### Make a Git repository

> :bulb: If you are new to Git, check out my Git [course][git-course] to get started.

In a nutshell, you need to initialize Git, add and commit all your initial files,
and connect and push to your [GitHub][github-new] (or other Git repository service that integrates with Netlify) repository.

```bash:title=bash
git init
git add . # don't do this unless everything can be committed in one contextual go
git commit -m "Initial commit"
git remote add origin git@github.com:<your-username>/my-primitive-todo-app.git
git push -u origin main
```

```bash:title=bash
❯ tree -L 1 -la
.
├── .git
├── .gitignore
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src

4 directories, 4 files
```

### Environment variables

Create an environment variable file to put your [Astra DB connection settings][datastax-conn-settings] in.

```bash:title=bash
touch .env .env.example
```

```bash:title=.env
ASTRA_DB_ID=<ID>
ASTRA_DB_REGION=<REGION>
ASTRA_DB_APPLICATION_TOKEN=<TOKEN>
ASTRA_DB_KEYSPACE=<KEYSPACE>
```

Exclude this file from Git because it contains sensitive information that you most definitely don't want
in your Git history or on public display.

```bash:title=.gitignore
.env
```

Put a copy of this template **without it's values** into an example file so that you can commit it
and refer to it at a later stage.

```bash:title=.env.example
ASTRA_DB_ID=
ASTRA_DB_REGION=
ASTRA_DB_APPLICATION_TOKEN=
ASTRA_DB_KEYSPACE=
```

### Project dependencies

Install some dependencies. You can choose to use Yarn if you want to.

```bash:title=bash
npm install --save-dev netlify-cli
npm install --save @astrajs/collections classnames uuid
```

- [netlify-cli][npm-netlify-cli]: interacts with Netlify from the command line interface.
- [@astrajs/collections][npm-astrajs]: connects your NodeJS app to your DataStax Astra DB or your Stargate instance.
- [classnames][npm-classnames]: conditionally join class names together.
- [uuid][npm-uuid]: for the creation of RFC4122 UUIDs.

```json:title=package.json
{
  "name": "my-primitive-todo-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@astrajs/collections": "^0.3.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "classnames": "^2.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "netlify-cli": "^12.0.11"
  }
}
```

### Netlify

Get [started][netlify] with Netlify. Your development environment prerequisites are explained
in depth their tutorial.

`youtube:https://www.youtube.com/embed/XG8nJDWu3a0`

#### Command Line Interface

Install the [Netlify CLI][netlify-cli] (lets you configure continuous deployment from the command line).
You can use it to run a local development server, run local build and plugins and deploy your site.

> ##### Global versus local
>
> Installing Netlify CLI globally means that your system always has the latest version,
> including any breaking changes. While global installation is appropriate for initial
> development and experimentation, for managing builds in a continuous integration (CI)
> environment, use local CLI installation instead.

```bash:title=bash
npm install netlify-cli -g
```

You can configure continuous deployment for a new or existing site.
To create a new site without continuous deployment, use `netlify sites:create`.
You will probably need to [Authenticate][netlify-auth] to Netlify first.

```bash:title=bash
netlify init
```

Go through the prompts to initialize Netlify.

```text:title=prompts
Adding local .netlify folder to .gitignore file...
? What would you like to do? (Use arrow keys)
  ⇄  Connect this directory to an existing Netlify site
❯ +  Create & configure a new site

? Team: (Use arrow keys)
❯ Steve the hedge's team

? Site name (leave blank for a random name; you can change it later):

Site Created

Admin URL: https://app.netlify.com/sites/musical-cuchufli-95efd3
URL:       https://musical-cuchufli-95efd3.netlify.app
Site ID:   6aa72498-9801-472c-ba69-24681d7f36de

Linked to musical-cuchufli-95efd3

? Your build command (hugo build/yarn run build/etc): react-scripts build
? Directory to deploy (blank for current dir): build
? No netlify.toml detected. Would you like to create one with these build settings? Yes

Adding deploy key to repository...
Deploy key added!

Creating Netlify GitHub Notification Hooks...
Netlify Notification Hooks configured!

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify admin URL of your site
```

> Alternatively, you can link a local repo or project folder to an existing site on Netlify.
>
> ```bash:title=bash
> netlify link
> ```

[Authenticate][netlify-auth] and make sure your site is linked to a Netlify `siteID`.

Once it has been configured your site will automatically deploy from GitHub branches and pull requests.

```bash
git push       # Push to your git repository to trigger new site builds
netlify open   # Open the Netlify admin URL of your site
```

Add the Netlify dev script to your `package.json` file. This will run the netlify server
and host your localhost site on port `8888` by default.

```json:title=./package.json
"scripts": {
  "dev": "netlify dev",
}
```

Netlify installed and configured a bunch of things on your behalf.

```yml:title=netlify.toml
[build]
  command = "react-scripts build"
  functions = "netlify/functions"
  publish = "build"
```

The local Netlify folder was ignored from Git.

```text:title=.gitignore
.netlify
```

Start your application using the npm script below and see the default CRA Learn React rotating atom screen. \o/

```bash:title=bash
npm run dev
```

◈ Server will be ready on http://localhost:8888

#### Environment variables on Netlify

- Go to your site on Netlify
- Click on the Site Overview tab
- Click on the Site settings buttons
- Click on the Build & deploy navigation item
- Click on the Environment sub navigation item
- Click on Edit variables button
- Add the variables in your environment variable file to Netlify

## Clean up

Your app is full of stuff you don't need.
Let's delete some stuff and create new stuff.

```bash:title=bash
rm -rf ./src
mkdir src
cd src
touch api.js index.js App.js
```

## Mount the app

You need to mount your app into the `root` element in your index HTML file.

```jsx:title=./src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

You can quickly update the page title and manifest files while you are at it.

```html:title=./public/index.html
<title>My Awesome Task List</title>
```

## :dizzy: Deploy

Push to GitHub, login to Netlify, and verify the build of your site. If all went well, run it and party :tada:

## Conclusion

You have a working skeleton React app that is automatically deployed to the cloud using Netlify.
You are ready to write your API that will integrate with Astra DB.

Your project should finally look like this.

```bash:title=bash
❯ tree -L 1 -la
.
├── .env
├── .env.example
├── .git
├── .gitignore
├── .netlify
├── README.md
├── netlify
├── netlify.toml
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src

6 directories, 7 files
```

> :exclamation: Remember to commit your files to Git and then push in order to have Netlify build and deploy your app.

## References

- [DataStax Todo Astra Jamstack Netlify Example][example] - GitHub
- [Jamstack][jamstack] - Official website
- [DataStax][datastax] - Official website
- [Netlify][netlify] - Official website

[example]: https://github.com/DataStax-Examples/todo-astra-jamstack-netlify
[jamstack]: https://jamstack.org/
[datastax]: https://www.datastax.com/
[netlify]: https://docs.netlify.com/get-started/
[github]: https://github.com/
[github-new]: https://github.com/new
[netlify-cli]: https://docs.netlify.com/cli/get-started/
[netlify-auth]: https://docs.netlify.com/cli/get-started/#authentication
[datastax-astra]: https://www.datastax.com/products/datastax-astra
[datastax-account]: https://dtsx.io/2Yhvqtv
[datastax-db]: https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db
[datastax-keyspace]: https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace
[datastax-app-token]: https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token
[datastax-conn-settings]: https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings
[git-course]: /courses/git/
[cra]: https://github.com/facebook/create-react-app
[npm-netlify-cli]: https://www.npmjs.com/package/netlify-cli
[npm-uuid]: https://github.com/uuidjs/uuid
[npm-classnames]: https://www.npmjs.com/package/classnames
[npm-astrajs]: https://www.npmjs.com/package/@astrajs/collections
[prod-cra]: https://www.linkedin.com/pulse/create-react-app-without-create-react-app-cra-elhousieny-phd%25E1%25B4%25AC%25E1%25B4%25AE%25E1%25B4%25B0
[tree]: https://en.wikipedia.org/wiki/Tree_(command)

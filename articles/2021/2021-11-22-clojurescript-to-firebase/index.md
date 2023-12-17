---
title: How can I deploy a ClojureScript web app to Google Firebase with GitHub Actions?
date: 2021-11-22 05:00 +0400
cover: clojure-firebase.jpg
tags:
  - Technical
  - ClojureScript
  - Google Firebase
---

The goal of this guide is to show you how to deploy a ClojureScript
web app to Google Firebase Hosting with GitHub Action deploys.

There are a few assumptions and they are that you are already familiar with the basics of

- [ClojureScript][clojurescript.org]
- [Firebase][firebase.google.com]
- [GitHub Actions][github/actions]

> This guide is based on the ClojureScript + Tailwind [template][cljs-app-with-tailwindcss]
> from the previous guide which is hosted as a template on GitHub if
> would like to follow along.

## Setup your Firebase instance

> I am on the [Spark][firebase/pricing] plan, which is free.

Follow the official [guide][guide/firebase+github-actions] to
set up the GitHub Action to deploy to Firebase Hosting.

1. Install (or upgrade) the firebase-tools.
   I am running `9.23.0`.

   ```bash
   npm install -g firebase-tools
   ```

1. Install [firebase][npm/firebase] in your project.

   ```bash
   npm install firebase@9.5.0 --save
   ```

1. **Option 1**: Initialize your Firebase project and select **Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**
   go through the prompts and voila.

   ```bash
   firebase init
   ```

1. **Option 2**: Set up using the Hosting command.

   ```bash
   # If you have NOT set up Hosting yet, do so now.
   firebase init hosting

   # If you have ALREADY set up Hosting, configure
   # GitHub Actions directly.
   firebase init hosting:github
   ```

1. Follow the prompts

   1. Create a new or use an existing Firebase project.

   1. Creates a service account in your Firebase project with
      permission to deploy to Firebase Hosting.

   1. Encrypts that service account's JSON key and uploads it to
      the specified GitHub repository as a GitHub secret.

   1. Writes GitHub workflow `yaml` configuration files that
      reference the newly created secret.

      These files configure the GitHub Action to deploy to
      Firebase Hosting.

   1. Check the console output for links to your project and GitHub.

   1. If you experience any errors, read the `firebase-debug.log`.

1. Create a new branch and commit the workflow yaml files created
   by the CLI.

1. Publish the branch to your GitHub repository.

1. We will merge the branch later.

[clojurescript.org]: https://clojurescript.org/
[firebase.google.com]: https://firebase.google.com/docs/web/setup
[github/actions]: https://docs.github.com/en/actions
[firebase/pricing]: https://firebase.google.com/pricing
[guide/firebase+github-actions]: https://firebase.google.com/docs/hosting/github-integration
[npm/firebase]: https://www.npmjs.com/package/firebase

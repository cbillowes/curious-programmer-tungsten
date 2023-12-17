---
title: How can I use Tailwind in my ClojureScript web app?
date: 2021-11-20 05:00 +0400
cover: clojure-tailwindcss.jpg
tags:
  - Technical
  - ClojureScript
  - Clojure CLI
  - Tailwind CSS
---

The goal of this guide is to create a ClojureScript web application with Clojure CLI
and integrate with Tailwind CSS. If you are looking to create a shadow-cljs
project then you can follow this [guide][shadow-cljs-tailwindcss] by Jacek Schae.

There are a few assumptions and they are that you are already familiar with

- [Node.js][nodejs.org]
- [npm][npmjs.com]
- [Clojure CLI][cli-guide]
- [ClojureScript][clojurescript.org]
- [Webpack][webpack.js.org]
- [Tailwind][tailwindcss.com]

> You can use the [template][cljs-app-with-tailwindcss] on GitHub
> if you want the complete solution.

## Versions of dependencies used in this guide

Below are a list of versions of dependencies used in this guide
so that you can follow along without experiencing potential breaking changes
when upgrading to the latest dependencies.

These are dependencies covered in the previous [guide][cljs-app-from-scratch-guide]
where we created a ClojureScript web app from scratch with Reagent and npm.

```
| Dependency        | Version     |
|-------------------|-------------|
| Clojure           | 1.10.3.1020 |
| ClojureScript     |    1.10.879 |
| Node              |     16.13.0 |
| npm/npx           |       8.1.3 |
| Webpack           |      5.64.1 |
| Webpack-cli       |       4.9.1 |
| Figwheel-Main     |      0.2.15 |
```

These dependencies are covered in this guide.

```
| Dependency        | Version     |
|-------------------|-------------|
| Tailwind CSS      |      2.2.19 |
| PostCSS           |      8.3.11 |
| PostCSS CLI       |       9.0.2 |
| PostCSS Import    |      14.0.2 |
| Autprefixer       |      10.4.0 |
| Cross Env         |       7.0.3 |
| npm run all       |       4.1.5 |
```

## Getting started

The code in this guide will be based on my previous [guide][cljs-app-from-scratch-guide].
To follow along you can either:

1. Use the [guide][cljs-app-from-scratch-guide].

   ```bash
   mkdir clj-app-with-tailwind && cd clj-app-with-tailwind
   ```

1. Or use the [template][cljs-app-from-scratch-template] on GitHub.
   Click on the green **Use this template** button.
   Choose a snazzy name for your project. If you get stuck you can use
   `clj-app-with-tailwind`.
   Clone it.

### Command line tools

In this tutorial we are going to leverage npm scripts.
There are a few CLI tools that we will need to install in order to
make our scripts work.

```bash
npm install --save-dev npm-run-all@4.1.5 cross-env@7.0.3 postcss-cli@9.0.2
```

1. [npm-run-all][npm-run-all] will run multiple scripts in
   parallel. We'll be generating Tailwind's CSS file and running Figwheel
   both with hot reloading.

1. [cross-env][cross-env] will set environment variables that we will
   use in our run scripts.

1. [postcss-cli][postcss-cli] will run PostCSS which will process and
   generate our Tailwind CSS file that we will reference in our app.

### Running the project

Let's start by creating our npm run scripts. For now we only need one.
We are taking this route because things are going to get more
complicated as we do more later on.

```javascript
// package.json
"scripts": {
  "develop": "clj -M:dev"
},
```

Run the script. It will do exactly the same as if we
manually entered `clj -M:dev`.

```bash
npm run develop
```

## Installing Tailwind

### Installing dependencies

I followed the instructions to [install][tailwind.com-install] Tailwind
as a PostCSS plugin.

```bash
npm install --save-dev tailwindcss@2.2.19 postcss@8.3.11 postcss-import@14.0.2 autoprefixer@10.4.0
```

1. [PostCSS][postcss] is a tool for transforming CSS with JavaScript.
1. [PostCSS Import][postcss-import] is a PostCSS plugin to transform
   `@import` rules by inlining content.
1. [Autoprefixer][autoprefixer] is a CSS post-processor that
   automatically adds vendor-prefixed CSS properties based on the
   browser capabilities.

### Preprocessing

The Tailwind [guide][tailwind.com-preprocessing] suggests that you should
highly consider relying on other PostCSS plugins to add the preprocessor
features you use instead of using a separate preprocessor.

Let's configure the basic ones.
Create a `postcss.config.js` file in your project root directory.

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

### Creating your configuration file

Create a configuration file if you want to customize Tailwind.

```bash
npx tailwindcss init
```

```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

> **Note about production**\
> Remember to [purge][tailwindcss.com-purge] when building for production,
> so that it will remove any unused classes for the smallest file size.

### Including Tailwind in your CSS

Create a new CSS file at `src/css/tailwind.css` and put the following in it:

```css
/* src/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Find out [more][tailwindcss.com-css] about including Tailwind in your CSS.

## Hot reloading

### Updating the link to the CSS file

We are going to generate a new CSS file based on our Tailwind configuration.

> In this guide we are going to output it straight to our dev
> target directory: `./target/public/cljs-out/dev/style.css`
> In upcoming guides we will learn how to develop for different
> environments.

We will need to reference this file in our `index.html` file
which will now look like this:

```html
<!-- resources/public/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Example Application</title>
    <!--
      The new CSS file that will be generated in
      👇 `./target/public/cljs-out/dev/style.css`
    -->
    <link rel="stylesheet" href="./cljs-out/dev/style.css" />
  </head>
  <body class="bg-gray-900">
    <div id="app"></div>
    <!--
         Hardcoded Development Webpack Bundled JavaScript.
         Place the ClojureScript script tag as the last tag in the body.
         This is the convention for Google Closure compiled projects.
         https://figwheel.org/docs/your_own_page.html
    -->
    <script type="text/javascript" src="./cljs-out/dev/main_bundle.js"></script>
  </body>
</html>
```

### Updating the npm run scripts

Create two watch scripts to generate CSS and launch our Figwheel server.
The develop script will run both of these scripts in parallel.

```javascript
// package.json
"scripts": {
  "postcss:watch": "cross-env TAILWIND_MODE=watch postcss src/css/tailwind.css -o ./target/public/cljs-out/dev/style.css --verbose -w",
  "figwheel:watch": "clj -M:dev",
  "develop": "run-p -l *:watch"
},
```

## Testing the integration

Open `src/example_app/core.cljs` and change the `app` function as follows:

```clojure
(ns example-app.core
  (:require [reagent.dom :as r.dom]))


(defn a [to text]
  [:a.font-bold.text-yellow-300.hover:text-pink-600 {:href to} text])


(defn app []
  [:div
   [:div.p-8.max-w-full
    [:div.rounded-lg.bg-gray-800.text-white.shadow-xs.py-24.px-4.text-center
     [:div.text-3xl.lg:text-9xl
      [:span "Hello "]
      [:span.font-extrabold.text-transparent.bg-clip-text.bg-gradient-to-r.from-green-400.to-blue-500.font-mono "Tailwind!"]
      [:span " ✌️"]]
     [:div.text-lg.md:text-xl.lg:text-2xl.mt-8.text-gray-400 "Rapidly build modern websites without ever leaving your ClojureScript."]
     [:div.text-lg.md:text-xl.lg:text-2xl.mt-4.text-gray-400
      [:span "'( "]
      [a "https://tailwindcss.com/" "tailwindcss.com"]
      [:span " ... "]
      [a "https://clojurescript.org/" "clojurescript.org"]
      [:span " )"]]]]
   [:div.text-white.text-center.opacity-70.text-md
    [:p "A demo by " [a "https://clarice.bouwer.dev" "Clarice Bouwer"] " at curiousprogrammer.dev"]]
   [::div.text-white.text-center.opacity-50.text-sm.mt-5
    [:span [a "https://benborgers.com/posts/tailwind-gradient-text" "Text gradients"] " by benborgers.com"]]])


(r.dom/render [app] (js/document.getElementById "app"))
```

- Run `npm run develop`.
- Your app will still open at http://localhost:9500.
- http://localhost:9500/cljs-out/dev/style.css will be generated.
- You should see a **Hello Tailwind!** ✌️ banner with some text on the page.

[nodejs.org]: https://nodejs.org/
[npmjs.com]: https://www.npmjs.com/
[clojurescript.org]: https://clojurescript.org/
[cli-guide]: https://clojure.org/guides/deps_and_cli
[webpack.js.org]: https://webpack.js.org/
[tailwindcss.com]: https://tailwindcss.com/
[tailwind.com-install]: https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
[tailwind.com-preprocessing]: https://tailwindcss.com/docs/using-with-preprocessors
[tailwindcss.com-css]: https://tailwindcss.com/docs/installation#include-tailwind-in-your-css
[tailwindcss.com-purge]: https://tailwindcss.com/docs/installation#building-your-css
[npm-run-all]: https://www.npmjs.com/package/npm-run-all
[cross-env]: https://www.npmjs.com/package/cross-env
[postcss]: https://postcss.org/
[postcss-cli]: https://www.npmjs.com/package/postcss-cli
[postcss-import]: https://github.com/postcss/postcss-import
[autoprefixer]: https://github.com/postcss/autoprefixer
[shadow-cljs-tailwindcss]: https://github.com/jacekschae/shadow-cljs-tailwindcss
[cljs-app-from-scratch-guide]: /blog/how-can-i-create-a-clojure-script-web-app-from-scratch-with-reagent-and-npm/
[cljs-app-from-scratch-template]: https://github.com/cbillowes/cljs-app-from-scratch
[cljs-app-with-tailwindcss-template]: https://github.com/cbillowes/cljs-app-with-tailwindcss

---
title: How can I create a ClojureScript web app from scratch with Reagent and npm?
date: 2021-11-17 06:00 +0400
cover: clojure.jpg
credit: Tom & Rich Hickey
creditLink: https://en.wikipedia.org/wiki/Clojure
creditSource: wikipedia
tags:
  - Technical
  - ClojureScript
  - Clojure CLI
  - Reagent
  - npm
---

The goal of this guide is to create a basic Reagent **ClojureScript**
web app from scratch using the **Clojure CLI** tools.
We are going to bundle our JavaScript using **Webpack**,
have HMR (Hot Module Replacement - reload components while coding)
using **Figwheel-Main** and play around with a few npm packages like
**axios** and **moment**.

In a nutshell:

- ClojureScript with Clojure CLI
- Reagent
- Figwheel-Main
- Webpack
- npm packages

> You can download the [repository][github-cljs-app-from-scratch] from GitHub.

> This guide is a combination of tutorials I have read and videos I have watched.
> The biggest influencer's have been Between Two Parens, PurelyFunctional.tv
> and the official Figwheel documentation.

## Version of things used in this guide

### Java

I have the following version of Java on macOS Monterey, Apple M1 Pro.

```
openjdk 11.0.13 2021-10-19
OpenJDK Runtime Environment Temurin-11.0.13+8 (build 11.0.13+8)
OpenJDK 64-Bit Server VM Temurin-11.0.13+8 (build 11.0.13+8, mixed mode)
```

### ClojureScript

| Dependency    | Version     |
| ------------- | ----------- |
| Clojure CLI   | 1.10.3.1020 |
| ClojureScript | 1.10.879    |
| Figwheel-Main | 0.2.15      |
| Reagent       | 1.1.0       |

### Node.js

| Dependency  | Version |
| ----------- | ------- |
| Node        | 16.13.0 |
| npm         | 8.1.3   |
| Webpack     | 5.64.1  |
| Webpack-cli | 4.9.1   |
| React       | 17.0.2  |
| React-DOM   | 17.0.2  |

## Start a new project

1. Create a new directory.
   In this guide we will use the very original project name `example-app`:

   ```bash
   mkdir example-app && cd example-app
   ```

1. Create the file structure.

   - **resources/public/index.html** <- the main HTML file
   - **src/example_app/core.cljs** <- the main ClojureScript file
   - **dev.cljs.edn** <- Figwheel's configuration file
   - **deps.edn** <- ClojureScript's configuration and dependencies file

   ```bash
   mkdir -p src/example_app/ && touch src/example_app/core.cljs
   mkdir -p resources/public/ && touch resources/public/index.html
   touch dev.cljs.edn
   touch deps.edn
   ```

   Example of the file structure:

   ```bash
   ❯ tree
   .
   ├── deps.edn
   ├── dev.cljs.edn
   ├── resources
   │   └── public
   │       └── index.html
   └── src
       └── example_app
           └── core.cljs

   4 directories, 4 files
   ```

> Note how spaces are separated by an underscore in the file name.
> The namespace will be an exact replicate of the file path but the
> names will contain hyphens instead of underscores.
> Eg. `example_app` will become `example-app`.

## Initialize your project

1. Initialize an npm project.

   ```bash
   npm init -y
   ```

   You could also create your own `package.json` file with an empty object.
   I've done this for brevity so you can see exactly what I have done through
   this guide. Feel free to choose either approach.

   ```bash
   echo '{}' > package.json
   ```

1. Initialize a Git repository and add your `.gitignore` file.

   ```bash
   git init
   ```

   There are fancy ignore files in GitHub repositories that you can download
   and use in your repositories.
   In this guide, we'll exclude only what we don't need based on what
   we get exposed to.
   For not, it's just `node_modules` as we will be doing npm installs.

   ```
   # npm dependencies
   node_modules
   ```

## Install Webpack

1. Install Webpack.

   ```bash
   npm install --save-dev webpack@5.64.1 webpack-cli@4.9.1
   ```

   > `package-lock.json` will be installed if you used npm. `yarn.lock` will be installed if you used yarn. You need to commit whichever one was created!

1. Add the npm packages to play around with

   ```bash
   # A promise based HTTP client for the browser and node.js.
   # https://axios-http.com/
   npm install axios@0.24.0

   # A JavaScript date library for parsing, validating,
   # manipulating, and formatting dates.
   # https://momentjs.com/docs/
   npm install moment@2.29.1
   ```

## Install Reagent

Install React.

```bash
npm install react@17.0.2 react-dom@17.0.2
```

## Update your files

### resources/public/index.html

A host page is the HTML page that includes your ClojureScript script.
Figwheel provides a default host page which will be replaced with the one
below.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Example Application</title>
    <!--
      The stylesheet will need to be available on the classpath.
      A good place for this file would be at resources/public/path/to/style.css.
    -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- This will be swapped out by the content of our app -->
    <div id="app"></div>
    <!--
      Hardcoded Development Webpack Bundled JavaScript.
      Place the ClojureScript script tag as the last tag in the body.
      This is the convention for Google Closure compiled projects.
      https://figwheel.org/docs/your_own_page.html
    -->
    <script type="text/javascript" src="cljs-out/dev/main_bundle.js"></script>
  </body>
</html>
```

### resources/public/style.css

An optional asset that can be added to your resources and referenced
on your host page above.

```css
body {
  color: #cc0000; /* because why not */
}
```

### src/example_app/core.cljs

Entry point to the ClojureScript app.

```clojure
(ns example-app.core
  (:require [reagent.dom :as r.dom]
            [axios]
            [moment]))

;; Use mock REST API to get data to output to the browser
(-> (.. axios (get "https://jsonplaceholder.typicode.com/todos/1"))
    (.then #(js/console.log %)))


;; Display the day of the week
;; https://momentjs.com/docs/
(js/console.log (.format (moment) "dddd"))


(defn app []
  [:div
   [:h1 "Example application"]])


(r.dom/render [app] (js/document.getElementById "app"))

```

### dev.cljs.edn

Build file for Figwheel.main.

```clojure
^{:auto-bundle :webpack ;; https://figwheel.org/docs/npm.html
  :watch-dirs  ["src"]
  :css-dirs    ["resources/public"]}

{;; root namespace for the compiled artifact.
 :main example-app.core

 ;; :none does not produce a single self-contained compiled artifact,
 ;; like with :whitespace, :simple or :advanced,
 ;; but rather creates an artifact that loads all of the separately
 ;; compiled namespaces.
 :optimizations :none

 ;; https://figwheel.org/docs/npm.html
 ;; instruct compiler to produce the bundled JavaScript file.
 :target :bundle

 ;; bundles up main.js and pulls in npm dependencies.

 ;;   :output-to is replaced with ./target/public/cljs-out/dev/main.js
 ;;   it is the path to the JavaScript file that will be output
 ;;   needs to point to a path that is basically the classpath + public.

 ;;   :final-output-dir is replaced with ./target/public/cljs-out/dev
 ;;   :final-output-filename is replaced with main_bundle.js
 :bundle-cmd {:none ["npx" "webpack" "--mode=development"
                     "--entry" :output-to
                     "--output-path" :final-output-dir
                     "--output-filename" :final-output-filename]

              :default ["npx" "webpack" "--mode=production"
                        "--entry" :output-to
                        "--output-path" :final-output-dir
                        "--output-filename" :final-output-filename]}}

```

### deps.edn

User level aliases, dependency management and Clojure CLI configuration for deps.edn based projects.

```clojure
{:paths
 [:src-paths :resources-paths :output-paths]

 :deps {org.clojure/clojurescript {:mvn/version "1.10.879"}
        com.bhauman/figwheel-main {:mvn/version "0.2.15"}
        reagent/reagent           {:mvn/version "1.1.0"}}

 :aliases
 {:src-paths ["src"]
  :resources-paths ["resources"]
  :output-paths ["target"]
  :dev
  {:main-opts ["--main"  "figwheel.main"
               "--build" "dev"
               "--repl"]}}}

```

### Ignore more files

Add the following to your `.gitignore` file.

```
# npm dependencies
node_modules

# Cached classpath and the runtime basis files
.cpcache

# Output of the ClojureScript compiler
target

# https://clojure-lsp.io/settings/
.lsp

# https://github.com/clj-kondo/clj-kondo
.clj-kondo
```

## Run the web app

Now that everything is set up, you can run the web app.
Enter `clj -M:dev` in the terminal to open the app on http://localhost:9500

## Final project layout

Read more about Figwheel [classpaths][classpaths].

```
├── node_modules
├── resources
│   └── public
│       # web assets HTML, CSS, images, etc
├── src
│   ├── example_app
│   │   └── core.cljs
│   │       # other source files
├── target
|   └── public
|       # compiled ClojureScript files
├── .gitignore
├── deps.edn
├── dev.cljs.edn
├── package.json
├── package-lock.json
```

## Resources

- Official Clojure [Documentation][clojure.org]
- Official Figwheel [Documentation][figwheel.org]
- Official [Documentation][cljdoc.org] for Clojure/Script libraries
- Official ClojureScript with Webpack [Documentation][cljs-webpack]
- Get started with CLJS + Figwheel-Main [YouTube Video][cljs-figwheel-video] from Between Two Parens
- Start a ClojureScript App from Scratch [Article][cljs-from-scratch] by Between Two Params
- ClojureScript [Tutorial][purely-functional-clojure-tutorial] by PurelyFunctional.tv
- Learn ClojureScript [eBook][ebook-cljs] by Andrew Meredith
- ClojureScript + Reagent [Tutorial][cljs-reagent-tutorial] at PurelyFunctional.tv
- Clojure Projects from Scratch [Guide][clj-from-scratch] by Oliver Caldwell
- Clojure `deps.edn` [Guide][deps.edn] on GitHub by Practicalli

[github-cljs-app-from-scratch]: https://github.com/cbillowes/cljs-app-from-scratch
[clojure.org]: https://clojure.org/guides/getting_started
[figwheel.org]: https://figwheel.org/
[cljdoc.org]: https://cljdoc.org/
[cljs-figwheel-video]: https://youtu.be/7b5114xE_GA
[cljs-from-scratch]: https://betweentwoparens.com/blog/start-a-clojurescript-app-from-scratch/
[ebook-cljs]: https://www.learn-clojurescript.com/
[cljs-reagent-tutorial]: https://purelyfunctional.tv/guide/reagent/
[purelyfunctional-cljs-tutorial]: https://purelyfunctional.tv/guide/clojurescript-tutorial/
[clj-from-scratch]: https://oli.me.uk/clojure-projects-from-scratch/
[deps.edn]: https://github.com/practicalli/clojure-deps-edn
[classpaths]: https://figwheel.org/docs/classpaths.html
[hiccup-like]: https://github.com/weavejester/hiccup
[figwheel-host-page]: https://figwheel.org/docs/your_own_page.html
[cljs-webpack]: https://clojurescript.org/guides/webpack

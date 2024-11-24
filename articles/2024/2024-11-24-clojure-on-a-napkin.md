---
title: Napkin-Sized Clojure Crash Course
cover: clojure-jump.webp
featured: true
date: 2024-11-24
tags:
  - Continuous Learning
  - Technical
  - Clojure
creditSource: FreePik
creditLink: https://www.freepik.com/pikaso/ai-image-generator
abstract: Learn functional programming concepts, practice in the REPL, build real projects, and explore core libraries. Embrace Clojure's simplicity and immutability.
---

In my [previous](/blog/my-wonderland-from-net-to-clojure/) article, I introduced my journey to learning Clojure. I was taught Clojure basics on a napkin by my friend Len at a kiddies trampoline joint.
This article aims to teach you the basics too. So, here’s my "napkin-sized" Clojure crash course for you: In this guide, you'll learn the basics of Clojure, including data types, defining values, syntax, namespaces, functions, and more. The goal is to give you a quick and simple foundation to start coding in Clojure. We will follow with some advanced concepts and how to deepen your understanding of Clojure.

## The Basics

The beauty of Clojure lies in its simplicity and elegance. It’s a functional programming language that runs on the Java Virtual Machine (JVM) and emphasizes immutability, simplicity, and expressive code. Clojure is a Lisp dialect, which means it uses a prefix notation syntax and treats code as data. Here’s a quick overview of the basics:

### Data Types

- Numbers: `42`, `3.14`
- Strings: `"Hello"`
- Keywords: `:name` (think labels)
- Lists: `(1 2 3)` (data and code!)
- Vectors: `[1 2 3]` (like arrays)
- Maps: `{:key "value"}` (key-value pairs - no guaranteed order)
- Sets: `#{1 2 3}` (unique values - no guaranteed order)

### Defining Values

- Defining a symbol with a value: `(def x 42)` — Like a "named constant."
- Everything is an expression, no statements.

### Syntax

- Comment: `;` (until end of line), `#_` (suppresses forms), `(comment ...)` (multi-line comments)
- Prefix notation: `(operator arg1 arg2)`
- Example: `(+ 1 2)` yields `3`

### Namespaces

- Organize code in namespaces: `(ns my-namespace)`
- Use `require` to include other namespaces.
- Store your files in a logical directory structure matching the Java package structure. For example, `src/my_namespace/core.clj`. Note the use of underscores in the namespace name. When you name your namespace, the underscores are converted to hyphens in the file path: `(ns my-namespace.core)`

### Functions

- Define: `(defn add [a b] (+ a b))`
- Call: `(add 1 2)` → `3`
- Anonymous: `(fn [x] (* x x))` or `#(* % %)` (for quick/inline execution)

### Immutable Data

- Data doesn’t change. New values are returned.
- Example: `(conj [1 2] 3)` → `[1 2 3]` (but `[1 2]` is still `[1 2]`)

### Flow Control

- `if`: `(if true "yes" "no")` → `"yes"`
- `when`: `(when true (println "yes"))` → `yes`
- `cond`: Like a multi-branch `if`

  ```clojure
  (cond
    (< x 0) "negative"
    (= x 0) "zero"
    :else "positive")
  ```

### Collections & Sequence Operations

- `map`, `filter`, `reduce`:

  ```clojure
  (map inc [1 2 3]) ; => (2 3 4)
  (filter even? [1 2 3 4]) ; => (2 4)
  (reduce + [1 2 3]) ; => 6
  ```

It might be a bit bigger than a typical napkin, but notice how concise and simple Clojure actually is? In my experience, things get messy, complicated and frustrating when I don't understand something or bring in some of my old-thinking. That us when I end up writing some pretty bizarre code.

> Remember that Clojure is functional. Functions are first-class citizens. Data is immutable. Embrace simplicity. For example, instead of writing complex loops and conditionals, Clojure encourages using higher-order functions like map and reduce to process data more elegantly. It’s the essence of getting started with Clojure!

## Going Beyond the Napkin

After grasping the basics—such as data types, functions, and immutability—the next steps to deepen your understanding of Clojure involve practical learning and understanding its idioms, tooling, and ecosystem. Here’s a suggested path forward:

### Learn Core Concepts

Learn functional programming patterns like higher-order functions, immutability, recursion, and pure functions, as these concepts are valuable across many programming languages. Dive into Clojure’s powerful macros to understand how they work and why they’re so effective. Additionally, master the sequence abstraction (`seq`, `map`, `reduce`, `filter`, etc.), which forms the foundation of data manipulation in Clojure. Practice working with Clojure's core data structures: lists, vectors, maps, and sets. Explore persistent data structures to understand how they enable efficient immutability. Additionally, learn destructuring to handle complex data structures with elegance, using `let` bindings to break data into named values and organize your code logically.

Learn to write more idiomatic Clojure by adopting practices that align with its functional nature. Prefer functions over loops, use threading macros (`->`, `->>`) for cleaner and more readable code, and master powerful tools like `reduce`, `map`, `filter`, and `for` comprehensions for elegant data transformations.

Understand Clojure's unique approach to concurrency by exploring its core constructs: atoms, refs, and agents, and learning how they differ in managing state. Additionally, dive into `core.async` to grasp Go-style channels and lightweight concurrency, enabling you to build more responsive and efficient applications.

### Practice at the REPL

Clojure shines in the REPL. Test, play, and experiment interactively. Type expressions and see immediate results.

Spend time experimenting in the Clojure REPL with code snippets to get hands-on experience. Dive into the standard library by using `(doc some-fn)` or `(source some-fn)` to explore and understand built-in functions. To grasp macros, use `macroexpand` to see how they transform code. For a closer look, `macroexpand-1` shows one level of expansion, while `macroexpand` reveals the full transformation, making it a powerful tool for debugging and learning.

Use an editor with REPL integration for seamless interactive development. Tools like CIDER (for Emacs), Calva (for VS Code), or Cursive (for IntelliJ) let you send code directly to the REPL from your editor. This approach is a cornerstone of Clojure's workflow, enabling quick feedback and an iterative development process.

### Solve Real Problems

Familiarize yourself with the tools commonly used in Clojure projects, such as Leiningen or `deps.edn`. Learn to organize namespaces effectively to separate functionality and maintain clean code. Additionally, explore dependency management and build tools like `tools.build` to streamline your project workflows.

Use this knowledge to practice your Clojure skills with interactive exercises on websites like [4Clojure](https://4clojure.oxal.org/) or [Exercism](https://exercism.io/tracks/clojure). You can also write small scripts and explore [Babashka](https://github.com/babashka/babashka) to automate tasks such as parsing CSV files, analyzing text, or building a simple to-do list app.

Build small, meaningful projects to apply your Clojure skills. Start with a command-line tool using `clojure.core`, or create a web app with frameworks like [Ring](https://github.com/ring-clojure/ring), [Compojure](https://github.com/weavejester/compojure), or [Reitit](https://github.com/metosin/reitit). You can also explore working with databases by using [next.jdbc](https://github.com/seancorfield/next-jdbc) or a document store like [Datomic](https://www.datomic.com/).

Study real-world projects by browsing open-source Clojure code on GitHub. Explore popular projects like [Metabase](https://github.com/metabase/metabase) or [Clj-http](https://github.com/dakrone/clj-http) to see how developers solve practical problems. Pay attention to how projects are structured, how code is documented, and how functional programming concepts are applied in real scenarios.

Start contributing to small open-source projects or create your own library to sharpen your skills. This experience will push you to write clear documentation, design thorough tests, and carefully consider API design, all of which are crucial for creating robust and user-friendly software.

### Explore Clojure Libraries

Get familiar with useful libraries in the Clojure ecosystem, such as:

- Web Development: [Ring](https://github.com/ring-clojure/ring), [Reitit](https://github.com/metosin/reitit)
- State Management: [Atom](https://clojure.org/reference/atoms), [Ref](https://clojure.org/reference/refs), [Agent](https://clojure.org/reference/agents)
- Data Processing: [core.async](https://github.com/clojure/core.async), [Clojure.spec](https://clojure.org/about/spec)
- Testing: Use [Clojure.test](https://clojure.github.io/clojure/clojure.test-api.html) to add tests to your code

### Explore ClojureScript

Learn ClojureScript to build front-end applications with Clojure's functional programming power. Explore frameworks like Reagent or Re-frame, which are popular choices for creating dynamic and responsive single-page applications.

By tackling these steps, you’ll not only grow more comfortable with Clojure but also start to think in a functional and idiomatic way, which is key to mastering it. The key is hands-on practice—embrace the REPL, write code, break things, and most importantly, have fun!

## References

- [ClojureBridge/curriculum](https://github.com/ClojureBridge/curriculum) - GitHub
- [ClojureBridge Curriculum](https://clojurebridge.org/curriculum/#/)
- [Clojure Docs](https://clojuredocs.org/) - Documentation and examples
- [Learn Clojure](https://www.learn-clojure.com/) - Beginner to advanced resources
- [Clojure for the Brave and True](https://www.braveclojure.com/) - Free online book
- [Clojure.org](https://clojure.org/) - Official Clojure website with guides and documentation
- [4Clojure](https://4clojure.oxal.org/) - Interactive exercises
- [Exercism Clojure Track](https://exercism.io/tracks/clojure) - Practice exercises for Clojure learners
- [ClojureVerse](https://clojureverse.org/) - Community discussion forum
- [Practicalli Clojure](https://practical.li/) - Practical guide to Clojure and ClojureScript development

---
title: How to run a single Clojure test from the terminal using Leiningen
devTo: https://dev.to/cbillowes/how-to-run-a-single-clojure-test-from-the-terminal-using-leiningen-e1l
cover: clojure.jpg
credit: Tom & Rich Hickey
creditLink: https://en.wikipedia.org/wiki/Clojure
tags:
  - Technical
  - Clojure
  - Terminal
---

You may want to target and run a specific test or set of tests when testing
your code so that you don't keep executing the entire suite each time you
make changes to specific tests. This creates a faster feedback loop for you
to build and fix code. Usually tests are executed with Leiningen using `lein test`.
You can extend this command to meet the necessary objectives.

```bash
lein test :only my.namespace/my-test
```

Thanks to [this](https://stackoverflow.com/questions/41484746/clojure-test-and-leinigen-how-to-run-just-a-single-test-from-command-line) question and answer on Stack Overflow. :heart:

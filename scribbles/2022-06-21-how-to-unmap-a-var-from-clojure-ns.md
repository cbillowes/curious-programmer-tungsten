---
title: How to unmap a var from a Clojure namespace
devTo: https://dev.to/cbillowes/how-to-unmap-a-var-from-a-clojure-namespace-n5c
cover: clojure.jpg
credit: Tom & Rich Hickey
creditLink: https://en.wikipedia.org/wiki/Clojure
tags:
  - Technical
  - Tip
  - Clojure
---

I was working with a multimethod that I needed to redefine in my REPL and came across [this](https://clojuredocs.org/clojure.core/defmulti) doc.

There is an entry that states if you are in the REPL and need to redefine then you will need to unmap the var because defmulti won't allow you to redef.

This is how:

```
(ns-unmap *ns* 'something)
```

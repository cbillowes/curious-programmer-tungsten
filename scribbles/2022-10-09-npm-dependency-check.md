---
title: Utility to fix npm dependencies
cover: npm.png
date: 2022-10-09
creditSource: Wikipedia
creditLink: https://en.wikipedia.org/wiki/Npm_(software)#/media/File:Npm-logo.svg
tags:
  - Technical
  - Tools
  - Node
  - JavaScript
  - Terminal
---

There is a utility called **npm-check** that offers the ability to interactively update outdated, incorrect or unused dependencies:

```bash
npx npm-check --update
```

Take a look at the switches. It offers way more than just that.

## Usage

```bash
npx npm-check <path> <options>
# Path = Where to check. Defaults to current directory. Use -g for checking global modules.
# Options = Choose from the switches available.
# Help -> npx npm-check --help
```

## Switches

| Switch            | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| -u, --update      | Interactive update.                                                    |
| -y, --update-all  | Uninteractive update. Apply all updates without prompting.             |
| -g, --global      | Look at global modules.                                                |
| -s, --skip-unused | Skip check for unused packages.                                        |
| -p, --production  | Skip devDependencies.                                                  |
| -d, --dev-only    | Look at devDependencies only (skip dependencies).                      |
| -i, --ignore      | Ignore dependencies based on succeeding glob.                          |
| -E, --save-exact  | Save exact version (x.y.z) instead of caret (^x.y.z) in package.json.  |
| --specials        | List of depcheck specials to include in check for unused dependencies. |
| --no-color        | Force or disable color output.                                         |
| --no-emoji        | Remove emoji support. No emoji in default in CI environments.          |
| --debug           | Debug output. Throw in a gist when creating issues on github.          |

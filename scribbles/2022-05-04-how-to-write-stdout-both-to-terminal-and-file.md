---
title: How to write stdout both to the terminal and a file
devTo: https://dev.to/cbillowes/how-to-write-stdout-both-to-the-terminal-and-a-file-3dod
date: 2022-05-04
tags:
  - Technical
  - Tip
  - Terminal
---

Below I use the [tee](https://phoenixnap.com/kb/linux-tee#:~:text=What%20Does%20tee%20Command%20Do,can%20precede%20or%20follow%20it.) command to write the output of an `npm run build` script to both to the terminal and to a log file.

```bash
npm run build | tee ./logs/build.log
```

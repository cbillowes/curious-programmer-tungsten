---
title: How to recover a file from another branch in Git
devTo: https://dev.to/cbillowes/how-to-recover-a-file-from-another-branch-in-git-30p
date: 2022-01-25
cover: git.png
credit: Vasil Enchev
creditLink: https://dribbble.com/shots/4037272-Git-monster-illustration/attachments/925202
tags:
  - Technical
  - Tip
  - Git
  - Terminal
---

```bash
git show branch:filename.ext > path/to/file.ext
```

Where branch can be any ref including a branch name, tag, HEAD.

Thanks to this [Stack Overflow](https://stackoverflow.com/questions/7856416/view-a-file-in-a-different-git-branch-without-changing-branches) reference.

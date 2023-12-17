---
title: How to see the contents of stashed changes in Git
devTo: https://dev.to/cbillowes/how-to-see-the-contents-of-stashed-changes-in-git-4aj8
cover: git.png
credit: Vasil Enchev
creditLink: https://dribbble.com/shots/4037272-Git-monster-illustration/attachments/925202
tags:
  - Technical
  - Tip
  - Git
  - Terminal
---

```
git stash show -p stash@{0}
```

Where `0` is the indexed location of the item in the stash. Find all items in the stash using:

```
git stash list
```

- `git help stash`
- https://stackoverflow.com/questions/3573623/is-it-possible-to-preview-stash-contents-in-git
- https://stackoverflow.com/questions/10725729/see-whats-in-a-stash-without-applying-it

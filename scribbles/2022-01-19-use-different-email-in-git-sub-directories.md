---
title: How to use a different email address in Git in sub directories
devTo: https://dev.to/cbillowes/how-to-use-a-different-email-address-in-git-in-sub-directories-jp9
cover: git.png
credit: Vasil Enchev
creditLink: https://dribbble.com/shots/4037272-Git-monster-illustration/attachments/925202
tags:
  - Technical
  - Git
  - Terminal
  - Tip
---

I want to override my personal email address I use for Git with my work
email address in my work directory without manually changing it each time.

```text:title=~/path/to/work/directory/.gitconfig
# any customization/overrides can be added here
[user]
        name = Clarice Bouwer
        email = clarice@example.com
        ```
```

```text:title=~/.gitconfig
[includeIf "gitdir:~/path/to/work/directory/"]
    path = ~/path/to/work/directory/.gitconfig
```

```bash
cd ~/
git config user.email # should be your default config email

cd ~/path/to/work/directory
git config user.email # should be your override email
```

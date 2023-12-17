---
title: How can I find deleted stuff in Git?
date: 2021-09-02 19:30:00 +0400
cover: dev-rant.png
credit: devrant.io
creditLink: https://github.com/cozyplanes/wallpaper#devrant-unofficial-wallpaper
creditSource: cozyplanes
tags:
  - Technical
  - Git
---

I was working on an **about** module a few months ago.
I wasn't satisfied with it so I deleted it with all its related files :grimacing:
Now I need to recover parts of this data that I had so
conveniently discarded. 🤦‍♀️

I can't remember the exact location of the files on disk that I am looking for and
I don't know what to look for in the history, but luckily Git offers numerous
ways of playing detective :detective: so I can try to get what I want back.
If I recall correctly, I was working on a page called **about.js**.

This article is a curation of the different ways I could find to find files
that can be recovered and then actually recover them. We are going to use the
example of finding the lost about page and related files that selectively need
to be restored.

> In this article I refer to `bash± git lg ` which is a
> [Git alias](/blog/a-custom-alias-for-a-pretty-git-log-with-a-graph/)
> that I added to my global config which will print a shortened pretty version of my git history (the log).

## What is the file that must be restored?

Choose a search term which you think may appear in the commit message.
Think about using context-based terms like **about** or action-based terms like **refactor**,
**move**, **delete** or **remove**. If you regularly reference file names in your commit
then you can search by the **filename**. We are going to use the history to get the relative path
and filenames of the files we want to restore.

```bash
git lg --name-status | grep <TERM>
```

Below is an example of the output where I got the relative filename for the about page. :clap:

```
$ git lg --name-status | grep about
...
* 1a1305c |  Add about page (4 months ago) [Clarice Bouwer]
| A     src/Components/Headers/about.js
| A     src/images/about/people.jpg
:point_right: | M     src/pages/about.js
* 9ee2ea2 |  Create layout with global styles to prep about page (4 months ago) [Clarice Bouwer]
| A     src/pages/about.js
...
```

We can also page through commits that have files that have been deleted. These files are
listed in the output.

```bash
git lg --diff-filter=D --summary
```

```
...
:star: * 151ef7f |  Something destructive with my about page (4 weeks ago) [Clarice Bouwer]
|
|  delete mode 100644 src/Components/About/Contact/index.js
:point_right: |  delete mode 100644 src/pages/about.js
|  delete mode 100644 src/pages/credits.js
|  delete mode 100644 src/pages/tags.js
* 1410b48 |  Generate articles (4 months ago) [Clarice Bouwer]
|
|  delete mode 100644 build/pages-article.js
...
* 23cc5dc |  Delete old themes (4 months ago) [Clarice Bouwer]
|
|  delete mode 100644 src/Components/Themes/Dark.js
|  delete mode 100644 src/Components/Themes/Light.js
|  delete mode 100644 src/Components/Themes/index.js
...
```

If you are interested in more than just deleted files then you can also look into using
Git [whatchanged](https://git-scm.com/docs/git-whatchanged) `bash± git whatchanged `

```
...
commit 168f7c6e9f7dfc404b312fcc0436960e2d6cad1a
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Thu Sep 2 06:48:09 2021 +0400

    Add about page with featured articles

M       articles/2016/2016-05-14-importance-of-git-history/index.md
M       articles/2016/2016-06-06-branding-your-identity/index.md
M       articles/2016/2016-11-13-the-imposter-within/index.md
M       articles/2019/2019-01-15-crafting-changes-in-git/index.md
M       articles/2019/2019-01-29-working-with-git-remotes/index.md
M       articles/2019/2019-09-02-git-aliases/index.md
M       articles/2020/2020-05-03-gatsby-source-plugin.md
A       src/images/avatar.png
A       src/pages/about.js
M       tailwind.config.js
...
```

## In what commit was this file deleted?

Use [git rev-list](https://git-scm.com/docs/git-rev-list) to list all commit objects for
the specified file in reverse chronological order.

```bash
git rev-list HEAD -- src/pages/about.js
```

```
$ git rev-list HEAD -- src/pages/about.js
168f7c6e9f7dfc404b312fcc0436960e2d6cad1a
e02cb810ed12448f390d2974a4986d72269d9ac4
1b5936ef601352698978176ee059dd3a6fe54fee
...
```

This is crappy so we are going to take these results
and use them as arguments in the `git show` command to show all actual commits instead of
just the objects.

```bash
git rev-list HEAD -- src/pages/about.js | xargs git show $1 --name-status
```

```
$ git rev-list HEAD -- src/images/about/people.jpg | xargs git show $1 --name-status
:star: commit faed0b3ef95d23a2f465eeedb5be8da0ece19075
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Tue May 4 20:24:05 2021 +0400

    Theme switcher on about page

M       package-lock.json
M       package.json
M       src/Components/Layout/index.js
M       src/Components/ThemeSwitcher/index.js
D       src/images/about/coffee-begin.jpg
D       src/images/about/legos.jpg
D       src/images/about/people.jpg
D       src/images/about/screen-with-code.jpg
:point_right: D       src/pages/about.js

commit 1a1305c5f5774a1203f2f11f3a7b3c7513887dc6
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Tue May 4 07:57:39 2021 +0400

    Add about page

M       gatsby-config.js
M       package-lock.json
M       package.json
M       src/Components/GlobalStyles/index.js
A       src/Components/Headers/about.js
M       src/Components/Layout/index.js
M       src/Components/Menu/index.js
M       src/Components/Navigation/index.js
A       src/images/about/people.jpg
M       src/pages/about.js
```

## How can I restore this file?

> :two_hearts: Git Tower has a brilliant [guide](https://www.git-tower.com/learn/git/faq/restoring-deleted-files/)
> titled **Restoring deleted files in Git**.
> In this guide they cover different scenarios in depth. I am going to summarize some of those commands here.

1. Deleted a file that was **not committed**. Works if file was staged or not.

   ```bash
   git checkout HEAD <filename>
   ```

2. Deleted and **committed the file**. `--soft` so that you don't lose all your current changes.

   ```bash
   git reset --soft HEAD~1
   ```

3. Deleted and then made **more commits**.
   Decide how far back you want to go to restore this file. Each one will be an incremented number
   starting from 1. `~` indicates that you are going back in time. Use the commit hash where the
   file was deleted and add this number to the end. `faed0b3ef95d23a2f465eeedb5be8da0ece19075~1`
   Alternatively end the hash with a caret `^` to go to its previous commit.

   ```bash
   # go back in time
   git checkout <deletion commit hash>~1 -- <filename>

   # another way to retrieve the file using the previous commit
   git checkout <deletion commit hash>^ <filename>
   ```

4. Deleted and then **pushed** that commit.
   ```bash
   # --no-commit
   # option prevents the command from creating a new commit right away,
   # instead allowing you to choose exactly which of the changes introduced in the old
   # commit you want to revert in your new commit.
   git revert --no-commit <commit>
   ```

And that's it! :tada: Let me know if you have better techniques or alternative approaches.
It would be great to add them here!

## References

- git [rev-list](https://git-scm.com/docs/git-rev-list)
- git-tower's article about [restoring deleted files](https://www.git-tower.com/learn/git/faq/restoring-deleted-files/)
- git-tower's ebook Learn Version Control with Git: [undoing things](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/undoing-things/)
- Career Karma's tutorial on [Git: Restore Deleted File](https://careerkarma.com/blog/git-restore-deleted-file/)
- Atlassian Bitbucket's [Advanced Git log](https://www.atlassian.com/git/tutorials/git-log) tutorial

## Stack Overflow

- [git recover deleted file where no commit was made after the delete](https://stackoverflow.com/questions/11956710/git-recover-deleted-file-where-no-commit-was-made-after-the-delete)
- [How can I list all the deleted files in a Git repository?](https://stackoverflow.com/questions/6017987/how-can-i-list-all-the-deleted-files-in-a-git-repository)
- [How to find and restore a deleted file in a Git repository?](https://stackoverflow.com/questions/953481/how-to-find-and-restore-a-deleted-file-in-a-git-repository)
- [How do I list all of the files in a commit?](https://stackoverflow.com/questions/424071/how-do-i-list-all-of-the-files-in-a-commit)
- [Look up commit log for commit ID in Git](https://stackoverflow.com/questions/13398819/look-up-commit-log-for-commit-id-in-git/13398872)

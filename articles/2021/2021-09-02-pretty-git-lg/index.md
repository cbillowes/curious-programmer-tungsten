---
title: A custom alias for a pretty Git log with a graph
date: 2021-09-02 18:00:00 +0400
cover: pretty-git-graph.png
credit: Slipp D. Thompson
creditSource: StackOverflow
creditLink: https://stackoverflow.com/questions/1057564/pretty-git-branch-graphs
tags:
  - Technical
  - Git
---

I have [added](https://stackoverflow.com/questions/2553786/how-do-i-alias-commands-in-git)
a git alias for `bash± git log ` by editing the global config `~/.gitconfig` so that it
is not localized to a specific git repository. I added the following below the
`[alias]` section :point_down:

```
alias.lg=log --pretty='%Cblue%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset' --graph
```

`bash± git lg ` will now print a [pretty](http://git-scm.com/docs/git-log#_pretty_formats) colored summarized log with a
graph to indicate branching and merges. My particular version displays a

- short hash `%h` in blue followed by a pipe
- ref names in yellow (HEAD -> master, origin/master) `%d` _like the --decorate option of [git-log](http://git-scm.com/docs/git-log)_
- the message (or subject) `%s`
- the relative committer date `(%cr)` - 2 months ago - in green and in parenthesis, and
- the author name in cyan `[%an]` in block brackets

```
...
* 28aed2c |  Add HONOR_DNT env var (2 days ago) [Clarice Bouwer]
* 1e3e505 |  Add track custom click event on anchors (2 days ago) [Clarice Bouwer]
* cf7dc67 |  Upgrade to Google Analytics 4 (2 days ago) [Clarice Bouwer]
...
```

instead of

```
...

commit 28aed2cbb6ee56f625f26b101bc1e5b0ee2bd18c
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Wed Sep 1 03:27:30 2021 +0400

    Add HONOR_DNT env var

commit 1e3e50557c5ac659f19ce30a85f5d9bd3a53adab
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Wed Sep 1 03:26:13 2021 +0400

    Add track custom click event on anchors

commit cf7dc679eb6b855d286dad8726b32d4afa8a372f
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Tue Aug 31 21:14:17 2021 +0400

    Upgrade to Google Analytics 4

...
```

A more complex example with a graph and a nonsensical history:

```
*   56380d6 |  Merge branch 'master' of origin/master (1 year, 10 months ago) [Stephen Hawking]
|\
| * 7ac7c22 |  Avast, me proud beauty (1 year, 10 months ago) [Sheldon Cooper]
* | d021f77 |  Wanna know why my Roger is so Jolly (1 year, 10 months ago) [Douglas Adams]
* | 1f56c7d |  Have ya ever met a man with a real yardarm (1 year, 10 months ago) [George Martin]
* | 291af41 |  Merge branch 'master' of origin/master (1 year, 10 months ago) [George Lucas]
|\|
| * fb1496f |  Come on up and see me urchins (1 year, 10 months ago) [Simon Pegg]
| * 72cc156 |  Prepare to be boarded (1 year, 10 months ago) [Stan Lee]
| * a5d133d |  I’ve sailed the seven seas, and you’re the sleekest schooner I’ve ever sighted (1 year, 10 months ago) [Don Tillman]
| * c75be35 |  Let’s get together and haul some keel (1 year, 10 months ago) [Abby Sciuto]
| * d17b2a0 |  What are YOU doing here (1 year, 10 months ago) [Xander Harris]
| *   98e5f2c |  Merge branch 'master' of origin/master (1 year, 10 months ago) [Steve Urkel]
| |\
| * | 4727647 |  Take what you can, give nothing back (1 year, 10 months ago) [Leonard Hofstadter]
* | | 478ebc2 |  You can always trust the untrustworthy (1 year, 10 months ago) [Spencer Reid]
| |/
|/|
* | 60bbae5 |  Merge branch 'master' of origin/master (1 year, 10 months ago) [Amy Farrah Fowler]
|\|
| * 0fdc537 |  If ye can’t trust a pirate, ye damn well can’t trust a merchant either (1 year, 10 months ago) [Carlton Banks]
| *   a9c6557 |  Merge branch 'master' of origin/master (1 year, 10 months ago) [Lisa Simpson]
| |\
| * | 5f4e047 |  The existence of the sea means the existence of pirates (1 year, 10 months ago) [Ross Geller]
* | | 4f727e7 |  Not all treasure is silver and gold (1 year, 10 months ago) [Adrian Monk]
| |/
|/|
* | 9645fc7 |  Work like a captain, play like a pirate (1 year, 10 months ago) [Dexter Morgan]
|/
* d32cdee |  Ahoy! lets trouble the water! (1 year, 10 months ago) [Hiro Nakamura]
```

## References

- [How do I alias commands in git?](https://stackoverflow.com/questions/2553786/how-do-i-alias-commands-in-git)
- Git log [pretty formats](http://git-scm.com/docs/git-log#_pretty_formats)

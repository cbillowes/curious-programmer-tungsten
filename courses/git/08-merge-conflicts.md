---
title: Merge Conflicts
parent: /courses/git
date: 2022-10-10
---

> You can either use your terminal or a really good GUI merge tool.
> I use the integrated merge tool inside VS Code.

:thinking: If you change a line, and I change the same line differently, which line should Git use?
In the snippet below, we have example output of what the conflict information will look like on a particular file.

```bash:title=output
❯ git merge awesome-stuff
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

The merge process is paused as it requires manual intervention to resolve the conflict.

You will notice foreign text in files with conflicts. These are **conflict-resolution markers**
and look something like this:

```diff:title=footer.html
<<<<<<< HEAD:index.html
<div id="footer">contact : email.you@email.dev</div>
=======
<div id="footer">
 please contact us at you@email.dev
</div>
>>>>>>> awesome-stuff:index.html
```

This complicated mambo-jumbo is actually packed with useful information. Let's dissect it:

1. `<<<<<<< HEAD` indicates that the version in HEAD is everything that is above the =======.
   That means that it is the current change of content that is on the branch that you are on.
1. `>>>>>>> awesome-stuff` and everything below ======= is the content from the `awesome-stuff` branch.
   That means that it is the change of content on the incoming branch. (Branch being merged in)
1. `index.html` indicates the name of the file where the conflict is happening.
1. You are expected to remove the chevrons, equal signs and adjust the content to be correct.
   VS Code tries to help you out so that you don't have to manually change the file.
   You can either Accept Current Change, Accept Incoming change or Accept Both Changes.

Once you have resolved a merge conflict, you will need to

1. save the change
1. stage the file
1. commit the merge
1. push your change

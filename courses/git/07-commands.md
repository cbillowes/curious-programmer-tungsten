---
title: Basic commands
parent: /courses/git
date: 2022-10-10
modified: 2022-10-17
---

:bulb: Do you remember how to get to the help tutorial in the terminal?

```bash:title=command
git help tutorial

# or a specific command
git help git-<command>
```

To get more documentation on a command, type

```bash:title=command
man git-<command>

# example
man git-log
```

## Commits

The goal of the game is to get changes into the popular VCS called Git.
Ideally you want to get this onto a remote repository.

Changes are in the form of commits which contain a bunch of things that have changed and a message of the change.
Let's break it down into smaller components.

### Working directories status

Your working directory will show you what **state** it is in.

```bash:title=command
git status
```

```bash:title=output
❯ git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   courses/git/02-about-git.md
        modified:   courses/git/03-terminology.md
        modified:   courses/git/04-installation.md
        modified:   courses/git/07-commands.md
        modified:   courses/git/index.md

no changes added to commit (use "git add" and/or "git commit -a")
```

> We will cover the output of this command a little later. For now, all you need to know is that it
> shows you the files that have changed.

### Diffs

It is important to know that Git will show you the **differences** made in a change set.
You can see what lines, words or files have been added, modified or deleted.

```diff:title=awesome.html
   <div
-    className="bg-color-1 text-color-1-script m-0 px-0 py-1"
+    className="relative bg-color-1 text-color-1-script m-0 px-0 py-1"
   >
```

```bash:title=terminal
git diff <thing>
# use the filename of the file that you are working on
# use the commit SHA of a commit in the history
# use the term HEAD to view changes since the last commit
# use the branch name that you are interested in (more on branches later)
# use <commit1> <commit2> if you want a diff different commits
# use the above command in conjunction with a filename to see how that file has evolved over the two commits eg. <commit1> <commit2> untitled.html
# use <commit1>..<commit2> if you want to diff two commits relative to a common ancestor
# use origin/<branch>..<branch> if you want to see the differences in your local repository relative to origin (the remote repository)
```

### Stage changes

Git offers an intermediary between tracking files and the actual physical version history.
That means that you can fine tune and craft a decent commit before committing to the history.
It's like a quality gate to see exactly what changes you want to commit at that time.
You can interrogate your diffs to make sure you are committing relevant changes and that
sensitive or debugging changes are reverted or left out.
This area is known as the **staging area**.

> **Once it goes into the Git history, it lives in Git forever!**

```bash:title=command
git add <file> <file> <file>
```

> There is a `git add .` command to tell Git to add every file but then you are bulk adding instead of crafting so
> don't do this. We will go into the finer details of some etiquette later on in the course.

```bash:title=output
❯ git add courses/git/01-vcs.md
❯ git status
On branch main
Your branch is ahead of 'origin/main' by 8 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   courses/git/07-commands.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   courses/git/02-about-git.md
        modified:   courses/git/03-terminology.md
        modified:   courses/git/04-installation.md
        modified:   courses/git/index.md
```

If you have files listed under **changes not staged for commit** then these files have been changed but have not been put
into the staging area with the `git add` command yet. You can simply discard those changes.

```bash:title=command
git restore <file>
```

If you have files listed under **changes to be committed** it means that the files have been **staged**.
The staging area lets you chop and change what you put into it so if you accidentally added a file you didn't want to
then you can take the file out of the stage without losing your changes.

```bash:title=command
git restore --staged <file>
```

If you want to see the diffs that are ready to be committed

```bash:title=command
git diff --cached
```

### Commit to history

Git tracks **content** not files. When you **commit** a change then you are telling
Git to remember what changed at that point in time. You are **officially** adding it to the Git history, or
if you want to think of it differently, saving the change to Git.

You can consider commits to be checkpoints or snapshots of the current state of your content.
There is no limit to the number of commits you can make or size of the commit that I know of.

Now that you have seen your changes in the form of diffs and got them ready to be committed by
staging the changes, you can now **commit** to Git.

### Commit message

You bundle a Git commit with a message that is visible in the history (or log). This let's you - and others - know what changed.
If you do a good job at this then you can make everyone's lives easier when there are bugs or issues that pop up.
Read about the guidelines in the **Etiquette** chapter of this course.

> ### Official documentation
>
> Though not required, it’s a good idea to begin the commit message with a
> single short (less than 50 character) line summarizing the change, followed by a blank line and then
> a more thorough description. The text up to the first blank line in a commit message is treated as
> the commit title, and that title is used throughout Git.

**It's easy to craft a good commit message if you are committing changes properly by context rather than in bulk.**

```bash:title=command
git commit
```

A text editor will pop up asking for your commit message. Enter it using the guidelines above, save and quit.

If you want to commit with a message inline (makes it harder to add a body) then you can use the following command:

```bash:title=command
git commit -m "Something cool to write home about"
```

#### Show commit

Each commit is given a number called a SHA. The SHA will identify that commit and you will be able to
access more information for it.

```bash:title=command
git show <SHA>
```

#### Send an email

```bash:title=command
git format-patch

# documentation
git help git-format-patch
```

This command turns a commit into an email and it uses the title on the subject line and the rest of the commit in the body.

#### :eyes: Etiquette

When you follow bad Git habits of creating silly, non-descriptive or invalid messages, you run the risk
of confusing the hell out of other people and making it difficult to identify when a change was
brought into the system and could be the potential root cause of it breaking which wastes valuable time
as the developers need to dig into each commit to try figure out what happened.

#### :scream: Vim

If you commit without the `-m` switch, your default text editor that could pop up could be Vim.
Just a heads up, if Vim does open, to save, press `:` to go into the command mode,
press `w` to write and then press `q` to quit.
If you don't want to save then it is `:q!` - note the exclamation mark.

> **Note** that we covered a bit of Vim in the **Terminal** chapter of this course.

## History

The project history of all your commits can be viewed in the **log** and we can go back and forth between
commits to see the different revisions that exist.

```bash:title=command
git log

# Documentation
git help log
```

If you want to see complete diffs at each step:

```bash:title=command
git log -p
```

If you want the overview of a change in each step:

```bash:title=command
git log --stat --summary
```

The below command shows a colorful condensed line consisting of a short SHA, subject line,
how long ago the commit was authored relative to now and who authored the change.

```bash:title=command
git log --pretty='%C(yellow)%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset' --graph
```

## Aliases

The pretty `git log` command is a bit verbose and hectic to type each time.
A Git alias is a powerful option where you can create your own custom Git shortcuts.

You can configure the pretty print command as an alias as follows:

```bash:title=command
git config --global alias.lg log --pretty='%C(yellow)%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset' --graph

# Access it by typing
git lg
```

## Branches

You can think of Git like a tree.
Imagine your timeline of changes as you commit to your repository. This all happens on a **branch**.
The main line of development is typically referred to as **trunk** (of the tree) or by its name of **master** or more recently **main** but it can be named anything.

You can **deviate** from the main line by creating your own **branch** where you can release a new feature, experiment, do work-in-progress or basically whatever you want, still push it to your remote repository without impacting others. A single Git repository can have many branches.

```bash:title=command
git branch <branch>
```

![Git log with Graph](https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3600&q=80 "Git log with Graph")

> In the image above, the blue line is trunk while the pink and green lines are separate branches
> that have been branched off of trunk at a specific point in time.

You can checkout a branch from a specific commit - so go back in time:

```bash:title=command
git checkout -b <branch> <SHA>
```

See all your branches

```bash:title=command
git branch
```

```bash:title=output
   experimental
 * main
```

The asterisk marks the branch you are currently on so you will need to `switch` branches when you want to work on a different on:

### Switching branches

```bash:title=command
git switch <branch>
```

Let's have some fun shall we?

1. Create a new branch off of your master/main branch
1. Save a file with your favorite number it in
1. `git commit -a`
1. `git switch master` or `main`
1. `git log`

Do you see your change?

### Merging branches

Your one branch has changes on it that the other branch does not have.
That means that the branches have diverged. If you want the changes on your branch to be put into the master/main branch
then you will need to `merge` those changes.

Be sure to be on the branch that you want the changes on.

```bash:title=command
git switch master
git merge experimental
```

If you don't have any files that have content that conflicts then you are done. :grin:
If there are conflicts :scream: then you will need to deal with obnoxious, loud (but helpful) markers that are
left in the problematic files that show the conflicts.

> **Note** that you should not change the merge commit message as one is automatically created for you.

### Merge conflicts

You will need to fix files by resolving the conflicts (which we cover in a later chapter).

```bash:title=command
git diff
# Fix each file
git commit <file>
```

### Delete branches

If you want to delete a branch when you are done with it then switch it with `-d`. If the branch has not been merged
you will need to use `-D`.

```bash:title=command
git branch -d experimental
```

Branches are cheap and easy so this is a good way to experiment.

## Git syncing

### Remote repositories

You would have had to set up a **remote** repository to connect to. This is a repository - often hosted in the cloud - most likely
on GitLab, GitHub, BitBucket or some other cool or custom place repositories can be hosted.

> Some services offer public or private hosting of repositories. A public repository is available to anyone and is
> often Open Source whereas private repositories often have sensitive domain logic or information that developers
> or companies don't want to make public.

Remote repositories are useful because they foster collaboration and provide help during disaster recovery (imagine your machine goes :boom:).

Your default remote repository will most likely be called `origin`.

```bash:title=command
git remote show origin
```

```bash:title=command
git remote add <name> <url>
# name = default is usually origin
# made a spelling mistake?
git remote rename <old-name> <new-name>
```

### Clone

As Git is distributed, we do a [Dolly][dolly-the-sheep] the sheep, and make a clone of the repository on your local machine
so that you can work on it.
The clone of the project is an exact copy of the original project on the remote server.

```bash:title=command
git clone <url>
```

> There are two ways to clone: using SSH and using HTTPS.
> It is highly advised that you use SSH which you will learn in the SSH chapter of this course.

### Push

You are probably going to be doing some work on the repository you just cloned.
Once you have made a bunch of changes, you quadruple-triple check your diffs before you commit your changes.
Once you have quality commits, you are ready to get your changes onto the remote repository.
To do this, you will **push** to the appropriate remote.

```bash:title=command
git push <remote> <branch>

# Example
git push origin main
```

### Pull

Now that people are hacking away at the files on the repository, you will need to get copies of their files.
Now you will **pull** changes from the appropriate remote.

Two operations are performed:

1. The changes are fetched from the remote branch
1. The changes are merged into the current branch using the strategy you configured

#### Stashing changes

If you have local changes you won't be able to pull. You will either need to commit, discard or
put your changes away for later in the form of a **stash**.

```bash:title=command
git stash -m "Git course materials"
```

You can apply the stash once the changes have been merged by listing all changes in the stash,
getting the stash number and then popping that number from the stash.

```bash:title=command
git stash list
```

```bash:title=output
❯ git stash list
stash@{0}: On main: Git course materials
```

```bash:title=command
git pop stash@{0}
```

You may encounter merge conflicts which you will need to resolve like you did before.

### Fetch

A **fetch** will get stuff from the remote repository so that you can see what
other people have done - you can peek at their changes.

It is important to note that the files in your local repository are not affected.
You need to explicitly checkout that work. That means that fetching is a safe way to review commits before integrating them with
your local repository.

```bash:title=command
git fetch
```

## Tagging

```bash:title=command
git help git-tag
```

Once purpose of a tag is to annotate a particular commit for a particular release.

```bash:title=command
git tag v1.0.42 HEAD
git push --tags
```

## Blame

If you need to see who made what changes to a particular file you can blame the file.

```bash:title=command
git blame <file>
```

## Searching

You can search for strings in any version of your project using the `git grep` command.

```bash:title=command
git grep "something"
```

## Status

Let's go back to git status. In the output below, there are no changes that have been detected.
This means that the **working directory (tree)** is clean and that there is nothing to commit.

```bash:title=output
❯ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

You would see something similar to the output below if there are changes detected.

```bash:title=output
❯ git status
On branch main
Your branch is ahead of 'origin/main' by 8 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   courses/git/01-vcs.md
        modified:   courses/git/02-about-git.md
        modified:   courses/git/03-terminology.md
        modified:   courses/git/04-installation.md
        deleted:    courses/git/index.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git-status.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Interesting! Note the following information I can see from this output:

1. I can see the branch that I am working on: **main**.
1. My local branch has 8 commits more than the remote repository **origin/main**.
1. I have changes that have not been staged for commit (5 files)
1. I have 1 change that is **untracked**.

## Advanced commands

Many Git commands take sets of commits:

```bash:title=command
git log v2.5..v2.6            # commits between v2.5 and v2.6
git log v2.5..                # commits since v2.5
git log --since="2 weeks ago" # commits from the last 2 weeks
git log v2.5.. Makefile        # commits since v2.5 which modify Makefile
```

You can also give the log a "range" of commits

```bash:title=command
git log -p origin/main..main  # commits between origin/main and local main branch
```

The following are a few advanced concepts that will be covered in another course.

1. Rebase
1. Drop
1. Reorder / Reword commits
1. Reset commits
1. Squash
1. Cherry pick
1. Stage hunks
1. Bisect

Get a [sneak peak][git-legit-cheatsheet] of some commands.

## Recap

In this video, Colt Steele gives a quick run down of Git in 15 minutes.
Learn about adding, committing, branching, checking out and merging.
He has made [notes][notion-notes] available to follow with.

`youtube:https://www.youtube.com/embed/USjZcfj8yxE`

In this video, by LearnWebCode, you'll go over some vocabulary used in Git and to
see Git in action.

`youtube:https://www.youtube.com/embed/n-p1RUmdl9M`

In this hour long video tutorial, Programming with Mosh, will teach you the fundamental concepts
and some important Git commands. At the end of this video you will have a good understanding of the
basics and be ready for intermediate to advanced concepts.

> **Bonus!** :heart_eyes: Get the Mosh Hamedani's [cheat sheet][codewithmosh-cheatsheet] - author of the video below.

`youtube:https://www.youtube.com/embed/8JJ101D3knE`

---

## Chapter objectives

:white_check_mark: You should be able to recognize and use basic Git commands outlined in this chapter.\
:white_check_mark: You should know how to get help directly from the command line using the `man` pages or `git help git-<command>`.\
:white_check_mark: You should have a basic understanding of how to craft a good commit.\
:white_check_mark: You should be able to read a diff.\
:white_check_mark: You should be able to navigate the history (log).\
:white_check_mark: You should understand branching, how to switch between different branches, how to merge changes onto the different branches and how to delete them.\
:white_check_mark: You should be exposed to Merge Conflicts and have an idea of how to resolve them.\
:white_check_mark: You should be able to work with remote repositories and know how to clone, pull, fetch and push changes.

---

## References

- [What is Gitignore and How to Add it to Your Repo][gitignore] - freecodecamp.com
- [Gitignore templates][gitignore-templates] - GitHub
- [Git Diff][git-diff] - Initial Commit
- [Git Config][git-config] - Atlassian
- [Git Cloning][git-clone] - Atlassian
- [Git Syncing][git-syncing] - Atlassian
- [Git Workflow][git-workflow] - Atlassian
- [Git Branching - Basic Branching and Merging][branching] - Official documentation
- [Git Tools - Advanced Merging][advanced-merging] - Official documentation
- [Vim - Quick Guide][vim] - Tutorials Point
- [Ubuntu on WSL][wsl]

[gitignore]: https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo
[gitignore-templates]: https://github.com/github/gitignore
[git-diff]: https://initialcommit.com/blog/git-diff
[vim]: https://www.tutorialspoint.com/vim/vim_quick_guide.htm
[dolly-the-sheep]: https://dolly.roslin.ed.ac.uk/facts/the-life-of-dolly/index.html
[git-clone]: https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone
[git-syncing]: https://www.atlassian.com/git/tutorials/syncing
[git-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows
[branching]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
[advanced-merging]: https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging
[wsl]: https://ubuntu.com/wsl
[git-config]: https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config
[codewithmosh-cheatsheet]: https://codewithmosh.lpages.co/git-cheat-sheet/
[git-legit-cheatsheet]: https://www.pauline-vos.nl/git-legit-cheatsheet/
[notion-notes]: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkNOSXJUNGNzZW80NlFzeEtNanR2VGFVeEMtZ3xBQ3Jtc0ttMS1FMzBXVzJtWi1GZlJIWm1COFBEOTlRcEMyRFplU0UyZEtRZjZndlloeVdmaHBzaXc3OEVkNVJuVDdsTTJ6OUQ0dXZiLUFrbnRUZ0lpTG95bUl4bUxydlZwNXpTcm1qdzdIbEhaNFpqbFBMakplVQ&q=https%3A%2F%2Fwww.notion.so%2FIntroduction-to-Git-ac396a0697704709a12b6a0e545db049&v=USjZcfj8yxE

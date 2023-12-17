---
title: Exercises
parent: /courses/git
date: 2022-10-15
modified: 2022-10-17
---

These exercises are intended for people who are new to software development.
I have specifically stayed away from writing code so that fewer concepts have to be covered.
The official [repository][repo] is available on GitHub for you to follow along with.

These exercises are meant to be followed in chronological order.

## 1. Install Git

You will need to get started by installing Git on your machine.
Once it is installed, you will have access to the `git` application through the `git` command in your terminal.
Make sure you do the following:

1. If you are using Windows, make sure you have WSL installed.
1. Have a basic understanding of the terminal and how to use it.
1. Download and install Git.
1. Check what version of Git is running in your terminal.
1. Install a GUI that you find interesting, open it and play around with it.

## 2. SSH

1. Generate your SSH key.
1. Setup your SSH key in GitHub.

## 3. Clone a repository

We are going to collaborate on a few simple text files as a team.
Before we get started, go to (or create) a directory that will contain all your projects that you will be working on.
I often create a `Workspace` or `Projects` directory in my user directory.

1. Clone the repository found at [GitHub][repo].
1. Create and switch to a new branch with your name. Example `clarice`.
1. Create a new file `git help git-stash >> git-stash.txt`.\
   If `git-stash.txt` already exists as a file, choose another git command. See `git help` for options.
1. Create another text file called `secrets.txt` and type `shhhhhhhh` or some top secret mambo jumbo in it. This is a secret file so you need to ignore it from Git.
1. Commit your changes and push them.
1. Create a [Pull Request][pull-request] on GitHub.

## 4. Pull from remote

1. Check the status of the remote repository.
1. Pull changes that you don't have.

## What's next?

Git has the power to make you a better software developer.
But you'll have to go beyond the basic "commit, push, pull" to use it effectively!
In this course, we'll look at some of the more advanced concepts and tools to make you more productive and confident with Git.

`youtube:https://www.youtube.com/embed/Uszj_k0DGsg`

[repo]: https://github.com/cbillowes/gentle-intro-to-git
[pull-request]: https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request

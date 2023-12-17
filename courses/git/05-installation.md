---
title: Installation
parent: /courses/git
date: 2022-10-10
modified: 2022-10-15
abstract:
  Git is software that will run on your machine.
  In this chapter we will install and configure Git.
---

## Installation

### Windows

1. First verify if Git is installed or not by using the command below in your WSL terminal.\
   Just make sure that [WSL][wsl] has been installed.\
   Alternatively, use the Git Bash terminal which is only available if Git has been installed.
1. If it's not installed, [download][download-git] Git for Windows and open it.
1. Follow the wizard to let the magic unfold.
1. Open your WSL or Git Bash terminal to continue.

### Mac or Linux

1. Open your favourite terminal. (See the terminal chapter of this course)
1. First verify if Git is installed or not by using the command below.
1. If it's not installed, [download][download-git] Git and open it to install.
1. Follow the wizard to let the magic unfold.
1. Go back to your terminal.

### Verify that Git is installed

:white_check_mark: If you see a version number below the command when you press enter in the terminal, then Git is installed successfully.\
:negative_squared_cross_mark: If it says that the command cannot be found then there has been a problem with the installation
or the application has not been installed.

```bash:title=command
git --version
```

This video will help you get Git installed, find the command line and jump into a few Git commands.
Don't worry too much about the Git commands section for now. We will explore them in depth later.

`youtube:https://www.youtube.com/embed/UFEby2zo-9E`

> ### Oh no! But why the terminal? :worried:
>
> We are going to use the terminal to get a feel of the basics but you can switch over to a GUI later if you want to.
> I believe it's better to know what happens under the covers than to blindly fall into the safety net of a GUI.

### Tutorial

You can access the built in tutorial introduction to Git at any time by using either command below.
The tutorial explains how to import a new project, make changes to it and share changes with other developers.

```bash:title=command
man gittutorial
#or
git help tutorial
```

## Configuration

There are a few things we need to configure before we continue. Some things will be configured for Git
and used **everywhere**. This is the global configuration. Other settings will be applied per project,
or locally to that project. That can be configured once you have created the Git project (repository).

### Author details

This will tell Git who you are. It is useful to know who made what change and when.
People working on or browsing through the repository can easily identify the author of the change.
Remote services use this to their advantage as well so that they can offer more information
about the author by displaying their avatar and hyperlinking to the author profile for that service.

To introduce yourself to Git, provide your name and public email address
(or registered remote service email address).

```bash:title=command
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Initialize a repository

Git isn't implicit so you need to set that up for your project.
If you decide to create a repository, all you need to do is **initialize** Git in your project directory with the following command:

```bash:title=command
git init
```

This will create what is called a repository and you can start tracking files.
It does this by generating a hidden `.git` directory which stores all the tracking data innards in its internal database.

> From Wikipedia about repositories: A repository is a data structure that stores metadata for a set of files or directory structure.

Essentially Git will refer to your project as a repository provided Git has been initialized in that directory.
You are tracking a working directory of files in a repository that is hosted locally on your machine.
You can safely make changes to your code without impacting the work of others.
You can link your repository to a remote server to synchronize and collaborate.

### Stop tracking files

Sensitive, auto-generated, certain binary, log, cache files do not need to be tracked. Later you will notice that it will bloat your commits
and makes your Git database unnecessarily large. You can ignore these files from Git by creating a [.gitignore][gitignore]
in your repository.

```text:title=.gitignore
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

---

## Chapter objectives

In this chapter you should have been able to:

:white_check_mark: Install Git on your machine.\
:white_check_mark: Know how to check what version of Git you have installed.\
:white_check_mark: Configure your author information.\
:white_check_mark: Initialize a repository for a new project.

## Reference

- [Official website][official] - Git
- [Download Git][download-git]
- [.gitignore][gitignore]
- [WSL][wsl]

[official]: https://git-scm.com/
[download-git]: https://git-scm.com/downloads
[gitignore]: https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo
[wsl]: /courses/git/03/terminal#working-with-wsl

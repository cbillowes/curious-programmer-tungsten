---
title: Etiquette
parent: /courses/git
date: 2022-10-10
---

The guidelines in this chapter are opinionated based on personal and professional experience.
They are not always easy to achieve but are brilliant guidelines to follow to achieve a utopia of sorts.

## Commit logically

> Every commit must be a single topic. In other words, it relates to one fix or feature.

Bunching unrelated and multiple changes into a single commit is asking for trouble.
If there is a bug or an issue in the code, you will need to revert back without losing other changes.
To do this, you will need to ensure that your changes are related to a single topic.

A rule of thumb is in the commit message. If you need to summarize a bunch of unrelated concepts
then you do not have an logical commit.

## Commit working software

Commit code that doesn't break the build. If you revert to that commit, the build should be happy and dandy.

1. The build mustn't break.
1. All tests must pass.
1. All linting must be valid.

## Craft good commit messages

1. Keep subject lines consistent. If they start with a capital letter, then start yours with a capital letter.
1. Have purpose, be clear and concise.
1. Save space so limit the subject line to 50 characters.
1. Don't end your subject line with a full stop.
1. Keep the subject line in the present tense to save on characters.
1. Your subject line must briefly summarize what you changed, not how you changed it.
1. Your subject line should not be specific about files but focus on the context of the change.
1. You should elaborate your commit in the body and add reference links if necessary and where applicable.
1. You should separate the subject line from body with a blank line if you want to add more information in the body.
1. Wrap the body at 72 characters.
1. Use the body to explain what and why instead of the how.

## Provide clear documentation

I see a lot of developers cringe when it comes to writing documentation.
Imagine if you had to write code by integrating with an framework, API or service that has little to no documentation.
It would suck!

It will suck if other developers that need to collaborate with your codebase don't know how to hit the ground running either.

1. Have a proper README.
1. Craft proper commit messages.
1. Elaborate on why you chose to design a feature the way you did.
1. Add supporting documentation to Merge or Pull Requests.

Document enough for collaborators and for future you.

## Strive for HEALTHY repositories

- **Holistic**\
  Encourage a healthy and consistent state at all times.
  Strive to have your codebase fully executable at any point in the Git history.
  That means that anyone can go back in time without headaches.

- **Empathetic**\
  Remember that the collaborators on your project are most-likely going to be people so
  emphasis good, quality communication. Make it easy for people to understand and navigate your changes.

- **Atomic**\
  Consider how you commit your changes.
  Avoid monolithic and spaghetti commits. Create simple commits that are related by topic or
  a single unit of work (particular feature, bug fix, etc).

- **Logical**\
  Always consider what it is that you commit.
  - Don't commit sensitive information like passwords, API keys, SSH keys, etc.
  - Ignore custom/personalized user files, cache, logs, auto-generated, binary files and file you don't want to be available on your remote repository.

- **Team collaboration**\
  Be consistent and communicate clearly. Be conscious, considerate and deliberate with your habits and behaviors
  as it impacts the team of collaborators.

- **Habit**\
  Get into forming strong, healthy habits by practicing, tweaking and evolving your skill sets.
  Adopt best practices you believe in, practice them and share them.

- **You!**\
  Remember that change starts with you.
  You hold the key to having a better impact.
  You are responsible for the code you write and commits you craft.
  Be open to different approaches and adapt as your teams and projects change.

## References

- [The perfect commit][perfect-commit] - Git tutorial by Tobias Günther from Tower
- ["Git" it together][tips-1] - Some tips on commit etiquette and best practices @ Hackernoon
- [5 useful tips for a better commit message][tips-2] - Caleb Hearth @ thoughtbot
- [Note About Git Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) - Time Pope

[perfect-commit]: https://www.youtube.com/watch?v=Uszj_k0DGsg&t=87s
[tips-1]: https://hackernoon.com/git-it-together-some-tips-on-commit-etiquette-and-best-practices-for-junior-developers-1f147b8dfd56
[tips-2]: https://thoughtbot.com/blog/5-useful-tips-for-a-better-commit-message

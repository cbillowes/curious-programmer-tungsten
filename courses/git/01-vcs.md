---
title: Version Control Systems
parent: /courses/git
date: 2022-10-10
modified: 2022-10-15
abstract:
  To understand Git, you need to understand what a Version Control System is.
  In this chapter, we will cover how things used to work before Version Control Systems,
  then we will learn what Version Control Systems are, why they are useful to us
  and get exposed to the different types of popular options that we can use.
---

## How things used to work

Here's a little blast to the past:
Once upon a time we used to make backups of our code.
Then we made backups of those backups.
And then those backups had backups.
It got hairy!

Deployments and website publishing was even more of a nightmare.
We would do an old-school [FTP][ftp] of our files to a server somewhere
and hope nothing went wrong.

## Challenges

- We didn't know what the most recent **working version** of files were in the sea of backups.
- We didn't know what changed in files before it stopped working.
- We didn't know which file to target to fix when a breaking change was introduced.
- We didn't know what version of the website was live.
- We couldn't easily recover from lost or damaged files.
- Teams couldn't effectively and safely collaborate especially on the same files.

## Solution

### Version Control Systems

Enter the Version Control System - or VCS. It is a system - in the form of software - that will track and manage
files in your file system over time. You can see how tracked files evolve as you gain access to different
versions of it. This empowers you as an individual and teams to collaborate effectively and safely together.
You can develop and release work in an automated and efficient way.

This video offers an introduction to Version Control Systems and why they are useful.

`youtube:https://www.youtube.com/embed/zbKdDsNNOhg`

This video offers a basic understanding of Version Control including the main types of Version Control
and a quick introduction to Git.

> Version control software keeps track of changes to your code in a simple and structured way.
> If a mistake is made, developers can turn back the clock and compare earlier versions of their code
> to help fix mistakes while minimizing disruption to all team members.
>
> &#8212; Git Guides YouTube [video](https://youtu.be/xQujH0ElTUg) below

`youtube:https://www.youtube.com/embed/xQujH0ElTUg`

This video also covers the basics of Version Control Systems, explores the benefits
and takes a look at the best systems in the market (at the time of the video).

`youtube:https://www.youtube.com/embed/Yc8sCSeMhi4`

### Benefits

- **Accessibility**\
  Different versions of the same files can be accessed via its historical information that is maintained.
- **Collaboration**\
  Files can be accessed remotely and developers can see who changed what, when and why (if the author specified).
- **Traceability**\
  It is easier and faster to trace back to where errors and bugs could potentially be introduced.
  There are tools available to assist you with testing code at certain points in time.
- **Recoverability**\
  Version controlled files can be restored if your data is lost or if something goes wrong with your computer.
- **Economical**\
  There aren't actually copies and backups made of your files for every version, so disk space is conserved.
- **Work remotely**\
  Teams are not constrained to geographical locations so they can work remotely.
- **Enforce discipline**\
  Teams can collaborate with written communication and be deliberate about the change that is introduced into the codebase.
  You can put agreed-upon [workflows][git-workflow] in place to fix bugs, create new features, maintain existing code and experiment with new concepts.
- **Change context**\
  You can quickly get up to speed with the context of a particular change by seeing what changed in that iteration (what files were affected).

### Different systems

- [Git][git]
- [CVS][cvs]
- [SVN][svn]
- [Mecurial][mercurial]
- [Bazaar][bazaar]
- [Monotone][monotone]

These are only a few. Be curious.
Feel free to explore different software and find out what pros on cons each one has.
You can also look for comparison information between well known options to see how they match up to one another.

This video offers a quick introduction to Git, why it should be learned and where to begin.

`youtube:https://www.youtube.com/embed/9GKpbI1siow`

---

## Chapter objectives

:white_check_mark: You should now be able to explain what a Version Control System is.\
:white_check_mark: You should have a better idea of why we need Version Control Systems.\
:white_check_mark: You should be able to differentiate between different options available on the market.

---

## References

- [What is Version Control][atlassian] - Atlassian
- [What is Version Control][gitlab] - GitLab
- [What is Version Control and What Are Its Benefits?][simplilearn] - Simplilearn
- [6 Version Control Systems Reviewed][smashing-magazine] - Smashing Magazine - Glen Stansberry
- [Version Control Systems][geeksforgeeks] - Geeks for Geeks

[ftp]: https://www.techtarget.com/searchnetworking/definition/File-Transfer-Protocol-FTP
[atlassian]: https://www.atlassian.com/git/tutorials/what-is-version-control
[gitlab]: https://about.gitlab.com/topics/version-control/
[simplilearn]: https://www.simplilearn.com/tutorials/devops-tutorial/version-control
[smashing-magazine]: https://www.smashingmagazine.com/2008/09/the-top-7-open-source-version-control-systems/
[geeksforgeeks]: https://www.geeksforgeeks.org/version-control-systems/
[git]: https://git-scm.com
[cvs]: https://www.nongnu.org/cvs/
[svn]: https://subversion.apache.org/
[mercurial]: https://www.mercurial-scm.org/
[bazaar]: https://bazaar.canonical.com/
[monotone]: https://www.monotone.ca/
[git-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows
[git-guides]: https://youtu.be/xQujH0ElTUg

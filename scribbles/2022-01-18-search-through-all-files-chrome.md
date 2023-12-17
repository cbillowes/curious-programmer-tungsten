---
title: How to search through all files in your web application in Google Chrome
devTo: https://dev.to/cbillowes/how-to-search-through-all-files-in-your-web-application-in-google-chrome-3p0a
tags:
  - Technical
  - Tip
  - Chrome
  - DevTools
---

> I am running Version 97.0.4692.71 (Official Build) (arm64) to date.

## Why?

Use this feature to find text in any resource served by the web server.
It's handy for searching for things where the location is sometimes uncertain.

## How

There are two ways I know of:

### Approach 1

(the simplest)

1. Go to the Developer Tools
1. In the kebab menu to the far right (right next to the close button - on the left)
1. You can then open the Search tab by clicking on Search.

### Approach 2

(let's you browse through files before hand)

1. Go to the Developer Tools
1. Go to the Sources tab (you can rearrange your tabs by dragging them around)
1. Locate your domain (in my case it's Storybook on localhost:6007)
1. Right-click on the domain name and click on Search in all files

![Google Chrome DevTools](https://res.cloudinary.com/practicaldev/image/fetch/s--XDcon--I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qx0b9qkbyxyoe1gs7rsr.png "Google Chrome DevTools")

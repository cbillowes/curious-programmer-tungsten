---
layout: rca
slug: /rca/unicode-displaying-incorrectly
title: Unicode displaying incorrectly
date: 2016-10-03 10:27:54 +0200
---

## Problem

We made content changes on an MVC view in a .NET application. The Unicode
characters were displaying fine until the change was made which resulted
in gibberish on the screen where the Unicode characters used to be.

## Investigation

1. Using [Git](https://git-scm.com/) we looked at the `diff` to see if we could
   find anything strange that was introduced to break the display. We didn't
   see anything out of the ordinary.

2. We confirm the `<meta charset="utf-8" />` tag was present in the shared
   layout and that the `content-type` of the response was
   `text/html; charset=utf-8`.

3. We replaced the Unicode character with its HTML entity and it worked.
   This is more explicit and doesn't rely on any _behind-the-scenes black magic_
   but unsustainable with the way we receive the content unless it was
   automated.

4. We took to Google and started searching. We came across a StackOverflow
   question where there was mention of the BOM and something struck me.

## Cause of failure

### Hunch

We experimented with a Visual Studio add-on called
[Strip'em](http://www.grebulon.com/software/stripem.php) to automatically
save line-endings in LF as Visual Studio doesn't have a global setting for this.

In retrospect this wasn't a great idea but we were hoping to avoid seeing:

- the [wall of pink](http://www.hanselman.com/blog/YoureJustAnotherCarriageReturnLineFeedInTheWall.aspx)
  in our Git diffs and be able to diff without having to ignore white spaces.

- nasty dialogs every time we open a file that doesn't have consistent
  line-endings especially when working with files that were created on other
  operating systems.

**Tip:** In Visual Studio 2015 you can change the encoding and line ending for
an individual file at `File > Advanced Save Options`.

This add-on had an unexpected "feature" that was not advertised in the dialog.
When it removed the line-endings, the BOM at the start of the file was also
removed.

> There's two problems with it [Strip-em], firstly it kills the utf-8 magic
> bytes which windows likes, and also causes a change after file save so VS
> asks to reload changes, I know that the latter can be avoided but sometimes
> you don't want to reload changes automatically. ~
> [Brett Ryan](http://stackoverflow.com/questions/3994909/stop-visual-studio-from-mixing-line-endings-in-files#8079123)
> commented on StackOverflow

### Experiment

As we couldn't find any reason for the Unicode characters to be displaying
differently now, we believed that it must be the add-on. We needed to test it.

- We disabled the line-ending conversion in the add-on but had to add the BOM
  back.

- We opened the file in [Notepad++](https://notepad-plus-plus.org/download/v7.html)
  (before we knew we could save it in Visual Studio)
  `Encoding > Encode in UTF-8-BOM`, saved the file, viewed it and it displayed
  correctly.

- We changed the encoding back to `UTF-8` without the BOM and saw that it broke.

- This confirmed that the BOM character allowed the hardcoded Unicode characters
  to display correctly on Windows but we had to prove that the add-on was the
  culprit. (We hadn't seen the StackOverflow comment at that time)

- We opened the BOM file in Visual Studio and saved it. It worked.

You can also see the BOM in a Hex editor.

## Solution

Saving the UTF-8 file with the BOM signature on Windows solves the problem.

> Microsoft compilers and interpreters, and many pieces of software on
> Microsoft Windows such as Notepad treat the BOM as a required magic
> number rather than use heuristics. These tools add a BOM when saving text
> as UTF-8, and cannot interpret UTF-8 unless the BOM is present, or the file
> contains only ASCII bytes. ~ [Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)

**Note:** As I was so curious about the [byte order mark](/blog/byte-order-mark/), I
investigated and documented my findings.

---

## References

- [Stop Visual Studio from mixing line endings in files](http://stackoverflow.com/questions/3994909/stop-visual-studio-from-mixing-line-endings-in-files)
- [Notepad++](https://notepad-plus-plus.org/download/v7.html) - Free source
  code editor which supports several programming languages running under the
  Microsoft Windows environment.
- [HxD](https://mh-nexus.de/en/hxd/) - Freeware Hex Editor and Disk Editor.

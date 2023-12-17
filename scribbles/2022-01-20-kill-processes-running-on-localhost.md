---
title: How to kill processes running on localhost (macOS)
devTo: https://dev.to/cbillowes/how-to-kill-processes-running-on-localhost-macos-1h5o
tags:
  - Technical
  - Tip
  - Terminal
  - macOS
---

## Motivation

Sometimes a process, like a web server or running Clojure REPL, closes unexpectedly but the port is never released. I'd need to find that process and kill it so that I can rightfully claim my port back.

## Find the process

```
netstat -vanp tcp | grep "*."
```

It will return something like this (note that the table scrolls to the right):

```
tcp4       0      0  *.3000                 *.* LISTEN      131072 131072  46834      0 0x0100 0x00000106
tcp46      0      0  *.8085                 *.* LISTEN      131072 131072  29254      0 0x0100 0x00000006
tcp46      0      0  *.8321                 *.* LISTEN      131072 131072  29254      0 0x0100 0x00000006
tcp46      0      0  *.8080                 *.* LISTEN      131072 131072  29254      0 0x0100 0x00000006
tcp4       0      0  *.61350                *.* LISTEN      131072 131072  29278      0 0x0100 0x00000006
tcp4       0      0  127.0.0.1.61933        *.* LISTEN      131072 131072   2951      0 0x0100 0x00000106
tcp4       0      0  127.0.0.1.45623        *.* LISTEN      131072 131072   2951      0 0x0100 0x00000106
tcp4       0      0  127.0.0.1.49489        *.* LISTEN      131072 131072   2951      0 0x0100 0x00000106
tcp4       0      0  127.0.0.1.49488        *.* LISTEN      131072 131072   2951      0 0x0100 0x00000106
tcp4       0      0  127.0.0.1.16494        *.* LISTEN      131072 131072   2901      0 0x0000 0x0000020f
tcp4       0      0  127.0.0.1.15393        *.* LISTEN      131072 131072   2901      0 0x0000 0x0000020f
tcp4       0      0  127.0.0.1.15292        *.* LISTEN      131072 131072   2901      0 0x0000 0x0000020f
tcp4       0      0  127.0.0.1.6463         *.* LISTEN      131072 131072    838      0 0x0100 0x00000106
```

## Identify the process

The 3rd column after `LISTEN` is the pid. Taking the first entry (a process running on `:3000`), I can safely grab its pid of `46834` and inspect it.

```
ps aux | grep 46834
```

It will return something like this:

```
clarice          46834   0.0  1.3 441950208 219760 s001  S+    9:06pm   0:25.95 /Users/clarice/.nvm/versions/node/v16.13.0/bin/node /Users/clarice/Workspace/demos/react/node_modules/react-scripts/scripts/start.js
clarice          58003   0.0  0.0 408628368   1632 s010  S+    4:52am   0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn --exclude-dir=.idea --exclude-dir=.tox 46834
```

Based on this output, the first entry gives me the most information. I can see it's a Node.js application and it's coming from `demos/react` app. That's the correct one so I can kill it.

_The 2nd entry is always present on a terminal grep. I believe it to be the coloured output of the terminal._

## Kill the process

Now that I have the right process, I can kill it using `kill 46834`. If the process is stubborn and keen on staying alive, you can force it by using `kill -9 46834`

> (I think these commands are Unix based so it should work on Linux too)

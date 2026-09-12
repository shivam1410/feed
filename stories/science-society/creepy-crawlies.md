---
title: "Creepy crawlies"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/7/creepy-crawlies/"
authors: []
date: "2026-09-07T23:08:58+00:00"
score: 40
guid: "https://simonwillison.net/2026/Sep/7/creepy-crawlies/"
image: ""
generated: "2026-09-12T19:07:27+05:30"
---

Creepy crawlies Konstantin Ryabitsev discusses how bad the "background radiation" of abusive crawlers has become from the perspective of git.kernel.org , the official Git repository for the Linux kernel: TL;DR: we spend more CPU cycles rendering commits for scrapers than we spend on all other kinds of legitimate access, including git clones. At any one time, across 5 geo-distributed nodes, there are 14 CPU cores doing nothing but rendering git commits as html. I worry about this a lot from the perspective of Datasette, which serves a huge number of crawlable web pages. Via Hacker News Tags: crawling , git , linux , datasette , ai-ethics

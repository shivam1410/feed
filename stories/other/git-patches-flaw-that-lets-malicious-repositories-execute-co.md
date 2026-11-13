---
title: "Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones"
category: "Other"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Wed, 11 Nov 2026 00:53:10 +0530"
score: ""
guid: "https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

A flaw in Git can let a malicious repository run an attacker's code on a computer that clones it recursively, together with its submodules. The Git project fixed it this week in Git 2.56.1, with matching fixes for the 2.50 through 2.55 series in 2.50.2, 2.51.3, 2.52.1, 2.53.1, 2.54.1 and 2.55.1. The flaw, tracked as CVE-2026-111760, is an integer truncation in how Git handles its index. An

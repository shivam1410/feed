---
title: "Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root"
category: "Other"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Wed, 04 Nov 2026 22:30:46 +0530"
score: ""
guid: "https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

A flaw in APT, the package manager for Debian and Ubuntu, allows an attacker who can modify package downloads to swap a checked package for their own. The attacker's code then runs as root, according to advisories that Debian, Ubuntu, and APT's developers published on November 4. The attack needs APT to retry failed downloads, which it does by default from Debian 12 and

---
title: "OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux"
category: "Other"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Thu, 05 Nov 2026 22:12:46 +0530"
score: ""
guid: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
image: ""
generated: "2026-11-07T20:33:06+05:30"
---

Attackers can log in to accounts that have no password, such as SSH key-only accounts, on some Alpine Linux servers running the standard openssh-server package. They need network access to the server, an account name, and a password between 257 and 1,024 bytes long. OpenSSH, which rates the flaw critical, released version 10.6p2 today to block it. Alpine has published fixed packages for every

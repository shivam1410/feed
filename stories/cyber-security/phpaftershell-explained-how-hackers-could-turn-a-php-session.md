---
title: "phpAfterShell Explained: How Hackers Could Turn a PHP Session Flaw Into Code Execution"
category: "Cyber Security"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Thu, 19 Nov 2026 22:29:56 +0530"
score: 55
guid: "https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

PHP's default file-based session storage can be made to return objects an attacker chose, by cutting off a session write at the right moment. When combined with a second weakness, such as a suitable gadget chain in the app, those objects can allow the attacker to run code on the server. Today's PHP releases fix the flaw, called phpAfterShell. The flaw is tracked as CVE-2026-126714 and rated

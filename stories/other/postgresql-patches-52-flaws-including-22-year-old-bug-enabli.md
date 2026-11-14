---
title: "PostgreSQL Patches 52 Flaws, Including 22-Year-Old Bug Enabling Authenticated RCE"
category: "Other"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/postgresql-patches-52-flaws-including.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Fri, 13 Nov 2026 22:23:08 +0530"
score: ""
guid: "https://thehackernews.com/2026/11/postgresql-patches-52-flaws-including.html"
image: ""
generated: "2026-11-14T19:35:57+05:30"
---

A type confusion flaw in PostgreSQL lets a database user who can create objects run code on the server. Updates released yesterday fix it, along with 51 other security flaws. Full protection from this flaw also requires rebuilding any C-language extensions installed on the server. The flaw, tracked as CVE-2026-6460, has a CVSS score of 8.8. Any code run this way has the rights of the operating

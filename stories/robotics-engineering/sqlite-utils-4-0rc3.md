---
title: "sqlite-utils 4.0rc3"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything"
authors: []
date: "2026-07-06T05:40:08+00:00"
score: 30
guid: "https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

Release: sqlite-utils 4.0rc3 I hoped to release sqlite-utils 4.0 stable this weekend, but as I worked through the backlog of issues and PRs with a combination of Claude Fable 5 and GPT-5.5 the changelog since rc2 kept getting bigger . The biggest new feature is support for introspecting and creating compound foreign keys - a feature that involves a subtle breaking change to table.foreign_keys and hence needed to land for the 4.0 stable release. sqlite-utils also now follows SQLite's convention for case insensitive column names, which turned out to touch a bunch of different places at once . Tags: projects , sqlite , sqlite-utils , annotated-release-notes , gpt , claude-mythos-fable

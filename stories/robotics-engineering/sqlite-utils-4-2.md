---
title: "sqlite-utils 4.2"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/13/sqlite-utils/"
authors: []
date: "2026-08-13T20:11:29+00:00"
score: 30
guid: "https://simonwillison.net/2026/Aug/13/sqlite-utils/"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

Release: sqlite-utils 4.2 Lots of improvements in this one relating to the table.transform() feature , which adds support for complex alter table operations by creating a fresh table, copying across the data and then dropping and replacing the old one. transform() now preserves a much larger array of edge-case schema definitions, including check constraints, unique constraints and even comments describing the columns. There are also new introspection properties for check constraints, and a whole lot of other smaller changes. Includes contributions from Bunlong Heng , ethanhawkes-gif , Rami Abdelrazzaq , nyxst4ck , and ikatyal2110 . (It later turned out 4.2 had a crashing bug , fixed in 4.2.1 .) Tags: releases , sqlite , sqlite-utils

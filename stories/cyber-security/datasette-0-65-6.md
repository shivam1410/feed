---
title: "datasette 0.65.6"
category: "Cyber Security"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Nov/15/datasette-2/"
authors: []
date: "2026-11-15T23:18:17+00:00"
score: 20
guid: "https://simonwillison.net/2026/Nov/15/datasette-2/"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Release: datasette 0.65.6 I backported a minor security fix from 1.0a43: Fixed a security issue where a database registered using add_database(db, name=..., route=...) with a route that differs from its name could be downloaded from /<route>.db by actors who were denied access to it. [...] Tags: security , datasette

---
title: "simonw/browser-compat-db"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/24/browser-compat-db/#atom-everything"
authors: []
date: "2026-06-24T23:59:03+00:00"
score: 45
guid: "https://simonwillison.net/2026/Jun/24/browser-compat-db/#atom-everything"
image: ""
generated: "2026-06-28T19:19:18+05:30"
---

Simon Willison converted Mozilla's MDN browser-compatibility-data repository into ~66MB SQLite database. Used Claude Code to write sqlite-utils conversion script. Hosted database on GitHub orphan branch with open CORS headers enabling download and Datasette Lite exploration. GitHub Actions workflow automatically builds and deploys updates. Tool makes browser compatibility data queryable and accessible without API constraints or rate limits.

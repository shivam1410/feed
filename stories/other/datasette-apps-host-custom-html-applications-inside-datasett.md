---
title: "Datasette Apps: Host custom HTML applications inside Datasette"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything"
authors: []
date: "2026-06-18T23:58:38+00:00"
score: 25
guid: "https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

Datasette Apps are self-contained HTML+JavaScript applications hosted in a tightly sandboxed iframe within Datasette. Apps execute read-only or configured write SQL queries against datasets while running arbitrary JavaScript and CSS. Security is enforced through iframe sandbox restrictions preventing cookie/localStorage access and injected Content Security Policy headers blocking external requests, preventing data exfiltration. The plugin originated as a Claude Artifacts mechanism but evolved into a broader ecosystem feature. Apps enable sophisticated data interfaces while maintaining security guarantees critical for sensitive datasets.

---
title: "Breaking Claude Code Opus 5 Auto Mode"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
authors: []
date: "2026-08-27T22:50:25+00:00"
score: 68
guid: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

Security researcher Johann Rehberger discovered a vulnerability in Claude Code's auto mode safety system succeeding 80% of the time. The attack downloads and decompresses a zip archive, extracting a malicious struct.py file that executes upon import without detection. Auto mode not only failed to prevent compromise but actively blocked cleanup commands after Claude detected malware. This reveals a critical flaw: the safety classifier permitted harmful process creation while denying termination. Rehberger concludes untrusted agent execution requires sandboxing with restricted network egress and isolated credentials.

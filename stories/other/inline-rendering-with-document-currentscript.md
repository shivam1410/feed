---
title: "Inline rendering with document​.currentScript"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/17/document-currentscript/"
authors: []
date: "2026-10-17T21:11:12+00:00"
score: ""
guid: "https://simonwillison.net/2026/Oct/17/document-currentscript/"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Inline rendering with document​.currentScript Lean Rada describes a neat trick that takes advantage of the document.currentScript property. You can use that to drop in a tiny inline <script> element that replaces itself when the page loads: The year is <script> document.currentScript.replaceWith( new Date().getFullYear())</script> If you define a shortcut function like this: $=(...n)=>document.currentScript.replaceWith(...n) You get a tiny template language: The year is <script>$(new Date().getFullYear())</script> Tags: javascript

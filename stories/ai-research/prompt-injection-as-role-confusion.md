---
title: "Prompt Injection as Role Confusion"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
authors: []
date: "2026-06-22T23:59:53+00:00"
score: 82
guid: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
image: ""
generated: "2026-06-28T19:19:18+05:30"
---

Research by Charles Ye, Jasmine Cui, and Dylan Hadfield-Menell demonstrates models cannot distinguish privileged system instructions (wrapped in role tags like <system>, <think>, <assistant>) from untrusted user input. Models weight text formatting and style over semantic content. When user input mimics model internal thinking format, models like gpt-oss-20b override safety training. Rewriting identical text with different formatting—"destyling"—materially changes model classification. Since identical semantic meaning produces different safety outcomes based on style, models lack true semantic understanding of instruction source.

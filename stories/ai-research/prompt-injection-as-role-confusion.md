---
title: "Prompt Injection as Role Confusion"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
authors: []
date: "2026-06-22T23:59:53+00:00"
score: 75
guid: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

Research by Ye, Cui, and Hadfield-Menell reveals that LLMs cannot reliably distinguish their own internal system text from untrusted user input. Models prioritize text formatting style over actual content meaning. Models like GPT-OSS-20B can be jailbroken by mimicking internal thinking block style, causing policy overrides. "Destyling" rewritten text materially changes how models classify identical semantic content. This represents a fundamental architectural vulnerability where formatting matters more than instruction content to the model.

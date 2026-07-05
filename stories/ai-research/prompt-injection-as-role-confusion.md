---
title: "Prompt Injection as Role Confusion"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
authors: []
date: "2026-06-22T23:59:53+00:00"
score: 70
guid: "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything"
image: ""
generated: "2026-07-05T10:28:16+05:30"
---

A study by Ye, Cui, and Hadfield-Menell shows language models cannot reliably distinguish between their own internal instructions (tagged <system>, <think>) and untrusted user input (<user>). Models prioritize text formatting over structural markers, allowing attackers to bypass safeguards by mimicking internal reasoning style. When harmful requests are prefaced with policy-language matching a model's thinking blocks, models like gpt-oss-20b override safety constraints. Rewriting text in different styles ('destyling') materially altered model classification outcomes. The finding undermines the security assumption that role-tagged text separation provides meaningful protection.

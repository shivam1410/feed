---
title: "Microsoft Copilot Cowork Exfiltrates Files"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything"
authors: []
date: "2026-05-26T15:36:48+00:00"
score: 65
guid: "https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

Microsoft Copilot Cowork Exfiltrates Files The biggest challenge in designing agentic systems continues to be preventing them from enabling attackers to exfiltrate data. In this case Microsoft Copilot Cowork (yes, that's a real product name ) was allowing agents to send emails to the user's own inbox without approval... but those messages were then displayed in a way that could leak data to an attacker via rendered images: Because these messages can contain external images that trigger network requests to external websites, data can be exfiltrated when a user opens a compromised message sent by the agent. Since OneDrive can create pre-authenticated download links, a successful prompt injection could cause those links to be leaked, allowing files to be downloaded by the attacker. Via Hacker News Tags: microsoft , security , ai , prompt-injection , generative-ai , llms , exfiltration-attacks , lethal-trifecta

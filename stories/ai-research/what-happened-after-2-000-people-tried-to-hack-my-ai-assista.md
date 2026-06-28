---
title: "What happened after 2,000 people tried to hack my AI assistant"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything"
authors: []
date: "2026-06-26T18:33:14+00:00"
score: 78
guid: "https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything"
image: ""
generated: "2026-06-28T19:19:18+05:30"
---

A security challenge on hackmyclaw.com tested Opus 4.6 resilience against prompt injection: 2,000 participants attempted 6,000 injection attacks across multiple email attempts to leak a hardcoded secret, spending approximately 500 dollars in tokens and triggering a Google account suspension from email volume. Despite the extensive attack surface, nobody successfully leaked the secret. The underlying model operated under anti-injection rules explicitly forbidding credential revelation or file modification based on email content. The result demonstrates frontier models' resistance to prompt injection attacks, validating security improvements from lab training efforts. However, the challenge's failure to produce breaches provides no guarantee against more sophisticated approaches or deployed production scenarios involving irreversible damage.

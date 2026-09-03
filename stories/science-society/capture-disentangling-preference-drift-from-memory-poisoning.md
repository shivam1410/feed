---
title: "CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02265"
authors: ["S M Asif Hossain, Ruksat Khan Shayoni, Md Kishor Morol"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.02265v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02265v1 Announce Type: new Abstract: Personalized language agents use persistent memory to adapt to users over time, but the same mechanism creates an attack surface. When new information conflicts with stored preferences, an agent must distinguish genuine preference drift from temporary context shifts, ambiguity, or adversarial memory poisoning. We formulate this problem as a continuous-time partially observable decision process over a latent user state and show why rules based only on recency and provenance are insufficient. CAPTURE addresses this ambiguity with a neural differential-equation belief tracker, a multi-timescale memory ledger, uncertainty-triggered clarification, and counterfactual auditing of cited memories. On 480 held-out episodes from 96 users, CAPTURE achieves a 71.5% win rate, compared with 69.3% for an identically supervised baseline and 66.1% for the strongest heuristic baseline. It limits fixed-policy poisoning success to 11.5% while accepting 83.5% of genuine preference updates. Under an adaptive attacker with access to the released weights, attack success rises to 24.7%, exposing a real adaptation-security tradeoff. We further evaluate the frozen system zero-shot on an independently constructed benchmark and replay longitudinal interaction histories from 40 users collected over two to three weeks. These results suggest that modeling preference authenticity explicitly can improve both personalization and robustness in memory-augmented LLM agents.

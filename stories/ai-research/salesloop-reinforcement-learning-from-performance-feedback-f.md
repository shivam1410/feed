---
title: "SalesLoop: Reinforcement Learning from Performance Feedback for Sales Lead Ranking"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20655"
authors: ["Chenyu Zhang"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.20655v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20655v1 Announce Type: new Abstract: Lead ranking in Customer Relationship Management (CRM) systems faces a persistent challenge: models achieving high offline accuracy often underperform in production. We identify three fundamental gaps responsible for this disconnect: offline-online metric mismatch, pointwise-listwise objective misalignment, and temporal distribution drift. To address these gaps, we propose SalesLoop, a reinforcement learning framework that establishes a closed feedback loop between model predictions and real-world business outcomes. Our approach introduces (1) a performance-aware reward that encodes conversion outcomes weighted by ranking position and conversion velocity, and (2) Discriminative GRPO, a listwise optimization objective that adapts Group Relative Policy Optimization to discriminative ranking models. SalesLoop improves NDCG@K by +7.9\% and P@K by +15.8\% over the strongest static baseline. A 160-day production A/B test at a New Energy Vehicle manufacturer, spanning 16.5M leads and 280 sales specialists across two provincial markets, validates statistically significant cumulative lift of +4.7\% ($p=0.047$) and +8.7\% ($p=0.002$). In production, the ranking backbone achieves Top-10\% recall of 44.1\% and surfaces high-intent leads at $2.3\times$ the conversion rate of specialist baselines.

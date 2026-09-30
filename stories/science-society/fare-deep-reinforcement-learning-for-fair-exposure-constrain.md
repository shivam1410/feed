---
title: "FARE: Deep Reinforcement Learning For Fair Exposure Constrained Uncertainty Aware Financial Content Personalization"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31890"
authors: ["Arundeep Chinta, Lucas Vinh Tran, Jay Katukuri"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.31890v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Content personalization systems in financial services must ensure fair exposure across diverse offerings-a requirement driven by contractual obligations and the need to prevent "rich-get-richer" dynamics where content with high click-through rate (CTR) dominates while other relevant products receive minimal visibility. Share of Voice (SOV) constraints, which guarantee each content category a target fraction of top-position exposure, address this by promoting product diversity and balanced user discovery. While re-ranking layers atop CTR models are common in practice, we propose two key novelties: (1) framing SOV-constrained ranking as a deep reinforcement learning problem analogous to constrained trade execution in algorithmic finance, and (2) explicitly incorporating CTR prediction uncertainty into the agent's state space and policy design-enabling larger ranking adjustments for high-uncertainty predictions where deviation from CTR-optimal ordering is less costly. We introduce FARE (Fair Ranking Executor), a modular uncertainty-aware execution layer that translates any black-box CTR model's predictions into SOV-fair rankings without retraining the underlying model. Our uncertainty-weighted proportional control policy (FARE-PC) and learned neural policies (FARE-ES, FARE-PPO) demonstrate that uncertainty-aware approaches can substantially reduce SOV deviation from fairness targets while minimizing engagement loss, with gradient-free evolution strategies outperforming policy gradient methods on synthetic data and the ordering reversing on KuaiRand-Pure.

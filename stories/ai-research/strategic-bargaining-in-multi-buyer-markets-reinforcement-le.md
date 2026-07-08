---
title: "Strategic Bargaining in Multi-Buyer Markets: Reinforcement Learning from Verifiable Rewards for LLM Negotiations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05863"
authors: ["Shuze Daniel Liu, Claire Chen, Jiabao Sean Xiao, Xin Chen, David Simchi-Levi"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.05863v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05863v1 Announce Type: new Abstract: Negotiation is a fundamental strategic interaction in management science, characterized by agents attempting to reach agreements while protecting private information, such as reservation costs and hidden valuations. A prevalent yet complex scenario involves a single seller negotiating concurrently with multiple buyers, each possessing heterogeneous, private budgets. In such settings, constrained by a limited number of communication turns, the seller must balance exploring the broader market to discover the highest valuation with concentrating sufficient turns on a single target buyer to secure the best possible outcome. Our analysis reveals a significant gap in standard Large Language Models (LLMs): while these models are linguistically proficient, they fail to act as effective economic decision-makers. Specifically, they exhibit a failure to explore the buyer pool, often fixating on the current highest bid rather than strategically investigating the market to discover latent high valuations. In this paper, we propose a specialized training recipe using Reinforcement Learning from Verifiable Rewards (RLVR). By anchoring the reward function to objective economic outcomes, the strategic balance between market discovery and surplus extraction emerges natively through the learning process. Our results demonstrate that the trained seller undergoes a multi-stage strategic evolution, learning to leverage price anchoring and strategic probing to identify more profitable counterparties. The agent extracts a substantially higher surplus than frontier models by both improving its persuasive bargaining skills and consistently closing deals with high-value buyers. Finally, we show that our seller strategies generalize robustly to unseen buyer negotiation styles and budget distributions.

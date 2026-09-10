---
title: "BRACE: Anchored Bellman-Residual Correction for Stale Critics in Asynchronous RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09783"
authors: ["Guanqun Zhao, Zijun Xie, Binbin Zheng, Jiafeng Lu, Enlei Gong, Zeyu Chen"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09783v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09783v1 Announce Type: new Abstract: Asynchronous reinforcement learning has become the standard way to scale training for language models, but the resulting policy lag biases the critic toward the stale behavior policy. Existing work on asynchronous LLM training corrects the actor and leaves this bias unaddressed, while the off-policy value correction of classical RL does not carry over to long-horizon agentic tasks, since a short correction horizon leaves the regression target free of the reward and a long one lets the product of importance ratios drift exponentially with the trajectory length. We propose BRACE, an anchored Bellman-residual correction for stale value models. BRACE bounds the correction horizon to a prefix of policy tokens and anchors a constant-weight Monte-Carlo tail beyond it, which separates policy correction from reward propagation. BRACE improves mean@1 on BrowseComp-Plus by $2.4\%$ over the strongest baseline, runs $2.46\times$ faster per step than synchronous training, and remains stable $50$ updates off-policy.

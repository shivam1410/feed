---
title: "PAIR: Pairwise-Aware Inclusion Reweighting for Adaptive Rollout Allocation in RLVR"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11368"
authors: ["Pixel Nomand, Elena Voss, Marcus Hale, Sofia Reyes"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11368v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11368v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) spends most of its compute generating groups of long reasoning trajectories. Recent allocators reduce this cost by assigning budgets to prompts, rollouts, or tokens according to a pointwise notion of difficulty or utility. We identify a statistical mismatch: the unclipped leave-one-out group-relative score gradient is not a sum of independent point contributions, but a second-order U-statistic over pairs of rollouts. Completing one rollout therefore reveals contrast with every other completed rollout, and adaptive endpoint selection changes which pair terms are observable. We introduce PAIR (Pairwise-Aware Inclusion Reweighting), which treats short rollout prefixes as vertices and pair-gradient terms as edges of a contrast graph. A prefix-only predictor estimates correctness and remaining token cost; a convex design chooses positive continuation probabilities under an expected suffix-token budget; and each edge induced by completed vertices is inverse-weighted by its logged joint inclusion probability. Under conditionally independent on-policy rollouts and an unclipped, unstandardized objective, the resulting estimator is design-unbiased for the complete candidate-pair gradient. Across compute-matched RLVR runs on Qwen3-1.7B/4B, PAIR improves average accuracy by +1.2 and +1.4 over the strongest pointwise allocator while using 51% and 52% fewer generated tokens than full-group GRPO. A frozen-population estimator audit confirms that unweighted adaptive selection is biased, whereas pair-inclusion correction recovers the complete-pair target at matched suffix cost.

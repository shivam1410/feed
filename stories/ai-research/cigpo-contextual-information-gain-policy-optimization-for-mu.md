---
title: "CIGPO: Contextual Information-Gain Policy Optimization for Multi-Turn Evidence-Reading LLM Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16244"
authors: ["Hao Dou"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16244v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16244v1 Announce Type: new Abstract: Training multi-turn evidence-reading agents with outcome-only reinforcement learning is unstable because intermediate turns receive little direct credit. In HotpotQA experiments with Qwen2.5-3B-Instruct, GRPO initially improves (standard F1 0.430) but subsequently collapses to 100% format-violating outputs. Training-log diagnosis reveals a zero-advantage lock-in mechanism: all sampled trajectories receive the minimum format penalty (-2.0), group-relative advantages vanish, and the policy-gradient loss becomes zero--an optimization deadlock. We propose a variance-injection strategy: by assigning per-turn rewards to intermediate evidence-reading turns, we prevent the group reward distribution from collapsing to a single value--preserving the variation that GRPO's group-relative advantage requires. Contextual Information-Gain Policy Optimization (CIGPO) implements this strategy using the marginal increase in the frozen reference model's log-likelihood of the ground-truth answer as the per-turn signal. With separate normalization of IG and F1 rewards and an IG-weight curriculum, CIGPO reaches a standard F1 of 0.518 on HotpotQA at the 3B scale (from 0.252 base; +105%), compared with 0.430 for the best GRPO checkpoint and 0.000 for the final GRPO checkpoint. CIGPO maintains meaningful reward variance and avoids zero-advantage lock-in throughout training. These results identify reward-variance collapse as a concrete failure mode of outcome-only GRPO and show that turn-level IG rewards can prevent it in this HotpotQA setting.

---
title: "SLPO: Scaling Latent Reasoning via a Surrogate Policy"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.19691"
authors: ["Runyang You", "Zhiyuan Liu", "Yongqi Li", "Wenjie Li"]
date: "2026-07-21T20:00:00.000Z"
score: 76
guid: "2607.19691"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.19691.png"
generated: "2026-07-25T21:42:33+05:30"
---

Surrogate Latent Policy Optimization (SLPO) enables outcome-reward reinforcement learning for latent reasoning, where intermediate computation remains continuous rather than decoded. Prior latent reasoners stayed imitation-bound while explicit Chain-of-Thought advanced via RL. SLPO introduces empirical surrogate policy density over latent transitions for trajectory-level credit assignment and correctness-supervised stopping heads for variable-horizon policies. This overcomes the absence of per-step likelihoods in latent trajectories. Results show improved Pass@k under parallel sampling with adaptive allocation of longer computation to harder instances. The method preserves latent efficiency while unlocking test-time scaling at substantially lower token costs than explicit CoT.

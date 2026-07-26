---
title: "SLPO: Scaling Latent Reasoning via a Surrogate Policy"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.19691"
authors: ["Runyang You", "Zhiyuan Liu", "Yongqi Li", "Wenjie Li"]
date: "2026-07-21T20:00:00.000Z"
score: 85
guid: "2607.19691"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.19691.png"
generated: "2026-07-26T22:35:53+05:30"
---

Surrogate Latent Policy Optimization (SLPO) brings outcome-reward reinforcement learning to latent reasoners, which previously remained imitation-bound while explicit Chain-of-Thought moved past imitation via outcome-reward RL. SLPO uses an empirical surrogate policy density over latent transitions for trajectory-level credit assignment and a correctness-supervised stopping head that outcome-reward optimization refines into variable-horizon policy. Across continuous and soft thinking settings, SLPO improves Pass@k under parallel sampling and intelligently allocates longer latent computation to harder instances with higher deterministic accuracy, enabling test-time scaling without decoding every token.

---
title: "Multi-Turn On-Policy Distillation with Prefix Replay"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.04763"
authors: ["Baohao Liao", "Hanze Dong", "Christof Monz", "Xinxing Xu", "Li Dong", "Furu Wei"]
date: "2026-07-15T20:00:00.000Z"
score: 80
guid: "2607.04763"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.04763.png"
generated: "2026-07-26T22:35:53+05:30"
---

Replayed-Prefix On-Policy Distillation (ReOPD) improves multi-turn agent training by reusing pre-collected teacher trajectories rather than requiring expensive fresh environment interactions. The method addresses "prefix trap," where increasing student-policy alignment reduces teacher reliability. ReOPD implements a decaying sampling schedule emphasizing early, lower-shift prefixes. Across math reasoning with Python and search environments, ReOPD preserves or improves on-policy distillation accuracy, uses zero tool calls during training, and runs at least 4x faster per rollout than standard on-policy distillation.

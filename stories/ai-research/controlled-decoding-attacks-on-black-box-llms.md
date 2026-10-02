---
title: "Controlled Decoding Attacks on Black-Box LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36956"
authors: ["Jesson Wang", "Shawn Li", "Wei Yang", "Franck Dernoncourt", "Ryan A. Rossi", "Charith Peris", "Yue Zhao"]
date: "2026-09-28T20:00:00.000Z"
score: 72
guid: "2609.36956"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36956.png"
generated: "2026-10-02T21:40:09+05:30"
---

Manipulating next-token probabilities during generation can bypass the safety alignment of large language models. Existing approaches, however, rely on access to model weights or numerical token probabilities and therefore do not apply to interfaces that return only sampled text. Reconstructing probabilities from sampled outputs offers a possible alternative, but finite sampling produces sparse and noisy estimates, while repeating this process at every generation step incurs substantial query costs. Our empirical observations suggest that large distributional changes along successful jailbreak trajectories are concentrated at a small subset of positions, motivating selective control. We introduce , a framework for jailbreaking through text-only continuation interfaces that permit repeated sampling and assistant-prefix continuation. Sample-Based Distribution Reconstruction combines sampled outputs with a prior over unobserved actions to obtain a usable control signal. Risk-Gated Residual Control uses the evolving response prefix to decide when to reconstruct and modify the distribution, concentrating sampling costs at selected positions. Speculative Multi-Token Execution further amortizes target calls by verifying and accepting draft prefixes that require no intervention. Across four target endpoints and three benchmarks,  achieves the highest mean score most comparisons against baselines.

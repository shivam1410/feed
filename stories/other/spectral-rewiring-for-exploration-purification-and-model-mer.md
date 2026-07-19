---
title: "Spectral Rewiring for Exploration, Purification, and Model Merging"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.03065"
authors: ["Zhilong Zhang", "Hongli Yu", "Huan-ang Gao", "Hanlin Wu", "Yuxuan Song", "Wei-Ying Ma", "Ya-Qin Zhang", "Hao Zhou"]
date: "2026-07-02T20:00:00.000Z"
score: ""
guid: "2607.03065"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.03065.png"
generated: "2026-07-19T19:52:10+05:30"
---

Reinforcement learning has become a standard post-training recipe for large language models, but dense full-parameter updates create two deployment-relevant bottlenecks: suppressed reasoning performance, often reflected by premature saturation of test-time scaling, and interference when consolidating multiple capabilities through multi-domain training or model merging. We show that the reasoning-effective component of these updates is largely concentrated in the base model's spectral space, motivating Subspace-Aligned Rewiring (SAR), a post-hoc editing method that retains this spectral core while removing orthogonal components. SAR therefore preserves reasoning gains and filters residual update directions that suppress performance or amplify cross-domain interference. Across several model families and scales, SAR extracts compact reasoning cores using as little as approximately 0.58% of total parameters: it preserves over 99% of post-training performance and improves high-k exploration in mathematical reasoning, and generalizes to agentic coding by improving six of seven open benchmarks on an in-house model. SAR also purifies mixed-domain training updates by releasing suppressed coding capability while maintaining math reasoning and instruction following. It further enables model merging across experts, yielding cross-domain generalization that surpasses previous merging baselines and even the best single-domain experts. Overall, SAR shows that extracting reasoning-effective updates from parameter geometry can serve as a training-free mechanism to improve reasoning and multi-domain performance.

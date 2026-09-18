---
title: "When2Think: Learning Difficulty-Aware Length Control for Efficient Hybrid Reasoning Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19671"
authors: ["Jaejun Shim", "HyunJin Kim", "Young Jin Kim", "JinYeong Bak"]
date: "2026-09-16T20:00:00.000Z"
score: ""
guid: "2609.19671"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19671.png"
generated: "2026-09-18T20:52:59+05:30"
---

Large Reasoning Models (LRMs) achieve strong performance on complex tasks but exhibit systematic inefficiency: they often overthink easy problems and underthink hard ones. Existing approaches based on uniform length penalties or rigid routing incur an efficiency tax, trading reduced computation on easy instances for accuracy loss on hard instances. We formulate efficient reasoning as an instance-adaptive computation allocation problem and propose When2Think, a post-training framework for hybrid reasoning that dynamically allocates computation based on problem difficulty. Our method introduces Instance-level Difficulty-Aware Control (IDAC), a reward-shaping mechanism that leverages pre-computed reference statistics (accuracy and token usage) to regulate reasoning depth. Combined with verifier-based rewards and batch-wise standardized advantages, IDAC enables stable critic-free optimization without learned reward models or online reference-model queries. When2Think encourages direct answering on easy instances while preserving extended reasoning on hard instances, thereby learning when to use System 1 (NoThink) versus System 2 (Think). Experiments on mathematical benchmarks demonstrate improved accuracy-efficiency trade-offs: on AIME24, Pass@3 increases by 10.0% while token usage is reduced by 27.9% relative to the base model, and on AIME25, When2Think achieves 40.0% Pass@3, outperforming compression and routing-only baselines.

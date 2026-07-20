---
title: "Beyond Entropy: Correctness-Aware Advantage Shaping via Contrastive Policy Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14614"
authors: ["Weiwen Xu", "Jia Liu", "Hou Pong Chan", "Long Li", "Deng Cai", "Min Chen", "Hao Zhang"]
date: "2026-07-15T20:00:00.000Z"
score: 70
guid: "2607.14614"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14614.png"
generated: "2026-07-20T19:05:49+05:30"
---

Reinforcement learning with verifiable rewards (RLVR) commonly uses entropy for advantage shaping. However, entropy cannot distinguish useful uncertainty from detrimental confusion, limiting its effectiveness as a correctness signal. We propose Contrastive Policy Optimization (CPO), which uses token-level contrastive disagreement between reference-guided and vanilla generation distributions for correctness-aware advantage shaping. Both theoretical and empirical results show that this disagreement reliably indicates token-level correctness. We further show that On-policy Distillation is a special case of CPO, where the posterior distribution is instantiated by an external teacher model. CPO also resolves the zero-advantage problem. Experiments on in-domain and out-of-domain benchmarks demonstrate that CPO substantially outperforms entropy-based RLVR methods while maintaining strong generalization. Further analysis shows that correct and incorrect responses naturally support exploration and exploitation respectively, and balancing both leads to the best performance.

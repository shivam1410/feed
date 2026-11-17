---
title: "Reflection Anchors for Propagation-Aware Visual Retention in Long-Chain Multimodal Reasoning"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2605.09614"
authors: ["Xuan Gong", "Hanbo Huang", "Hao Zheng", "Yiran Zhang", "Wenbin Dai", "Weishu Zhao", "Shiyu Liang"]
date: "2026-11-14T19:00:00.000Z"
score: ""
guid: "2605.09614"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2605.09614.png"
generated: "2026-11-17T19:45:07+05:30"
---

Long chain-of-thought (CoT) reasoning improves large vision--language models, but visual information often fades during generation, limiting long-horizon multimodal reasoning. Existing methods either re-inject vision at inference or train policies for stronger grounding, but where to intervene relies on perception heuristics rather than principled gain analysis, and how local visual influence propagates remains implicit. We study this problem from an information-theoretic standpoint and derive a lower bound on the downstream visual gain of a one-step intervention, which suggests two factors: local branching room (token entropy) and downstream visual propagation potential (suffix divergence from a vision-marginalized reference). Guided by this analysis, we propose reflection-anchor policy optimization (RAPO), a GRPO-based policy optimization method that selects high-entropy reflection anchors and optimizes a chain-masked finite-window KL surrogate for downstream visual dependence. Experiments on reasoning-intensive and general-domain benchmarks show that RAPO delivers substantial gains over strong baselines across multiple LVLM backbones. Mechanism analyses further indicate that reflection anchors are enriched for visually sensitive decision points and that RAPO increases contrastive visual-dependence signals along generated trajectories.

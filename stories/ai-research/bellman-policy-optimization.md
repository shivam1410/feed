---
title: "Bellman Policy Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15987"
authors: ["Zhuoqing Song", "Haotian Xu", "Xikun Zhang", "Lidong Bing"]
date: "2026-09-13T20:00:00.000Z"
score: 70
guid: "2609.15987"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15987.png"
generated: "2026-09-24T19:24:37+05:30"
---

Reinforcement learning with verifiable rewards (RLVR) improves the reasoning capabilities of large language models (LLMs). We introduce Bellman Policy Optimization (BPO), a critic-free method derived from Policy Mirror Descent (PMD). For autoregressive generation with terminal rewards, BPO uses the Bellman equations to reformulate PMD as a trajectory-level objective. The reformulation avoids estimating state values at intermediate states. We prove that it has the same unique optimal solution as the original PMD objective. We derive the practical BPO loss by approximating this objective. Its mismatch-correction weight is a smoothed ratio of complementary token probabilities. Experiments on mathematical reasoning benchmarks demonstrate the effectiveness of BPO.

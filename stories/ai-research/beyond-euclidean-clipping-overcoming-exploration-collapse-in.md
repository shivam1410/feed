---
title: "Beyond Euclidean Clipping: Overcoming Exploration Collapse in LLM RL via Riemannian Isometric Policy Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.10169"
authors: ["Zhicheng Cai", "Xinyuan Guo", "Hanlin Wu", "Mingxuan Wang", "Wei-Ying Ma", "Ya-Qin Zhang", "Hao Zhou"]
date: "2026-07-10T20:00:00.000Z"
score: 77
guid: "2607.10169"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.10169.png"
generated: "2026-07-27T19:07:27+05:30"
---

PPO-Clip fails at LLM reinforcement learning due to a fundamental geometric flaw: it uses Euclidean distance to measure policy change on a Riemannian manifold, causing overly conservative updates in low-probability regions. The proposed RIPO (Riemannian Isometric Policy Optimization) corrects this by guaranteeing isometric updates on the manifold. Experiments show up to 60% improvement over GRPO on AIME24 across seven benchmarks, directly addressing exploration collapse in RL.

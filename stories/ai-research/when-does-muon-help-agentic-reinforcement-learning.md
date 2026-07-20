---
title: "When Does Muon Help Agentic Reinforcement Learning?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16169"
authors: ["Kai Ruan", "Jinghao Lin", "Zihe Huang", "Ziqi Zhou", "Qianshan Wei", "Xuan Wang", "Hao Sun"]
date: "2026-07-16T20:00:00.000Z"
score: 60
guid: "2607.16169"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16169.png"
generated: "2026-07-20T19:05:49+05:30"
---

Muon is competitive with AdamW in large-scale pre-training, but its value for reinforcement-learning (RL) post-training remains unclear. We study vanilla Muon in sparse-reward agentic RL through matched single-seed comparisons with AdamW on ALFWorld using Qwen2.5-0.5B-Instruct. Under Group-in-Group Policy Optimization (GiGPO), applying Muon only to hidden weight matrices raises final-window validation success from 0.290 to 0.546 (+88%); high-rate AdamW controls retain no post-update success. The effect depends on the advantage estimator and learning rate. At 3e-5, Muon improves GRPO from 0.161 to 0.268, whereas GraphGPO's late-window gap narrows near saturation. At 1e-5, GraphGPO Muon reaches 0.901, raises normalized validation AUC from 0.399 to 0.556, and reaches 0.5 and 0.75 success 30 and 60 updates earlier, respectively. These exploratory results show that Muon can benefit agentic RL and motivate studying the policy optimizer, advantage estimator, and learning rate jointly. Multi-seed and cross-task validation remain open.

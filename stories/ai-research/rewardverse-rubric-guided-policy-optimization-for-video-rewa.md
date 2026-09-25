---
title: "RewardVerse: Rubric-Guided Policy Optimization for Video Reward Modeling"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.22947"
authors: ["Zhenchen Tang", "Yang Li", "Songlin Yang", "Bo Peng", "Xiaotong Zhao", "Shuai Li", "Haotian Fan", "Alan Zhao", "Jing Dong"]
date: "2026-09-18T20:00:00.000Z"
score: 65
guid: "2609.22947"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.22947.png"
generated: "2026-09-25T22:38:54+05:30"
---

Reinforcement learning (RL) is vital for optimizing video generation models, with a robust reward model (RM) serving as the cornerstone. However, existing video reward models often produce unstable scalar scores because they directly map complex, subjective video quality into a single score without explicit evaluation criteria. This leads to scalar drift, where the scoring scale collapses or shifts across different prompts, making the reward unreliable for RL. Drawing inspiration from professional human annotation engineering, we address this problem with RewardVerse, a rubric-based video reward framework that introduces a dynamic rubric as an intermediate representation between the evaluation query and the scorer. Instead of unconstrained direct scoring, RewardVerse first generates explicit evaluation criteria and then performs rubric-guided scoring, providing a stable semantic anchor that mitigates scalar drift. To efficiently optimize this collaborative pipeline, we propose Rubric-Guided Policy Optimization (RGPO), a two-stage training algorithm. RGPO first warms up the scorer using self-evolving seed rubrics and then jointly optimizes the rubric generator to produce query-adaptive evaluation criteria while continuously aligning the scorer with human ratings. Extensive experiments on the 16-dimensional EvalVerse benchmark and external datasets demonstrate that RewardVerse mitigates scalar drift, achieves state-of-the-art performance on both pointwise and pairwise evaluation, and provides a robust and interpretable reward signal for RL in video generation.

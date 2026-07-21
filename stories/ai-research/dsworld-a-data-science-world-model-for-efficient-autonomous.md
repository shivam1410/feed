---
title: "DSWorld: A Data Science World Model for Efficient Autonomous Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15901"
authors: ["Zherui Yang", "Fan Liu", "Hao Liu"]
date: "2026-07-16T20:00:00.000Z"
score: 68
guid: "2607.15901"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15901.png"
generated: "2026-07-21T19:05:01+05:30"
---

Despite strong capabilities in data understanding and decision-making, autonomous data science agents still heavily rely on trial-and-error workflows that involve expensive computation. This bottleneck motivates models that can anticipate the effects of data science operations before real execution. In this paper, we introduce the concept of Data Science World Model, which model the data science execution environment by predicting environment state transitions conditioned on current workflow states and candidate operations. We further propose DSWorld, a practical framework that combines structured state construction, cost-aware routing, lightweight real execution, and an LLM-based simulator for expensive operations. To support training, we construct an 8K-scale transition trajectory dataset and introduce Reflective World Model Optimization, an error-aware reinforcement learning strategy for improving transition prediction. Experiments show that DSWorld accelerates RL-based agent training by approximately 14times and search-based inference by approximately 3-6times while maintaining competitive performance, and outperforms the strongest LLM baseline by 35.6% on transition prediction tasks. The code is available at https://anonymous.4open.science/r/DSWorld.

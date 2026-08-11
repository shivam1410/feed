---
title: "SFT Conflicts, RL Coexists: A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03573"
authors: ["Kejian Zhu", "Zhuoran Jin", "Shangqing Tu", "Hongbang Yuan", "Yushi Bai", "Kang Liu", "Juanzi Li", "Jun Zhao"]
date: "2026-08-05T20:00:00.000Z"
score: 75
guid: "2608.03573"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03573.png"
generated: "2026-08-11T19:05:57+05:30"
---

Reinforcement learning enables stable multi-task reasoning in large language models through sparse, near-orthogonal parameter updates, solving a fundamental problem with supervised fine-tuning. Standard SFT suffers from task conflicts when training on diverse, potentially contradictory objectives—updates that improve performance on one task degrade performance on another. The research demonstrates that RL's sparse updates remain nearly orthogonal across tasks, minimizing interference. The work proposes Parallel-RL, a decoupled training approach where each task maintains separate RL optimization paths. Testing across multiple reasoning tasks, Parallel-RL maintains strong performance across all tasks simultaneously. This finding has significant implications for building generalist language models that must excel across diverse, sometimes conflicting domains without catastrophic forgetting.

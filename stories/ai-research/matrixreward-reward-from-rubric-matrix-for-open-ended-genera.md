---
title: "MatrixReward: Reward from Rubric Matrix for Open-Ended Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00389"
authors: ["Zihan Shen, Qi Liu, Zixuan Yang, Yiqun Chen, Chenglong Zhao, Xiaozhao Wang, Lei He"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00389v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Open-ended query generation lacks standard answers, thus necessitating an effective reward mechanism. Pointwise scoring rubrics provide limited information about the relative quality of sample answers under the same prompt; merging multiple rubric judgments into a single score may also mask the differences between these answers. We propose MatrixReward, which constructs rewards from a rollout-by-rubric win-rate matrix obtained by comparing every pair of sampled responses under each rubric. The spread of each matrix column captures how strongly that rubric distinguishes the current rollouts, while correlations between columns reveal rubric repetition; together, these statistics yield data-dependent rubric weights. We combine these weights with the prior weights of rubrics. After column normalization and weighting, the observed per-rubric maxima and minima define positive and negative ideal profiles. Each rollout's distances to these two ideals determine its relative-closeness quality reward. Evaluated using Qwen3-8B on four open-ended query-answering benchmarks, MatrixReward achieves an average score of 63.02, outperforming the strongest baseline by approximately 2.0%. These results support the idea that matrices derived from relative comparisons can be used to construct rewards more reasonably for open-ended generative reinforcement learning.

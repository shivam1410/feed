---
title: "TD-Grokking: Learning from Zero-Reward Problems by Training-Time Decomposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09883"
authors: ["Ningyuan Xi, Hao Xu, Hongsheng Xin, Ning Miao"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09883v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09883v1 Announce Type: new Abstract: Large language models (LLMs) have made remarkable progress in reasoning tasks, largely driven by post-training paradigms, especially reinforcement learning with verifiable rewards (RLVR). However, a critical bottleneck persists: RLVR fails on highly challenging zero-reward problems, where all sampled reasoning trajectories yield uniformly failed outcomes, providing no optimization signal to drive model improvement. Prior efforts to address this limitation, such as dense process supervision, partial reward assignment, or prefix-guided exploration, suffer from inherent task constraints or do not fully equip the policy model with the capabilities necessary to solve the original intractable problems. To address this, we propose TD-Grokking, a training-time decomposition framework for zero-reward problems. It recursively decomposes intractable root problems into self-contained, verifiable subproblems, forming hierarchical trees where solvable leaves provide non-zero rewards. Evaluations on mathematical and medical tasks show that TD-Grokking outperforms vanilla GRPO as well as all baseline approaches. Together with detailed analysis, these results confirm that training-time decomposition effectively converts zero-reward examples into usable training signals, enabling consistent performance gains. Our code and datasets are available at https://anonymous.4open.science/r/TD-Grokking-6567/.

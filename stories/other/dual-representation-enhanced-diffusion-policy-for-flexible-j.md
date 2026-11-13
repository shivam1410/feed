---
title: "Dual Representation Enhanced Diffusion Policy for Flexible Job Shop Scheduling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15246"
authors: ["Yunyi Zhao, Wei Zhang, Cheng Xiang, Vadakkepat Prahlad, Zuming Liu"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15246v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

The Flexible Job-Shop Scheduling Problem (FJSP) is a fundamental and challenging optimization problem in smart manufacturing. Although recent deep reinforcement learning (DRL) approaches can learn effective scheduling policies through interaction with the environment, their performance often degrades as problem scale and processing-time uncertainty increase. In this paper, we propose DredRL, a dual representation enhanced diffusion-policy reinforcement learning scheduler. DredRL first constructs enhanced dual representations of operations and machines through self- and cross-attention mechanisms to capture both intra-entity and inter-entity dependencies. A diffusion model is further employed as the policy network, generating scheduling decisions through iterative denoising conditioned on the encoded state to enhance policy expressiveness and robustness. Extensive experiments on synthetic, public, large-scale, and stochastic FJSP benchmarks demonstrate that DredRL outperforms state-of-the-art learning-based schedulers across most configurations. Compared with SOTA learning-based methods, DredRL reduces makespan by up to 5.44% on synthetic instances. It also achieves the best learning-based performance on three of four public benchmarks and outperforms the stochasticity-aware algorithms on stochastic benchmarks. These results demonstrate that combining enhanced dual representations with diffusion-based policies provides an effective and robust approach for large scale scalable FJSP scheduling in complicated environment.

---
title: "OTCache: Optimal Transport for Geometry-Aware Caching in Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31026"
authors: ["Huanlin Gao, Fang Zhao, Qiang Hui, Fuyuan Shi, Shaoan Zhao, Yantao Li, Chao Tan, Ting Lu, Yuren You, Kai Wang, Shiguo Lian"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.31026v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31026v1 Announce Type: new Abstract: We propose OTCache, a training-free framework for accelerating diffusion sampling via caching schedule prediction. Existing graph-based caching methods reduce redundant computation by optimizing shortest-path objectives, but rely on an additive independence assumption, which often breaks down in the low NFE regime. To address this issue, OTCache models caching schedules across inference budgets as a smooth evolution in policy space, inspired by Optimal Transport (OT). The framework consists of three stages: (1) obtaining a high-fidelity \textbf{reference schedule} using a graph-based caching method under a conservative budget; (2) performing a lightweight anchor search under an extreme low-budget setting via Optuna optimization with an end-to-end perceptual objective; and (3) predicting schedules for target budgets via quantile interpolation between the reference and anchor policies using continuous warping representations. Experiments on FLUX.1 [dev], Qwen-Image, and HunyuanVideo show that OTCache achieves 4.5x, 4.7x, and 3.66x acceleration, respectively, while consistently improving generation fidelity over state-of-the-art caching baselines. This work provides a new perspective on accelerating diffusion models through Optimal-Transport-inspired schedule modeling. Code:https://github.com/UnicomAI/OTCache

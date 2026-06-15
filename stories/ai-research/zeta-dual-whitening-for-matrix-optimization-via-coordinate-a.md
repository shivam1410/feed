---
title: "Zeta: Dual Whitening for Matrix Optimization via Coordinate-Adaptive Preconditioning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14187"
authors: ["Kaiwen Chen, Shuhai Zhang, Qiuwu Chen, Zimo Liu, Linxiao Li, Ying Sun, Yuchen Li, Yifan Zhang, Bo Han, Mingkui Tan"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.14187v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14187v1 Announce Type: new Abstract: Large-scale neural network training increasingly relies on matrix-aware optimizers that exploit the structure of weight parameters beyond element-wise adaptation. However, existing matrix-aware methods such as Muon have an underappreciated vulnerability: their core operation, Newton-Schulz iteration, depends critically on input conditioning, yet the raw momentum matrices exhibit severe coordinate-wise scale heterogeneity. In this paper, we first verify this scale heterogeneity through a chi-square uniformity test, showing that intra-matrix scale imbalance is prevalent across Transformer layers and that coordinate whitening effectively corrects it. Motivated by this finding, we propose Zeta, a dual whitening optimizer that applies coordinate whitening and spectral whitening in a strictly ordered pipeline. The ordering is not a tunable choice but follows from a mathematical dependency: coordinate whitening establishes the statistical isotropy that spectral whitening requires to function reliably. We further prove that this dual pipeline strictly reduces orthogonalization error relative to pure spectral methods by improving the condition number of the input. Empirically, Zeta matches or surpasses strong baselines across language modeling (0.6B to 8B parameters), mixture-of-experts architectures, and vision tasks, demonstrating that resolving scale imbalance before orthogonalization leads to faster convergence and better generalization. Code is available at https://gitcode.com/kevin259/MindSpeed.

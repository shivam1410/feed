---
title: "Differentially Private Natural Gradient Descent"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05866"
authors: ["Pan Li, Kai Chen, Shuai Chang, Shengzhi Zhang, Peizhuo Lv, Jinwen He"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.05866v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05866v1 Announce Type: new Abstract: Under a fixed privacy budget, the utility of differentially private (DP) training is ultimately determined by its optimization efficiency. Standard first-order DP optimizers such as DP-SGD rely solely on local gradients and ignore the underlying loss curvature. This geometric blindness causes severe zigzagging in ill-conditioned landscapes, squandering precious privacy budgets on inefficient iterations. Practitioners are thus trapped in a bind: either stop training prematurely or inject massive per-step noise, both of which critically compromise final model utility. Natural Gradient Descent (NGD) resolves this by preconditioning gradients with curvature, aligning updates with the loss geometry and extracting more efficient signal from every noisy step, offering a principled pathway to break the privacy-utility bottleneck. Despite its theoretical appeal, directly integrating NGD with DP introduces fundamental challenges: curvature estimation itself consumes prohibitive privacy budgets, isotropic DP operations conflict with the anisotropic scaling of NGD, and the inverse curvature catastrophically amplify parameter updates in flat directions, causing training instability. We propose DP-NGD, a practical framework that systematically addresses these obstacles by decoupling curvature estimation from private data, reconciling isotropic DP constraints with anisotropic second-order optimization via a whitened-space mechanism, and dynamically clamping the curvature to stabilize training. Extensive experiments on standard benchmarks demonstrate that DP-NGD achieves state-of-the-art accuracy, breaking through the utility ceilings of first-order baselines while delivering up to a $10\times$ convergence speedup under the same privacy budget.

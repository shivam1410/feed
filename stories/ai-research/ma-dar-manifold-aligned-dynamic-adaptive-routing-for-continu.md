---
title: "MA-DAR: Manifold-Aligned Dynamic Adaptive Routing for Continual Temporal Knowledge Graph Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21949"
authors: ["Xiangjun Shi, Chong Mu, Jinchuan Zhang, Lizong Zhang, Yuefeng He, Shang Liu"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.21949v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21949v1 Announce Type: new Abstract: Continual temporal knowledge graph (TKG) reasoning aims to continuously incorporate newly emerging facts while preserving previously acquired knowledge. Replay-based continual learning has achieved promising performance by revisiting historical representations. However, existing methods primarily focus on what to replay, while largely overlooking how replayed representations should be integrated with current ones. Such direct integration often gives rise to two critical forms of representation conflict: \textit{norm domination} and \textit{semantic blurring}, ultimately degrading continual reasoning performance. To address these challenges, we propose MA-DAR (Manifold-Aligned Dynamic Adaptive Routing), a lightweight plug-and-play framework for replay representation fusion. MA-DAR first aligns replayed and current representations onto a shared manifold to alleviate distribution discrepancies. It then employs a dynamic gating mechanism to learn dimension-wise fusion weights, adaptively determining the contribution of replayed and current representations to the fused representation. Furthermore, a polarization regularizer encourages more decisive routing behaviors by discouraging ambiguous gating decisions, resulting in more stable and effective knowledge integration. Extensive experiments on four public continual TKG benchmarks demonstrate that MA-DAR consistently improves the performance of representative TKG encoders while remaining effective under different replay settings. Comprehensive ablation studies and visualization analyses further verify the effectiveness of manifold alignment and dynamic adaptive routing in mitigating representation conflicts and improving continual reasoning.

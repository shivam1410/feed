---
title: "Constant-Curvature Sliced Gromov-Wasserstein for Heterogeneous Cross-Curvature Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07218"
authors: ["Shanglin Li, Wenjing Lu, Muyang Li, Nicu Sebe, Ziheng Chen"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.07218v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Recent advances in representation learning have highlighted the utility of constant-curvature models, such as hyperbolic and spherical spaces, for modeling complex data. Mixed-curvature models further enhance this by integrating multiple constant-curvature components. However, these models typically learn each component space independently because spaces with different curvatures are inherently heterogeneous and lack a unified metric. Consequently, they lack explicit mechanisms to enforce geometric consistency across various spaces. Moreover, the problem of comparing probability distributions across mixed-curvature spaces remains unexplored. To compare distributions on heterogeneous spaces, Gromov-Wasserstein (GW) distances provide a principled framework by aligning their intra-space geometries. Building on this, we propose constant-curvature sliced Gromov-Wasserstein (CCSGW), a novel divergence for aligning distributions supported on heterogeneous constant-curvature spaces. We first introduce the missing geodesic-based one-dimensional projections for spherical spaces, and then extend sliced GW to constant-curvature spaces, enabling efficient and principled comparison across manifolds with different curvatures. This formulation preserves intrinsic geometric relationships while avoiding the high computational cost. We provide theoretical analysis showing that CCSGW controls intrinsic geometric discrepancy across heterogeneous spaces, promoting distribution-level geometric consistency. By integrating CCSGW into existing mixed-curvature learning tasks, including graph anomaly detection, graph node classification, and multimodal learning, we observe consistent performance gains across diverse settings.

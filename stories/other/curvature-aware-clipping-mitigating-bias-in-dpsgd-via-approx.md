---
title: "Curvature-Aware Clipping: Mitigating Bias in DPSGD via Approximate Second-Order Information"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32175"
authors: ["Xincheng Xu, Thilina Ranbaduge, Thierry Rakotoarivelo, David Smith"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32175v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Differentially Private Stochastic Gradient Descent (DPSGD) has become the de facto standard for training deep neural networks with rigorous privacy guarantees. However, the utility of DPSGD is constrained by gradient clipping bias and DP noise. While existing work has tried to address these issues, the geometric misalignment caused by clipping bias remains a critical challenge. To bridge this gap, we propose a novel framework, Curvature-Aware Differentially Private Stochastic Gradient Descent (CA-DPSGD), which leverages approximate second-order information to construct an optimal, curvature-aware clipping space. CA-DPSGD integrates a rectified estimator for the curvature matrix and is coupled with an anisotropic noise mechanism to ensure privacy guarantees. Extensive empirical experiments demonstrate that our approach outperforms state-of-the-art clipping methods.

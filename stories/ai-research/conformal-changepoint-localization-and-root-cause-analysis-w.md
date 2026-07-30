---
title: "Conformal Changepoint Localization and Root Cause Analysis with Corrupted Observations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26481"
authors: ["Seunghun Yu, Meiyi Zhu, Petar Popovski, Joonhyuk Kang, Osvaldo Simeone"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.26481v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26481v1 Announce Type: new Abstract: Detecting when the statistical behavior of an engineered system changes, and identifying which component is responsible, are core problems in the monitoring of telecommunication networks, robotic platforms, security infrastructure, and multi-agent systems. In safety- and mission-critical deployments, such decisions must be accompanied by statistical reliability guarantees rather than by point estimates alone. Conformal changepoint localization (CONCH) and conformal root cause analysis (CROC) meet this need by returning confidence sets that contain the true changepoint, or the true root-cause stream, with a user-specified probability, without parametric assumptions on the data-generating process. In practice, however, observations are frequently corrupted, e.g., by outliers, sensor faults, or adversarial perturbations. While the finite-sample coverage of these procedures is preserved under contamination, the resulting confidence sets can become uninformatively large. Adopting a Huber-type contamination model, this paper proposes weighted CONCH (W-CONCH) and weighted CROC (W-CROC), which downweight observations that are likely to be corrupted with the goal of reducing confidence set size when data may be corrupted. The weighting mechanism, derived from a formal bound on the unknown corrupted data densities, leverages pre-existing second-order classifier-based uncertainty signals, such as those produced by evidential deep learning or Bayesian learning. W-CONCH and W-CROC are further generalized by introducing a meta-learning procedure for the weights that optimizes a differentiable surrogate of the confidence set size. Experiments on image-based and real-world changepoint and root-cause benchmarks show that uncertainty-based weighting substantially reduces confidence set size while maintaining the target coverage.

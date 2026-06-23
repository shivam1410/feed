---
title: "Dead-Direction Signatures: A Cheap Spectral Reading of Singular Complexity"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21158"
authors: ["Tejas Pradeep Shirodkar, P. J. Narayanan"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21158v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21158v1 Announce Type: new Abstract: Singular learning theory characterises the complexity of a deep network through the geometry of its loss singularities. The local learning coefficient (LLC), the standard estimator of Watanabe's real log canonical threshold (RLCT, $\lambda$), reads this geometry as an integrated Bayesian scalar through SGLD, which needs per-task calibration and $10^4$-$10^6$ forward-backward passes per checkpoint. We introduce Dead-Direction Signatures (DDS), a family of cheap closed-form spectral readings of singular structure: each reads a network's activation matrix or per-sample-gradient Fisher-Gram at a chosen layer, replacing the SGLD posterior chain with spectral linear algebra. The readings rest on a dead-direction framework that predicts a structural correlation between activation- and Fisher-side spectra at any singular minimum, and a rank-multiplicative volume identity that single-eigenvalue monitors cannot produce: the active-volume $\log\det^{+}(G)$ slope counts the dead directions, tracking the rank-deficit $r$ across $r \in \{1,2,3,4\}$ (slope ratios $2.0, 3.1, 4.0$ at $r{=}2,3,4$ against the predicted $2,3,4$), where the smallest eigenvalue is rank-blind. On reduced-rank regression with closed-form $\lambda$, calibrated LLC recovers $\lambda$ at $99\%$ mean and the DDS observables rank-track it at the framework-predicted sign; on a non-linear modular-addition transformer DDS separates $d_{\mathrm{model}}$ across eighteen orders of magnitude where calibrated LLC at the protocol budget is rank-flat. Complementary to LLC's integrated posterior reading, DDS gives a directional, layer-local handle on a network's dead directions, read in closed form from its activation and gradient spectra.

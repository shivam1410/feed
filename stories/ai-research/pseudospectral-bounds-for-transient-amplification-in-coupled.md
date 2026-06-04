---
title: "Pseudospectral Bounds for Transient Amplification in Coupled Gradient Descent"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04031"
authors: ["Ahanaf Hasan Ariq"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.04031v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04031v1 Announce Type: new Abstract: Coupled gradient descent--where the update of one parameter block depends on another--underlies bilevel optimization, two-time-scale stochastic approximation, and adversarial training. When the coupled Jacobian is block-triangular, asymptotic stability is governed by the spectral radii of the diagonal blocks, yet transient amplification before convergence can be arbitrarily large due to non-normality. We develop a sharp pseudospectral theory for such block-triangular Jacobians, proving that the Kreiss constant satisfies $K(J) \leq 2/(1-\gamma) + \|C\|/(4(1-\gamma))$ when the diagonal blocks are symmetric with spectral radii at most $\gamma < 1$, and we establish matching minimax lower bounds. We characterize the critical coupling threshold for spectral instability and extend the analysis to nearly self-referential systems via a Neumann-series perturbation framework. As a consequence, we obtain a finite-horizon iteration-complexity bound of $O(K(J)^2 \log(1/\delta))$ for stochastic coupled descent. Framed as scaling laws for non-stationary two-time-scale optimization, our results expose a non-asymptotic, instance-dependent regime of high-dimensional learning dynamics that is invisible to spectral-radius analysis. Experiments on linear-quadratic problems, IQC-based comparisons, and neural-network training confirm the theory.

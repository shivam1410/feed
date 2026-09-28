---
title: "When the Preconditioning Exponent Turns Negative: Learning-Rate Coupling and Cross-Environment Generalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30271"
authors: ["Gongyue Zhang, Honghai Liu"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.30271v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Adaptive optimizers are commonly parameterized by a fixed power of the second-moment estimate. Existing partially adaptive methods study exponents between momentum-like updates and the standard Adam square root, while the interaction between this exponent and the global learning rate is less understood. We perform a controlled cross-environment study using a paired four-environment classification problem with stable sparse features, environment-dependent spurious sparse features, dense features, and high-dimensional noise. Across \NumRuns{} source-training runs covering 21 preconditioning exponents $p\in[-0.5,0.5]$ and five learning rates $\eta\in[10^{-4},10^{-2}]$, we find that the exponent maximizing cross-environment accuracy decreases almost linearly with $\log_{10}\eta$. The fitted slopes range from $-0.270$ to $-0.300$, with $R^2$ between $0.972$ and $0.996$. At $\eta=10^{-2}$, source-validation selection still prefers positive exponents in all four environments, whereas cross-environment and worst-environment criteria prefer negative exponents. Checkpoint decomposition shows that lower $p$ reduces the learned spurious-to-stable and noise-to-stable weight ratios; under reversed correlation, it also reduces the magnitude of the harmful spurious margin. Negative $p$ is therefore not a universally optimal setting. It is a high-step-size allocation regime produced by the joint action of learning rate and preconditioning. The study also exposes a model-selection conflict: source-domain validation systematically selects a different preconditioning regime from the one that maximizes robustness to environmental change. The results are a single-seed, finite-budget mechanism study rather than a broad benchmark claim.

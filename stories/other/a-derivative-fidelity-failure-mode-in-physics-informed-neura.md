---
title: "A derivative-fidelity failure mode in physics-informed neural networks: strengthened benchmark evidence from function-value training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13171"
authors: ["Koji Koyamada"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13171v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13171v1 Announce Type: new Abstract: Physics-informed neural networks (PINNs) use automatic differentiation to impose differential-equation residuals, but good agreement in function values does not necessarily imply accurate derivatives. This paper formulates derivative fidelity as a failure mode of PINNs and tests it with one-dimensional benchmarks. Multilayer perceptrons are trained only on function values for sin(x) and exp(x), while second derivatives obtained by automatic differentiation are evaluated separately. The hypothesis is strengthened by additional tests over training-point density, activation functions, endpoint-dense evaluation, and both L2 and maximum-error diagnostics. The results show that visually accurate function approximation can coexist with substantially larger second-derivative errors, especially near high-curvature boundary regions. The experiment provides a diagnostic protocol for distinguishing value accuracy from physics-residual reliability.

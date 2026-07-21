---
title: "Orthogonal Gradient Constraints Shape Noisy-Label Memorization Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16231"
authors: ["Richard Mai"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16231v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16231v1 Announce Type: new Abstract: Modern neural networks can fit corrupted training labels, making noisy-label learning a useful setting for studying memorization-driven overfitting. Most regularization methods modify the objective, architecture, or data distribution; here we instead study a geometric intervention on the optimizer update itself. We evaluate OrthoGrad, which removes the component of each weight gradient parallel to the current weight vector, in noisy-label image classification. On MNIST with small-data regimes, OrthoGrad improves test accuracy most clearly for CNNs while reducing corrupted-label fitting. Mechanism diagnostics based on weight norms and gradient-weight cosine similarity suggest that the projection has the strongest effect when the raw gradient contains a nontrivial radial component, and becomes weaker in larger-data regimes where gradients are already nearly orthogonal to weights. Additional CIFAR-10 ResNet-18 experiments show that the method can alter memorization trajectories but does not prevent eventual noisy-label memorization. These results support orthogonal update constraints as a useful diagnostic for studying learning dynamics, while showing that OrthoGrad is regime-dependent rather than universally regularizing.

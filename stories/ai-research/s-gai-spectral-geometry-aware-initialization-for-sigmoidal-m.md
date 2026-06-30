---
title: "S-GAI: Spectral Geometry-Aware Initialization for Sigmoidal MLPs -- From Dataset Geometry to Network Weights"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28444"
authors: ["Yi-Shan Chu"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2606.28444v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28444v1 Announce Type: new Abstract: Classical universal approximation theorems establish the expressive power of sigmoidal multilayer perceptrons, but they do not prescribe how initial weights should encode the geometry of a data distribution. We propose S-GAI, a spectral geometry-aware initialization framework for one-hidden-layer sigmoidal MLPs. Starting from the constructive idea that sigmoid units can act as smooth half-space gates, we move from hand-specified planar geometry to class-wise spectral geometry estimated from image data. For each class, SVD provides a mean, principal directions, and spectral scales. An energy threshold selects the retained directions, and each retained direction is represented by two sigmoid gates. These class-specific gates form a shared hidden layer initialized directly from the training set. We also formulate a SVD-based subspace classifier as a non-neural geometric reference, which tests whether the estimated spectral class geometry is already discriminative before being embedded into the MLP. Experiments on MNIST, Fashion-MNIST, and a more challenging CIFAR-10 test show that the S-GAI-initialized MLP starts from a substantially more informative hidden state than Xavier initialization and reaches comparable final accuracy under full training. When the hidden layer is frozen, training only the output layer still gives stronger performance than frozen random gates, providing evidence that S-GAI effectively embeds class-wise spectral geometry into the MLP.

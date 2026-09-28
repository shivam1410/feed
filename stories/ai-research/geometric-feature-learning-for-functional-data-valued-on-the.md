---
title: "Geometric Feature Learning for Functional Data Valued on the Symmetric Positive Definite Manifold"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30487"
authors: ["Samuel V. Singh, Mimi Zhang"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2609.30487v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

We here develop a functional neural network, termed MatFAE, for learning trajectories on the Riemannian manifold of symmetric positive definite (SPD) matrices. MatFAE features intrinsic layers that map manifold-valued functions to Euclidean vector-valued functions, followed by a functional layer that projects them into a finite-dimensional Euclidean space. Unlike most neural networks for discrete-time sequences, MatFAE treats each sequence as a continuous function and can therefore encode trajectory dynamics (e.g., first-order derivatives) in its latent representations. Additionally, the morphology of the functional weights in the functional layer offers interpretability by revealing the regions of the input functional data that contribute most to the latent representations. We justify the design principles and properties of each intrinsic layer and detail how matrix factorization is handled during backpropagation. We apply MatFAE to a range of fMRI datasets, demonstrating its ability to efficiently learn informative representations from high-dimensional SPD trajectories and its practical value for real-world neuroimaging analysis.

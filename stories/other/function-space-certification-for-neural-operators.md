---
title: "Function-Space Certification for Neural Operators"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09038"
authors: ["Ryan Hsiang, Robert Joseph George, Anima Anandkumar"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09038v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Certifying the robustness and physical consistency of scientific machine-learning models ensures that their predictions remain reliable beyond the test set. For neural operators, which learn PDE solution operators by mapping infinite-dimensional function spaces, certification means establishing rigorous, domain-wide guarantees for their output functions. However, standard neural network (NN) verification methods are fundamentally designed for vector-to-vector mappings, and they can only certify neural operators at fixed grid resolutions and provide no guarantees over the entire domain or across another resolution. We close this gap by introducing a function-space certification framework that verifies neural operators across the entire continuous domain. We formulate interval bound propagation (IBP) and CROWN in function space, propagating upper and lower bound functions through each layer using rigorous numerical integration. In addition, we extend bound propagation to higher-order derivatives to certify PDE residuals and solution error bounds. Experiments across several neural operator architectures and scientific problems, including the 572.5-million-parameter spherical Fourier neural operator for global weather forecasting, show that our method produces tight, domain-wide guarantees efficiently, providing a foundation for trustworthy operator learning.

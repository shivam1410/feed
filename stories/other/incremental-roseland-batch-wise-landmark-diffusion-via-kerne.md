---
title: "Incremental Roseland: Batch-wise Landmark Diffusion via Kernelized Sequential Karhunen--Lo\\`eve Update"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23414"
authors: ["Jeanie Schreiber"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23414v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Landmark diffusion (Roseland) computes a diffusion-map-style spectral embedding from the singular value decomposition of a degree-normalized data-to-landmark kernel matrix, at a cost far below that of full diffusion maps. It assumes, however, that all data are available at once. We introduce incremental Roseland (iRoseland), which casts the landmark affinity as a row-growing matrix whose SVD can be updated with a kernelized Sequential Karhunen--Lo\`eve (SKL) scheme. Degre correction is handled by a first order expansion about a reference mean kernel row and so that the landmark-side eigenbasis may be recovered from a single landmark-by-landmark eigendecomposition at each step. The presented method requires only a single pass over the data and runs in bounded-memory with state independent of the number of points processed. A forgetting factor lets the method track drifting distributions, and a sample-size-invariant embedding keeps outputs comparable across time. Experiments show agreement with Roseland to round-off on stationary data, and accuracy that exceeds equal-memory Roseland by an order of magnitude on long streams. On drifting data, we observe large gains from forgetting with a window matched to the drift.

---
title: "Refined Grid Sampling for Efficient Implicit Neural Representations of Large-Scale Scientific Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14205"
authors: ["Guang Zhao, Xihaier Luo, Sean McCue, Luke P. Van Roekel, Seungjun Lee, Yihui Ren, Shinjae Yoo, Wei Xu"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14205v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Implicit neural representations (INRs) offer a powerful framework for modeling high-dimensional physical fields, but their training remains inefficient because evaluating dense coordinate grids is computationally expensive. Existing coordinate-pruning strategies rely on local error functions that can oversample correlated points and incur substantial overhead from full-grid error evaluation. We introduce Refined Grid Sampling (RGS), which combines stratified grid sampling, error-based refinement, and dynamic grid-resolution adjustment. This design reduces spatial redundancy without evaluating errors over the full grid. On high-resolution Navier--Stokes fields, RGS achieves higher reconstruction accuracy within a fixed wall-clock budget and reaches the accuracy of full-grid training up to $6\times$ faster than the evaluated baselines.

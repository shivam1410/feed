---
title: "Structure of the Circular-Dyadic Convolution Error"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15293"
authors: ["Ben Fauber, Alireza Moradzadeh"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2607.15293v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15293v1 Announce Type: new Abstract: Dyadic and circular convolution can both be computed in $O(N\log N)$ time using the Hadamard transform and the FFT-computed discrete Fourier transform (DFT), respectively. The Hadamard transform is preferable for its real-valued sign flips, yet its substitution for the DFT introduces algebraic error. We present three complementary results that characterize this error. First, we identify exact error cancellation: two input and two output positions are universally error-free, and no reordering of the output can eliminate this error. Second, the error operator is nearly full rank, while its null space has only logarithmic dimension. Third, the expected error is governed by a single alignment scalar, with a closed-form expression obtained by averaging over random filters. In general, the substitution error asymptotically doubles the output energy, except for filters in the universal zero-error subspace, which incur no error. Collectively, these results show that the substitution error is structured, predictable, and governed by alignment.

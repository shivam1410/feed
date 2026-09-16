---
title: "High-Performance Tensor Formulation of the Viterbi Algorithm for Hidden Semi-Markov Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16500"
authors: ["Lorenzo Piarulli, Elia Belli, Daniele De Sensi"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16500v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16500v1 Announce Type: new Abstract: Hidden Semi-Markov Models (HSMMs) are fundamental probabilistic models widely adopted across diverse domains, from computational biology to finance and signal processing. The Viterbi algorithm decodes the most likely state sequence given an HSMM and can be applied iteratively for ab initio model learning. However, existing Viterbi implementations remain sequential, and GPU-accelerated solutions are entirely absent, making HSMM decoding impractical for large-scale workloads. We present a tensor-based formulation of the Viterbi algorithm for HSMMs, restructuring the inner loops into tensor operations that naturally map onto SIMD units and massively parallel architectures. Building on this formulation, we provide optimized implementations spanning single- and multi-core CPUs, and, for the first time, GPU. Experimental evaluation demonstrates speedups of up to 14x on a single core, over 200x with multi-core, and over 570x on GPU over the state-of-the-art sequential baseline, establishing a new performance baseline for large-scale HSMM decoding.

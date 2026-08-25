---
title: "Subzero matrix completion for sparse data analysis: large-scale learning of latent low-rank structure"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21607"
authors: ["Lawrence K. Saul, Ningyuan Huang, Dennis Bollweg, Jeff Soules, Diana C. Halikias"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.21607v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21607v1 Announce Type: new Abstract: We investigate when a sparse nonnegative matrix can be recovered from a real-valued matrix of much lower rank by zeroing out its negative elements. The potential for such decompositions suggests a mathematical connection between sparsity and rank; we analyze a number of sparse matrices with this latent low-rank structure and use them to illustrate the geometric origins of this connection. Previous algorithms have discovered these decompositions via an alternating minimization over the factors of a low-rank matrix, but to do so, they have also needed to compute and store another matrix, neither sparse nor low-rank, that is the size of their product. We develop a stochastic, alternating least-squares algorithm that operates on smaller blocks of this dense matrix and scales as a result to much larger problems. We also show how to further accelerate this algorithm with sparse optimizations and customized CUDA kernels. As one example, we use the algorithm to analyze the sparse matrix of synaptic weights for the recently published $\textit{Drosphilia}$ connectome. The nonzero elements of this matrix, with 139,255 rows and columns, record the number of synapses between cells in the nervous system of a female fruit fly. Despite a slowly decaying spectrum of singular values, this matrix exhibits a latent low-rank structure that is predictive of cell categories across multiple levels of specificity.

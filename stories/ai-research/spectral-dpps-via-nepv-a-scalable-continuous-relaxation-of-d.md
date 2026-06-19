---
title: "Spectral DPPs via NEPv: A Scalable Continuous Relaxation of Determinantal MAP for Diversity-Aware Data Selection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19411"
authors: ["Richard Yi Da Xu"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.19411v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19411v1 Announce Type: new Abstract: Selecting a small, diverse, high-quality subset from a massive pool of candidates is a recurring primitive in modern machine learning -- data curation and coreset selection for training and fine-tuning large models, active-learning batch acquisition, prompt and exemplar selection for in-context learning, retrieval diversification, and experimental design. Determinantal Point Processes (\DPP s) give a principled, well-calibrated notion of diversity for this task, but their \emph{MAP} objective -- pick a size-$k$ subset $S$ maximizing $\logdet(L_S)$ -- is NP-hard, and the standard greedy and sampling algorithms scale superlinearly in the ground-set size $n$. This cost is prohibitive precisely in the data-centric regime where diversity matters most, where $n$ ranges over millions to billions of candidate examples, features, or embeddings. We recast \DPP-MAP as a continuous optimization problem over the Stiefel manifold, and show that its first-order optimality conditions form a \emph{Nonlinear Eigenvalue Problem with eigenvector dependency} (\NEPv) of a previously unstudied form. This \NEPv\ admits a self-consistent field (\SCF) iteration with a spectral-gap-based local contraction guarantee, giving a principled iterative solver where the diversity objective drives an eigenvector-dependent operator. The resulting algorithm, \OurMethod, requires only matrix-vector products with the kernel and runs in time $O\!\big((ndk+nk^2)\,t\big)$ for a small number of iterations $t$, scaling near-linearly in $n$ and integrating directly with low-rank and feature-map kernels common in ML. This paper focuses on the relaxation, solver, and scaling analysis; full real-data benchmarking is left to a planned empirical study.

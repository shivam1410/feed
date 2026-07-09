---
title: "Diffusion enabled Optimal Transport distances for graph matching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06646"
authors: ["Iman Seyedi, Francesco Archetti"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06646v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06646v1 Announce Type: new Abstract: This paper introduces Diffusion Semi-Relaxed Fused Gromov-Wasserstein (DsrFGW), a novel method for graph comparison that unifies node features and structural connectivity through optimal transport. While traditional Gromov-Wasserstein and semi-relaxed variants (srGW, srFGW) capture graph structure, they often struggle with sparse, noisy, or partially observed graphs. Inspired by Graph Diffusion Distance, which posits graphs are similar if they enable similar information transmission patterns, DsrFGW incorporates diffusion processes allowing information propagation across nodes, capturing local and global structural patterns while reducing sensitivity to noise or missing edges. An extensive evaluation on 36 synthetic pairwise graph matching tasks (easy, medium, hard) demonstrates consistent superiority over srFGW, achieving accuracy improvements of 0-20 percentage points and dramatic Adjusted Rand Index (ARI) gains: in medium-difficulty scenarios, srFGW often achieves negative ARI (worse than random) while DsrFGW offers better performance in terms of both internal and external clustering quality measures (i.e., Adjusted Rank Index and Accuracy with respect to the true underlying clusters, respectively). Even under severe noise, DsrFGW improves clustering quality in 92% of the synthetic tasks with optimal diffusion scales adapting to problem difficulty, establishing DsrFGW as a robust framework for graph comparison under structural uncertainty.

---
title: "Graph Learning with Spectral Connectivity Priors for Scarce Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27278"
authors: ["Mingxiao Liu (Tsinghua University, China), Bahar Oveisgharan (York University, Canada), Bingyan Zou (Tsinghua University, China), Gene Cheung (York University, Canada), H. Vicky Zhao (Tsinghua University, China), Feifei Gao (Tsinghua University, China)"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.27278v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27278v1 Announce Type: new Abstract: Learning a sparse graph from scarce data is practically important but challenging. Motivated by the desirable combination of local sparsity and strong global connectivity exhibited by expander-like graphs, we propose spectral connectivity-regularized graph learning (SCoGL), a framework that incorporates a family of Laplacian spectral priors to explicitly promote global connectivity. Specifically, SCoGL augments a combinatorial-Laplacian-constrained graphical lasso (GLASSO) objective over a target adjacency matrix $\mathbf{W}$ with a general connectivity prior computed from Laplacian eigenvalues. We derive gradients for several representative connectivity priors and develop a projected gradient descent (PGD) algorithm with Armijo backtracking to efficiently optimize $\mathbf{W}$. Experiments show that the proposed SCoGL variants improve graph recovery and enhance downstream tasks such as graph signal denoising when signal observations are scarce.

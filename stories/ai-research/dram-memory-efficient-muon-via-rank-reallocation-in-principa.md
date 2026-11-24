---
title: "DRAM: Memory-Efficient Muon via Rank Reallocation in Principal-Random Subspaces"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28595"
authors: ["Haomin Bai, Dingzhi Yu, Xuling Zhao, Sifan Yang, Yibo Wang, Lijun Zhang"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28595v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Memory-efficient Muon methods aim to reduce storage overhead while preserving strong performance, yet existing approaches compromise either convergence guarantees or practical efficiency. In this paper, we focus on subspace optimization for Muon, where the choice of subspace determines the gradient information retained for updating. To preserve dominant information while providing the coverage needed for stochastic convergence guarantees, we construct a principal-random subspace that combines leading singular directions of the stochastic gradient with random directions sampled from their orthogonal complement. Under a fixed rank budget, there is a trade-off between principal exploitation and complementary coverage, making rank allocation important for practical optimization. Our key observation is that the preferred balance shifts from principal-heavy early in training to random-heavy later. Motivated by this shift, we propose \dram, a memory-efficient Muon optimizer that reallocates principal and random ranks across stages while maintaining momentum and performing matrix-sign normalization entirely in the subspace. Theoretically, we establish convergence guarantees for general rank-allocation schedules with nondecreasing coverage factors, obtaining rates of $O(T^{-1/4})$ in the stochastic setting and $O(T^{-1/2})$ in the deterministic setting, with fixed allocation as a special case. Using a simple linear reallocation schedule, \dram achieves the best low-memory performance across three pre-training scales and nine fine-tuning settings.

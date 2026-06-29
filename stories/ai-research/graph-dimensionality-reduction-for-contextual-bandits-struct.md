---
title: "Graph Dimensionality Reduction for Contextual Bandits: Structure-Specific Regret Bounds under Approximate Smoothness and Noisy Eigenspaces"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27917"
authors: ["Joyanta Jyoti Mondal, Ibne Farabi Shihab, Anuj Sharma"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2606.27917v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27917v1 Announce Type: new Abstract: Contextual bandits with graph-structured arms arise in recommendation, citation retrieval, and social advertising, where arms connected on a graph tend to share reward signal. Standard dimensionality reduction ignores this structure, inflating exploration cost by a factor of $d/k$. We propose GraphDR-LinUCB, which projects arm features onto the graph's low-frequency spectral subspace and runs linear UCB in the resulting $k$-dimensional space. We prove the first $\wtO(k\sqrt{T})$ regret bound for spectral-projection-based contextual bandits, reducing dimension dependence from $d$ to $k$; a perturbation argument extends this to noisy graphs, with an explicit penalty for reward-smoothness mismatch and graph-estimation error. Our central theoretical finding is that the high-frequency reward component need not incur a worst-case linear-in-$T$ penalty: its actual cost depends on its realized impact along the played path, not on its total energy. A simple spectral comparison between subspaces ($\Gamma_k$) predicts which reducer wins on a given dataset, correctly calling five of six real-dataset outcomes without any fitted threshold. Across a synthetic benchmark and six real datasets (MovieLens, Amazon, LastFM, ogbn-arxiv, MIND), GraphDR-LinUCB reduces cumulative regret by $15\times$ over full-dimensional LinUCB and outperforms competing graph-aware methods on five of six; the single failure is precisely where the graph's spectral subspace is misaligned with the reward.

---
title: "Provably Efficient Representation Learning for Low-Rank CMDPs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07295"
authors: ["Kaixuan Liu, Guojun Xiong, Shengpu Tang, Wanyun Si, Jian Li"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07295v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

We study representation learning in low-rank Constrained Markov Decision Processes (CMDPs), where both value and reward functions are approximated by a set of unknown representation vectors, and the transition dynamics admit a low-rank factorization. The objective is to maximize expected cumulative rewards while complying with constraints on the expected cumulative utility. To achieve this, we propose \texttt{MFRLC} (Model-Free Representation Learning for Low-Rank CMDP), a model-free algorithm that uses a primal-dual scheme to effectively balance reward regret and constraint violations. To the best of our knowledge, \texttt{MFRLC} is the first representation-learning method for low-rank CMDPs that combines the Least-Squares Value Iteration with Upper Confidence Bound (LSVI-UCB) and primal-dual techniques. \texttt{MFRLC} further enhances value function estimation with bonuses for function approximation and learns the mapping from representations to value functions directly, avoiding explicit estimation of the transition kernel. We prove that, with high probability, \texttt{MFRLC} achieves $\widetilde O(K^{3/4})$ reward regret and cumulative constraint violation over $K$ deployment rounds, independent of the size of the state space. To our knowledge, these are the first sublinear regret and violation guarantees for CMDPs with unknown features.

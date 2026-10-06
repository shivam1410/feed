---
title: "Principled Top-$k$ Selection for Language Models with Hybrid Gradients"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04162"
authors: ["Xuchen Gong, Junfei Sun, Tian Li"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.04162v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Selecting the best $k$ items out of $m$ candidates is a critical component of modern large language model systems, such as document selection in Retrieval-Augmented Generation (RAG) and expert routing in Mixture-of-Experts (MoEs). However, training these selection modules remains challenging due to weak gradient signals and suboptimal exploration-exploitation tradeoffs. Furthermore, prior works often rely on heuristics, lacking principled objectives and approaches that explicitly model and solve the top-$k$ selection problem. In this work, we propose a principled objective for training selection modules, whose gradient naturally provides richer training signals in a hybrid form---containing a supervised-gradient component and a policy-gradient component. We show that the selection problem becomes harder as $m$ increases, and our algorithm converges at rate $O(1/\sqrt{T})$, with the optimal upper bound achieved by balancing between bias and variance. Practically, we apply our method to a set of tasks involving top-$k$ selection, including synthetic regression problems, RAG, and MoE systems, showing that our method outperforms the baselines in next-token prediction perplexity and QA accuracy.

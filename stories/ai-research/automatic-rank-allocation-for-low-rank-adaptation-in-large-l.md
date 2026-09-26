---
title: "Automatic Rank Allocation for Low-Rank Adaptation in Large Language Models via lp Regularization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28998"
authors: ["Zebang Xie, Chuanyang Zheng, Yik-Chung Wu, Yihang Gao"]
date: "Sat, 26 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.28998v1"
image: ""
generated: "2026-09-26T20:37:01+05:30"
---

Low-rank adaptation (LoRA) has become a popular parameter-efficient fine-tuning method for large language models. A key challenge in LoRA is how to determine the rank of each adaptation matrix, as rank directly controls its capacity and efficiency. Existing adaptive-rank methods typically allocate ranks according to manually designed importance scores, which are not directly derived from an optimization objective. In this work, we propose $\ell_p$-LoRA, a principled rank-allocation method based on $\ell_p$ regularization with $0<p<1$, which is a classical sparsity-inducing technique in signal processing and statistics. Specifically, we regularize the energy of each rank-one LoRA component, encouraging redundant components to vanish while preserving important ones. We derive the corresponding proximal subproblem and reduce the matrix optimization to a two-dimensional problem, leading to an implicit thresholding criterion for identifying redundant components. Experiments on natural language understanding and question-answering tasks demonstrate that the proposed method achieves competitive performance with existing LoRA baselines.

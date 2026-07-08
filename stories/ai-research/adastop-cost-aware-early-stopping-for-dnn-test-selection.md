---
title: "AdaStop: Cost-Aware Early Stopping for DNN Test Selection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05461"
authors: ["Bonan Shen, Wei-Jung Huang, Xin Liu, Jiazhou Gao, Tao Ning"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.05461v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05461v1 Announce Type: new Abstract: Existing methods for testing deep neural networks (DNNs) primarily prioritize test inputs likely to reveal model faults under a fixed labeling budget. In practice, choosing that budget is difficult: too little testing misses failures, while too much incurs unnecessary labeling costs. This work studies the stopping problem in DNN testing. We formulate testing as a cost--benefit decision process in which labeling an input incurs cost $c$ and discovering a fault yields value $v$. Based on this formulation, we introduce \textit{AdaStop}, a framework that estimates the marginal fault discovery rate during testing and stops labeling when the estimated rate falls below the threshold $\tau = c/v$. Experiments across multiple datasets, architectures, and selection strategies show that $65$--$84\%$ of faults can be discovered using only $9$--$31\%$ of the labeling budget.

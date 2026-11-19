---
title: "Kernel Ridge Attention: Nonlinear Memory with Selective Forgetting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23896"
authors: ["Haowei Chen, Yichen Wang, Congfu Xu"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23896v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Kernel Ridge Attention (KRA) is a recurrent sequence mixer that combines learned nonlinear features with covariance-guided memory updates. It stores associations through recursive ridge regression, using correlations among past keys to determine how new observations modify memory. A content-dependent Ornstein--Uhlenbeck transition controls retention and restores uncertainty for future writes. This construction admits an exact temporal-kernel interpretation and maintains an inference state whose size is independent of context length. Associative block maps and explicit adjoints support parallel training while preserving the recursive update. In controlled language-modeling experiments, KRA improves prediction quality over attention and recurrent baselines, strengthens natural associative recall over the evaluated recurrent models, and achieves practical distributed training throughput. These properties provide a principled foundation for nonlinear, adaptive sequence memory.

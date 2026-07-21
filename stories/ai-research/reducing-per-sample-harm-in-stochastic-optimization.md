---
title: "Reducing Per-Sample Harm in Stochastic Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16261"
authors: ["Apostolos Avranas"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2607.16261v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16261v1 Announce Type: new Abstract: Modern optimizers combine gradients from the current mini-batch with historical optimization state, such as momentum or adaptive moments. While highly effective, aggregating across the batch and incorporating this history can produce parameter updates that increase the loss of individual samples. We term this effect harm and formalize the parameter update as an optimization problem that explicitly minimizes the conflicting impact of both batch averaging and past optimization state on current data. Because the exact formulation is intractable, we introduce a highly efficient proxy. We first reduce the problem's dimensionality to the batch size, and then drastically cut memory and speed bottlenecks by successfully restricting the optimization to the last linear layer. This hinges on the unexpected finding that this layer alone reliably captures the second-order statistics of the per-sample gradients. The resulting surrogate problem integrates readily into standard optimizers like SGD and AdamW, and can be solved using a small number of GPU-friendly iterations. Crucially, the method exhibits favorable scaling properties, as the relative computational overhead shrinks as the model size or input grows. Experiments on image classification benchmarks confirm reduced per-sample interference and improved generalization.

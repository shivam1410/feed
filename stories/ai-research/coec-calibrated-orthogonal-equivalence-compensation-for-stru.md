---
title: "COEC: Calibrated Orthogonal-Equivalence Compensation for Structured Pruning of Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21142"
authors: ["Peiqi Yu, Nam Ling, Wei Wang, Wei Jiang"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.21142v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21142v1 Announce Type: new Abstract: Structured pruning reduces the size and inference cost of large language models (LLMs) by removing weight columns, but the resulting output error can degrade accuracy. Existing training-free compensation methods use an additive bias or a single orthogonal rotation on the output side of the retained weight. These corrections leave its input singular frame unchanged and therefore limit how the retained weight can adapt after column removal. We propose COEC (Calibrated Orthogonal-Equivalence Compensation), a training-free compensation framework that applies alternating left and right orthogonal rotations to the retained weight. The right rotation is optimized on a reduced Stiefel manifold, while singular values are rescaled using generalized cross-validation to select the regularization strength for each layer. COEC further tempers the calibration Gram matrix to reduce the dominance of high-energy activation directions and introduces an alignment penalty that preserves the geometric relation between adjacent attention projections.All components use second-order statistics from a small calibration set and require neither backpropagation through the LLM nor retraining of the model parameters. COEC is independent of the column pruning criterion and can be applied to multiple structured pruning methods. Experiments on the Llama-3, Llama-3.1, and Qwen2.5 model families across multiple structured sparsity levels show that COEC improves perplexity on every model and zero-shot accuracy in most settings over existing compensation methods, with larger gains at higher sparsity. These results show that post-pruning compensation can recover part of the performance lost to column removal.

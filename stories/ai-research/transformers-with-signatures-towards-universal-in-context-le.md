---
title: "Transformers with Signatures: Towards Universal In-Context Learning in Path Space"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31439"
authors: ["Ziheng Cheng, Xin Guo, Ben Hambly"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.31439v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

In-context learning (ICL) enables transformers to adapt to new tasks from demonstrations without updating their parameters. However, theoretical guarantees for transformers remain limited in general, and elusive in particular when target responses depend nonlinearly on the evolution of observed paths. We establish an ICL framework for path space, using path signature features. Building on the universal linear approximation property of signatures, we construct explicitly a causal softmax transformer with two attention heads per layer that emulates in-context Lasso. Under sparse signature approximation and suitable moment and concentration conditions, we establish finite-sample prediction error bounds. Our analysis goes beyond the IID data setting in the existing ICL theory, allowing dependence among demonstrations and the query. Experiments on in-context sparse recovery, nonlinear path regression, execution-cost prediction, and financial payoff inference demonstrate robustness to changes in observation grids and adaptation to unseen market environments. Across these prediction tasks, transformers with signatures match or outperform vanilla transformer baselines with substantially fewer trainable parameters, highlighting the effectiveness and efficiency of signature-based ICL.

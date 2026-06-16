---
title: "Zero-order Parameter-free Optimization for LMO-based Methods: Novel Approach for Efficient Fine-tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14970"
authors: ["Dmitriy Bystrov, Daniil Medyakov, Dmitry Bylinkin, Aleksandr Beznosikov"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.14970v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14970v1 Announce Type: new Abstract: Fine-tuning large language models (LLMs) has become a central application of modern optimization, enabling pretrained models to adapt to diverse downstream tasks and domain-specific data. A major obstacle in large-scale fine-tuning is the memory overhead of backpropagation, which requires storing activations, gradients, and optimizer states. Zeroth-order (ZO) optimization offers a memory-efficient alternative, but its performance is highly sensitive to the stepsize and smoothing parameter, often requiring costly task-specific tuning. Parameter-free (PF) optimization addresses this issue by adapting algorithmic parameters without prior knowledge of problem-dependent constants. Moreover, large-scale fine-tuning can benefit from geometry-aware updates that account for the heterogeneous structure of parameter blocks, which can be modeled through methods that exploit linear minimization oracle (LMO). In this work, we study PF adaptation for LMO-based ZO optimization and introduce $\texttt{AdaNAGED}$, a method that unifies gradient-free training, adaptive tuning, and non-Euclidean update geometry. We establish convergence guarantees and validate the method on large-scale LLM fine-tuning task with $\texttt{OPT}-1.3\mathrm{B}$ model.

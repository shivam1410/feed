---
title: "Stiefel-AdamW: Geometry-Aware AdamW for Linear Factorization Blocks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21039"
authors: ["Emanuele Zangrando, Marco Sutti, Francesco Tudisco"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2609.21039v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21039v1 Announce Type: new Abstract: A pervasive structural pattern in modern deep learning is the linear factorization block: a submodule of the form $W = BA$ in which two parameter matrices are multiplied directly, with no intervening nonlinearity. Such blocks appear in LoRA adapters, low-rank compressed layers, query-key products of self-attention, and share a common pathology: the factorization is non-unique, which can destabilize training and limit usable learning rates. Despite this, factorization blocks are typically optimized with standard Euclidean methods that ignore the underlying geometry. We introduce Stiefel-AdamW, a near drop-in replacement for AdamW for use wherever such blocks appear. By constraining one factor on the Stiefel manifold while leaving the other Euclidean, Stiefel-AdamW relaxes the full $\mathrm{GL}(\mathbb{R}^r)$ gauge symmetry to a compact orthogonal symmetry, ruling out factor blow-up while retaining the coordinate-wise diagonal preconditioning that gives AdamW its practical strength. Moment estimation is performed in the ambient Euclidean space, with geometry entering only through a tangent-space projection and a manifold retraction. The implementation overhead over AdamW is minimal, and we show that the resulting optimizer inherits both the stability benefits of Riemannian methods and standard convergence guarantees. We validate Stiefel-AdamW on LoRA-style fine-tuning of GPT2, ViT, and Mistral 7B and on full pretraining of GPT2 on OpenWebText, showing consistent improvements over strong baselines at essentially no additional cost over AdamW.

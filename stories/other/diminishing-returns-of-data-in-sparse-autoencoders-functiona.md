---
title: "Diminishing Returns of Data in Sparse Autoencoders: Functional Behavior does not Guarantee Feature Reproducibility"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20680"
authors: ["Sambit Ghosh, Madelyn Mathai, R. Venkatesh Babu, Chirag Agarwal"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20680v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Sparse autoencoders (SAEs) are typically trained on hundreds of millions to billions of activation tokens, yet little work has tested whether this scale is necessary. We study how much activation data SAEs need by training four SAE architectures on three language models with budgets ranging from 5M tokens to a 500M-token reference. We measure two notions of convergence: functional behavior on standard evaluations and one-to-one reproducibility of learned features. Functional data requirements are strongly metric-dependent: reconstruction often approaches the full-data reference at substantially smaller budgets, whereas feature reproducibility continues to improve with data. For Gemma-2-2B BatchTopK, the fraction of strictly matched features rises from 2\% at 5M tokens to 29\% at 50M. Data selection also matters: random sampling better preserves the original activation distribution and generally favors reconstruction, whereas diversity-based sampling frequently improves AutoInterp. A theoretical analysis separates statistical consistency of subsampled training from the stronger identifiability and optimization conditions required for one-to-one feature recovery. Our results show that SAE training can often be made far more data-efficient when budgets are matched to the goal, and feature-level claims are backed by explicit reproducibility checks, paving the way toward cheaper and more reliable SAE research.

---
title: "The Contagion Tensor: A Framework for Measuring Output-Distribution Coupling in Multi-Agent LLM Systems -- and Auditing the Claims It Enables"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28839"
authors: ["Zewen Liu"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.28839v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28839v1 Announce Type: new Abstract: We introduce the Contagion Tensor, a measurement framework for quantifying how large language model (LLM) output distributions couple across modalities, agents, and time steps. From the tensor we derive the Coupling Amplification Factor (CAF), a family of ratio-based metrics sharing the form CAF = E[T_condition] / E[T_baseline], providing unitless, baseline-referenced measurement with bootstrap confidence intervals. We instantiate CAF in four variants and evaluate the strongest in a complete 2x2x2 block-orthogonal simulation design with modality-specific ablation. The ablation reveals that an apparent image-condition super-linear effect (CAF = 1.40) collapses to sub-linear (CAF = 0.87) when the image perturbation module is disabled, a shift of -0.53 with zero effect on text conditions. We supplement with real-API experiments across two model families: DeepSeek-Chat (R=30) and GPT-4o-mini (R=15, real vision). Under uniform personas, text-only communication produces CAF approx 1.0 in both models. Diverse personas drive convergence (CAF = 0.88). A within-model comparison on GPT-4o-mini reveals: C3 (text) CAF = 1.02 vs. C5 (real vision, R=30) CAF = 1.72 [1.700, 1.733], delta = +0.70, validating the simulation's super-linear image-condition prediction. Of 11 conditions, 5 have been tested on real APIs and 6 remain unverified. Our contribution is two-layered: (1) a measurement instrument that makes output-distribution coupling quantitatively falsifiable; and (2) a transferable ablation protocol that any modular multi-agent simulator can adopt to distinguish genuine coupling from design artifacts.

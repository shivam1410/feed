---
title: "Diagnosing and Mitigating Perception-Decision Misalignment in Omni-LLMs via Modality Subspace Activation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14655"
authors: ["Hongbo Jiang, Jie Li, Yunhang Shen, Tianyu Xie, Pingyang Dai"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.14655v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14655v1 Announce Type: new Abstract: Omni-Large Language Models (Omni-LLMs) power complex multi-modal reasoning in applications like World Action Models and autonomous agents. However, their strong performance often masks a profound Perceptual-Decision Misalignment (PDM), where decisions remain unfaithful to multi-modal perceptions. To diagnose this, we formalize Causal Modality Sensitivity (CMS), operationalized via a dual-lens framework: Answer Retention Rate (ARR) at the macro behavioral level, and Logit Angular Discrepancy (LAD) to track microscopic distribution shifts. We also curate CausalMSBench, a diagnostic dataset isolating language priors. Benchmarking reveals that popular Omni-LLMs exhibit critically low CMS, showing negligible distribution shifts even when key modalities are removed. To rectify this, we propose Modality Subspace Activation (MSA), a training-free inference-time framework that uses Singular Value Decomposition (SVD) to estimate modal activation strengths. MSA dynamically balances modal projections in the last hidden state, effectively restoring CMS across benchmarks.

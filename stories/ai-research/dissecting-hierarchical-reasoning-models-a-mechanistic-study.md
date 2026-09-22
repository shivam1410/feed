---
title: "Dissecting Hierarchical Reasoning Models: A Mechanistic Study"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22197"
authors: ["Leo Raphael Rodrigues, Jian Kang"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22197v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22197v1 Announce Type: new Abstract: We study Hierarchical Reasoning Model (HRM), a representative hierarchical Transformer-based latent reasoning model with many variants, on Sudoku, Maze, and ARC-AGI-2. We mechanistically understand how HRM reasons and what information it encodes. Our analyses compare HRM against Transformer baselines with and without recurrent modules, apply causal interventions on recurrent states, and utilize linear probes against random-direction ablations, as well as sparse autoencoders with feature ablations. Our results reveal several key findings: recurrent models outperform one-pass baselines, while single-state recurrent Transformers are comparable to HRM. State interventions further show that the causal contributions of the high- and low-level states vary across task-specific checkpoints and inference stages. Selected task variables are linearly decodable from the recurrent states in HRM, yet ablating probe directions produce effects comparable to random controls. SAE ablations yield larger behavioral changes than probe-direction ablations. However, top-ranked SAE features show no stable advantage over size-matched random subsets at larger ablation sizes or across tasks; the same pattern persists in a Sudoku control with within-step BPTT. Together, we characterize that HRM is essentially implementing constraint-aware iterative refinement on a puzzle-specific solution state, in which the functional contributions of components at different levels vary without relying on a compact, causally important feature set. These results highlight the necessity of studying the different working mechanisms and the importance of developing mechanistic interpretability techniques better suited for latent-space, recursive reasoning models.

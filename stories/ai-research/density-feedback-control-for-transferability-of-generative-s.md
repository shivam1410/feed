---
title: "Density Feedback Control for Transferability of Generative Sparse Adversarial Attacks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25001"
authors: ["Dongsu Song, Jay Hoon Jung"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.25001v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Generator-based sparse adversarial attacks train encoder--decoder networks to produce transferable sparse perturbations for black-box robustness evaluation. Their perturbation density, however, is set only indirectly by a fixed sparsity coefficient whose mapping to density is unknown and shifts during training, so reaching a target density requires re-tuning; this fixed pressure also yields little transferability gain once density reduction begins. We propose Density Feedback Control (DFC), which tightens or relaxes this coefficient at the end of each epoch according to the gap between the observed hard-mask density and the target, without changing the generator architecture or loss. At a 10\% target density, DFC brings the mean density of three base attacks within one percentage point of the target in a single run and improves the transfer attack success rate (ASR) of two of them on CNN and Transformer targets, including under per-image $\ell_0$ budgets, while perturbing fewer pixels. Tracing GPG's training, we observe that as DFC relaxes the coefficient, the transfer ASR recovers with the density and overtakes the fixed-coefficient baseline with fewer pixels. For EGS-TSSA, which restricts perturbations to source-model feature-importance regions, DFC yields no consistent gain; we analyze how this restriction interacts with density feedback.

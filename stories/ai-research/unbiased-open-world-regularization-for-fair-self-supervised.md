---
title: "Unbiased Open World Regularization for Fair Self-Supervised Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22149"
authors: ["L{\\'e}o Nicollier (CB, ATT), Marc Pic (ATT), Pablo Mus{\\'e} (CB, IFUMI), Enric Meinhardt-Llopis (CB), Gabriele Facciolo (CB)"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.22149v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.22149v1 Announce Type: new Abstract: Despite recent advances, self-supervised learning (SSL) models and Joint-Embedding Predictive Architectures (JEPAs) remain susceptible to learning spurious biases in the dataset. These techniques rely on regularization, which prevents representation collapse by enforcing a global target distribution such as a multivariate Gaussian or a uniform distribution on the sphere. However, these global constraints are insufficient to prevent bias entanglement, as task-irrelevant features can still segregate the latent space into distinct sub-regions. While recent approaches like Entangling and Disentangling (EnD) and Fair Supervised Contrastive Learning (FSCL) empirically debias the latent space, we show that they act as partial approximations of conditional distribution matching. To enforce this matching explicitly, we propose Unbiased Open World Regularization (UOWReg), an encoder-only framework. We show that this shift from a global to a conditional objective guarantees statistical independence between the learned representations and the targeted attributes, regardless of the chosen target distribution. We empirically validate this framework across both Gaussian and spherical latent spaces, using statistical measures to enforce these target distributions. While conditional matching successfully mitigates bias with both distributions, we demonstrate that enforcing conditional uniformity on the sphere yields a lower linearprobing classification error. Empirically, UOWReg reduces Equalized Odds violations on the CelebA benchmark while maintaining competitive classification accuracy compared to existing encoder-only baselines. Furthermore, we introduce the Synthetic Engraving Task-a novel setting in which a dominant macro-structure masks a fine-grained micro-signature. We show that UOWReg effectively prevents the subpopulation collapse observed in standard SSL, successfully isolating micro-signatures even when heavily entangled with the global structure.

---
title: "Protecting Sensitive Data in Image Synthesis via PAC-Private Adaptation for Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04038"
authors: ["Boming Miao, Tao Zhang, Netanel Raviv, Murat Kantarcioglu, Bradley A. Malin, Yevgeniy Vorobeychik"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04038v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Synthetic data are increasingly used as an alternative to sharing sensitive records. However, synthetic data generation does not guarantee privacy, as diffusion models trained or adapted on sensitive data remain susceptible to reconstruction attacks. Moreover, while approaches that use differential privacy (DP), such as DP-SGD, achieve provably private diffusion model training, the repeated gradient clipping and noise injection they require result in significant utility loss. An important limitation of DP-based privacy is that, although it has a provable relationship to reconstruction privacy (RP), that relationship is indirect. RP is defined in terms of limiting how much an adversary's posterior distribution over sensitive data differs from the prior, whereas DP provides guarantees by bounding the sensitivity of outputs to changes in individual records. This indirection is an important source of the utility loss. To address this, we propose a PAC-private diffusion model adaptation to achieve reconstruction privacy. Since PAC-privacy is defined directly with respect to posterior advantage over the prior, it directly implicates RP. To obtain scalable PAC privatization in high dimensions, we first learn a compact data-dependent diffusion model component using LoRA or Textual Inversion, and then calibrate anisotropic Gaussian noise from the covariance of repeated mechanism outputs. Unlike DP-SGD, our method perturbs the learned component only once after optimization, thereby avoiding privacy composition across gradient updates. We evaluate the framework on few-shot concept personalization and full-dataset image synthesis, and show that the proposed approach better preserves subject identity, generation quality, and downstream classification accuracy than DP while achieving the same reconstruction privacy.

---
title: "Kilobyte Models: Neural Networks as a Seed and a Quantized Latent"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00860"
authors: ["Sahil Rajesh Dhayalkar"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.00860v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00860v1 Announce Type: new Abstract: The cost of storing and transmitting a trained neural network scales with its parameter count, a bottleneck for over-the-air updates, on-device libraries, and other bandwidth-bound deployments. We study an extreme form of model compression in which the deployable artifact is not the weights but a short recipe for regenerating them. Building on Mapping Networks, which express a network's weights as a nonlinear function of a compact trainable latent and a fixed random basis, we observe that only the latent need be stored, because the basis and initialization center are reproducible from an integer seed. A model becomes a seed together with a quantized latent, whose size is set by the latent dimension and bit width rather than the parameter count. We formalize this artifact and introduce a seeded block-wise basis that scales to networks whose projection cannot be held in memory. In our experiments, a mapped model is as accurate as the same network quantized aggressively to a few bits per weight, while taking far fewer bytes to store. Reaching the most aggressive bit widths depends on fine-tuning the latent with quantization in the loop. The results do not depend on the particular random basis, and a structured basis lets the weights be regenerated almost for free even for large networks.

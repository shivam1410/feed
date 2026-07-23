---
title: "Federated Lightweight Fine-Tuning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18343"
authors: ["Radhakrishna Achanta, Will Reed"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18343v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18343v1 Announce Type: new Abstract: Federated fine-tuning is bottlenecked by communication: FedAvg and pseudo-gradient schemes transmit a payload that scales with the model, and gradient compression shrinks it by only a constant factor. We take a different lever. Mapping networks generate a network's weights from a small trainable latent through a frozen affine projection; because the map is shared and affine, averaging latents is exactly averaging the generated weights. We turn this into a practical low-bandwidth federated channel with two changes: a low-rank, seed-regenerable factorisation of the projection (cutting generator memory from ~80 GB to ~10 MB), and a delta formulation $\theta = \theta^{\mathrm{pre}} + U V^{\top} z$ that learns an additive correction around a shared centrally-pretrained base -- federated fine-tuning, which is what makes the method work at scale. A frozen orthogonal classifier head further removes the head from the payload while improving accuracy. On CIFAR-100 with ResNet-18+GroupNorm, our method (FLITE, Federated Low-rank Iterative Training Engine) communicates 1,280 floats (~5 KB) per client per round -- an 8718x reduction -- and reaches 74.67%, within ~0.5 pp of full-weight FedAvg. The averaging identity holds to floating-point precision ($6 \times 10^{-8}$); the method sits one to two orders of magnitude below PowerSGD and top-k on the bandwidth-accuracy Pareto; it matches or exceeds full-weight FedAvg under strong non-IID skew. int4 latents reach 648 bytes per round at unchanged accuracy, whereas int4 full-weight FedAvg collapses to chance.

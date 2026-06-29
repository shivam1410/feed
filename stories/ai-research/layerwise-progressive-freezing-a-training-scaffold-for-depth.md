---
title: "Layerwise Progressive Freezing: A Training Scaffold for Depth-Scalable Binary Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27759"
authors: ["Evan Gibson Smith, Bashima Islam"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27759v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27759v1 Announce Type: new Abstract: Training binary neural networks (BNNs) from scratch is dominated by the straight-through estimator (STE), whose forward/backward mismatch produces severe accuracy degradation as networks deepen. We study an orthogonal axis: when and where binarization is enforced during training. We introduce StoMPP (Stochastic Masked Partial Progressive Binarization), which gradually replaces clipped weights and activations with their hard binary counterparts layer by layer from input to output, using stochastic partial masks with soft refresh. StoMPP delivers two complementary benefits. As a standalone training rule, it provides a fully STE-free procedure that improves over vanilla STE with gains that grow with depth (ResNet-50 BNN: +18.0/+13.5/+3.8 on CIFAR-10/100/ImageNet), and the pattern holds across ResNet-18/34/50, MobileNetV2, and BERT fine-tuning. Composed with surrogate gradients by applying STE only to frozen entries, it reaches +27.1/+19.8/+17.7 over vanilla STE on the same setting. Underlying both regimes is a single mechanistic finding: progression order is decisive. Forward layerwise progression prevents depth collapse, reverse progression collapses to near-chance, and binary-weight networks (without binary activations) are insensitive to order. We trace this asymmetry to activation-induced gradient blockades: a committed binary activation severs gradient flow upstream, and ordering controls when these blockades form. To isolate the progression's contribution from any benefit conferred by STE, we conduct all ablations in the STE-free regime; the resulting characterization (schedule, refresh, ordering, dynamics) thus reflects the progression itself rather than its interaction with surrogate gradients.

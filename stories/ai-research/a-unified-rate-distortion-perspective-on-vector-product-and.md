---
title: "A Unified Rate-Distortion Perspective on Vector, Product, and Scalar Quantization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02107"
authors: ["Xianghong Fang, Wenlong Mou, Yuan Yuan, Dehan Kong, Tim G. J. Rudner"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.02107v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02107v1 Announce Type: new Abstract: Discrete visual tokenization, predominantly driven by vector, scalar, and product quantization, lacks a unified conceptual framework for understanding quantization tradeoffs. In this paper, we propose a unified rate--distortion perspective on modern discrete visual tokenization. By viewing quantization as lossy compression, we characterize the nominal fixed-length coding rate through token count and codebook size, and quantization error as the distortion. Within this framework, we resolve three central questions. First, we theoretically and empirically show that minimizing distortion, rather than maximizing codebook utilization, is the primary intrinsic objective for reconstruction fidelity, with a direct connection to the STE-induced gradient discrepancy. Second, we establish two critical fairness conditions for intrinsic quantization comparison: controlling latent feature statistics and enforcing identical coding rates. Third, under these conditions, we recover the VQ--PQ--SQ distortion hierarchy in modern visual tokenization and show empirically that modern VQ methods achieve the lowest distortion. This work provides a foundational rate--distortion reframing of modern discrete visual tokenization, resolves ambiguities in quantizer evaluation, and provides a controlled framework for isolating intrinsic quantization effectiveness under fixed-rate constraints.

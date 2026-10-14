---
title: "Learnable Low-Rank Polynomial Sketch for Effective Linear Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14219"
authors: ["Zongyue Qin, Haoran Deng, Jason Cong, Yizhou Sun"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14219v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Softmax attention in Transformers suffers from quadratic complexity in sequence length, making it impractical for long-context applications. Linear attention alleviates this issue by replacing the exponential kernel with alternative functions that enable linear-time computation. Among existing linear attention approaches, recent studies have shown that polynomial kernels are particularly effective, as they exhibit sparse and spiky behavior similar to softmax attention, which emphasizes large dot products while suppressing irrelevant interactions. However, the exact computation of high-degree polynomial kernels is infeasible for high-dimensional representations. As a result, prior work relies on approximate polynomial kernels. This introduces a non-negligible approximation error. In this paper, we show that, from the perspective of polynomial kernel approximation, existing linear attention methods are still suboptimal. We propose \textbf{L}earnable \textbf{Lo}w-Rank \textbf{P}olynomial \textbf{S}ketch (LLoPS), a principled and flexible framework for approximating polynomial kernels with linear attention. Our method learns a low-rank polynomial sketch that provably achieves a strictly smaller approximation error than existing approaches. Experiment results show that LLoPS achieves the highest performance across extensive benchmarks, comparing with various linear attention baselines.

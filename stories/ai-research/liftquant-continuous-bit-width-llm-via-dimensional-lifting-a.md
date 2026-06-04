---
title: "LiftQuant: Continuous Bit-Width LLM via Dimensional Lifting and Projection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04050"
authors: ["Liulu He, XuanAng Liu, Juntao Liu, Taolue Feng, Ting Lu, Chunsheng Gan, Zhiyv Peng, Yuan Du, Huanrui Yang, Yijiang Liu, Li Du"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.04050v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04050v1 Announce Type: new Abstract: Existing quantization methods are fundamentally limited by rigid, integer-based bit-widths (e.g., 2, 3-bit), resulting in a ``deployment gap" where Large Language Models cannot be optimally fitted to specific memory budgets. To bridge this gap, we introduce LiftQuant, a novel framework that enables continuous bit-width control for true Pareto-optimal deployment. The core innovation is a ``lift-then-project" mechanism which approximates low-dimensional weight vectors by projecting a simple 1-bit lattice from a higher-dimensional ``lifted" space. Crucially, the effective bit-width is determined simply by the ratio of the lifted dimension to the original dimension, which allows the bit-width to be tuned quasi-continuous as the dimension is a flexible structural parameter. This projection generates a structured yet non-uniform codebook, capturing the expressive power of Vector Quantization (VQ). While beneficial over VQ, LiftQuant's decoding path relies solely on linear transformations and 1-bit uniform quantizers, retaining hardware-friendly nature. This flexibility is transformative: LiftQuant enables a 70B LLM to be compressed to 2.4 bits to precisely fit a 24GB GPU, where its performance significantly surpasses state-of-the-art 2-bit models fitted on the same device. Our code and ckpt is available at https://github.com/Heliulu/LiftQuant.

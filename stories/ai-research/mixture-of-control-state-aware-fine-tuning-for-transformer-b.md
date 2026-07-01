---
title: "Mixture-of-Control: State-Aware Fine-Tuning for Transformer-based Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31397"
authors: ["Duc Anh Nguyen, Tien Ngoc Luu, Tung Pham, Toan Tran"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.31397v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31397v1 Announce Type: new Abstract: State-based fine-tuning has emerged as a compelling alternative to weight-based adaptation for transformers, updating lightweight controls into states rather than model weights, offering substantial memory savings while retaining parameter efficiency. However, most existing state-based methods typically apply only per-block control updates, which limits inter-block information exchange and restricts representational adaptation. Meanwhile, prior mechanisms that enable cross-block communication often introduce considerable computational overhead, reducing their practicality for efficient fine-tuning. We introduce Mixture-of-Control (MoC), a lightweight fine-tuning framework that adaptively integrates local and global control signals to enhance representation learning. MoC treats block-wise control states as experts in a sparse mixture-of-experts process, enabling efficient communication across transformer blocks. Empirical results across diverse transformer-based benchmarks demonstrate that MoC outperforms state-based methods while maintaining a comparable memory and computational efficiency.

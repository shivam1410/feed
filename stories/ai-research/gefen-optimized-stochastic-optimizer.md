---
title: "Gefen: Optimized Stochastic Optimizer"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13894"
authors: ["Nadav Benedek, Tomer Koren, Ohad Fried"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2606.13894v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13894v1 Announce Type: new Abstract: AdamW is a default optimizer for modern deep learning, but its first and second moment states add roughly two parameter-sized buffers to training memory. We propose Gefen, a memory-efficient optimizer that automatically shares second-moment estimates across parameter blocks and quantizes the first moment using a learned codebook, thereby reducing AdamW's memory footprint by ~8x while maintaining the same performance, corresponding to a reduction of 6.5 GiB per billion parameters. The method is motivated by a theoretical result showing that large mixed Hessian entries constrain the ratio of squared gradients toward one, suggesting that Hessian-aligned parameters are natural candidates for sharing second-moment statistics. Since computing Hessians is impractical at scale, Gefen infers block structure from the initial squared gradients, requiring no architecture-specific metadata or hyperparameters beyond AdamW defaults. Gefen learns an exact histogram-based dynamic-programming quantization codebook and reuses the same blocks for first-moment scaling. Across diverse experiments, Gefen achieves the lowest peak optimizer memory among the compared AdamW-like methods while maintaining AdamW-level performance. In FSDP and DDP training, the reduced memory footprint enables larger microbatches and improves throughput significantly over AdamW, providing a practical drop-in replacement with lower memory usage that can increase throughput and enable training larger models or using larger batch sizes. We provide the complete Python implementation, including fused CUDA kernels at https://github.com/ndvbd/Gefen

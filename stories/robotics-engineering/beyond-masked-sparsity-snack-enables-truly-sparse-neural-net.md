---
title: "Beyond Masked Sparsity: SNACK Enables Truly Sparse Neural Networks on GPU"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04093"
authors: ["Jafar Badour, Maurice van Keulen, Elena Mocanu"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04093v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Deep neural networks continue to grow in parameter count, driving up training and inference cost on GPUs. Sparse neural networks and Dynamic Sparse Training (DST) promise to reduce these costs, but most implementations rely on binary masks over dense tensors and recover little of the theoretical compute, memory, or energy savings. We propose SNACK, a truly sparse GPU layer that stores and computes only non-zero connections. SNACK exposes a simple PyTorch API for restructuring connections and backpropagating gradients entirely in the sparse paradigm, and ships SNACK-COO, a custom COO-format SpMM CUDA kernel with a batch-to-Streaming-Multiprocessor mapping tuned for the small-batch, high-sparsity regime typical of large-model training and single-stream inference. At the kernel level, SNACK is up to 7x faster than the masked dense baseline (Dense+Mask) and competitive with cuSPARSE, Sputnik, and FlashSparse at 95% sparsity. At 90% sparsity, a single SNACK layer accelerates training by 8x and 3.7x, and inference by 4x and 2x, over Dense+Mask and fully dense layers, respectively, while using 72% less memory than dense and substantially less energy. End-to-end, SNACK reduces GPT-2 peak training memory by up to 40% and graph-style inference latency by 4.8x over Dense+Mask at 99% sparsity.

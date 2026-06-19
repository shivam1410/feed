---
title: "Performance Analysis and Optimization of 3D Generative Diffusion Models across GPU Architectures"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19365"
authors: ["Jeeho Ryoo, Yongchan Jung, Muhammad Ali Khaliq, Weidong Zhang, Jiatong Han, Byeong Kil Lee"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19365v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19365v1 Announce Type: new Abstract: Diffusion models have become essential for high-fidelity 3D MRI synthesis, yet their deployment remains constrained by substantial GPU resource demands arising from hundreds of U-Net evaluations per sample and a highly heterogeneous kernel behavior. This paper performs a comprehensive performance analysis of the state-of-the-art medical diffusion model, Med-DDPM, across three generations of NVIDIA architectures to study kernel-level runtime breakdowns, instruction-mix characteristics, memory system utilization, warp-level activities, and profiler priority-score estimates. We show that training is overwhelmingly dominated by cuDNN convolution and implicit-GEMM kernels, with inefficiencies arising from memory-access patterns, tensor-layout conversions, and limited Tensor Core utilization. Guided by these insights, we evaluate two architecture-aware optimizations TF32 Tensor Core activation and a 3D channels-last layout and demonstrate that they reduce SM cycles by up to 100x, cut dynamic instructions by 100x, raise Tensor Core utilization from 1.45 to 9.98x, and increase IPC by 7% on A100, all without degrading synthesis quality.

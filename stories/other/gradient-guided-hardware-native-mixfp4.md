---
title: "Gradient-Guided Hardware-Native MIXFP4"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18769"
authors: ["Jian-Jia Chen, Brian J. Chan, Wen-Hung Lee, Yi-Ting Li, Po-Shen Chen, Kuan-Te Kuo, Hsien-Cheng Huang, Cody Hao Yu, Chi-Chih Chang, Mohamed S. Abdelfattah, Kai-Chiang Wu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18769v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Blackwell tensor cores support native inference with 4-bit weights and activations (W4A4), but NVFP4 leaves a perplexity (PPL) gap to BF16. Choosing a format for each 16-element block can improve accuracy, but current matrix multiply instructions cannot execute choices this fine. Applying these rules at hardware-compatible tiles loses most of their benefit. We introduce FlipQuant, which selects E2M1 or E0M3 for each MMA weight tile. It keeps both quantized weight candidates fixed and learns a binary format map from end-to-end gradients of a bucketed KL loss to a BF16 teacher, re-evaluating them after each update. Native kernels execute 16 x 64 tiles on SM120 and 256 x 64 tiles on SM100 with median GEMM overheads of 1.9% and 1.7%, respectively. Across six language models and two corpora, FlipQuant at 16 x 64 closes 42.5% of NVFP4's PPL gap to BF16 on average, compared with 13.3% for FourOverSix. Code is available at https://github.com/brian030128/flipquant.

---
title: "RoLaQ: Joint Rotation and Range Calibration for 2-Bit KV Caches in Multi-Head Latent Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20686"
authors: ["Shiyu Ji, Peng Ling, Chen Lin, Shupeng Li, Yixuan Wang, Qingfu Zhu, Wanxiang Che"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20686v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Multi-head latent attention (MLA) compresses the content of a key-value cache into a shared latent per token, making low-bit storage attractive for long-context inference. At two bits, errors in this representation perturb both attention matching and value readout, with effects that depend on error direction and reconstruction scale. We introduce RoLaQ (Rotation-calibrated Latent Quantization), an offline method for joint rotation and range calibration. RoLaQ refines a shared rotation within subspaces defined by the frozen key and value projections, and jointly learns quantization ranges whose thresholds and reconstruction gains are coupled to control the shared signal's response. Prediction matching and attention-output supervision guide calibration with model weights frozen. Across three MLA models and six benchmarks, RoLaQ achieves the highest average accuracy among the compared 2-bit methods both without and with token protection. On DeepSeek-V2-Lite, an SGLang implementation provides 3.96 times the BF16 KV capacity under the same memory budget and 2.51 times its decode throughput with 256K input tokens.

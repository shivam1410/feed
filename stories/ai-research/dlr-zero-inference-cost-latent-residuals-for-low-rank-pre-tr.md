---
title: "DLR: Zero-Inference-Cost Latent Residuals for Low-Rank Pre-Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28932"
authors: ["Dong Wang, Wenwu Tang, Yun Cheng, Olga Saukh"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 59
guid: "oai:arXiv.org:2606.28932v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28932v1 Announce Type: new Abstract: Large language models have driven recent progress in language and multimodal AI, yet pre-training them at scale is prohibitively expensive. Low-rank pre-training, which factorizes each weight matrix into a rank-r product to reduce both parameters and FLOPs, is a promising response but typically lags full-rank training in quality. We propose Duplicated Latent Residual (DLR), a training-only, parameter-free, foldable plug-in for low-rank pre-training. DLR augments the standard low-rank output Bz with a fixed structured residual alpha/sqrt(K) * Expand_K(z) that replicates each latent coordinate K = ceil(d_out/r) times across the output. With alpha fixed, DLR adds zero learnable parameters per layer; after training, it is absorbed into the up-projection in closed form, B* = B + alpha/sqrt(K) R^T, so deployment parameter count, FLOPs and memory match the underlying low-rank backbone exactly. Across LLaMA models from 60M to 7B parameters, DLR strengthens low-rank pre-training on C4 validation perplexity in most settings, with the clearest gains at 130M and above; folded checkpoints transfer cleanly to supervised fine-tuning on standard benchmarks.

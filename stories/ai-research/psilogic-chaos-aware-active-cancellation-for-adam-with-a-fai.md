---
title: "PsiLogic: Chaos-Aware Active Cancellation for Adam with a Fair Cross-Domain Benchmark"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16268"
authors: ["Ali Sultonov"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16268v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16268v1 Announce Type: new Abstract: Adaptive optimizers such as Adam and AdamW apply the same update rule regardless of whether training is in a chaotic early phase or near convergence. We introduce PsiLogic, an optimizer that augments Adam with a dynamic Active Cancellation Term gated by a dual exponential moving average (EMA) of scale-normalized gradient norms. The resulting chaos detector strengthens damping when gradient statistics are unstable and fades to zero as training stabilizes, providing an implicit warmup without a hand-tuned schedule. We evaluate PsiLogic against Adam, AdamW, and Lion using FairBench -- a reproducible benchmark protocol with per-optimizer learning-rate sweeps, identical initialization per seed, and Welch t-tests. On an NVIDIA H100 80GB reference run (4 arenas, 3 seeds, 2000 steps, bf16 AMP), PsiLogic achieves the best validation metric in three of four arenas: NLP perplexity 7.79 +/- 0.18 vs. 8.17 +/- 0.08 (AdamW, p = 0.049), ViT top-1 accuracy 0.244 +/- 0.006 vs. 0.223 +/- 0.002 (AdamW, p = 0.015), and ResNet top-1 accuracy 0.222 +/- 0.001 vs. 0.172 +/- 0.004 (Adam, p = 0.001). On diffusion, validation MSE is statistically tied with Adam/AdamW (p = 0.49). ResNet accuracy vs. AdamW is a numerical tie without significance at three seeds (p = 0.44). Peak GPU memory is comparable across optimizers; PsiLogic incurs 1.2--1.8x wall-clock overhead on transformer-heavy arenas (implementation-bound). We release an open-source PyTorch implementation, the full FairBench harness, and all raw CSV outputs to support independent verification.

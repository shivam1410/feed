---
title: "Prefix-Denoising Consistency: Test-Time Verification for Diffusion Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25311"
authors: ["Yuki Ichihara, Naoto Iwase, Mohammad Atif Quamar, Junpei Komiyama"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.25311v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25311v1 Announce Type: new Abstract: Diffusion Language Models (DLMs) have recently become increasingly competitive with autoregressive (AR) models, and even outperform them on certain tasks. Unlike AR models, DLMs produce output through iterative denoising without a left-to-right order. To further improve the performance of DLMs, we introduce PDC (\emph{Prefix-Denoising Consistency}), a test-time self-verification method for DLMs. PDC exploits a distinctive test-time signal in DLMs under prefix conditioned regeneration, correct trajectories are more stable and reproducible than incorrect ones. Concretely, given an initially generated sample, PDC splits the sentence at an intermediate position and regenerates the remaining tokens conditioned on the fixed prefix. Across mathematical reasoning and commonsense reasoning benchmarks, PDC consistently improves upon the initial sample, outperforms independent generations under a computational constrained comparison, and is robust to different unmasking strategies and parameter settings. These results highlight prefix-conditioned regeneration as an effective DLM-specific primitive for test-time verification.

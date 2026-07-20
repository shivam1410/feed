---
title: "Loop the Loopies!"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16051"
authors: ["Zitian Gao", "Yilong Chen", "Yihao Xiao", "Xinyu Yang", "Ran Tao", "Joey Zhou", "Bryan Dai"]
date: "2026-07-16T20:00:00.000Z"
score: 70
guid: "2607.16051"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16051.png"
generated: "2026-07-20T19:05:49+05:30"
---

We present Loopie, the most powerful looped Transformer to date. The Loopie series consists of two Mixture-of-Experts (MoE) models: a 20B-parameter model with 2B active parameters and a 6Bparameter model with 0.6B active parameters. Looped Transformers have long faced a challenge: given an N-fold increase in pre-training compute, increasing the parameter count by a factor of N usually outperforms looping a model N times. Loopie addresses this challenge. Extensive ablation studies, including comparisons with a vanilla 30B-A3B model, show that Loopie substantially outperforms vanilla Transformer baselines trained with the same compute budget. Our novel post-training pipeline equips Loopie with strong reasoning abilities. At the 2025 IMO and IPhO, Loopie achieves gold-medal performance without tools.

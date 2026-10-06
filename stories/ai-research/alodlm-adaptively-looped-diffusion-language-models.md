---
title: "ALoDLM: Adaptively Looped Diffusion Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04198"
authors: ["Liancheng Fang", "Zhuowei Li", "Youngeun Kim", "Tianchen Zhao", "Rajat Koner", "Jiaye Wu", "Linghan Xu", "Xuanbai Chen", "Xiang Xu", "Zheng Zhang", "Jakub Zablocki", "Nishant Sankaran", "Yifan Xing"]
date: "2026-10-02T20:00:00.000Z"
score: 55
guid: "2610.04198"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04198.png"
generated: "2026-10-06T22:55:59+05:30"
---

Diffusion language models (DLMs) enable fast generation by predicting multiple tokens in parallel, but their practical adoption remains limited by a persistent quality gap relative to comparably sized autoregressive (AR) models. We attribute this gap to a computation-difficulty mismatch: within a partially observed sequence, some unknown tokens are easy to predict, while others require substantially more computation. Existing DLMs nevertheless apply uniform computational depth to all unknown positions at each denoising step. We introduce ALoDLM, which replaces uniform computation with token-adaptive latent recurrence. At each denoising step, ALoDLM iteratively refines latent representations and allocates computation according to token difficulty. Tokens ready to commit are fed back as discrete context, while unresolved tokens retain and further refine their latent states through additional recurrent passes. To learn token prediction and computation allocation jointly, we formulate token-wise computation schedules as latent variables and derive a conditional negative evidence lower bound (NELBO). We train ALoDLM at 1.7B and 8B parameter scales. Across eleven benchmarks, ALoDLM outperforms all evaluated DLMs and the corresponding AR baselines in average benchmark score at both scales. ALoDLM also retains fast parallel decoding, yielding a strong quality-efficiency trade-off among evaluated autoregressive and diffusion models under optimized inference engines.

---
title: "Token-Level Off-Policy Learning for Faithful Generation Under Distribution Shift"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17524"
authors: ["Zitong Huang", "Gustavo Lucas Carvalho", "Deqing Fu", "Robin Jia"]
date: "2026-07-19T20:00:00.000Z"
score: 68
guid: "2607.17524"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17524.png"
generated: "2026-07-21T19:05:01+05:30"
---

We propose Token-Level Off-Policy Labeling (TOPL), an off-policy training paradigm that reframes post-training as a token-level correctness prediction task. Our key intuition is that by training the model to distinguish good and bad tokens in a response, we naturally guide the model towards generating good tokens, while avoiding the pitfalls that come with directly training the model to generate off-policy tokens. Experiments on document summarization tasks show that TOPL achieves strong out-of-distribution generalization across 11 datasets against a diverse set of sequence-level and token-level baselines. We further demonstrate that TOPL transfers effectively to machine translation, suggesting that its benefits generalize across different faithful generation tasks. Through ablation studies, we confirm that our token-level learning signal is critical to good performance; sequence-level analogues do not confer similar benefits. Finally, we show that TOPL induces interpretable model updates: the LoRA adapters learned through TOPL function as linear classification heads and steering vectors.

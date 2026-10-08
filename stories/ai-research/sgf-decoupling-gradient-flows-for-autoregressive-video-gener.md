---
title: "SGF+: Decoupling Gradient Flows for Autoregressive Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.10429"
authors: ["Zihan Su", "Junhao Zhuang", "Yaowei Li", "Siwen Lu", "Haoran Li", "Lingen Li", "Haoyu Wu", "Weiyang Jin", "Songchun Zhang", "Haoyang Huang", "Chun Yuan", "Zeyue Xue", "Nan Duan"]
date: "2026-10-06T20:00:00.000Z"
score: 66
guid: "2610.10429"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.10429.png"
generated: "2026-10-08T19:08:02+05:30"
---

Autoregressive video generation requires denoising the current frames while writing their key-value representations as context for future predictions. However, these two roles typically share parameters, and we find that their gradients exhibit distinct patterns and systematic negative alignment, hindering the joint optimization of visual quality and temporal consistency. We introduce Self Gradient Forcing Plus (SGF+), which assigns separate parameters to context writing and denoising while preserving their interaction through causal attention. Both roles are jointly optimized using the original generation objective without auxiliary losses, with context writing supervised through its contribution to future predictions. This simple change improves visual quality and long-horizon consistency over the evaluated baselines in both framewise and chunkwise generation, without additional video training data or a longer training horizon. Trained on only 5s rollouts, SGF+ supports continuous generation for up to 24 hours without long-video fine-tuning. These results highlight role-specific parameterization as an effective design principle for high-quality autoregressive video generation and native long-horizon extrapolation.

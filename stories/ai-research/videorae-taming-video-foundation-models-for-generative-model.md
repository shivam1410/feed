---
title: "VideoRAE: Taming Video Foundation Models for Generative Modeling via Representation Autoencoders"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14088"
authors: ["Zhihao Xie", "Junfeng Wu", "Xinting Hu", "Junchao Huang", "Li Jiang"]
date: "2026-07-14T20:00:00.000Z"
score: 66
guid: "2607.14088"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14088.png"
generated: "2026-07-21T19:05:01+05:30"
---

Video generative models commonly rely on latent spaces learned by 3D Variational Autoencoders (3D-VAEs). However, conventional 3D-VAEs are mainly optimized for pixel-level reconstruction, which can limit the semantic and spatio-temporal structure captured by their latents. Meanwhile, Video Foundation Models (VFMs) such as V-JEPA 2 and VideoMAEv2 show strong video understanding capabilities, yet whether their frozen representations can be transformed into compact, reconstruction-capable, and generation-friendly video latents remains largely unexplored. We answer this question with VideoRAE, a representation autoencoder that leverages multi-scale hierarchical features from a frozen video foundation encoder and compresses them with a lightweight 1D self-attention projector. VideoRAE supports both continuous latents for Diffusion Transformers and discrete tokens for autoregressive models via multi-codebook high-dimensional quantization. During decoding, a local-and-global representation alignment objective with the frozen VFM teacher improves semantic preservation and enables training without KL regularization. Experiments show that VideoRAE achieves strong reconstruction in both continuous and discrete regimes. On UCF-101, it obtains state-of-the-art class-to-video gFVDs of 40 and 93 with AR and DiT generators, respectively, while converging approximately 5x faster than competing autoencoder baselines. In a controlled 2B-scale text-to-video study, replacing LTX-VAE with VideoRAE leads to faster convergence under comparable settings. These results validate frozen VFM representations as versatile and generation-friendly video latents. The model and code will be released on https://zhxie0117.github.io/VideoRAE.

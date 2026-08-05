---
title: "AURORA-LM: Autoencoding Unified Representation for Continuous-Latent Diffusion Language Modeling"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02602"
authors: ["Jiajun Liang", "Yucheng Liao", "Yukang Cao", "Jiazhe Wei", "Ken Li", "Wende Tan", "Jiankun Zhang", "ZY Cui", "Jingkang Yang", "Liucheng Guo", "Shiqi Yang", "B. Yang", "Caifeng Shan", "Ziwei Liu", "Chenyang Si"]
date: "2026-08-02T20:00:00.000Z"
score: 80
guid: "2608.02602"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02602.png"
generated: "2026-08-05T20:00:21+05:30"
---

AURORA-LM advances continuous-latent language modeling by preserving high-capacity, decodable text representations instead of compressing them. A Query-based Encoder-Decoder organizes text into prefix-aligned latent sequences, while a Block-causal Diffusion Transformer learns distributions through flow matching, generating left-to-right while denoising positions within blocks in parallel. The architecture maintains full decoder capacity and calibrates noise to latent width, with self-trajectory consistency bridging training and inference dynamics.

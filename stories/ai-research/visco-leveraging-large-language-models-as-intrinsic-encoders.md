---
title: "VisCo: Leveraging Large Language Models as Intrinsic Encoders for Visual Token Compression"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.12756"
authors: ["Yupeng Zheng", "Kai Zou", "Bin Liu", "Nenghai Yu"]
date: "2026-07-13T20:00:00.000Z"
score: 75
guid: "2607.12756"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.12756.png"
generated: "2026-07-27T19:07:27+05:30"
---

Vision-language models (VLMs) process large numbers of visual tokens, resulting in substantial inference latency and memory overhead. This has motivated extensive research on visual token compression. While training-free strategies rely on heuristic metrics and suffer significant performance degradation under high compression ratios, many training-based methods introduce external compression modules that force the VLM backbone to adapt, incurring substantial retraining cost and compromising VLMs' priors. Effective visual token compression hinges on strong information encoding, a capability already present in pretrained VLMs but underutilized by existing approaches. Motivated by this, we propose VisCo, a training-efficient self-compression framework that reuses the pretrained VLM itself as an intrinsic compressor. VisCo is a parameter-sharing autoencoder that compresses visual information using a small set of memory tokens and transfers hierarchical information from encoding to decoding. Experiments show that VisCo surpasses prior methods across all evaluated compression ratios, with larger gains under more aggressive compression, and remains stable even in the extreme single-token setting. Moreover, when combined with the original visual tokens, the learned memory tokens can even improve the base model, suggesting that VisCo captures complementary representations beyond compression.

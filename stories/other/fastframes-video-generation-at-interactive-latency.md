---
title: "FastFrames: Video Generation at Interactive Latency"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.23226"
authors: ["Gene Chou", "Guandao Yang", "Fujun Luan", "Lars Mescheder", "Wei Dong", "Stephan Richter", "Vladlen Koltun"]
date: "2026-11-16T19:00:00.000Z"
score: ""
guid: "2611.23226"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.23226.png"
generated: "2026-11-18T19:12:26+05:30"
---

Autoregressive video diffusion models generate frames based on new observations and inputs, making them a promising medium for interactive visual experiences. However, existing models are orders of magnitude too slow for fluid interaction. This paper introduces FastFrames, a family of fast autoregressive video diffusion models that achieves interactive latency without compromising quality. We profile the inference pipeline of state-of-the-art models and find that operations often treated as fixed implementation details, such as VAE decoding and KV cache updates, in fact account for over half of end-to-end inference latency. We challenge the assumption that these components are indispensable and replace them with lightweight alternatives. Our 1.3B variant runs at 36 ms per frame, or 28 responses per second (RPS), on a single B200 GPU while matching the generation quality of a state-of-the-art model that is nearly 8x slower. Our 14B variant runs at 45 ms per frame, or 22 RPS, on an 8x B200 GPU node and yields significantly better visual quality and realism. We show that FastFrames enables real-time interaction in applications such as camera-conditioned and physics-conditioned video generation.

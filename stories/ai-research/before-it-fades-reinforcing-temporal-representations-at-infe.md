---
title: "Before It Fades: Reinforcing Temporal Representations at Inference Time in VideoLLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01595"
authors: ["Youngwoo Shin", "Yusung Ro", "Minseo Kim", "Junmo Kim"]
date: "2026-09-30T20:00:00.000Z"
score: 65
guid: "2610.01595"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01595.png"
generated: "2026-10-02T21:40:09+05:30"
---

Video Large Language Models (VideoLLMs) receive frames in sequential order and interpret how visual content evolves along the temporal axis, yet temporal reasoning remains a persistent weakness across architectures. Reversing the frame order of a video, a transformation that should invert temporal answers, often leaves the final prediction unchanged. We investigate where this failure originates by defining the temporal divergence vector τ_l, the layer-wise representational difference induced by reversing temporal order. Tracking its magnitude across layers reveals a consistent temporal divergence profile where the divergence peaks at intermediate layers and progressively diminishes toward the output. We confirm this peak is specific to temporal reasoning and functionally critical for predictions, establishing that VideoLLMs acquire temporal information at intermediate layers but fail to maintain it to the output. This progressive fading motivates our method, Temporal Activation Injection (TAI), which extracts τ_l at the peak of the profile for each input and reinjects it into subsequent layers following the measured decay. TAI requires no training and consistently improves temporal reasoning across three VideoLLMs and four benchmarks with negligible impact on non-temporal tasks. Code is available at https://github.com/Youngwoo-git/Before-It-Fades.

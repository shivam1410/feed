---
title: "OmniScope: Modality-Decoupled Token Compression for Omnimodal Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23193"
authors: ["Jinsen Su", "Yongdong Luo", "Yuexiao Ma", "Yibo Hu", "Meiguang Jin", "Xiaowu Zheng"]
date: "2026-07-27T20:00:00.000Z"
score: 70
guid: "2607.23193"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23193.png"
generated: "2026-08-02T19:04:48+05:30"
---

Existing token compression methods for omnimodal large language models typically rely on one modality to determine what to retain in the other. We show that this assumption often breaks down: for the same query, audio and video relevance often peaks at different moments. This cross-modal salience mismatch makes unidirectional guidance prone to discarding answer-critical cues under aggressive compression. We propose OmniScope, a training-free token compression framework that uses the query as a shared semantic anchor while estimating relevance separately for audio and video. OmniScope allocates modality-specific token budgets, prunes visual tokens with an anchor-delta strategy that preserves both global context and temporal changes, and merges audio tokens within each second to reduce redundancy while maintaining temporal continuity. Across four audio-video benchmarks and two Qwen2.5-Omni model scales, OmniScope achieves the best average accuracy across all compression settings. At 25% overall token retention, it delivers up to 3.53x prefill speedup and more than 15% GPU memory reduction, with only a 0.35-point drop in average accuracy. These results suggest a simple design principle for OmniLLM inference: share the query across modalities, but not the salience estimates. The code is available at https://github.com/MAC-AutoML/OmniScope.
